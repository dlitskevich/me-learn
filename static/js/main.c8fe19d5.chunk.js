(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[24],{32:function(e,n,t){},33:function(e,n,t){},34:function(e,n,t){var s={"./courses":[38,0],"./courses.json":[38,0],"./enVerb":[39,1],"./enVerb.json":[39,1],"./enVerb_old":[40,3],"./enVerb_old.json":[40,3],"./english/basic-phrases":[59,4],"./english/basic-phrases.json":[59,4],"./english/basic-phrases/_info":[29,2],"./english/basic-phrases/_info.json":[29,2],"./english/basic-phrases/accommodations":[41,5],"./english/basic-phrases/accommodations.json":[41,5],"./english/basic-phrases/common-expressions":[42,6],"./english/basic-phrases/common-expressions.json":[42,6],"./english/basic-phrases/communication-difficulties":[43,7],"./english/basic-phrases/communication-difficulties.json":[43,7],"./english/basic-phrases/dining":[44,8],"./english/basic-phrases/dining.json":[44,8],"./english/basic-phrases/emergency-and-health":[45,9],"./english/basic-phrases/emergency-and-health.json":[45,9],"./english/basic-phrases/entertainment":[46,10],"./english/basic-phrases/entertainment.json":[46,10],"./english/basic-phrases/general-questions":[47,11],"./english/basic-phrases/general-questions.json":[47,11],"./english/basic-phrases/greetings":[48,12],"./english/basic-phrases/greetings.json":[48,12],"./english/basic-phrases/location":[49,13],"./english/basic-phrases/location.json":[49,13],"./english/basic-phrases/making-friends":[50,14],"./english/basic-phrases/making-friends.json":[50,14],"./english/basic-phrases/miscellaneous":[51,15],"./english/basic-phrases/miscellaneous.json":[51,15],"./english/basic-phrases/numbers-and-money":[52,16],"./english/basic-phrases/numbers-and-money.json":[52,16],"./english/basic-phrases/phone-internet-mail":[53,17],"./english/basic-phrases/phone-internet-mail.json":[53,17],"./english/basic-phrases/shopping":[54,18],"./english/basic-phrases/shopping.json":[54,18],"./english/basic-phrases/time-and-dates":[55,19],"./english/basic-phrases/time-and-dates.json":[55,19],"./english/basic-phrases/travel-and-directions":[56,20],"./english/basic-phrases/travel-and-directions.json":[56,20],"./english/basic-phrases/weather":[57,21],"./english/basic-phrases/weather.json":[57,21],"./english/basic-phrases/work":[58,22],"./english/basic-phrases/work.json":[58,22],"./phrases":[60,23],"./phrases.json":[60,23]};function a(e){if(!t.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],a=n[0];return t.e(n[1]).then((function(){return t.t(a,3)}))}a.keys=function(){return Object.keys(s)},a.id=34,e.exports=a},65:function(e,n,t){},66:function(e,n,t){},77:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){var s={"./english/basic-phrases/_info":[29,2]};function a(e){if(!t.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],a=n[0];return t.e(n[1]).then((function(){return t.t(a,3)}))}a.keys=function(){return Object.keys(s)},a.id=79,e.exports=a},80:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var s=t(3),a=t.n(s),c=t(35),r=t.n(c),o=(t(65),t(21)),i=t(37),l=t(12),u=t(9),h=(t(66),t(17));h.a.initializeApp({apiKey:"AIzaSyB22adg1luT9scUmBwhXUIoPTNGfHWJHiM",authDomain:"me-learn.firebaseapp.com",projectId:"me-learn",storageBucket:"me-learn.appspot.com",messagingSenderId:"589740604171",appId:"1:589740604171:web:574f45f58cebe24665800e",measurementId:"G-0F52F4H0B0"});var d=t(13),b=function(){var e=Object(s.useState)(),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(s.useEffect)((function(){return h.a.auth().onAuthStateChanged(a)}),[]),t},j=t(2),g=function(){var e=b();return void 0===e?null:e?Object(j.jsx)("button",{type:"button",className:"btn btn-outline-danger my-2 my-sm-0",onClick:function(){h.a.auth().signOut()},children:"Log out"}):Object(j.jsx)("button",{type:"button",className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){h.a.auth().signInWithPopup(new h.a.auth.GoogleAuthProvider)},children:"Log in"})},f=function(){return Object(j.jsx)("nav",{className:"navbar nav-pills sticky-top",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsxs)("ul",{className:"nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/learn",className:"nav-link",activeClassName:"active",children:"Learn"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/courses",className:"nav-link",activeClassName:"active",children:"Courses"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(l.b,{to:"/train",className:"nav-link",activeClassName:"active",children:"Train"})})]}),Object(j.jsx)("ul",{className:"nav navbar-right",children:Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(g,{})})})]})})},m=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Home"}),Object(j.jsx)("p",{children:"Home page body content"})]})},p=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"Error: Page does not exist!"})})},O=(t(32),function(e){var n=e.text,t=e.children;return Object(j.jsx)("div",{role:"tooltip",className:"speakWord",onClick:function(){return function(e){var n=window.speechSynthesis,t=new SpeechSynthesisUtterance(e);n.speak(t)}(n)},children:t})}),v=t(23),x=(t(77),function(e){var n=e.word,t=e.content,a=e.value,c=e.keyValue,r=e.onClick;return console.log(c),function(e,n){var t=function(t){t.key===e&&n()};Object(s.useEffect)((function(){return window.addEventListener("keyup",t),function(){return window.removeEventListener("keyup",t)}}),[])}("".concat(c),(function(){N(n,a),r()})),Object(j.jsx)("button",{type:"button",className:"btn btn-lg btn-outline-primary",onClick:function(){N(n,a),r()},children:Object(j.jsxs)("div",{className:"container d-flex p-0",children:[Object(j.jsx)("span",{className:"keyValue",children:c}),Object(j.jsx)("span",{children:t})]})})}),N=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",s=localStorage.getItem("".concat(t,"_words"));if(s){var a=JSON.parse(s);a[e]=n,localStorage.setItem("".concat(t,"_words"),JSON.stringify(a))}else localStorage.setItem("".concat(t,"_words"),JSON.stringify(Object(v.a)({},e,n)))},y=function(e){var n=e.word,t=e.refresh;return Object(j.jsxs)("div",{className:"container",style:{maxWidth:"768px"},children:[Object(j.jsx)("h1",{children:Object(j.jsx)(O,{text:n,children:Object(j.jsx)("span",{children:n})})}),Object(j.jsx)("div",{className:" mt-3 d-flex justify-content-between",children:S.map((function(e){return Object(j.jsx)(x,{keyValue:e.key,onClick:t,word:n,content:e.content,value:e.value},"".concat(n).concat(e.value))}))})]})},S=[{content:"Surely, know",value:100,key:1},{content:"Hesitate",value:50,key:2},{content:"Don't know",value:1,key:3}],k=function(){var e=Object(s.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(j.jsx)(y,{word:I(),refresh:function(){a(!t)}})},w=JSON.parse(localStorage.getItem("verbs")||"{}"),I=function(){return console.log(Object.keys(w.data)[2]),Object.keys(w.data)[Math.floor(100*Math.random())]};function _(e){var n=Object(s.useState)(),t=Object(d.a)(n,2),a=t[0],c=t[1],r=Object(s.useState)(),o=Object(d.a)(r,2),i=o[0],l=o[1],u=Object(s.useState)(),h=Object(d.a)(u,2),b=h[0],j=h[1];Object(s.useEffect)((function(){return g()}),[]);var g=function(){a||(c(!0),e().then((function(e){return j(e)})).catch((function(e){return l(e)})).finally((function(){return c(!1)})))};return{data:b,error:i,isLoading:a,reload:g}}var C=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{red:245,green:245,blue:245},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{red:0,green:110,blue:0},s=J(e,n,t);return"rgb(".concat(s.red,",").concat(s.green,",").concat(s.blue,")")},J=function(e,n,t){var s=L(n,t);return P(n,E(e,s))},L=function(e,n){return P(n,E(-1,e))},P=function(e,n){return{red:n.red+e.red,green:n.green+e.green,blue:n.blue+e.blue}},E=function(e,n){return{red:e*n.red,green:e*n.green,blue:e*n.blue}},M=function(e){var n=e.title,t=e.filename,s=e.total,a=e.progress,c=Object(u.g)().url;return Object(j.jsxs)(l.b,{to:"".concat(c,"/").concat(t),className:"unit-info container d-flex align-text-bottom",style:{borderColor:C((a||0)/s)},children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("span",{className:"ms-auto ",children:"".concat(a,"/").concat(s)})]})};M.defaultProps={progress:0};var U=function(e){var n=e.get,t=e.renderItem,s=_(n),a=s.isLoading,c=s.error,r=s.data;return c?Object(j.jsx)("div",{children:c.message}):a?Object(j.jsx)("div",{className:"loading",children:"loading"}):void 0===a?null:(null===r||void 0===r?void 0:r.length)?Object(j.jsx)(j.Fragment,{children:r.map((function(e,n){return t(e,n)}))}):Object(j.jsx)("div",{className:"",children:"No Data"})},T=function(e){var n=e.title,t=e.filename,s=e.language,a=e.total,c=e.progress;return Object(j.jsxs)(l.b,{to:"courses/".concat(s,"/").concat(t),className:"course-info container d-flex align-text-bottom ",style:{borderColor:C((c||0)/a)},children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("span",{className:"ms-auto",children:"".concat(c,"/").concat(a)})]})};T.defaultProps={progress:0};t(33);var F=function(e){var n=e.language,t=e.data;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:n.charAt(0).toUpperCase()+n.substring(1)}),Object(j.jsx)("div",{children:t.map((function(e,t){return Object(j.jsx)(T,{id:e.id,language:n,title:e.title,filename:e.filename,total:e.total,progress:e.progress},"info_".concat(n+t))}))})]})},D=function(){return Object(j.jsx)(U,{get:H,renderItem:A})},A=function(e){return Object(j.jsx)(F,{language:e.language,data:e.data},"lang_courses_".concat(e.language))},H=function(){var e="info_language";return localStorage.getItem(e)?Promise.resolve(JSON.parse(localStorage.getItem(e)||"[]")):t.e(0).then(t.t.bind(null,38,3)).then((function(n){return localStorage.setItem(e,JSON.stringify(n.default)),n.default}))},V=(t(78),function(){var e=Object(u.f)(),n=e.courseName,t=e.language;return Object(j.jsxs)("div",{className:"container pb-1",children:[Object(j.jsx)("h1",{children:n.charAt(0).toUpperCase()+n.substring(1).replace(/-/g," ")}),Object(j.jsx)("div",{className:"unit-info-container",children:Object(j.jsx)(U,{get:function(){return q(t,n)},renderItem:B})})]})}),B=function(e){return Object(j.jsx)(M,{title:e.title,filename:e.filename,total:e.total,progress:e.progress||0},"lang_courses_".concat(e.title))},q=function(e,n){var s="info_".concat(e,"_").concat(n);return localStorage.getItem(s)?Promise.resolve(JSON.parse(localStorage.getItem(s)||"[]")):t(79)("./".concat(e,"/").concat(n,"/_info")).then((function(e){return localStorage.setItem(s,JSON.stringify(e.default)),e.default}))},W=function(e,n,t){var s="info_".concat(e,"_").concat(n);return q(e,n).then((function(e){var n=e.find((function(e){return e.filename===t}));n&&(n.progress=n.progress?n.progress+1:1,localStorage.setItem(s,JSON.stringify(e)))})).then((function(){return function(e,n){return H().then((function(t){var s=t.find((function(n){return n.language===e}));if(s){var a=s.data.find((function(e){return e.filename===n}));a&&(a.progress=a.progress?a.progress+1:1,localStorage.setItem("info_language",JSON.stringify(t)))}}))}(e,n)}))},R=new webkitSpeechRecognition||new SpeechRecognition;R.continuous=!1,R.lang="en-US",R.interimResults=!0,R.maxAlternatives=1;var G=function(e){var n=e.isLoading,t=e.success,s=e.start,a=e.stop;return n?Object(j.jsx)("button",{type:"button",className:"btn btn-danger",onClick:a,children:"Stop recording"}):void 0===t?Object(j.jsx)("button",{type:"button",className:"btn btn-primary",onClick:s,children:"Start recording"}):Object(j.jsx)("button",{type:"button",className:t?"btn btn-primary":"btn btn-danger",onClick:s,children:"Try again"})},z=function(e){var n=e.isLoading,t=e.success,s=e.start,a=e.stop,c=e.next;return n||!t?Object(j.jsx)(G,{isLoading:n,start:s,stop:a,success:t}):Object(j.jsx)("button",{type:"button",className:"btn btn-success",onClick:c,children:"Next"})},K=function(e){var n=e.phrase,t=e.recieved,a=e.onSuccess,c=n.split(" "),r=t?t.split(" "):[];return Object(s.useEffect)((function(){r.length&&a(Q(c,r))})),Object(j.jsx)("div",{className:"container d-flex flex-wrap",children:c.map((function(e,n){return Object(j.jsx)(O,{text:e,children:Object(j.jsx)("span",{style:{color:X(e,n,r)},children:"".concat(e)})},e)}))})},X=function(e,n,t){return n<t.length?Y(e,t[n])?"green":"red":"black"},Q=function(e,n){return!(e.length>n.length)&&e.reduce((function(e,t,s){return e+(Y(t,n[s])?1:0)}),0)/e.length>.7},Y=function(e,n){return Z(e)===Z(n)},Z=function(e){return e.toLowerCase().replace(/[.,!?()]/g,"")},$=(t(80),function(e){var n=e.isLoading,t=e.success,s=e.start,a=e.next;return n?null:!n&&t?Object(j.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:s,children:"Try again"}):Object(j.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:a,children:"Skip"})}),ee=function(e){var n=e.phrase,t=e.refresh,a=e.onSuccess,c=Object(s.useState)(),r=Object(d.a)(c,2),o=r[0],i=r[1],l=function(){var e=Object(s.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1],c=Object(s.useState)(""),r=Object(d.a)(c,2),o=r[0],i=r[1],l=Object(s.useState)(),u=Object(d.a)(l,2),h=u[0],b=u[1],j=function(){t&&(R.stop(),a(!1))},g=function(){j(),i(""),b(void 0)};return{text:o,error:h,isLoading:t,start:function(){if(R||b(new Error("Not supported")),o&&g(),R.onresult=function(e){i(e.results[0][0].transcript)},R.onend=function(){console.log("disconnected"),a(!1)},R.onerror=function(e){b(new Error(e.message)),a(!1)},!t)try{a(!0),R.start()}catch(e){console.log(e)}},stop:j,reset:g}}(),u=l.text,h=l.isLoading,b=l.start,g=l.stop,f=l.reset,m=function(){h||a(!!o).then((function(){f(),t(),i(void 0)}))};return Object(j.jsxs)("div",{className:"container",style:{maxWidth:"768px"},children:[Object(j.jsx)("h1",{children:Object(j.jsx)(K,{phrase:n,recieved:u,onSuccess:function(e){i(e)}})}),Object(j.jsx)("p",{children:u}),Object(j.jsxs)("div",{id:"control-panel",children:[Object(j.jsx)("div",{className:"mb-2 d-flex justify-content-center",children:Object(j.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){h||a(!0).then((function(){f(),t(),i(void 0)}))},children:"Test Skip"})}),Object(j.jsx)("div",{className:"mb-2 d-flex justify-content-center",children:Object(j.jsx)($,{isLoading:h,start:b,next:m,success:o})}),Object(j.jsx)("div",{className:"btn-main-container btn-block mb-2",children:Object(j.jsx)(z,{isLoading:h,start:b,stop:g,next:m,success:o})})]})]})},ne=function(){var e=Object(u.f)(),n=e.language,t=e.courseName,s=e.unit,a=_((function(){return te({language:n,courseName:t,unit:s})})),c=a.data,r=a.reload;return c?Object(j.jsx)(ee,{phrase:c.phrase,refresh:r,onSuccess:function(e){return ae({success:e,phrase:c.phrase,language:n,courseName:t,unit:s})}}):Object(j.jsx)("span",{children:"No data"})},te=function(e){var n=e.language,t=e.courseName,s=e.unit;return se({language:n,courseName:t,unit:s}).then((function(e){return e.find((function(e){return!e.progress}))}))},se=function(e){var n=e.language,s=e.courseName,a=e.unit,c="".concat(n,"_").concat(s,"_").concat(a);return localStorage.getItem(c)?Promise.resolve(JSON.parse(localStorage.getItem(c)||"[]")):t(34)("./".concat(n,"/").concat(s,"/").concat(a)).then((function(e){return localStorage.setItem(c,JSON.stringify(e.default)),e.default}))},ae=function(e){var n=e.phrase,t=e.language,s=e.courseName,a=e.unit;if(!e.success)return Promise.resolve();var c="".concat(t,"_").concat(s,"_").concat(a);return se({language:t,courseName:s,unit:a}).then((function(e){var t=e.findIndex((function(e){return e.phrase===n})),s=e;s[t].progress=100,localStorage.setItem(c,JSON.stringify(s.sort((function(e,n){return e.progress-n.progress}))))})).then((function(){return W(t,s,a)}))},ce=function(e){var n=e.phrase,t=e.progress;return Object(j.jsxs)("div",{className:"phrase-info container d-flex align-text-bottom",children:[Object(j.jsx)("span",{children:n}),Object(j.jsx)("span",{className:"ms-auto ",children:"".concat(t||0," %")})]})};ce.defaultProps={progress:0};t(81);var re=function(){var e=Object(u.f)(),n=e.language,t=e.courseName,s=e.unit;return Object(j.jsxs)("div",{className:"container pb-1",children:[Object(j.jsx)("h1",{children:s.charAt(0).toUpperCase()+s.substring(1).replace(/-/g," ")}),Object(j.jsx)(l.b,{to:"/train/".concat(n,"/").concat(t,"/").concat(s),children:Object(j.jsx)("h2",{children:"Train Speech"})}),Object(j.jsx)("div",{className:"phrase-info-container",children:Object(j.jsx)(U,{get:function(){return ie(n,t,s)},renderItem:oe})})]})},oe=function(e,n){return Object(j.jsx)(ce,{phrase:e.phrase,progress:e.progress?e.progress:0},"lang_courses_".concat(n))},ie=function(e,n,s){var a="".concat(e,"_").concat(n,"_").concat(s);return localStorage.getItem(a)?Promise.resolve(JSON.parse(localStorage.getItem(a)||"[]")):t(34)("./".concat(e,"/").concat(n,"/").concat(s)).then((function(e){return console.log(e),localStorage.setItem(a,JSON.stringify(e.default)),e.default}))},le=["I","you","they"],ue=["he","she","it","Danila"],he=[{name:"pr-s",modal:"do",modal3:"does"},{name:"past-s",modal:"did"}],de=["it","him","her","them"],be=function(){return{third:Math.random()<.5,question:Math.random()>.6,negative:Math.random()>.3,time:me(he)}},je=function(e,n){var t="",s=n.third?ue:le,a=me(s),c=me(de);return(t=n.question?"".concat(fe(n,!0)," ").concat(a," ").concat(ge(e)," ").concat(c,"?"):n.negative?"".concat(a," ").concat(fe(n,!0)).concat(Math.random()<.7?"n't":" not"," ").concat(ge(e)," ").concat(c,"."):"".concat(a," ").concat(ge(e,n.third)," ").concat(c,"."))[0].toUpperCase()+t.substr(1)},ge=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n&&e["3rd"]?e["3rd"]:e.verb},fe=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.time.modalRequired||n?e.third&&e.time.modal3?e.time.modal3:e.time.modal:""},me=function(e){return e[Math.floor(Math.random()*e.length)]},pe=function(){var e=_(Oe),n=e.data,t=e.reload;return console.log(n),n?Object(j.jsx)(ee,{phrase:n,refresh:t,onSuccess:function(){return Promise.resolve()}}):Object(j.jsx)("span",{children:"No data"})},Oe=function(){return ve().then((function(e){return console.log(e),je(e,be())}))},ve=function(){return xe().then((function(e){return e[Math.floor(Math.random()*e.length)]}))},xe=function(){var e="en_verbs";return localStorage.getItem(e)?Promise.resolve(JSON.parse(localStorage.getItem(e)||"[]")):t.e(1).then(t.t.bind(null,39,3)).then((function(n){var t=n.default.data;return localStorage.setItem(e,JSON.stringify(t)),t}))},Ne=["component"];var ye=function(){return Object(j.jsx)(l.a,{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{}),Object(j.jsx)("div",{className:"app container",children:Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/",component:m,exact:!0}),Object(j.jsx)(Se,{path:"/learn",component:k}),Object(j.jsx)(u.a,{path:"/courses",exact:!0,component:D}),Object(j.jsx)(u.a,{path:"/courses/:language/:courseName",exact:!0,component:V}),Object(j.jsx)(u.a,{path:"/courses/:language/:courseName/:unit",component:re}),Object(j.jsx)(u.a,{path:"/train/:language/:courseName/:unit",component:ne}),Object(j.jsx)(u.a,{path:"/train",component:pe}),Object(j.jsx)(u.a,{component:p})]})})]})})},Se=function(e){var n=e.component,t=Object(i.a)(e,Ne);return b()?Object(j.jsx)(u.a,Object(o.a)(Object(o.a)({},t),{},{component:n})):Object(j.jsx)(u.a,Object(o.a)(Object(o.a)({},t),{},{component:m}))},ke=function(e){e&&e instanceof Function&&t.e(27).then(t.bind(null,83)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,c=n.getLCP,r=n.getTTFB;t(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(ye,{})}),document.getElementById("root")),ke()}},[[82,25,26]]]);
//# sourceMappingURL=main.c8fe19d5.chunk.js.map