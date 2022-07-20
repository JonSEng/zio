"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3804],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),p=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},432:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const o={id:"semaphore",title:"Semaphore"},i=void 0,s={unversionedId:"references/concurrency/semaphore",id:"references/concurrency/semaphore",title:"Semaphore",description:"A Semaphore datatype which allows synchronization between fibers with the withPermit operation, which safely acquires and releases a permit.",source:"@site/docs/references/concurrency/semaphore.md",sourceDirName:"references/concurrency",slug:"/references/concurrency/semaphore",permalink:"/references/concurrency/semaphore",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/concurrency/semaphore.md",tags:[],version:"current",frontMatter:{id:"semaphore",title:"Semaphore"},sidebar:"references-sidebar",previous:{title:"Hub",permalink:"/references/concurrency/hub"},next:{title:"Introduction",permalink:"/references/stm/"}},c={},p=[{value:"Operations",id:"operations",level:2}],l={toc:p};function m(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," datatype which allows synchronization between fibers with the ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermit")," operation, which safely acquires and releases a permit.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Semaphore")," is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"Ref[A]")," datatype."),(0,a.kt)("h2",{id:"operations"},"Operations"),(0,a.kt)("p",null,"For example, a synchronization of asynchronous tasks can\nbe done via acquiring and releasing a semaphore with a given number of permits it can spend.\nWhen the acquire operation cannot be performed due to no more available ",(0,a.kt)("inlineCode",{parentName:"p"},"permits")," in the semaphore, such task\nis semantically blocked, until the ",(0,a.kt)("inlineCode",{parentName:"p"},"permits")," value is large enough again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import java.util.concurrent.TimeUnit\nimport zio._\nimport zio.Console._\n\nval task = for {\n  _ <- printLine("start")\n  _ <- ZIO.sleep(Duration(2, TimeUnit.SECONDS))\n  _ <- printLine("end")\n} yield ()\n\nval semTask = (sem: Semaphore) => for {\n  _ <- sem.withPermit(task)\n} yield ()\n\nval semTaskSeq = (sem: Semaphore) => (1 to 3).map(_ => semTask(sem))\n\nval program = for {\n\n  sem <- Semaphore.make(permits = 1)\n\n  seq <- ZIO.succeed(semTaskSeq(sem))\n\n  _ <- ZIO.collectAllPar(seq)\n\n} yield ()\n')),(0,a.kt)("p",null,"As the binary semaphore is a special case of a counting semaphore,\nwe can acquire and release any number of ",(0,a.kt)("inlineCode",{parentName:"p"},"permits"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"val semTaskN = (sem: Semaphore) => for {\n  _ <- sem.withPermits(5)(task)\n} yield ()\n")),(0,a.kt)("p",null,"The guarantee of ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermit")," (and its corresponding counting version ",(0,a.kt)("inlineCode",{parentName:"p"},"withPermits"),") is that each acquisition will be followed by the equivalent number of releases, regardless of whether the task succeeds, fails, or is interrupted."))}m.isMDXComponent=!0}}]);