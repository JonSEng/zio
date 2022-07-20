"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),p=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?s.createElement(g,r(r({ref:t},c),{},{components:n})):s.createElement(g,r({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var s=n(7462),a=(n(7294),n(3905));const i={id:"test-aspect",title:"TestAspect"},r=void 0,o={unversionedId:"references/test/test-aspect",id:"references/test/test-aspect",title:"TestAspect",description:"A TestAspect is an aspect that can be weaved into specs. We can think of an aspect as a polymorphic function, capable of transforming one test into another, possibly enlarging the environment or error type.",source:"@site/docs/references/test/test-aspect.md",sourceDirName:"references/test",slug:"/references/test/test-aspect",permalink:"/references/test/test-aspect",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/references/test/test-aspect.md",tags:[],version:"current",frontMatter:{id:"test-aspect",title:"TestAspect"},sidebar:"references-sidebar",previous:{title:"Sized",permalink:"/references/test/environment/sized"},next:{title:"Gen",permalink:"/references/test/gen"}},l={},p=[{value:"Before, After and Around",id:"before-after-and-around",level:2},{value:"Conditional Aspects",id:"conditional-aspects",level:2},{value:"Debugging and Diagnostics",id:"debugging-and-diagnostics",level:2},{value:"Debugging",id:"debugging",level:3},{value:"Diagnostics",id:"diagnostics",level:3},{value:"Environment-specific Tests",id:"environment-specific-tests",level:2},{value:"OS-specific Tests",id:"os-specific-tests",level:3},{value:"Platform-specific Tests",id:"platform-specific-tests",level:3},{value:"Version-specific Tests",id:"version-specific-tests",level:3},{value:"Execution Strategy",id:"execution-strategy",level:2},{value:"Flaky and Non-flaky Tests",id:"flaky-and-non-flaky-tests",level:2},{value:"Ignoring Tests",id:"ignoring-tests",level:2},{value:"Non-deterministic",id:"non-deterministic",level:2},{value:"Passing Failed Tests",id:"passing-failed-tests",level:2},{value:"Repeat and Retry",id:"repeat-and-retry",level:2},{value:"Restoring State of Test Services",id:"restoring-state-of-test-services",level:2},{value:"Sized Tests",id:"sized-tests",level:2},{value:"Test Annotation",id:"test-annotation",level:2},{value:"Measuring Execution Time",id:"measuring-execution-time",level:3},{value:"Tagging",id:"tagging",level:3},{value:"Test Configs",id:"test-configs",level:2},{value:"Timing Out",id:"timing-out",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,s.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect")," is an aspect that can be weaved into specs. We can think of an aspect as a polymorphic function, capable of transforming one test into another, possibly enlarging the environment or error type."),(0,a.kt)("p",null,"We can think of a test aspect as a Spec transformer. It takes one spec, transforms it, and produces another spec (",(0,a.kt)("inlineCode",{parentName:"p"},"Spec => Spec"),")."),(0,a.kt)("p",null,"Test aspects encapsulate cross-cutting concerns and increase the modularity of our tests. So we can focus on the primary concerns of our tests and at the end of the day, we can apply required aspects to our tests."),(0,a.kt)("p",null,"We can apply each test aspect as an ordinary function to a spec. They are also compostable, so we can compose multiples of them."),(0,a.kt)("p",null,"For example, assume we have the following test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.test._\n\ntest("test") {\n  assertTrue(true)\n}\n')),(0,a.kt)("p",null,"We can pass this test to whatever test aspect we want. For example, to run this test only on the JVM and repeat it five times, we can write the test as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\nrepeat(Schedule.recurs(5))(\n  jvmOnly(\n    test("test") {\n      assertTrue(true)\n    }\n  )\n)\n')),(0,a.kt)("p",null,"To compose the aspects, we have a very nice ",(0,a.kt)("inlineCode",{parentName:"p"},"@@")," syntax, which helps us to write tests concisely. So the previous example can be written as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\ntest("test") {\n  assertTrue(true)\n} @@ jvmOnly @@ repeat(Schedule.recurs(5))\n')),(0,a.kt)("p",null,"When composing test aspects, ",(0,a.kt)("strong",{parentName:"p"},"the order of test aspects is important"),". So if we change the order, their behavior may change. For example, the following test will repeat the test 2 times:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\nsuite("suite")(\n  test("A") {\n    ZIO.debug("executing test")\n      .map(_ => assertTrue(true))\n  },\n) @@ nonFlaky @@ repeats(2)\n')),(0,a.kt)("p",null,"The output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"executing test\nexecuting test\nexecuting test\n+ suite - repeated: 2\n  + A - repeated: 2\nRan 1 test in 343 ms: 1 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("p",null,"But the following test aspect repeats the test 100 times:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\nsuite("suite")(\n  test("A") {\n    ZIO.debug("executing test")\n      .map(_ => assertTrue(true))\n  },\n) @@ repeats(2) @@ nonFlaky\n')),(0,a.kt)("p",null,"The output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"executing test\nexecuting test\nexecuting test\nexecuting test\nexecuting test\n...\nexecuting test\n+ suite - repeated: 100\n  + A - repeated: 100\nRan 1 test in 478 ms: 1 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("h2",{id:"before-after-and-around"},"Before, After and Around"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We can run a test ",(0,a.kt)("em",{parentName:"li"},"before"),", ",(0,a.kt)("em",{parentName:"li"},"after"),", or ",(0,a.kt)("em",{parentName:"li"},"around")," every test:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.before")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.after")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.around"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("before and after") {\n  for {\n    tmp <- System.env("TEMP_DIR")\n  } yield assertTrue(tmp.contains("/tmp/test"))\n} @@ TestAspect.before(\n  TestSystem.putEnv("TEMP_DIR", s"/tmp/test")\n) @@ TestAspect.after(\n  System.env("TEMP_DIR").flatMap(deleteDir)\n)\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundTest")," takes a scoped resource and evaluates every test within the context of the scoped function.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"There are also ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.beforeAll"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.afterAll"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundAll")," variants.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundWith")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.aroundAllWith")," we can evaluate every test or all test between two given effects, ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"after"),", where the result of the ",(0,a.kt)("inlineCode",{parentName:"p"},"before")," effect can be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"after")," effect."))),(0,a.kt)("h2",{id:"conditional-aspects"},"Conditional Aspects"),(0,a.kt)("p",null,"When we apply a conditional aspect, it will run the spec only if the specified predicate is satisfied."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifEnv"))," \u2014 Only runs a test if the specified environment variable satisfies the specified assertion."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifEnvSet"))," \u2014 Only runs a test if the specified environment variable is set."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifProp"))," \u2014 Only runs a test if the specified Java property satisfies the specified assertion."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"ifPropSet"))," \u2014 Only runs a test if the specified Java property is set.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\ntest("a test that will run if the product is deployed in the testing environment") {\n  ???\n} @@ ifEnv("ENV")(_ == "testing")\n\ntest("a test that will run if the java.io.tmpdir property is available") {\n  ???\n} @@ ifEnvSet("java.io.tmpdir")\n')),(0,a.kt)("h2",{id:"debugging-and-diagnostics"},"Debugging and Diagnostics"),(0,a.kt)("h3",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TestConsole")," service has two modes debug and silent state. ZIO Test has two corresponding test aspects to switch the debug state on and off:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.debug")," \u2014 When the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestConsole")," is in the debug state, the console output is rendered to the standard output in addition to being written to the output buffer. We can manually enable this mode by using ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.debug")," test aspect.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.silent")," \u2014 This test aspect turns off the debug mode and turns on the silent mode. So the console output is only written to the output buffer and not rendered to the standard output."))),(0,a.kt)("h3",{id:"diagnostics"},"Diagnostics"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"diagnose")," is an aspect that runs each test on a separate fiber and prints a fiber dump if the test fails or has not terminated within the specified duration."),(0,a.kt)("h2",{id:"environment-specific-tests"},"Environment-specific Tests"),(0,a.kt)("h3",{id:"os-specific-tests"},"OS-specific Tests"),(0,a.kt)("p",null,"To run a test on a specific operating system, we can use one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"unix"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"mac")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"windows")," test aspects or a combination of them. Additionally, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"os")," test aspect directly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\nsuite("os")(\n  test("unix test") {\n    ZIO.attempt("running on unix/linux os")\n      .debug\n      .map(_ => assertTrue(true))\n  } @@ TestAspect.unix,\n  test("macos test") {\n    ZIO.attempt("running on macos")\n      .debug\n      .map(_ => assertTrue(true))\n  } @@ TestAspect.os(_.isMac)\n)\n')),(0,a.kt)("h3",{id:"platform-specific-tests"},"Platform-specific Tests"),(0,a.kt)("p",null,"Sometimes we have platform-specific tests. Instead of creating separate sources for each platform to test those tests, we can use a proper aspect to run those tests on a specific platform."),(0,a.kt)("p",null,"To run a test on a specific platform, we can use one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"jvm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"js"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"native")," test aspects or a combination of them. If we want to run our test only on one of these platforms, we can use one of the ",(0,a.kt)("inlineCode",{parentName:"p"},"jvmOnly"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"jsOnly"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"nativeOnly")," test aspects. To exclude one of these platforms, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"exceptJs"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"exceptJVM"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"exceptNative")," test aspects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("Java virtual machine name can be accessed") {\n  for {\n    vm <- live(System.property("java.vm.name"))\n  } yield\n    assertTrue(vm.get.contains("VM"))\n} @@ TestAspect.jvmOnly\n')),(0,a.kt)("h3",{id:"version-specific-tests"},"Version-specific Tests"),(0,a.kt)("p",null,"Various test aspects can be used to run tests for specific versions of Scala, including ",(0,a.kt)("inlineCode",{parentName:"p"},"scala2"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scala211"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scala212"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scala213"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"dotty"),". As in the previous section, these test aspects have corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"*only")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"except*")," versions."),(0,a.kt)("h2",{id:"execution-strategy"},"Execution Strategy"),(0,a.kt)("p",null,"ZIO Test has two different strategies to run members of a test suite: ",(0,a.kt)("em",{parentName:"p"},"sequential")," and ",(0,a.kt)("em",{parentName:"p"},"parallel"),". Accordingly, there are two test aspects for specifying the execution strategy:"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.parallel"))," \u2014 The default strategy is parallel. We can explicitly enable it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\nsuite("Parallel")(\n  test("A")(Live.live(ZIO.attempt("Running Test A").delay(1.second)).debug.map(_ => assertTrue(true))),\n  test("B")(ZIO.attempt("Running Test B").debug.map(_ => assertTrue(true))),\n  test("C")(Live.live(ZIO.attempt("Running Test C").delay(500.millis)).debug.map(_ => assertTrue(true)))\n) @@ TestAspect.parallel\n')),(0,a.kt)("p",null,"After running this suite, we have the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Running Test B\nRunning Test C\nRunning Test A\n+ Parallel\n  + A\n  + B\n  + C\n")),(0,a.kt)("p",null,"To change the degree of the parallelism, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"parallelN")," test aspect. It takes the number of fibers and executes the members of a suite in parallel up to the specified number of concurrent fibers."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.sequential"))," \u2014 To execute them sequentially, we can use the ",(0,a.kt)("inlineCode",{parentName:"li"},"sequential")," test aspect:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\nsuite("Sequential")(\n  test("A")(Live.live(ZIO.attempt("Running Test A").delay(1.second)).debug.map(_ => assertTrue(true))),\n  test("B")(ZIO.attempt("Running Test B").debug.map(_ => assertTrue(true))),\n  test("C")(Live.live(ZIO.attempt("Running Test C").delay(500.millis)).debug.map(_ => assertTrue(true)))\n) @@ TestAspect.sequential\n')),(0,a.kt)("p",null,"And here is the output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Running Test A\nRunning Test B\nRunning Test C\n+ Sequential\n  + A\n  + B\n  + C\n")),(0,a.kt)("h2",{id:"flaky-and-non-flaky-tests"},"Flaky and Non-flaky Tests"),(0,a.kt)("p",null,"Whenever we deal with concurrency issues or race conditions, we should ensure that our tests pass consistently. The ",(0,a.kt)("inlineCode",{parentName:"p"},"nonFlaky")," is a test aspect to do that."),(0,a.kt)("p",null,"It will run a test several times, by default 100 times, and if all those times pass, it will pass, otherwise, it will fail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\ntest("random value is always greater than zero") {\n  for {\n    random <- Random.nextIntBounded(100)\n  } yield assertTrue(random > 0)\n} @@ nonFlaky\n')),(0,a.kt)("p",null,"Additionally, there is a ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.flaky")," test aspect which retries a test until it succeeds."),(0,a.kt)("h2",{id:"ignoring-tests"},"Ignoring Tests"),(0,a.kt)("p",null,"To ignore running a test, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ignore")," test aspect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("an ignored test") {\n  assertTrue(false)\n} @@ TestAspect.ignore\n')),(0,a.kt)("p",null,"To fail all ignored tests, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"success")," test aspect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\nsuite("sample tests")(\n  test("an ignored test") {\n    assertTrue(false)\n  } @@ TestAspect.ignore,\n  test("another ignored test") {\n    assertTrue(true)\n  } @@ TestAspect.ignore\n) @@ TestAspect.success\n')),(0,a.kt)("h2",{id:"non-deterministic"},"Non-deterministic"),(0,a.kt)("p",null,"The random process of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," is said to be deterministic since, with the initial seed, we can generate a sequence of predictable numbers. So with the same initial seed, it will generate the same sequence of numbers."),(0,a.kt)("p",null,"By default, the initial seed of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," is fixed. So repeating a generator more and more results in the same sequence:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\nimport zio.test.TestAspect._\n\ntest("pseudo-random number generator with fixed initial seed") {\n  check(Gen.int(0, 100)) { n =>\n    ZIO.attempt(n).debug.map(_ => assertTrue(true))\n  }\n} @@\n  samples(5) @@\n  after(Console.printLine("----").orDie) @@\n  repeat(Schedule.recurs(1))\n')),(0,a.kt)("p",null,"Regardless of how many times we repeat this test, the output would be the same:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"99\n51\n81\n48\n51\n----\n99\n51\n81\n48\n51\n----\n+ pseudo-random numbers with fixed initial seed - repeated: 2\nRan 1 test in 522 ms: 1 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nondeterministic")," test aspect, will change the seed of the pseudo-random generator before each test repetition:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\nimport zio.test.TestAspect._\n\ntest("pseudo-random number generator with random initial seed on each repetition") {\n  check(Gen.int(0, 100)) { n =>\n    ZIO.attempt(n).debug.map(_ => assertTrue(true))\n  }\n} @@\n  nondeterministic @@\n  samples(5) @@\n  after(Console.printLine("----").orDie) @@\n  repeat(Schedule.recurs(1))\n')),(0,a.kt)("p",null,"Here is a sample output, which we have different sequences of numbers on each run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"73\n9\n17\n33\n10\n----\n42\n85\n38\n2\n73\n----\n+ pseudo-random number generator with random initial seed on each repetition - repeated: 2\nRan 1 test in 733 ms: 1 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("h2",{id:"passing-failed-tests"},"Passing Failed Tests"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"failing")," aspect makes a test that failed for any reason pass."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("failing a passing test") {\n  assertTrue(true)\n} @@ TestAspect.failing\n')),(0,a.kt)("p",null,"If the test passes this aspect will make it fail:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("passing a failing test") {\n  assertTrue(false)\n} @@ TestAspect.failing\n')),(0,a.kt)("p",null,"It is also possible to pass a failing test on a specified failure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("a test that will only pass on a specified failure") {\n  ZIO.fail("Boom!").map(_ => assertTrue(true))\n} @@ TestAspect.failing[String] {\n  case TestFailure.Assertion(_, _) => true\n  case TestFailure.Runtime(cause: Cause[String], _) => cause match {\n    case Cause.Fail(value, _)\n      if value == "Boom!" => true\n    case _ => false\n  }\n}\n')),(0,a.kt)("h2",{id:"repeat-and-retry"},"Repeat and Retry"),(0,a.kt)("p",null,"There are some situations where we need to repeat a test with a specific schedule, or our tests might fail, and we need to retry them until we make sure that our tests pass. ZIO Test has the following test aspects for these scenarios:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.repeat(schedule: Schedule)"))," \u2014 It takes a schedule and repeats a test based on it. The test passes if it passes every time:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},'import zio._\nimport zio.test.{ test, _ }\n\ntest("repeating a test based on the scheduler to ensure it passes every time") {\n  ZIO("repeating successful tests")\n    .debug\n    .map(_ => assertTrue(true))\n} @@ TestAspect.repeat(Schedule.recurs(5))\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.retry(schedule: Schedule)"))," \u2014 If our test fails occasionally, we can retry failed tests by providing a scheduler to the ",(0,a.kt)("inlineCode",{parentName:"p"},"retry")," test aspect."),(0,a.kt)("p",{parentName:"li"},"For example, the following test retries a maximum of five times. Once a successful assertion is made, the test passes:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},'import zio._\nimport zio.test.{ test, _ }\n\ntest("retrying a failing test based on the schedule until it succeeds") {\n  ZIO("retrying a failing test")\n    .debug\n    .map(_ => assertTrue(true))\n} @@ TestAspect.retry(Schedule.recurs(5))\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.eventually"))," \u2014 This test aspect keeps retrying a test until it passes, regardless of how many times it fails:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-scala",metastring:"mdoc:compile-only","mdoc:compile-only":!0},'import zio._\nimport zio.test.{ test, _ }\n\ntest("retrying a failing test until it succeeds") {\n  ZIO("retrying a failing test")\n    .debug\n    .map(_ => assertTrue(true))\n} @@ TestAspect.eventually\n')))),(0,a.kt)("h2",{id:"restoring-state-of-test-services"},"Restoring State of Test Services"),(0,a.kt)("p",null,"ZIO Test has some test aspects which restore the state of given restorable test services, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"TestClock"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TestConsole"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"TestRandom")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestSystem"),", to their starting state after the test is run. Note that these test aspects are only useful when we are repeating tests."),(0,a.kt)("p",null,"Here is a list of restore methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.restore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestClock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestConsole")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestRandom")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestSystem")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TestAspect.restoreTestEnvironment"))),(0,a.kt)("p",null,"Let's try an example. Assume we have written the following test aspect, which repeats the test 5 times:"),(0,a.kt)("p",null,"When we run a test with this testing aspect, on each try, we have a polluted test environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\nimport java.util.concurrent.TimeUnit\n\nsuite("clock suite")(\n  test("adjusting clock") {\n    for {\n      clock <- ZIO.clock\n      _     <- TestClock.adjust(1.second)\n      time  <- clock.currentTime(TimeUnit.SECONDS).debug("current time")\n    } yield assertTrue(time == 1)\n  } @@ repeat5\n)\n')),(0,a.kt)("p",null,"This test fails in the second retry:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current time: 1\ncurrent time: 2\n- some suite\n  - clock suite\n    - adjusting clock\n      \u2717 2 was not equal to 1\n      time == 1\n      time = 2\n")),(0,a.kt)("p",null,"It failed because of the first run of the test changed the state of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TestClock")," service, so on the next run, the initial state of the test is not zero. In such a situation, when we are repeating a test, after each run we can restore the state of the test to its initial state, using ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.restore*")," test aspects:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\nimport java.util.concurrent.TimeUnit\n\nsuite("clock suite")(\n  test("adjusting clock") {\n    for {\n      clock <- ZIO.clock\n      _     <- TestClock.adjust(1.second)\n      time  <- clock.currentTime(TimeUnit.SECONDS).debug("current time")\n    } yield assertTrue(time == 1)\n  } @@ TestAspect.restoreTestClock @@ repeat5\n)\n')),(0,a.kt)("p",null,"The output of running this test would be as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"current time: 1\ncurrent time: 1\ncurrent time: 1\ncurrent time: 1\ncurrent time: 1\ncurrent time: 1\n+ clock suite\n  + adjusting clock\n  Ran 1 test in 470 ms: 1 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("h2",{id:"sized-tests"},"Sized Tests"),(0,a.kt)("p",null,"To change the default ",(0,a.kt)("em",{parentName:"p"},"size")," used by ",(0,a.kt)("a",{parentName:"p",href:"/references/test/gen#sized-generators"},"sized generators")," we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"sized")," test aspect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("generating small list of characters") {\n  check(Gen.small(Gen.listOfN(_)(Gen.alphaNumericChar))) { n =>\n    ZIO.attempt(n).debug *> Sized.size.map(s => assertTrue(s == 50))\n  }\n} @@ TestAspect.sized(50) @@ TestAspect.samples(5)\n')),(0,a.kt)("p",null,"Sample output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"List(p, M)\nList()\nList(0, m, 5)\nList(Y)\nList(O, b, B, V)\n+ generating small list of characters\nRan 1 test in 676 ms: 1 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("h2",{id:"test-annotation"},"Test Annotation"),(0,a.kt)("h3",{id:"measuring-execution-time"},"Measuring Execution Time"),(0,a.kt)("p",null,"We can annotate the execution time of each test using the ",(0,a.kt)("inlineCode",{parentName:"p"},"timed")," test aspect:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\nsuite("a timed suite")(\n  test("A")(Live.live(ZIO.sleep(100.millis)).map(_ => assertTrue(true))),\n  test("B")(assertTrue(true)),\n  test("C")(assertTrue(true))\n) @@ timed\n')),(0,a.kt)("p",null,"After running the test suite, the output should be something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+ a timed suite - 178 ms (100.00%)\n  + A - 108 ms (60.95%)\n  + B - 34 ms (19.39%)\n  + C - 35 ms (19.66%)\nRan 3 tests in 346 ms: 3 succeeded, 0 ignored, 0 failed\n")),(0,a.kt)("h3",{id:"tagging"},"Tagging"),(0,a.kt)("p",null,"ZIO Test allows us to define some arbitrary tags. By labeling tests with one or more tags, we can categorize them, and then, when running tests, we can filter tests according to their tags."),(0,a.kt)("p",null,"Let's tag all slow tests and run them separately:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\nobject TaggedSpecsExample extends ZIOSpecDefault {\n  def spec =\n    suite("a suite containing tagged tests")(\n      test("a slow test") {\n        longRunningAssertion\n      } @@ TestAspect.tag("slow", "math"),\n      test("a simple test") {\n        assertTrue(1 + 1 == 2)\n      } @@ TestAspect.tag("math"),\n      test("another slow test") {\n        anotherLongRunningAssertion\n      } @@ TestAspect.tag("slow")\n    )\n}\n')),(0,a.kt)("p",null,"By adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"-tags slow")," argument to the command line, we will only run the slow tests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sbt> test:runMain TaggedSpecsExample -tags slow\n")),(0,a.kt)("p",null,"The output would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'[info] running (fork) TaggedSpecsExample -tags slow\n[info] + a suite containing tagged tests - tagged: "slow", "math"\n[info]   + a slow test - tagged: "slow", "math"\n[info]   + another slow test - tagged: "slow"\n[info] Ran 2 tests in 162 ms: 2 succeeded, 0 ignored, 0 failed\n[success] Total time: 1 s, completed Nov 2, 2021, 12:36:36 PM\n')),(0,a.kt)("h2",{id:"test-configs"},"Test Configs"),(0,a.kt)("p",null,"To run cases, there are some ",(0,a.kt)("a",{parentName:"p",href:"/references/test/environment/config"},"default configuration settings")," which are used by test runner, such as ",(0,a.kt)("em",{parentName:"p"},"repeats"),", ",(0,a.kt)("em",{parentName:"p"},"retries"),", ",(0,a.kt)("em",{parentName:"p"},"samples")," and ",(0,a.kt)("em",{parentName:"p"},"shrinks"),". We can change these settings using test aspects:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.repeats(n: Int)"))," \u2014 Runs each test with the number of times to repeat tests to ensure they are stable set to the specified value.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("repeating a test") {\n  ZIO.attempt("Repeating a test to ensure its stability")\n    .debug\n    .map(_ => assertTrue(true))\n} @@ TestAspect.nonFlaky @@ TestAspect.repeats(5)\n')),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.retries(n: Int)"))," \u2014 Runs each test with the number of times to retry flaky tests set to the specified value."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.samples(n: Int)"))," \u2014 Runs each test with the number of sufficient samples to check for a random variable set to the specified value."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"TestAspect.shrinks(n: Int)"))," \u2014 Runs each test with the maximum number of shrinkings to minimize large failures set to the specified value.")),(0,a.kt)("p",null,"Let's change the number of default samples in the following example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{ test, _ }\n\ntest("customized number of samples") {\n  for {\n    ref <- Ref.make(0)\n    _ <- check(Gen.int)(_ => assertZIO(ref.update(_ + 1))(Assertion.anything))\n    value <- ref.get\n  } yield assertTrue(value == 50)\n} @@ TestAspect.samples(50)\n')),(0,a.kt)("h2",{id:"timing-out"},"Timing Out"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TestAspect.timeout")," test aspect takes a duration and times out each test. If the test case runs longer than the time specified, it is immediately canceled and reported as a failure, with a message showing that the timeout was exceeded:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test.{test, _}\n\ntest("effects can be safely interrupted") {\n  for {\n    _ <- ZIO.attempt(println("Still going ...")).forever\n  } yield assertTrue(true)\n} @@ TestAspect.timeout(1.second)\n')),(0,a.kt)("p",null,"By applying a ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout(1.second)")," test aspect, this will work with ZIO's interruption mechanism. So when we run this test, you can see a tone of print lines, and after a second, the ",(0,a.kt)("inlineCode",{parentName:"p"},"timeout")," aspect will interrupt that."))}u.isMDXComponent=!0}}]);