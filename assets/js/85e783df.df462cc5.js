"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3410],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"io",title:"IO"},i=void 0,p={unversionedId:"references/core/zio/io",id:"references/core/zio/io",title:"IO",description:"IO[E, A] is a type alias for ZIO[Any, E, A], which represents an effect that has no requirements, and may fail with an E, or succeed with an A.",source:"@site/docs/references/core/zio/io.md",sourceDirName:"references/core/zio",slug:"/references/core/zio/io",permalink:"/references/core/zio/io",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/core/zio/io.md",tags:[],version:"current",frontMatter:{id:"io",title:"IO"},sidebar:"references-sidebar",previous:{title:"RIO",permalink:"/references/core/zio/rio"},next:{title:"ZIOApp",permalink:"/references/core/zioapp"}},l={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"IO[E, A]")," is a type alias for ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO[Any, E, A]"),", which represents an effect that has no requirements, and may fail with an ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", or succeed with an ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")),(0,a.kt)("p",{parentName:"blockquote"},"In Scala, the ",(0,a.kt)("em",{parentName:"p"},"type alias")," is a way to give a name to another type, to avoid having to repeat the original type again and again. It doesn't affect the type-checking process. It just helps us to have an expressive API design.")),(0,a.kt)("p",null,"Let's see how the ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," type alias is defined:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"type IO[+E, +A] = ZIO[Any, E, A]\n")),(0,a.kt)("p",null,"So ",(0,a.kt)("inlineCode",{parentName:"p"},"IO")," is equal to a ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," that doesn't need any requirement."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"IO[E, Nothing]")," (where the value type is ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),") are considered ",(0,a.kt)("em",{parentName:"p"},"unproductive"),", because the ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," type is ",(0,a.kt)("em",{parentName:"p"},"uninhabitable"),", i.e. there can be no actual values of type ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing"),". Values of this type may fail with an ",(0,a.kt)("inlineCode",{parentName:"p"},"E"),", but will never produce a value."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("em",{parentName:"p"},"Principle of The Least Power")),(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is the most powerful effect in the ZIO library. It helps us to model various types of workflows. On other hand, the type aliases are a way of subtyping and specializing the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," type, specific for a less powerful workflow. "),(0,a.kt)("p",{parentName:"blockquote"},"Lot of the time, we don't need such a piece of powerful machinery. So as a rule of thumb, whenever we require a less powerful effect, it's better to use the proper specialized type alias."),(0,a.kt)("p",{parentName:"blockquote"},"So there is no need to convert type aliases to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type, and whenever the ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO")," data type is required, we can use the most precise type alias to fit our workflow requirement.")))}u.isMDXComponent=!0}}]);