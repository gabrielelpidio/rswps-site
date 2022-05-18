"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[113],{4083:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(4137)),i=n(108),d=n(9477),l=["components"],s={id:"card-props",title:"CreditCard - Props",slug:"/card/props",sidebar_label:"Props",sidebar_position:2},p="Props",c={unversionedId:"card/card-props",id:"card/card-props",title:"CreditCard - Props",description:"buttonProps",source:"@site/docs/card/props.mdx",sourceDirName:"card",slug:"/card/props",permalink:"/docs/card/props",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/card/props.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"card-props",title:"CreditCard - Props",slug:"/card/props",sidebar_label:"Props",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/card/usage"},next:{title:"Callbacks",permalink:"/docs/card/callbacks"}},u={},m=[{value:"<code>buttonProps</code>",id:"buttonprops",level:2},{value:"<code>callbacks</code>",id:"callbacks",level:2},{value:"<code>children</code>",id:"children",level:2},{value:"<code>focus</code>",id:"focus",level:2},{value:"Example",id:"example",level:4},{value:"<code>includeInputLabels</code>",id:"includeinputlabels",level:2},{value:"Example",id:"example-1",level:4},{value:"<code>postalCode</code>",id:"postalcode",level:2},{value:"<code>recalculateSize()</code>",id:"recalculatesize",level:2},{value:"<code>render()</code>",id:"render",level:2},{value:"<code>style</code>",id:"style",level:2}],f={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"props"},"Props"),(0,o.kt)("h2",{id:"buttonprops"},(0,o.kt)("inlineCode",{parentName:"h2"},"buttonProps")),(0,o.kt)("p",null,"Props to be passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<button>")," element. The following props are not supported: ",(0,o.kt)("inlineCode",{parentName:"p"},"aria-disabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),". Since we use that to control the disabled state of the button, we don't support it."),(0,o.kt)("p",null,"But in addition to this we offer a ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading")," prop to control the loading state of the button a.k.a disabling the button."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  const onClick = () => {\n    // do something\n  };\n\n  return (\n    <PaymentForm>\n      <CreditCard\n        buttonProps={{\n          isLoading: true,\n          onClick: onClick,\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"callbacks"},(0,o.kt)("inlineCode",{parentName:"h2"},"callbacks")),(0,o.kt)("p",null,"Adds an event listener to the instance of the Card element. You can see ",(0,o.kt)("a",{parentName:"p",href:"/docs/card/callbacks"},(0,o.kt)("strong",{parentName:"a"},"this page"))," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard\n        callbacks={{\n          cardBrandChanged(event) {\n            console.info(event);\n          },\n          focusClassAdded(event) {\n            console.info(event);\n          },\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"children"},(0,o.kt)("inlineCode",{parentName:"h2"},"children")),(0,o.kt)("p",null,"Make it possible to put any component inside. If children is/are given then ",(0,o.kt)("inlineCode",{parentName:"p"},"render")," is not applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard>Pay $10</CreditCard>\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"focus"},(0,o.kt)("inlineCode",{parentName:"h2"},"focus")),(0,o.kt)("p",null,"Sets the DOM focus of one of the input fields within the credit card form. For more details about the available options, see ",(0,o.kt)("a",{parentName:"p",href:"https://developer.squareup.com/reference/sdks/web/payments/enums/CardFieldNames"},"CardFieldNames"),"."),(0,o.kt)("p",null,"Possible values are: ",(0,o.kt)("inlineCode",{parentName:"p"},"cardNumber"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"cvv"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"expirationDate")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"postalCode"),". By default the focus is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"cardNumber"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard focus=\"expirationDate\" />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h4",{id:"example"},"Example"),(0,o.kt)(d.Z,{mdxType:"PaymentForm"},(0,o.kt)(i.Z,{focus:"expirationDate",id:"rswps-credit-card-focus-expiration-date",mdxType:"CreditCard"})),(0,o.kt)("h2",{id:"includeinputlabels"},(0,o.kt)("inlineCode",{parentName:"h2"},"includeInputLabels")),(0,o.kt)("p",null,"Render card form with input labels adjacent to corresponding input field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard includeInputLabels />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h4",{id:"example-1"},"Example"),(0,o.kt)(d.Z,{mdxType:"PaymentForm"},(0,o.kt)(i.Z,{id:"rswps-credit-card-include-input-labels",includeInputLabels:!0,mdxType:"CreditCard"})),(0,o.kt)("h2",{id:"postalcode"},(0,o.kt)("inlineCode",{parentName:"h2"},"postalCode")),(0,o.kt)("p",null,"Sets an initial value of the postal code input field in the card form."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard postalCode=\"12345\" />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"recalculatesize"},(0,o.kt)("inlineCode",{parentName:"h2"},"recalculateSize()")),(0,o.kt)("p",null,"Recalculates the size of the card form."),(0,o.kt)("p",null,"The Card component normally automatically resizes based on the size of the buyer's browser, however if the Card component is contained with an element that has a computed style property of ",(0,o.kt)("inlineCode",{parentName:"p"},"display: none"),", then the Card component will no longer have a defined width and therefore will not properly resize between mobile and desktop configurations. Upon being displayed again, the Card component will not automatically update its size to match the browser window."),(0,o.kt)("p",null,"This method ",(0,o.kt)("inlineCode",{parentName:"p"},"recalculateSize()")," can be used to handle this edge case by forcing the Card component to recalculate its size and display appropriately for mobile or desktop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  // Will trigger recalculation of the Card component's size.\n  const myCustomCallback = () => {\n    // do something\n  };\n\n  return (\n    <PaymentForm>\n      <CreditCard recalculateSize={() => myCustomCallback()} />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"render"},(0,o.kt)("inlineCode",{parentName:"h2"},"render()")),(0,o.kt)("p",null,"Make it possible to put any component inside. If render is/are given then ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"buttonProps")," is not applied."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      {/* Render your own component using our component as a Prop */}\n      <CreditCard render={({ Button }) => <Button>Pay $10</Button>} />\n    </PaymentForm>\n  );\n}\n")),(0,o.kt)("h2",{id:"style"},(0,o.kt)("inlineCode",{parentName:"h2"},"style")),(0,o.kt)("p",null,"A map of .css classes and values that customize the style of the input fields"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { CreditCard } from 'react-square-web-payments-sdk';\n\nexport default function MyApp() {\n  return (\n    <PaymentForm>\n      <CreditCard\n        style={{\n          input: {\n            fontSize: '14px',\n          },\n          'input::placeholder': {\n            color: '#771520',\n          },\n        }}\n      />\n    </PaymentForm>\n  );\n}\n")))}k.isMDXComponent=!0},108:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r=n(3200),o=n(9227),i=n(8152);const d=(0,i.F)({"0%, 100%":{opacity:1},"50%":{opacity:.5}}),l=(0,i.z)("div",{animation:`${d()} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,background:"#F3F4F6",borderRadius:6,height:50,marginBottom:39,position:"relative"}),s=(0,i.z)("button",{backgroundColor:"#006aff",borderRadius:5,boxShadow:1,color:"#fff",cursor:"pointer",borderStyle:"none",fontSize:16,fontWeight:500,lineHeight:"24px",outline:"none",padding:12,userSelect:"none",width:"100%","&:active":{backgroundColor:"rgb(0, 85, 204)"},"&:disabled":{backgroundColor:"rgba(0, 0, 0, 0.05)",color:"rgba(0, 0, 0, 0.3)",cursor:"not-allowed"}});function p({buttonProps:e,callbacks:t,children:n,focus:i="cardNumber",id:d="rswps-card-container",includeInputLabels:p,postalCode:c,recalculateSize:u,render:m,style:f,...k}){const[C,b]=a.useState((()=>{})),[h,y]=a.useState(!1),g=a.useRef(null),{cardTokenizeResponseReceived:w,payments:v}=(0,r.cI)(),N=a.useMemo((()=>{const e={includeInputLabels:p,postalCode:c,style:f};return Object.keys(e).reduce(((t,n)=>(void 0!==e[n]&&(t[n]=e[n]),t)),{})}),[p,c,f]);if(a.useEffect((()=>{const e=new AbortController,{signal:t}=e;return(async e=>{const t=await(v?.card(N).then((t=>e.aborted?null:(b(t),t))));await(t?.attach(`#${d}`)),i&&await(t?.focus(i)),e.aborted&&await(t?.destroy())})(t),()=>{e.abort()}}),[v,d]),a.useEffect((()=>{C&&i&&C.focus(i)}),[C,i]),t)for(const a of Object.keys(t))C?.addEventListener(a,t[a]);u&&u(C?.recalculateSize),(0,o.O)({listener:async t=>{if(t.stopPropagation(),!e?.isLoading)if(C){y(!0);try{const e=await C.tokenize();if("OK"===e.status)return w(e);let t=`Tokenization failed with status: ${e.status}`;if(e?.errors)throw t+=` and errors: ${JSON.stringify(e?.errors)}`,new Error(t);console.warn(t)}catch(n){console.error(n)}finally{y(!1)}}else console.warn("Credit Card button was clicked, but no Credit Card instance was found.")},type:"click",element:g,options:{passive:!0}});const P=({children:e,isLoading:t,...n})=>{const r=t||!C||h;return a.createElement(s,{...n,"aria-disabled":r,css:n?.css,disabled:r,id:"rswp-card-button",ref:g,type:"button"},e??"Pay")};return a.createElement(a.Fragment,null,a.createElement("div",{...k,"data-testid":"rswps-card-container",id:d,style:{minHeight:89}},!C&&a.createElement(l,null)),"function"==typeof m?m(P):a.createElement(P,{...e},n??"Pay"))}}}]);