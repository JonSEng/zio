"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[52584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=c(n),p=a,y=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"getting-started",title:"Getting Started"},i=void 0,d={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Add the dependency to your build.sbt file",source:"@site/node_modules/@zio.dev/zio-dynamodb/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zio-dynamodb/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"sidebar",previous:{title:"Overview",permalink:"/zio-dynamodb/"},next:{title:"Codec Customization",permalink:"/zio-dynamodb/codec-customization"}},l={},c=[{value:"Add the dependency to your build.sbt file",id:"add-the-dependency-to-your-buildsbt-file",level:2},{value:"Read &amp; write data to/from DynamoDB",id:"read--write-data-tofrom-dynamodb",level:3}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"add-the-dependency-to-your-buildsbt-file"},"Add the dependency to your build.sbt file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-dynamodb" % 0.2.0-RC2\n')),(0,a.kt)("h3",{id:"read--write-data-tofrom-dynamodb"},"Read & write data to/from DynamoDB"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.clock.Clock\nimport zio.schema.{ DeriveSchema, Schema }\nimport zio.dynamodb._\nimport zio.dynamodb.DynamoDBQuery._\nimport io.github.vigoo.zioaws.dynamodb\nimport io.github.vigoo.zioaws.dynamodb.DynamoDb\nimport io.github.vigoo.zioaws.core.config\nimport io.github.vigoo.zioaws.http4s\n\nfinal case class Student(email: String, subject: String)\nobject Student {\n  implicit lazy val schema: Schema[Student] = DeriveSchema.gen[Student]\n}\n\nobject Main extends App {\n  private val liveDynamoDbLayer: ZLayer[Any, Throwable, DynamoDb] =\n    http4s.default >>> config.default >>> dynamodb.live\n\n  // Assuming table "student" exists with email as HASH key and subject as the RANGE key\n  val avi = Student("avi@gmail.com", "maths")\n  val adam = Student("adam@gmail.com", "english")\n\n  def run(args: List[String]) = {\n    (for {\n      _ <- (put("student", avi) zip put("student", adam)).execute\n      listOfStudentsOrError <- forEach(List(avi, adam)) { student =>\n        get[Student]("student",\n          PrimaryKey("email" -> student.email, "subject" -> student.subject)\n        )}.execute\n    } yield ())\n      .provideLayer((liveDynamoDbLayer ++ Clock.live) >>> DynamoDBExecutor.live)\n      .exitCode\n  }\n}\n')))}u.isMDXComponent=!0}}]);