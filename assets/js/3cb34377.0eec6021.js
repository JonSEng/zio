"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3068:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={id:"clock",title:"Clock"},a=void 0,c={unversionedId:"references/contextual/services/clock",id:"references/contextual/services/clock",title:"Clock",description:"Clock service contains some functionality related to time and scheduling.",source:"@site/docs/references/contextual/services/clock.md",sourceDirName:"references/contextual/services",slug:"/references/contextual/services/clock",permalink:"/references/contextual/services/clock",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/contextual/services/clock.md",tags:[],version:"current",frontMatter:{id:"clock",title:"Clock"},sidebar:"references-sidebar",previous:{title:"Console",permalink:"/references/contextual/services/console"},next:{title:"Random",permalink:"/references/contextual/services/random"}},l={},s=[],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Clock service contains some functionality related to time and scheduling. "),(0,o.kt)("p",null,"To get the current time in a specific time unit, the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentTime")," function takes a unit as ",(0,o.kt)("inlineCode",{parentName:"p"},"TimeUnit")," and returns ",(0,o.kt)("inlineCode",{parentName:"p"},"UIO[Long]"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile-only","compile-only":!0},"import zio._\nimport java.util.concurrent.TimeUnit\n\nval inMilliseconds: UIO[Long] = Clock.currentTime(TimeUnit.MILLISECONDS)\nval inDays        : UIO[Long] = Clock.currentTime(TimeUnit.DAYS)\n")),(0,o.kt)("p",null,"To get current date time in the current timezone the ",(0,o.kt)("inlineCode",{parentName:"p"},"currentDateTime")," function returns a ZIO effect containing ",(0,o.kt)("inlineCode",{parentName:"p"},"OffsetDateTime"),"."),(0,o.kt)("p",null,"Also, the Clock service has a very useful functionality for sleeping and creating a delay between jobs. The ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," takes a ",(0,o.kt)("inlineCode",{parentName:"p"},"Duration")," and sleeps for the specified duration. It is analogous to ",(0,o.kt)("inlineCode",{parentName:"p"},"java.lang.Thread.sleep")," function, but it doesn't block any underlying thread. It's completely non-blocking."),(0,o.kt)("p",null,"In the following example we are going to print the current time periodically by placing a one second ",(0,o.kt)("inlineCode",{parentName:"p"},"sleep")," between each print call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala",metastring:"compile-only","compile-only":!0},"import zio._\n\ndef printTimeForever: ZIO[Any, Throwable, Nothing] =\n  Clock.currentDateTime.flatMap(Console.printLine(_)) *>\n    ZIO.sleep(1.seconds) *> printTimeForever\n")),(0,o.kt)("p",null,"For scheduling purposes like retry and repeats, ZIO has a great data type called ",(0,o.kt)("a",{parentName:"p",href:"/references/misc/schedule"},"Schedule"),"."))}u.isMDXComponent=!0}}]);