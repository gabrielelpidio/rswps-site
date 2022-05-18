"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[287],{6129:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(1532),s=n(9477),d=["components"],l={id:"gift-card-props",title:"GiftCard - Props",slug:"/gift-card/props",sidebar_label:"Props",sidebar_position:2},p="Props",c={unversionedId:"gift-card/gift-card-props",id:"gift-card/gift-card-props",title:"GiftCard - Props",description:"buttonProps",source:"@site/docs/gift-card/props.mdx",sourceDirName:"gift-card",slug:"/gift-card/props",permalink:"/docs/gift-card/props",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/gift-card/props.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"gift-card-props",title:"GiftCard - Props",slug:"/gift-card/props",sidebar_label:"Props",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/gift-card/usage"},next:{title:"Callbacks",permalink:"/docs/gift-card/callbacks"}},u={},m=[{value:"<code>buttonProps</code>",id:"buttonprops",level:2},{value:"<code>callbacks</code>",id:"callbacks",level:2},{value:"<code>children</code>",id:"children",level:2},{value:"<code>focus</code>",id:"focus",level:2},{value:"<code>includeInputLabels</code>",id:"includeinputlabels",level:2},{value:"Example",id:"example",level:4},{value:"<code>render()</code>",id:"render",level:2},{value:"<code>style</code>",id:"style",level:2}],f={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"props"},"Props"),(0,o.kt)("h2",{id:"buttonprops"},(0,o.kt)("inlineCode",{parentName:"h2"},"buttonProps")),(0,o.kt)("p",null,"Props to be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," element. The following props are not supported: ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-disabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". Since we use that to control the disabled state of the button, we don't support it."),(0,o.kt)("p",null,"But in addition to this we offer a ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," prop to control the loading state of the button a.k.a disabling the button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  const onClick = () => {\n    // do something\n  };\n\n  return (\n    <PaymentForm>\n      <GiftCard\n        buttonProps={{\n          isLoading: true,\n          onClick: onClick,\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"callbacks"},(0,o.kt)("inlineCode",{parentName:"h2"},"callbacks")),(0,o.kt)("p",null,"Adds an event listener to the GiftCard instance. You can see ",(0,o.kt)("a",{parentName:"p",href:"/docs/gift-card/callbacks"},(0,o.kt)("strong",{parentName:"a"},"this page"))," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <GiftCard\n        callbacks={{\n          cardBrandChanged(event) {\n            console.info(event);\n          },\n          focusClassAdded(event) {\n            console.info(event);\n          },\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"children"},(0,o.kt)("inlineCode",{parentName:"h2"},"children")),(0,o.kt)("p",null,"Make it possible to put any component inside. If children is/are given then ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," is not applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <GiftCard>Pay $10 with Gift Card</GiftCard>\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"focus"},(0,o.kt)("inlineCode",{parentName:"h2"},"focus")),(0,o.kt)("p",null,"Sets the DOM focus of one of the input fields within the GiftCard form."),(0,o.kt)("p",null,"The only supported value is ",(0,o.kt)("inlineCode",{parentName:"p"},"cardNumber"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <GiftCard focus=\"cardNumber\" />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"includeinputlabels"},(0,o.kt)("inlineCode",{parentName:"h2"},"includeInputLabels")),(0,o.kt)("p",null,"Render card form with input labels adjacent to corresponding input field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <GiftCard includeInputLabels />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)(s.Z,{mdxType:"PaymentForm"},(0,o.kt)(i.Z,{id:"rswps-gift-card-card-include-input-labels",includeInputLabels:!0,mdxType:"GiftCard"})),(0,o.kt)("h2",{id:"render"},(0,o.kt)("inlineCode",{parentName:"h2"},"render()")),(0,o.kt)("p",null,"Make it possible to put any component inside. If render is/are given then ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonProps")," is not applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      {/* Render your own component using our component as a Prop */}\n      <GiftCard render={({ Button }) => <Button>Pay $10</Button>} />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h2"},"style")),(0,o.kt)("p",null,"A map of .css classes and values that customize the style of the input fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { GiftCard, PaymentForm } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <GiftCard\n        style={{\n          input: {\n            fontSize: '14px',\n          },\n          'input::placeholder': {\n            color: '#771520',\n          },\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")))}k.isMDXComponent=!0},1532:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(3200),o=n(9227),i=n(8152);const s=(0,i.F)({"0%, 100%":{opacity:1},"50%":{opacity:.5}}),d=(0,i.z)("div",{animation:`${s()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,background:"#F3F4F6",borderRadius:6,height:50,marginBottom:39,position:"relative"}),l=(0,i.z)("button",{backgroundColor:"#006aff",borderRadius:5,boxShadow:1,color:"#fff",cursor:"pointer",borderStyle:"none",fontSize:16,fontWeight:500,lineHeight:"24px",outline:"none",padding:12,userSelect:"none",width:"100%","&:active":{backgroundColor:"rgb(0, 85, 204)"},"&:disabled":{backgroundColor:"rgba(0, 0, 0, 0.05)",color:"rgba(0, 0, 0, 0.3)",cursor:"not-allowed"}});function p({buttonProps:e={id:"rswps-gift-card-button"},callbacks:t,children:n,focus:i,id:s="rswps-gift-card-container",includeInputLabels:p,render:c,style:u,...m}){const[f,k]=a.useState((()=>{})),[b,y]=a.useState(!1),{cardTokenizeResponseReceived:g,payments:h}=(0,r.cI)(),C=a.useRef(null),w=a.useMemo((()=>{const e={includeInputLabels:p,style:u};return Object.keys(e).reduce(((t,n)=>(void 0!==e[n]&&(t[n]=e[n]),t)),{})}),[p,u]);if(a.useEffect((()=>{const e=new AbortController,{signal:t}=e;return(async e=>{const t=await(h?.giftCard(w).then((t=>e.aborted?null:(k(t),t))));await(t?.attach(`#${s}`)),i&&await(t?.focus(i)),e.aborted&&await(t?.destroy())})(t),()=>{e.abort()}}),[h,s]),t)for(const a of Object.keys(t))f?.addEventListener(a,t[a]);(0,o.O)({listener:async e=>{if(e.stopPropagation(),f){y(!0);try{const e=await(f?.tokenize());if("OK"===e.status)return g(e);let t=`Tokenization failed with status: ${e.status}`;if(e?.errors)throw t+=` and errors: ${JSON.stringify(e?.errors)}`,new Error(t);console.warn(t)}catch(t){console.error(t)}finally{y(!1)}}else console.warn("Gift Card button was clicked, but no Gift Card instance was found.")},type:"click",element:C,options:{passive:!0}});const P=({isLoading:e,...t})=>{const n=e||!f||b;return a.createElement(l,{...t,"aria-disabled":n,css:t?.css,disabled:n,id:"rswp-gift-card-button",ref:C,type:"button"},t?.children??"Pay with Gift Card")};return a.createElement(a.Fragment,null,a.createElement("div",{...m,"data-testid":"rswps-gift-card-container",id:s,style:{minHeight:89}},!f&&a.createElement(d,null)),"function"==typeof c?c(P):a.createElement(P,{...e},n??"Pay with Gift Card"))}}}]);