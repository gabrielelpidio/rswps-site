"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[9056],{9667:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),o=a(133);function i(e){var t=e.children;return n.createElement(o.Z,{applicationId:"sandbox-sq0idb-7KE3zXHZLG_X5EmLLptTYw",cardTokenizeResponseReceived:function(e,t){console.info({token:e,buyer:t})},createVerificationDetails:function(){return{amount:"1.00",billingContact:{addressLines:["123 Main Street","Apartment 1"],familyName:"Doe",givenName:"John",countryCode:"GB",city:"London"},currencyCode:"GBP",intent:"CHARGE"}},locationId:"4P550BZQ0TQZA"},t)}},9228:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return v}});var n=a(7462),o=a(3366),i=a(7294),r=a(4137),s=a(3200),c=a(9227),l=a(8152);const d=(0,l.z)("button",{backgroundColor:"#006aff",borderRadius:5,boxShadow:1,color:"#fff",cursor:"pointer",borderStyle:"none",fontSize:16,fontWeight:500,lineHeight:"24px",outline:"none",padding:12,userSelect:"none",width:"100%","&:active":{backgroundColor:"rgb(0, 85, 204)"},"&:disabled":{backgroundColor:"rgba(0, 0, 0, 0.05)",color:"rgba(0, 0, 0, 0.3)",cursor:"not-allowed"},span:{lineHeight:1,verticalAlign:"middle"}}),u=(0,l.z)("svg",{display:"inline-flex",height:24,marginRight:14,verticalAlign:"middle",width:36});function p({accountHolderName:e,redirectURI:t,transactionId:a,callbacks:n,buttonProps:o,children:r,svgProps:l}){const[p,m]=i.useState((()=>{})),[h,f]=i.useState(!1),{cardTokenizeResponseReceived:g,payments:b}=(0,s.cI)(),k=i.useRef(null);if(i.useEffect((()=>{const e=new AbortController,{signal:n}=e;return(async e=>{const n=await(b?.ach({redirectURI:t,transactionId:a}).then((t=>{if(!e?.aborted)return m(t),t})));e.aborted&&await(n?.destroy())})(n),()=>{e.abort()}}),[b]),n)for(const i of Object.keys(n))p?.addEventListener(i.replace(/([A-Z])/g,"_$1").toUpperCase(),n[i]);return(0,c.O)({listener:async t=>{if(t.stopPropagation(),p){f(!0);try{const t=await p.tokenize({accountHolderName:e});if("OK"===t.status)return g(t);let a=`Tokenization failed with status: ${t.status}`;if(t?.errors)throw a+=` and errors: ${JSON.stringify(t?.errors)}`,new Error(a);console.warn(a)}catch(a){console.error(a)}finally{f(!1)}}else console.warn("ACH button was clicked, but no ACH instance was found.")},type:"click",element:k,options:{passive:!0}}),r?i.createElement(d,{...o,"aria-disabled":!p||h,disabled:!p||h,ref:k,type:"button"},r):i.createElement(d,{...o,"aria-disabled":!p||h,disabled:!p||h,ref:k,type:"button"},i.createElement(u,{fill:"none",height:"1em",viewBox:"0 0 36 24",width:"1em",xmlns:"http://www.w3.org/2000/svg",...l},i.createElement("rect",{fill:"url(#prefix__paint0_linear)",height:24,rx:4,width:36}),i.createElement("path",{clipRule:"evenodd",d:"M18.509 6.16a.89.89 0 00-1.018 0l-6.124 4.285a.848.848 0 00-.325.96.873.873 0 00.833.595h1.75v4.286h-1.75a.866.866 0 00-.875.857c0 .473.392.857.875.857h12.25a.866.866 0 00.875-.857.866.866 0 00-.875-.857h-1.75V12h1.75c.38 0 .717-.24.833-.596a.848.848 0 00-.324-.959L18.509 6.16zm2.116 10.126V12h-5.25v4.286h5.25zM18 7.91l3.395 2.376h-6.79L18 7.91z",fill:"#fff",fillRule:"evenodd"}),i.createElement("defs",null,i.createElement("linearGradient",{gradientUnits:"userSpaceOnUse",id:"prefix__paint0_linear",x1:36,x2:0,y1:12,y2:12},i.createElement("stop",{stopColor:"#01D09E"}),i.createElement("stop",{offset:1,stopColor:"#03E4AE"})))),i.createElement("span",null,"Pay with Direct debit (ACH)"))}var m=a(9667),h=["components"],f={id:"ach-usage",title:"ACH - Basic Usage",slug:"/ach/usage",sidebar_label:"Usage",sidebar_position:1},g="Basic usage",b={unversionedId:"ach/ach-usage",id:"ach/ach-usage",title:"ACH - Basic Usage",description:"Square supports instant authentication through Plaid for verifying a buyer's bank account before making an ACH payment. Plaid lets your application quickly authenticate the bank account and uses the Web Payments SDK to connect to the ACH network to accept payments.",source:"@site/docs/ach/usage.mdx",sourceDirName:"ach",slug:"/ach/usage",permalink:"/docs/ach/usage",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/ach/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"ach-usage",title:"ACH - Basic Usage",slug:"/ach/usage",sidebar_label:"Usage",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced Usage",permalink:"/docs/card/advanced-usage"},next:{title:"Props",permalink:"/docs/ach/props"}},k={},v=[],y={toc:v};function w(e){var t=e.components,a=(0,o.Z)(e,h);return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"Square supports instant authentication through ",(0,r.kt)("a",{parentName:"p",href:"https://plaid.com/products/auth"},"Plaid")," for verifying a buyer's bank account before making an ACH payment. Plaid lets your application quickly authenticate the bank account and uses the Web Payments SDK to connect to the ACH network to accept payments."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Ach, PaymentForm } from \'react-square-web-payments-form\';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <Ach accountHolderName="John Doe" redirectURI="https://example.com/" transactionId="12345" />\n    </PaymentForm>\n  );\n}\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Test")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"We will never store your account data.")," But please use dummy data for testing."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After you hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pay with Direct debit (ACH)")," button you can see the output on the console."))),(0,r.kt)("p",null,"This is how the button looks like:"),(0,r.kt)(m.Z,{mdxType:"PaymentForm"},(0,r.kt)(p,{accountHolderName:"John Doe",redirectURI:"https://example.com/",transactionId:"12345",callbacks:{open:function(e){console.log("open",e)}},mdxType:"Ach"})))}w.isMDXComponent=!0}}]);