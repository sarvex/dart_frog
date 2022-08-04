"use strict";(self.webpackChunkdart_frog_docs=self.webpackChunkdart_frog_docs||[]).push([[641],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7149:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={sidebar_position:3},p="Digital Ocean App Platform \ud83c\udf0a",c={unversionedId:"deploy/digital-ocean-app-platform",id:"deploy/digital-ocean-app-platform",title:"Digital Ocean App Platform \ud83c\udf0a",description:"App Platform is a service from Digital Ocean that helps you launch apps quickly while they manage the underlying infrastructure.",source:"@site/docs/deploy/digital-ocean-app-platform.md",sourceDirName:"deploy",slug:"/deploy/digital-ocean-app-platform",permalink:"/docs/deploy/digital-ocean-app-platform",draft:!1,editUrl:"https://github.com/VeryGoodOpenSource/dart_frog/tree/main/docs/docs/deploy/digital-ocean-app-platform.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"AWS App Runner \ud83c\udfc3",permalink:"/docs/deploy/aws-app-runner"},next:{title:"Roadmap",permalink:"/docs/roadmap"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying",id:"deploying",level:2},{value:"Additional Resources",id:"additional-resources",level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"digital-ocean-app-platform-"},"Digital Ocean App Platform \ud83c\udf0a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/products/app-platform"},"App Platform")," is a service from ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com"},"Digital Ocean")," that helps you launch apps quickly while they manage the underlying infrastructure."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you get started, if you haven't already completed these steps, you'll have to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a free ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.digitalocean.com/registrations/new"},"Digital Ocean account")," (or sign in with Google or GitHub).")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"You can incur costs when running this quickstart! For more details, see ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/pricing/app-platform"},"App Platform Pricing")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/pricing/container-registry"},"Container Registry Pricing"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," on your machine and run it. You can verify it is set up correctly by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker images\n")),(0,o.kt)("p",null,"(If Docker is running, the command will print the images on your machine. If not, it will print something like ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"),")"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/reference/doctl/how-to/install"},"Digital Ocean CLI (doctl)")," on your machine.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/reference/api/create-personal-access-token"},"Create a Digital Ocean API Token")," for your account with read and write access, then use it to give ",(0,o.kt)("inlineCode",{parentName:"p"},"doctl")," access to your account by running (it will prompt you for the access token):"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"doctl auth init --context [NAME]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[NAME]"),": A new name for the authentication context.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can switch authentication contexts in ",(0,o.kt)("inlineCode",{parentName:"p"},"doctl")," buy running:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"doctl auth switch --context [NAME]\n"))),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Give Docker permission to push images to Digital Ocean by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"doctl registry login\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Create a Container Registry. This can be done in the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/container-registry/quickstart/#create-a-registry"},"Digital Ocean console"),", or by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"doctl registry create [REGISTRY_NAME] --region [REGION]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[REGISTRY_NAME]"),": A name for the newly created registry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[REGION]"),": The Digital Ocean region the registry should reside in (ex: sfo1)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Be creative - registry names must be unique across all Digital Ocean container registries.")),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build your API for production use by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dart_frog build\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"/build")," directory with all the files needed to deploy your API."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Build your API using Docker by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker build build \\\n  --tag registry.digitalocean.com/[REGISTRY]/[IMAGE_NAME]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[REGISTRY]"),": The name of the registry you created eariler"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"[IMAGE_NAME]"),": A name given to this image to identify it in the registry")),(0,o.kt)("p",null,"This command will build the Docker image on your machine and can take up to a few minutes."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Push the image to Container Registry by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker push registry.digitalocean.com/[REGISTRY]/[IMAGE_NAME]\n")),(0,o.kt)("p",null,"You should now see your repository in the ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.digitalocean.com/registry"},"Container Registry page")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create your App by following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.digitalocean.com/products/app-platform/how-to/deploy-from-container-images/#deploy-resource-using-a-container-image-as-the-source"},"these instructions"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Congratulations! You have successfully built and deployed your API to App Platform. You can now access your API via the URL at the top of the app\u2019s overview page \ud83c\udf89"))),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/app-platform"},"App Platform docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/reference/doctl"},(0,o.kt)("inlineCode",{parentName:"a"},"doctl")," CLI reference")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/app-platform/how-to/manage-domains"},"Adding a custom domain in App Platform")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.digitalocean.com/products/app-platform/how-to/view-logs"},"View logs in App Platform"))))}m.isMDXComponent=!0}}]);