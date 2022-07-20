"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={id:"rio",title:"RIO"},i=void 0,p={unversionedId:"references/core/zio/rio",id:"references/core/zio/rio",title:"RIO",description:"RIO[R, A] is a type alias for ZIO[R, Throwable, A], which represents an effect that requires an R, and may fail with a Throwable value, or succeed with an A.",source:"@site/docs/references/core/zio/rio.md",sourceDirName:"references/core/zio",slug:"/references/core/zio/rio",permalink:"/references/core/zio/rio",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/core/zio/rio.md",tags:[],version:"current",frontMatter:{id:"rio",title:"RIO"},sidebar:"references-sidebar",previous:{title:"Task",permalink:"/references/core/zio/task"},next:{title:"IO",permalink:"/references/core/zio/io"}},l={},s=[],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"RIO[R, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[R, Throwable, A]"),", which represents an effect that requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),", and may fail with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," value, or succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note:"))),(0,a.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,a.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,a.kt)("p",null,"Let's see how ",(0,a.kt)("inlineCode",{parentName:"p"},"RIO")," is defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type RIO[-R, +A]  = ZIO[R, Throwable, A]\n")),(0,a.kt)("p",null,"So ",(0,a.kt)("inlineCode",{parentName:"p"},"RIO")," is equal to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," that requires ",(0,a.kt)("inlineCode",{parentName:"p"},"R"),", and whose error channel is ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable"),". It succeeds with ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,a.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,a.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, and whenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);