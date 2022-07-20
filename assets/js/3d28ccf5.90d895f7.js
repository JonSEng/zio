"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"index",title:"Introduction"},i=void 0,s={unversionedId:"references/concurrency/index",id:"references/concurrency/index",title:"Introduction",description:"Overview",source:"@site/docs/references/concurrency/index.md",sourceDirName:"references/concurrency",slug:"/references/concurrency/",permalink:"/references/concurrency/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/concurrency/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"references-sidebar",previous:{title:"ConcurrentSet",permalink:"/references/sync/concurrentset"},next:{title:"Ref",permalink:"/references/concurrency/ref"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Implications of Locking Mechanism",id:"implications-of-locking-mechanism",level:2},{value:"Lock-free Concurrency Model",id:"lock-free-concurrency-model",level:2},{value:"Advantage of Using ZIO Concurrency",id:"advantage-of-using-zio-concurrency",level:2},{value:"Concurrency Primitives",id:"concurrency-primitives",level:2},{value:"Basic Operations",id:"basic-operations",level:3},{value:"Others",id:"others",level:3}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Most of the time in concurrent programming we have a single state that we need to read and update concurrently. When we have multiple fibers reading or writing to the same memory location we encounter the race condition. The main goal in every concurrent program is to have a consistent view of states among all threads."),(0,a.kt)("p",null,"There are two major concurrency models which try to solve this problem:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Shared State")," \u2014 In this model, all threads communicate with each other by sharing the same memory location.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Message Passing (Distributed State)")," \u2014 This model provides primitives for sending and receiving messages, and the state is distributed. Each thread of execution has its own state. "))),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"Shared State")," model has two main solutions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Lock-based")," \u2014 In the locking model, the general primitives for synchronization are ",(0,a.kt)("em",{parentName:"p"},"locks")," that control access to critical sections. When a thread wants to modify the critical section, it acquires the lock and says ",(0,a.kt)("em",{parentName:"p"},"I'm the only thread that is allowed to modify the state right now"),", and after its work finished it unlocks the critical section and says ",(0,a.kt)("em",{parentName:"p"},"I'm done, any other thread can modify this memory section"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Non-blocking")," \u2014 Non-blocking algorithms usually use hardware-intrinsic atomic operations like ",(0,a.kt)("inlineCode",{parentName:"p"},"compare-and-swap")," (CAS), without using any locks. This method follows an optimistic design with a transactional memory mechanism to roll back in conflict situations."))),(0,a.kt)("h2",{id:"implications-of-locking-mechanism"},"Implications of Locking Mechanism"),(0,a.kt)("p",null,"There are several drawbacks with lock-based concurrency:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Incorrect use of locks can lead to deadlocks. We need to care about the locking orders. If we don't place the locks in the right order, we may encounter a deadlock situation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Identifying the critical section of code that is vulnerable to race conditions is overwhelming. We should always care about them and remember to lock everywhere it's required.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It makes our software design very sophisticated to become scalable and reliable. It doesn't scale with program size and complexity.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To prevent missing the releasing of the acquired locks, we should always care about exceptions and error handling inside locking sections. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The locking mechanism violates the encapsulation property of the pieces of our programs. So systems that are built on a locking mechanism are difficult to compose without knowing about their internals."))),(0,a.kt)("h2",{id:"lock-free-concurrency-model"},"Lock-free Concurrency Model"),(0,a.kt)("p",null,"As the lock-oriented programming does not compose and has lots of drawbacks, ZIO uses a ",(0,a.kt)("em",{parentName:"p"},"lock-free concurrency model")," which is a variation of non-blocking algorithms. The magic behind all of ZIO concurrency primitives is that they use the CAS (",(0,a.kt)("em",{parentName:"p"},"compare-and-set"),") operation. "),(0,a.kt)("p",null,"Let's see how the ",(0,a.kt)("inlineCode",{parentName:"p"},"modify")," function of ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," is implemented without any locking mechanism:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"case class Ref[A](value: AtomicReference[A]) { self =>\n  def modify[B](f: A => (B, A)): UIO[B] = ZIO.succeed {\n    var loop = true\n    var b: B = null.asInstanceOf[B]\n    while (loop) {\n      val current = value.get\n      val tuple   = f(current)\n      b = tuple._1\n      loop = !value.compareAndSet(current, tuple._2)\n    }\n    b\n  }\n}\n")),(0,a.kt)("p",null,"The idea behind the ",(0,a.kt)("inlineCode",{parentName:"p"},"modify")," is that a variable is only updated if it still has the same value as the time we had read the value from the original memory location. If the value has changed, it retries in the while loop until it succeeds. "),(0,a.kt)("h2",{id:"advantage-of-using-zio-concurrency"},"Advantage of Using ZIO Concurrency"),(0,a.kt)("p",null,"Let's point out the key properties of the ZIO concurrency model:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Composable")," \u2014 Due to the use of the lock-free concurrency model, ZIO brings us composable concurrency primitives and lots of great combinators in a declarative style.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," and subsequently all other ZIO concurrency primitives that are on top of these two basic primitives ",(0,a.kt)("strong",{parentName:"p"},"are not ",(0,a.kt)("em",{parentName:"strong"},"transactionally")," composable"),"."),(0,a.kt)("p",{parentName:"blockquote"},"We cannot do transactional changes across two or more of such concurrency primitives. They are susceptible to race conditions and deadlocks. ",(0,a.kt)("strong",{parentName:"p"},"So don't use them if you need to perform an atomic operation on top of a composed sequence of multiple state-changing operations. In such a case use ",(0,a.kt)("a",{parentName:"strong",href:"/references/stm/"},(0,a.kt)("inlineCode",{parentName:"a"},"STM"))," instead"),". ")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Non-blocking")," \u2014 All of the ZIO primitives are a hundred percent asynchronous and nonblocking.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Resource Safety")," \u2014 ZIO concurrency model comes with strong guarantees of resource safety. If any interruption occurs in between concurrent operations, it won't leak any resource. So it allows us to write compositional operators like timeout and racing without worrying about any leaks."))),(0,a.kt)("h2",{id:"concurrency-primitives"},"Concurrency Primitives"),(0,a.kt)("p",null,"Let's take a quick look at ZIO concurrency primitives, what they are and why they exist."),(0,a.kt)("h3",{id:"basic-operations"},"Basic Operations"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," are the two simple concurrency primitives which provide an orthogonal basis for building concurrency structures. They are assembly language of other concurrent data structures:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/references/concurrency/ref"},"Ref"))," \u2014 ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," and all its variant like ",(0,a.kt)("a",{parentName:"p",href:"/references/concurrency/refsynchronized"},(0,a.kt)("inlineCode",{parentName:"a"},"Ref.Synchronized"))," are building blocks for writing concurrent stateful applications. Anytime we need to share information between multiple fibers, and those fibers have to update the same information, they need to communicate through something that provides the guarantee of atomicity. So all of these ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref")," primitives are atomic and thread-safe. They provide us a reliable foundation for synchronizing concurrent programs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/references/concurrency/promise"},"Promise"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," is a model of a variable that may be set a single time, and awaited on by many fibers. This primitive is very useful when we need some point of synchronization between two or multiple fibers."))),(0,a.kt)("p",null,"By using these two simple primitives, we can build lots of other asynchronous concurrent data structures like ",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Queue")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Hub"),"."),(0,a.kt)("h3",{id:"others"},"Others"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/references/concurrency/semaphore"},"Semaphore"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," is an asynchronous (non-blocking) semaphore that plays well with ZIO's interruption. ",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," is a generalization of a mutex. It has a certain number of permits, which can be held and released concurrently by different parties. Attempts to acquire more permits than available result in the acquiring fiber being suspended until the specified number of permits become available.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/references/concurrency/queue"},"Queue"))," \u2014 A ",(0,a.kt)("inlineCode",{parentName:"p"},"Queue")," is an asynchronous queue that never blocks, which is safe for multiple concurrent producers and consumers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/references/concurrency/hub"},"Hub"))," - A ",(0,a.kt)("inlineCode",{parentName:"p"},"Hub")," is an asynchronous message hub that allows publishers to efficiently broadcast values to many subscribers."))))}m.isMDXComponent=!0}}]);