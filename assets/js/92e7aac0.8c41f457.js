"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[597],{7193:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=a(7462),o=a(3366),r=(a(7294),a(4137)),i=a(1532),s=a(9477),d=["components"],c={id:"gift-card-advanced-usage",title:"GiftCard - Advanced Usage",slug:"/gift-card/advanced-usage",sidebar_label:"Advanced Usage",sidebar_position:4},l="Advanced Usage",u={unversionedId:"gift-card/gift-card-advanced-usage",id:"gift-card/gift-card-advanced-usage",title:"GiftCard - Advanced Usage",description:"Styling",source:"@site/docs/gift-card/advanced-usage.mdx",sourceDirName:"gift-card",slug:"/gift-card/advanced-usage",permalink:"/docs/gift-card/advanced-usage",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/gift-card/advanced-usage.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"gift-card-advanced-usage",title:"GiftCard - Advanced Usage",slug:"/gift-card/advanced-usage",sidebar_label:"Advanced Usage",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/docs/gift-card/callbacks"},next:{title:"Usage",permalink:"/docs/afterpay/usage"}},p={},f=[{value:"Styling",id:"styling",level:2}],m={toc:f};function g(e){var t=e.components,a=(0,o.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-usage"},"Advanced Usage"),(0,r.kt)("h2",{id:"styling"},"Styling"),(0,r.kt)("p",null,"This example illustrates how to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"<GiftCard>")," and extend the styles of the card form."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," property inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"buttonProps")," object is used to style the ",(0,r.kt)("inlineCode",{parentName:"p"},"<button>")," element, since we are using CSS-in-JS is easy to extend all the styles that we want and even use a syntax that is almost like SASS."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," property comes directly from Square and is used to pass the styles to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<GiftCard>")," input, Square use it's own set of classes to be styled, and you can only use the classes that are provided by Square."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <GiftCard\n        buttonProps={{\n          css: {\n            \"[data-theme='dark'] &\": {\n              backgroundColor: '#61dafb',\n              color: 'var(--ifm-color-emphasis-100)',\n              '&:hover': {\n                backgroundColor: '#0091ea',\n              },\n            },\n            backgroundColor: '#771520',\n            fontSize: '14px',\n            color: '#fff',\n            '&:hover': {\n              backgroundColor: '#530f16',\n            },\n          },\n        }}\n        style={{\n          input: {\n            fontSize: '14px',\n          },\n          'input::placeholder': {\n            color: '#771520',\n          },\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Test")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"We will never store your gift card data.")," But please use dummy data for testing."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"After you hit the ",(0,r.kt)("inlineCode",{parentName:"p"},"Pay with Gift Card")," button you can see the output on the console."))),(0,r.kt)("p",null,"This is how the form looks like:"),(0,r.kt)(s.Z,{mdxType:"PaymentForm"},(0,r.kt)(i.Z,{callbacks:{cardBrandChanged:function(e){console.info(e)}},buttonProps:{css:{"[data-theme='dark'] &":{backgroundColor:"#61dafb",color:"var(--ifm-color-emphasis-100)","&:hover":{backgroundColor:"#0091ea"}},backgroundColor:"#771520",fontSize:"14px",color:"#fff","&:hover":{backgroundColor:"#530f16"}}},style:{input:{fontSize:"14px"},"input::placeholder":{color:"#771520"}},mdxType:"GiftCard"})))}g.isMDXComponent=!0},1532:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(7294),o=a(3200),r=a(9227),i=a(8152);const s=(0,i.F)({"0%, 100%":{opacity:1},"50%":{opacity:.5}}),d=(0,i.z)("div",{animation:`${s()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,background:"#F3F4F6",borderRadius:6,height:50,marginBottom:39,position:"relative"}),c=(0,i.z)("button",{backgroundColor:"#006aff",borderRadius:5,boxShadow:1,color:"#fff",cursor:"pointer",borderStyle:"none",fontSize:16,fontWeight:500,lineHeight:"24px",outline:"none",padding:12,userSelect:"none",width:"100%","&:active":{backgroundColor:"rgb(0, 85, 204)"},"&:disabled":{backgroundColor:"rgba(0, 0, 0, 0.05)",color:"rgba(0, 0, 0, 0.3)",cursor:"not-allowed"}});function l({buttonProps:e={id:"rswps-gift-card-button"},callbacks:t,children:a,focus:i,id:s="rswps-gift-card-container",includeInputLabels:l,render:u,style:p,...f}){const[m,g]=n.useState((()=>{})),[h,v]=n.useState(!1),{cardTokenizeResponseReceived:k,payments:b}=(0,o.cI)(),y=n.useRef(null),w=n.useMemo((()=>{const e={includeInputLabels:l,style:p};return Object.keys(e).reduce(((t,a)=>(void 0!==e[a]&&(t[a]=e[a]),t)),{})}),[l,p]);if(n.useEffect((()=>{const e=new AbortController,{signal:t}=e;return(async e=>{const t=await(b?.giftCard(w).then((t=>e.aborted?null:(g(t),t))));await(t?.attach(`#${s}`)),i&&await(t?.focus(i)),e.aborted&&await(t?.destroy())})(t),()=>{e.abort()}}),[b,s]),t)for(const n of Object.keys(t))m?.addEventListener(n,t[n]);(0,r.O)({listener:async e=>{if(e.stopPropagation(),m){v(!0);try{const e=await(m?.tokenize());if("OK"===e.status)return k(e);let t=`Tokenization failed with status: ${e.status}`;if(e?.errors)throw t+=` and errors: ${JSON.stringify(e?.errors)}`,new Error(t);console.warn(t)}catch(t){console.error(t)}finally{v(!1)}}else console.warn("Gift Card button was clicked, but no Gift Card instance was found.")},type:"click",element:y,options:{passive:!0}});const C=({isLoading:e,...t})=>{const a=e||!m||h;return n.createElement(c,{...t,"aria-disabled":a,css:t?.css,disabled:a,id:"rswp-gift-card-button",ref:y,type:"button"},t?.children??"Pay with Gift Card")};return n.createElement(n.Fragment,null,n.createElement("div",{...f,"data-testid":"rswps-gift-card-container",id:s,style:{minHeight:89}},!m&&n.createElement(d,null)),"function"==typeof u?u(C):n.createElement(C,{...e},a??"Pay with Gift Card"))}}}]);