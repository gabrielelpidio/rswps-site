"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[8399],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(s,".").concat(p)]||h[p]||u[p]||o;return n?i.createElement(m,l(l({ref:t},d),{},{components:n})):i.createElement(m,l({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var c=2;c<o;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7697:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return u}});var i=n(7462),a=n(3366),o=(n(7294),n(4137)),l=["components"],r={id:"ach-callbacks",title:"ACH - Callbacks",slug:"/ach/callbacks",sidebar_label:"Callbacks",sidebar_position:3},s="Callbacks",c={unversionedId:"ach/ach-callbacks",id:"ach/ach-callbacks",title:"ACH - Callbacks",description:"Adds an event listener to the instance of ach. See the Plaid documentation for supported event types and expected metadata. https",source:"@site/docs/ach/callbacks.md",sourceDirName:"ach",slug:"/ach/callbacks",permalink:"/docs/ach/callbacks",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/ach/callbacks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"ach-callbacks",title:"ACH - Callbacks",slug:"/ach/callbacks",sidebar_label:"Callbacks",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/docs/ach/props"}},d={},u=[{value:"<code>bankIncomeInsightsCompleted()</code>",id:"bankincomeinsightscompleted",level:2},{value:"<code>closeOauth()</code>",id:"closeoauth",level:2},{value:"<code>error()</code>",id:"error",level:2},{value:"<code>exit()</code>",id:"exit",level:2},{value:"<code>failOauth()</code>",id:"failoauth",level:2},{value:"<code>handoff()</code>",id:"handoff",level:2},{value:"<code>matchedSelectInstitution()</code>",id:"matchedselectinstitution",level:2},{value:"<code>matchedSelectVerifyMethod()</code>",id:"matchedselectverifymethod",level:2},{value:"<code>open()</code>",id:"open",level:2},{value:"<code>openMyPlaid()</code>",id:"openmyplaid",level:2},{value:"<code>openOauth()</code>",id:"openoauth",level:2},{value:"<code>searchInstitution()</code>",id:"searchinstitution",level:2},{value:"<code>selectBrand()</code>",id:"selectbrand",level:2},{value:"<code>selectDegradedInstitution()</code>",id:"selectdegradedinstitution",level:2},{value:"<code>selectDownInstitution()</code>",id:"selectdowninstitution",level:2},{value:"<code>selectInstitution()</code>",id:"selectinstitution",level:2},{value:"<code>submitCredentials()</code>",id:"submitcredentials",level:2},{value:"<code>submitDocuments()</code>",id:"submitdocuments",level:2},{value:"<code>submitDocumentsError()</code>",id:"submitdocumentserror",level:2},{value:"<code>submitMfa()</code>",id:"submitmfa",level:2},{value:"<code>transitionView()</code>",id:"transitionview",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"callbacks"},"Callbacks"),(0,o.kt)("p",null,"Adds an event listener to the instance of ach. See the Plaid documentation for supported event types and expected metadata. ",(0,o.kt)("a",{parentName:"p",href:"https://plaid.com/docs/#onevent-callback"},"https://plaid.com/docs/#onevent-callback"),". The output of the events will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "OPEN",\n  "detail": {\n    "error_code": null,\n    "error_message": null,\n    "error_type": null,\n    "exit_status": null,\n    "institution_search_query": null,\n    "link_session_id": "dc9cf1f9-4b41-4e40-9b6f-81cf73e6dfad",\n    "mfa_type": null,\n    "view_name": "CONSENT",\n    "request_id": null,\n    "timestamp": "2022-05-05T00:23:33.554Z"\n  }\n}\n')),(0,o.kt)("h2",{id:"bankincomeinsightscompleted"},(0,o.kt)("inlineCode",{parentName:"h2"},"bankIncomeInsightsCompleted()")),(0,o.kt)("p",null,"The user has completed the Assets and Bank Income Insights flow."),(0,o.kt)("h2",{id:"closeoauth"},(0,o.kt)("inlineCode",{parentName:"h2"},"closeOauth()")),(0,o.kt)("p",null,"The user closed the third-party website or mobile app without completing the OAuth flow."),(0,o.kt)("h2",{id:"error"},(0,o.kt)("inlineCode",{parentName:"h2"},"error()")),(0,o.kt)("p",null,"A recoverable error occurred in the Link flow, see the ",(0,o.kt)("inlineCode",{parentName:"p"},"error_code")," metadata."),(0,o.kt)("h2",{id:"exit"},(0,o.kt)("inlineCode",{parentName:"h2"},"exit()")),(0,o.kt)("p",null,"The user has exited without completing the Link flow and the ",(0,o.kt)("a",{parentName:"p",href:"https://plaid.com/docs/link/web/#onexit"},"onExit")," callback is fired."),(0,o.kt)("h2",{id:"failoauth"},(0,o.kt)("inlineCode",{parentName:"h2"},"failOauth()")),(0,o.kt)("p",null,"The user encountered an error while completing the third-party's OAuth login flow."),(0,o.kt)("h2",{id:"handoff"},(0,o.kt)("inlineCode",{parentName:"h2"},"handoff()")),(0,o.kt)("p",null,"The user has exited Link after successfully linking an Item."),(0,o.kt)("h2",{id:"matchedselectinstitution"},(0,o.kt)("inlineCode",{parentName:"h2"},"matchedSelectInstitution()")),(0,o.kt)("p",null,"The user selected an institution that was presented as a matched institution."),(0,o.kt)("h2",{id:"matchedselectverifymethod"},(0,o.kt)("inlineCode",{parentName:"h2"},"matchedSelectVerifyMethod()")),(0,o.kt)("p",null,"The user selected a verification method for a matched institution."),(0,o.kt)("h2",{id:"open"},(0,o.kt)("inlineCode",{parentName:"h2"},"open()")),(0,o.kt)("p",null,"The user has opened Link."),(0,o.kt)("h2",{id:"openmyplaid"},(0,o.kt)("inlineCode",{parentName:"h2"},"openMyPlaid()")),(0,o.kt)("p",null,"The user has opened my.plaid.com. This event is only sent when Link is initialized with Assets as a product"),(0,o.kt)("h2",{id:"openoauth"},(0,o.kt)("inlineCode",{parentName:"h2"},"openOauth()")),(0,o.kt)("p",null,"The user has navigated to a third-party website or mobile app in order to complete the OAuth login flow."),(0,o.kt)("h2",{id:"searchinstitution"},(0,o.kt)("inlineCode",{parentName:"h2"},"searchInstitution()")),(0,o.kt)("p",null,"The user has searched for an institution."),(0,o.kt)("h2",{id:"selectbrand"},(0,o.kt)("inlineCode",{parentName:"h2"},"selectBrand()")),(0,o.kt)("p",null,"The user selected a brand, e.g. Bank of America. The ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT_BRAND")," event is only emitted for large financial institutions with multiple online banking portals."),(0,o.kt)("h2",{id:"selectdegradedinstitution"},(0,o.kt)("inlineCode",{parentName:"h2"},"selectDegradedInstitution()")),(0,o.kt)("p",null,"The user selected an instititon with a ",(0,o.kt)("inlineCode",{parentName:"p"},"DEGRADED")," health status and were shown a corresponding message."),(0,o.kt)("h2",{id:"selectdowninstitution"},(0,o.kt)("inlineCode",{parentName:"h2"},"selectDownInstitution()")),(0,o.kt)("p",null,"The user selected an instititon with a ",(0,o.kt)("inlineCode",{parentName:"p"},"DOWN")," health status and were shown a corresponding message."),(0,o.kt)("h2",{id:"selectinstitution"},(0,o.kt)("inlineCode",{parentName:"h2"},"selectInstitution()")),(0,o.kt)("p",null,"The user selected an institution."),(0,o.kt)("h2",{id:"submitcredentials"},(0,o.kt)("inlineCode",{parentName:"h2"},"submitCredentials()")),(0,o.kt)("p",null,"The user has submitted credentials."),(0,o.kt)("h2",{id:"submitdocuments"},(0,o.kt)("inlineCode",{parentName:"h2"},"submitDocuments()")),(0,o.kt)("p",null,"The user is being prompted to submit documents for an Income verification flow."),(0,o.kt)("h2",{id:"submitdocumentserror"},(0,o.kt)("inlineCode",{parentName:"h2"},"submitDocumentsError()")),(0,o.kt)("p",null,"The user encountered an error when submitting documents for an Income verification flow."),(0,o.kt)("h2",{id:"submitmfa"},(0,o.kt)("inlineCode",{parentName:"h2"},"submitMfa()")),(0,o.kt)("p",null,"The user has submitted MFA."),(0,o.kt)("h2",{id:"transitionview"},(0,o.kt)("inlineCode",{parentName:"h2"},"transitionView()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"TRANSITION_VIEW")," event indicates that the user has moved from one view to the next."))}p.isMDXComponent=!0}}]);