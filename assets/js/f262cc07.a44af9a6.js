"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3382],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(r),f=i,d=c["".concat(l,".").concat(f)]||c[f]||m[f]||a;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},6696:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const a={id:"tpriorityqueue",title:"TPriorityQueue"},o=void 0,u={unversionedId:"references/stm/tpriorityqueue",id:"references/stm/tpriorityqueue",title:"TPriorityQueue",description:"A TPriorityQueue[A] is a mutable queue that can participate in STM transactions. A TPriorityQueue contains values of type A for which an Ordering is defined. Unlike a TQueue, take returns the highest priority value (the value that is first in the specified ordering) as opposed to the first value offered to the queue. The ordering of elements sharing the same priority when taken from the queue is not guaranteed.",source:"@site/docs/references/stm/tpriorityqueue.md",sourceDirName:"references/stm",slug:"/references/stm/tpriorityqueue",permalink:"/references/stm/tpriorityqueue",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/stm/tpriorityqueue.md",tags:[],version:"current",frontMatter:{id:"tpriorityqueue",title:"TPriorityQueue"},sidebar:"references-sidebar",previous:{title:"TRef",permalink:"/references/stm/tref"},next:{title:"TPromise",permalink:"/references/stm/tpromise"}},l={},s=[{value:"Creating a TPriorityQueue",id:"creating-a-tpriorityqueue",level:2},{value:"Offering elements to a TPriorityQueue",id:"offering-elements-to-a-tpriorityqueue",level:2},{value:"Taking elements from a TPriorityQueue",id:"taking-elements-from-a-tpriorityqueue",level:2},{value:"Size of a TPriorityQueue",id:"size-of-a-tpriorityqueue",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue[A]")," is a mutable queue that can participate in STM transactions. A ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," contains values of type ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," for which an ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordering")," is defined. Unlike a ",(0,i.kt)("inlineCode",{parentName:"p"},"TQueue"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"take")," returns the highest priority value (the value that is first in the specified ordering) as opposed to the first value offered to the queue. The ordering of elements sharing the same priority when taken from the queue is not guaranteed."),(0,i.kt)("h2",{id:"creating-a-tpriorityqueue"},"Creating a TPriorityQueue"),(0,i.kt)("p",null,"You can create an empty ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"empty")," constructor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.stm._\n\nval minQueue: STM[Nothing, TPriorityQueue[Int]] =\n  TPriorityQueue.empty\n")),(0,i.kt)("p",null,"Notice that a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," is created with an implicit ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordering"),". By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"take")," will return the value that is first in the specified ordering. For example, in a queue of events ordered by time the earliest event would be taken first. If you want a different behavior you can use a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Ordering"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val maxQueue: STM[Nothing, TPriorityQueue[Int]] =\n  TPriorityQueue.empty(Ordering[Int].reverse)\n")),(0,i.kt)("p",null,"You can also create a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," initialized with specified elements using the ",(0,i.kt)("inlineCode",{parentName:"p"},"fromIterable")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"make"),' constructors". The ',(0,i.kt)("inlineCode",{parentName:"p"},"fromIterable")," constructor takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable")," while the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," constructor takes a variable arguments sequence of elements."),(0,i.kt)("h2",{id:"offering-elements-to-a-tpriorityqueue"},"Offering elements to a TPriorityQueue"),(0,i.kt)("p",null,"You can offer elements to a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"offer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"offerAll")," methods. The ",(0,i.kt)("inlineCode",{parentName:"p"},"offerAll")," method is more efficient if you want to offer more than one element to the queue at the same time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val queue: STM[Nothing, TPriorityQueue[Int]] =\n  for {\n    queue <- TPriorityQueue.empty[Int]\n    _     <- queue.offerAll(List(2, 4, 6, 3, 5, 6))\n  } yield queue\n")),(0,i.kt)("h2",{id:"taking-elements-from-a-tpriorityqueue"},"Taking elements from a TPriorityQueue"),(0,i.kt)("p",null,"Take an element from a ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"take"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"take")," will semantically block until there is at least one value in the queue to take. You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"takeAll")," to immediately take all values that are currently in the queue, or ",(0,i.kt)("inlineCode",{parentName:"p"},"takeUpTo")," to immediately take up to the specified number of elements from the queue."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val sorted: STM[Nothing, Chunk[Int]] =\n  for {\n    queue  <- TPriorityQueue.empty[Int]\n    _      <- queue.offerAll(List(2, 4, 6, 3, 5, 6))\n    sorted <- queue.takeAll\n  } yield sorted\n")),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"takeOption")," method to take the first value from the queue if it exists without suspending or the ",(0,i.kt)("inlineCode",{parentName:"p"},"peek")," method to observe the first element of the queue if it exists without removing it from the queue."),(0,i.kt)("p",null,"Sometimes you want to take a snapshot of the current state of the queue without modifying it. For this the ",(0,i.kt)("inlineCode",{parentName:"p"},"toChunk")," combinator or its variants ",(0,i.kt)("inlineCode",{parentName:"p"},"toList")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"toVector")," are extremely helpful. These will return an immutable collection that consists of all of the elements currently in the queue, leaving the state of the queue unchanged."),(0,i.kt)("h2",{id:"size-of-a-tpriorityqueue"},"Size of a TPriorityQueue"),(0,i.kt)("p",null,"You can check the size of the ",(0,i.kt)("inlineCode",{parentName:"p"},"TPriorityQueue")," using the ",(0,i.kt)("inlineCode",{parentName:"p"},"size")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"\nval size: STM[Nothing, Int] =\n  for {\n    queue <- TPriorityQueue.empty[Int]\n    _     <- queue.offerAll(List(2, 4, 6, 3, 5, 6))\n    size  <- queue.size\n  } yield size\n")))}m.isMDXComponent=!0}}]);