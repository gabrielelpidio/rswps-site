"use strict";(self.webpackChunk_weareseeed_react_square_payments_docs=self.webpackChunk_weareseeed_react_square_payments_docs||[]).push([[389],{3291:function(e,a,t){t.r(a),t.d(a,{assets:function(){return o},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return n},metadata:function(){return c},toc:function(){return u}});var s=t(7462),d=t(3366),r=(t(7294),t(4137)),l=["components"],n={id:"gift-card-callbacks",title:"GiftCard - Callbacks",slug:"/gift-card/callbacks",sidebar_label:"Callbacks",sidebar_position:3},i="Callbacks",c={unversionedId:"gift-card/gift-card-callbacks",id:"gift-card/gift-card-callbacks",title:"GiftCard - Callbacks",description:"Adds an event listener to the GiftCard instance. The output of the events will look something like this:",source:"@site/docs/gift-card/callbacks.md",sourceDirName:"gift-card",slug:"/gift-card/callbacks",permalink:"/docs/gift-card/callbacks",draft:!1,editUrl:"https://github.com/weareseeed/rswps-site/tree/main/docs/gift-card/callbacks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"gift-card-callbacks",title:"GiftCard - Callbacks",slug:"/gift-card/callbacks",sidebar_label:"Callbacks",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/docs/gift-card/props"},next:{title:"Advanced Usage",permalink:"/docs/gift-card/advanced-usage"}},o={},u=[{value:"<code>cardBrandChanged()</code>",id:"cardbrandchanged",level:2},{value:"<code>errorClassAdded()</code>",id:"errorclassadded",level:2},{value:"<code>errorClassRemoved()</code>",id:"errorclassremoved",level:2},{value:"<code>escape()</code>",id:"escape",level:2},{value:"<code>focusClassAdded()</code>",id:"focusclassadded",level:2},{value:"<code>focusClassRemoved()</code>",id:"focusclassremoved",level:2},{value:"<code>submit()</code>",id:"submit",level:2}],f={toc:u};function p(e){var a=e.components,t=(0,d.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},f,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"callbacks"},"Callbacks"),(0,r.kt)("p",null,"Adds an event listener to the GiftCard instance. The output of the events will look something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "cardBrand": "Visa",\n  "currentState": {\n    "hasErrorClass": false,\n    "hasFocusClass": true,\n    "isCompletelyValid": true,\n    "isEmpty": false,\n    "isPotentiallyValid": true\n  },\n  "eventType": "focusClassAdded",\n  "field": "cvv",\n  "previousState": {\n    "hasErrorClass": false,\n    "hasFocusClass": false,\n    "isCompletelyValid": true,\n    "isEmpty": true,\n    "isPotentiallyValid": false\n  }\n}\n')),(0,r.kt)("h2",{id:"cardbrandchanged"},(0,r.kt)("inlineCode",{parentName:"h2"},"cardBrandChanged()")),(0,r.kt)("p",null,"A new gift card brand was detected, based on the gift card number."),(0,r.kt)("h2",{id:"errorclassadded"},(0,r.kt)("inlineCode",{parentName:"h2"},"errorClassAdded()")),(0,r.kt)("p",null,"The gift card number field has an invalid value, and the corresponding error CSS class was added to the element."),(0,r.kt)("h2",{id:"errorclassremoved"},(0,r.kt)("inlineCode",{parentName:"h2"},"errorClassRemoved()")),(0,r.kt)("p",null,"An invalid value on the gift card number was corrected, and the corresponding error CSS class was removed from the element."),(0,r.kt)("h2",{id:"escape"},(0,r.kt)("inlineCode",{parentName:"h2"},"escape()")),(0,r.kt)("p",null,"The user pressed the ",(0,r.kt)("inlineCode",{parentName:"p"},"Escape")," key while editing the gift card number field."),(0,r.kt)("h2",{id:"focusclassadded"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusClassAdded()")),(0,r.kt)("p",null,"The gift card number field gained focus, and the corresponding focus CSS class was added to the element."),(0,r.kt)("h2",{id:"focusclassremoved"},(0,r.kt)("inlineCode",{parentName:"h2"},"focusClassRemoved()")),(0,r.kt)("p",null,"The gift card number field lost focus, and the corresponding focus CSS class was removed from the element."),(0,r.kt)("h2",{id:"submit"},(0,r.kt)("inlineCode",{parentName:"h2"},"submit()")),(0,r.kt)("p",null,"The user has triggered submission of the gift card by pressing ",(0,r.kt)("inlineCode",{parentName:"p"},"Enter")," while editing the gift card number field."))}p.isMDXComponent=!0}}]);