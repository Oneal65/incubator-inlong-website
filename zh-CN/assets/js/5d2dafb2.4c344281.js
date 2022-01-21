"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[8575],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},45562:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],c={title:"Docker \u90e8\u7f72",sidebar_position:2},l=void 0,p={unversionedId:"deployment/docker",id:"version-0.12.0/deployment/docker",isDocsHomePage:!1,title:"Docker \u90e8\u7f72",description:"\u901a\u8fc7Docker Compose\u90e8\u7f72InLong, \u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-0.12.0/deployment/docker.md",sourceDirName:"deployment",slug:"/deployment/docker",permalink:"/zh-CN/docs/deployment/docker",editUrl:"https://github.com/apache/incubator-inlong-website/edit/master/versioned_docs/version-0.12.0/deployment/docker.md",tags:[],version:"0.12.0",sidebarPosition:2,frontMatter:{title:"Docker \u90e8\u7f72",sidebar_position:2},sidebar:"version-0.12.0/tutorialSidebar",previous:{title:"\u5355\u673a\u90e8\u7f72",permalink:"/zh-CN/docs/deployment/standalone"},next:{title:"Kubernetes \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/k8s"}},u=[{value:"\u90e8\u7f72",id:"\u90e8\u7f72",children:[]},{value:"\u4f7f\u7528InLong",id:"\u4f7f\u7528inlong",children:[]},{value:"\u9500\u6bc1",id:"\u9500\u6bc1",children:[]}],s={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u901a\u8fc7Docker Compose\u90e8\u7f72InLong, \u8fd9\u79cd\u90e8\u7f72\u65b9\u5f0f\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u8c03\u8bd5\uff0c\u4e0d\u9002\u7528\u4e8e\u751f\u4ea7\u73af\u5883."),(0,i.kt)("p",null,"\u51c6\u5907\u6761\u4ef6:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")," 19.03.1+"),(0,i.kt)("li",{parentName:"ul"},"Docker Compose 1.29.2+")),(0,i.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,i.kt)("p",null,"\u624b\u52a8\u62f7\u8d1d",(0,i.kt)("inlineCode",{parentName:"p"},"inlong-manager/manager-web/sql"),"\u76ee\u5f55\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"docker/compose/sql"),"\u76ee\u5f55."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cp inlong-manager/manager-web/sql/apache_inlong_manager.sql  docker/docker-compose/sql\n")),(0,i.kt)("p",null,"\u7136\u540e\u542f\u52a8\u6240\u6709\u7ec4\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose up -d\n")),(0,i.kt)("h2",{id:"\u4f7f\u7528inlong"},"\u4f7f\u7528InLong"),(0,i.kt)("p",null,"\u5f53\u6240\u6709\u5bb9\u5668\u90fd\u6210\u529f\u542f\u52a8\u540e\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost"),"\uff0c\u5e76\u4f7f\u7528\u4ee5\u4e0b\u9ed8\u8ba4\u8d26\u53f7\u767b\u5f55:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"User: admin\nPassword: inlong\n")),(0,i.kt)("h2",{id:"\u9500\u6bc1"},"\u9500\u6bc1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker-compose down\n")))}d.isMDXComponent=!0}}]);