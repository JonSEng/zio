"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[6939],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),m=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=m(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=m(t),f=a,d=u["".concat(c,".").concat(f)]||u[f]||p[f]||o;return t?n.createElement(d,s(s({ref:r},l),{},{components:t})):n.createElement(d,s({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var m=2;m<o;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2265:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=t(7462),a=(t(7294),t(3905));const o={id:"stream",slug:"stream.md",title:"Stream"},s=void 0,i={unversionedId:"references/stream/stream",id:"references/stream/stream",title:"Stream",description:"Stream[E, A] is a type alias for ZStream[Any, E, A], which represents a ZIO stream that does not require any services, and may fail with an E, or produce elements with an A.",source:"@site/docs/references/stream/stream.md",sourceDirName:"references/stream",slug:"/references/stream/stream.md",permalink:"/references/stream/stream.md",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/stream/stream.md",tags:[],version:"current",frontMatter:{id:"stream",slug:"stream.md",title:"Stream"},sidebar:"references-sidebar",previous:{title:"ZStream",permalink:"/references/stream/zstream"},next:{title:"UStream",permalink:"/references/stream/ustream"}},c={},m=[],l={toc:m};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Stream[E, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZStream[Any, E, A]"),", which represents a ZIO stream that does not require any services, and may fail with an ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", or produce elements with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type Stream[+E, +A] = ZStream[Any, E, A]\n")))}p.isMDXComponent=!0}}]);