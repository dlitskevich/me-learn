(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[27],{38:function(e,n,t){},39:function(e,n,t){},40:function(e,n,t){var s={"./courses":[45,0],"./courses.json":[45,0],"./courses_old":[46,3],"./courses_old.json":[46,3],"./enVerb":[47,4],"./enVerb.json":[47,4],"./enVerb10":[48,5],"./enVerb10.json":[48,5],"./enVerb_old":[49,6],"./enVerb_old.json":[49,6],"./en_verb10_phrases":[50,1],"./en_verb10_phrases.json":[50,1],"./english/basic-phrases":[69,7],"./english/basic-phrases.json":[69,7],"./english/basic-phrases/_info":[35,2],"./english/basic-phrases/_info.json":[35,2],"./english/basic-phrases/accommodations":[51,8],"./english/basic-phrases/accommodations.json":[51,8],"./english/basic-phrases/common-expressions":[52,9],"./english/basic-phrases/common-expressions.json":[52,9],"./english/basic-phrases/communication-difficulties":[53,10],"./english/basic-phrases/communication-difficulties.json":[53,10],"./english/basic-phrases/dining":[54,11],"./english/basic-phrases/dining.json":[54,11],"./english/basic-phrases/emergency-and-health":[55,12],"./english/basic-phrases/emergency-and-health.json":[55,12],"./english/basic-phrases/entertainment":[56,13],"./english/basic-phrases/entertainment.json":[56,13],"./english/basic-phrases/general-questions":[57,14],"./english/basic-phrases/general-questions.json":[57,14],"./english/basic-phrases/greetings":[58,15],"./english/basic-phrases/greetings.json":[58,15],"./english/basic-phrases/location":[59,16],"./english/basic-phrases/location.json":[59,16],"./english/basic-phrases/making-friends":[60,17],"./english/basic-phrases/making-friends.json":[60,17],"./english/basic-phrases/miscellaneous":[61,18],"./english/basic-phrases/miscellaneous.json":[61,18],"./english/basic-phrases/numbers-and-money":[62,19],"./english/basic-phrases/numbers-and-money.json":[62,19],"./english/basic-phrases/phone-internet-mail":[63,20],"./english/basic-phrases/phone-internet-mail.json":[63,20],"./english/basic-phrases/shopping":[64,21],"./english/basic-phrases/shopping.json":[64,21],"./english/basic-phrases/time-and-dates":[65,22],"./english/basic-phrases/time-and-dates.json":[65,22],"./english/basic-phrases/travel-and-directions":[66,23],"./english/basic-phrases/travel-and-directions.json":[66,23],"./english/basic-phrases/weather":[67,24],"./english/basic-phrases/weather.json":[67,24],"./english/basic-phrases/work":[68,25],"./english/basic-phrases/work.json":[68,25],"./phrases":[70,26],"./phrases.json":[70,26]};function c(e){if(!t.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],c=n[0];return t.e(n[1]).then((function(){return t.t(c,3)}))}c.keys=function(){return Object.keys(s)},c.id=40,e.exports=c},75:function(e,n,t){},76:function(e,n,t){},87:function(e,n,t){},88:function(e,n,t){},89:function(e,n,t){var s={"./english/basic-phrases/_info":[35,2]};function c(e){if(!t.o(s,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=s[e],c=n[0];return t.e(n[1]).then((function(){return t.t(c,3)}))}c.keys=function(){return Object.keys(s)},c.id=89,e.exports=c},90:function(e,n,t){},91:function(e,n,t){},92:function(e,n,t){},93:function(e,n,t){"use strict";t.r(n);var s=t(3),c=t.n(s),r=t(41),a=t.n(r),o=(t(75),t(23),t(44),t(13)),i=t(10),u=(t(76),t(17));u.a.initializeApp({apiKey:"AIzaSyB22adg1luT9scUmBwhXUIoPTNGfHWJHiM",authDomain:"me-learn.firebaseapp.com",projectId:"me-learn",storageBucket:"me-learn.appspot.com",messagingSenderId:"589740604171",appId:"1:589740604171:web:574f45f58cebe24665800e",measurementId:"G-0F52F4H0B0"});var l=t(29);Math.randomElement=function(e){return e[Math.floor(Math.random()*e.length)]},Math.randomSample=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=b(e.length,n);return t.map((function(n){return e[n]}))};var d=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(e-n)+n)},b=function(e,n){if(e<n)throw new Error("randomInt: max : ".concat(e," < count :  ").concat(n));for(var t=Array.from({length:e},(function(e,n){return n})),s=[],c=0;c<n;c+=1){var r=d(t.length);s.push(t[r]),t.splice(r,1)}return s};Math.shuffle=function(e){for(var n=Object(l.a)(e),t=n.length-1;t>0;t-=1){var s=Math.floor(Math.random()*(t+1)),c=[n[s],n[t]];n[t]=c[0],n[s]=c[1]}return n};var j=t(8),h=function(){var e=Object(s.useState)(),n=Object(j.a)(e,2),t=n[0],c=n[1];return Object(s.useEffect)((function(){return u.a.auth().onAuthStateChanged(c)}),[]),t},f=t(2),g=function(){var e=h();return void 0===e?null:e?Object(f.jsx)("button",{type:"button",className:"btn btn-outline-danger my-2 my-sm-0",onClick:function(){u.a.auth().signOut()},children:"Log out"}):Object(f.jsx)("button",{type:"button",className:"btn btn-outline-success my-2 my-sm-0",onClick:function(){u.a.auth().signInWithPopup(new u.a.auth.GoogleAuthProvider)},children:"Log in"})},p=function(){return Object(f.jsx)("nav",{className:"navbar nav-pills sticky-top",children:Object(f.jsxs)("div",{className:"container-fluid",children:[Object(f.jsxs)("ul",{className:"nav",children:[Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(o.b,{exact:!0,to:"/",className:"nav-link",activeClassName:"active",children:"Home"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(o.b,{to:"/learn",className:"nav-link",activeClassName:"active",children:"Learn"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(o.b,{to:"/courses",className:"nav-link",activeClassName:"active",children:"Courses"})}),Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(o.b,{to:"/train",className:"nav-link",activeClassName:"active",children:"Train"})})]}),Object(f.jsx)("ul",{className:"nav navbar-right",children:Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)(g,{})})})]})})},m=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Home"}),Object(f.jsx)("p",{children:"The application is for training vocabulary and speach."})]})},O=function(){return Object(f.jsx)("div",{children:Object(f.jsx)("p",{children:"Error: Page does not exist!"})})},v=(t(38),function(e){var n=e.text,t=e.children;return Object(f.jsx)("div",{role:"tooltip",className:"speakWord",onClick:function(){return function(e){var n=window.speechSynthesis,t=new SpeechSynthesisUtterance(e);n.speak(t)}(n)},children:t})}),x=t(25),N=(t(87),function(e){var n=e.word,t=e.content,c=e.value,r=e.keyValue,a=e.onClick;return function(e,n){var t=function(t){t.key===e&&n()};Object(s.useEffect)((function(){return window.addEventListener("keyup",t),function(){return window.removeEventListener("keyup",t)}}),[])}("".concat(r),(function(){y(n,c),a()})),Object(f.jsx)("button",{type:"button",className:"btn btn-lg btn-outline-primary",onClick:function(){y(n,c),a()},children:Object(f.jsxs)("div",{className:"container d-flex p-0",children:[Object(f.jsx)("span",{className:"keyValue",children:r}),Object(f.jsx)("span",{children:t})]})})}),y=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",s=localStorage.getItem("".concat(t,"_words"));if(s){var c=JSON.parse(s);c[e]=n,localStorage.setItem("".concat(t,"_words"),JSON.stringify(c))}else localStorage.setItem("".concat(t,"_words"),JSON.stringify(Object(x.a)({},e,n)))},S=function(e){var n=e.word,t=e.refresh;return Object(f.jsxs)("div",{className:"container",style:{maxWidth:"768px"},children:[Object(f.jsx)("h1",{children:Object(f.jsx)(v,{text:n,children:Object(f.jsx)("span",{children:n})})}),Object(f.jsx)("div",{className:" mt-3 d-flex justify-content-between",children:k.map((function(e){return Object(f.jsx)(N,{keyValue:e.key,onClick:t,word:n,content:e.content,value:e.value},"".concat(n).concat(e.value))}))})]})},k=[{content:"Surely, know",value:100,key:1},{content:"Hesitate",value:50,key:2},{content:"Don't know",value:1,key:3}],w=function(){var e=Object(s.useState)(!1),n=Object(j.a)(e,2),t=n[0],c=n[1];return Object(f.jsx)(S,{word:C().verb,refresh:function(){c(!t)}})},_=JSON.parse(localStorage.getItem("en_verbs")||"[]"),C=function(){return _[Math.floor(_.length*Math.random())]};function I(e){var n=Object(s.useState)(),t=Object(j.a)(n,2),c=t[0],r=t[1],a=Object(s.useState)(),o=Object(j.a)(a,2),i=o[0],u=o[1],l=Object(s.useState)(),d=Object(j.a)(l,2),b=d[0],h=d[1];Object(s.useEffect)((function(){return f()}),[]);var f=function(){c||(r(!0),e().then((function(e){return h(e)})).catch((function(e){return u(e)})).finally((function(){return r(!1)})))};return{data:b,error:i,isLoading:c,reload:f}}var L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{red:245,green:245,blue:245},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{red:0,green:110,blue:0},s=E(e,n,t);return"rgb(".concat(s.red,",").concat(s.green,",").concat(s.blue,")")},E=function(e,n,t){var s=P(n,t);return J(n,M(e,s))},P=function(e,n){return J(n,M(-1,e))},J=function(e,n){return{red:n.red+e.red,green:n.green+e.green,blue:n.blue+e.blue}},M=function(e,n){return{red:e*n.red,green:e*n.green,blue:e*n.blue}},T=function(e){var n=e.title,t=e.filename,s=e.total,c=e.progress,r=Object(i.g)().url;return Object(f.jsxs)(o.b,{to:"".concat(r,"/").concat(t),className:"unit-info container d-flex align-text-bottom",style:{borderColor:L((c||0)/s)},children:[Object(f.jsx)("span",{children:n}),Object(f.jsx)("span",{className:"ms-auto ",children:"".concat(c,"/").concat(s)})]})};T.defaultProps={progress:0};var F=function(e){var n=e.get,t=e.renderItem,s=I(n),c=s.isLoading,r=s.error,a=s.data;return r?Object(f.jsx)("div",{children:r.message}):c?Object(f.jsx)("div",{className:"loading",children:"loading"}):void 0===c?null:(null===a||void 0===a?void 0:a.length)?Object(f.jsx)(f.Fragment,{children:a.map((function(e,n){return t(e,n)}))}):Object(f.jsx)("div",{className:"",children:"No Data"})},A=function(e){var n=e.title,t=e.filename,s=e.language,c=e.total,r=e.progress;return Object(f.jsxs)(o.b,{to:"courses/".concat(s,"/").concat(t),className:"course-info container d-flex align-text-bottom ",style:{borderColor:L((r||0)/c)},children:[Object(f.jsx)("span",{children:n}),Object(f.jsx)("span",{className:"ms-auto",children:"".concat(r,"/").concat(c)})]})};A.defaultProps={progress:0};t(39);var U=function(e){var n=e.language,t=e.data;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:n.charAt(0).toUpperCase()+n.substring(1)}),Object(f.jsx)("div",{children:t.map((function(e,t){return Object(f.jsx)(A,{id:e.id,language:n,title:e.title,filename:e.filename,total:e.total,progress:e.progress},"info_".concat(n+t))}))})]})},R=function(){return Object(f.jsx)(F,{get:V,renderItem:B})},B=function(e){return Object(f.jsx)(U,{language:e.language,data:e.data},"lang_courses_".concat(e.language))},V=function(){var e="info_language";return localStorage.getItem(e)?Promise.resolve(JSON.parse(localStorage.getItem(e)||"[]")):t.e(0).then(t.t.bind(null,45,3)).then((function(n){return localStorage.setItem(e,JSON.stringify(n.default)),n.default}))},D=(t(88),function(){var e=Object(i.f)(),n=e.courseName,t=e.language;return Object(f.jsxs)("div",{className:"container pb-1",children:[Object(f.jsx)("h1",{children:n.charAt(0).toUpperCase()+n.substring(1).replace(/-/g," ")}),Object(f.jsx)("div",{className:"unit-info-container",children:Object(f.jsx)(F,{get:function(){return H(t,n)},renderItem:W})})]})}),W=function(e){return Object(f.jsx)(T,{title:e.title,filename:e.filename,total:e.total,progress:e.progress||0},"lang_courses_".concat(e.title))},H=function(e,n){var s="info_".concat(e,"_").concat(n);return localStorage.getItem(s)?Promise.resolve(JSON.parse(localStorage.getItem(s)||"[]")):t(89)("./".concat(e,"/").concat(n,"/_info")).then((function(e){return localStorage.setItem(s,JSON.stringify(e.default)),e.default}))},G=function(e,n,t){var s="info_".concat(e,"_").concat(n);return H(e,n).then((function(e){var n=e.find((function(e){return e.filename===t}));n&&(n.progress=n.progress?n.progress+1:1,localStorage.setItem(s,JSON.stringify(e)))})).then((function(){return function(e,n){return V().then((function(t){var s=t.find((function(n){return n.language===e}));if(s){var c=s.data.find((function(e){return e.filename===n}));c&&(c.progress=c.progress?c.progress+1:1,localStorage.setItem("info_language",JSON.stringify(t)))}}))}(e,n)}))},q=new webkitSpeechRecognition||new SpeechRecognition;q.continuous=!1,q.lang="en-US",q.interimResults=!0,q.maxAlternatives=1;var z=function(e){var n=e.isLoading,t=e.success,s=e.start,c=e.stop;return n?Object(f.jsx)("button",{type:"button",className:"btn btn-danger",onClick:c,children:"Stop recording"}):void 0===t?Object(f.jsx)("button",{type:"button",className:"btn btn-primary",onClick:s,children:"Start recording"}):Object(f.jsx)("button",{type:"button",className:t?"btn btn-primary":"btn btn-danger",onClick:s,children:"Try again"})},K=function(e){var n=e.isLoading,t=e.success,s=e.start,c=e.stop,r=e.next;return n||!t?Object(f.jsx)(z,{isLoading:n,start:s,stop:c,success:t}):Object(f.jsx)("button",{type:"button",className:"btn btn-success",onClick:r,children:"Next"})},X=function(e){var n=e.words,t=e.isRecognised;return Object(f.jsx)("div",{className:"container d-flex flex-wrap",children:n.map((function(e,n){return Object(f.jsx)(v,{text:e,children:Object(f.jsx)("span",{style:{color:Q(n,t)},children:"".concat(e)})},e)}))})},Q=function(e,n){var t=n(e);return void 0===t?"black":t?"green":"red"},Y=(t(90),function(e){var n=e.isLoading,t=e.success,s=e.start,c=e.next;return n?null:!n&&t?Object(f.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:s,children:"Try again"}):Object(f.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:c,children:"Skip"})}),Z=function(e,n,t){if(e<t.length)return!!ee(n[e],t[e])},$=function(e,n){if(n.length)return!(e.length>n.length)&&e.reduce((function(e,t,s){return e+(ee(t,n[s])?1:0)}),0)/e.length>.7},ee=function(e,n){return ne(e)===ne(n)},ne=function(e){return e.replace(/[.,!?()]/g,"")},te=[{from:"won't",to:"will not"},{from:"n't",to:" not"}],se=function(e){return te.reduce((function(e,n){return e.replaceAll("".concat(n.from),n.to)}),e.toLowerCase())},ce=function(e){var n=e.phrase,t=e.refresh,c=e.onSuccess,r=e.task,a=Object(s.useState)(),o=Object(j.a)(a,2),i=o[0],u=o[1],l=function(){var e=Object(s.useState)(!1),n=Object(j.a)(e,2),t=n[0],c=n[1],r=Object(s.useState)(""),a=Object(j.a)(r,2),o=a[0],i=a[1],u=Object(s.useState)(),l=Object(j.a)(u,2),d=l[0],b=l[1],h=function(){t&&(q.stop(),c(!1))},f=function(){h(),i(""),b(void 0)};return{text:o,error:d,isLoading:t,start:function(){if(q||b(new Error("Not supported")),o&&f(),q.onresult=function(e){i(e.results[0][0].transcript)},q.onend=function(){console.log("disconnected"),c(!1)},q.onerror=function(e){b(new Error(e.message)),c(!1)},!t)try{c(!0),q.start()}catch(e){console.log(e)}},stop:h,reset:f}}(),d=l.text,b=l.isLoading,h=l.start,g=l.stop,p=l.reset,m=function(e){var n=e.phrase,t=e.recieved,c=e.onSuccess,r=se(n).split(" "),a=t?se(t).split(" "):[];return Object(s.useEffect)((function(){c($(r,a))})),{words:r,recievedWords:a,isRecognised:function(e){return Z(e,r,a)}}}({phrase:n,recieved:d,onSuccess:function(e){u(e)}}),O=m.words,v=m.isRecognised,x=function(){b||c(!!i).then((function(){p(),t(),u(void 0)}))};return Object(f.jsxs)("div",{className:"container",style:{maxWidth:"768px"},children:[r?r({phrase:n,words:O,isRecognised:v}):Object(f.jsx)("h1",{children:Object(f.jsx)(X,{words:O,isRecognised:v})}),Object(f.jsx)("p",{children:d}),Object(f.jsxs)("div",{id:"control-panel",children:[Object(f.jsx)("div",{className:"mb-2 d-flex justify-content-center",children:Object(f.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){b||c(!0).then((function(){p(),t(),u(void 0)}))},children:"Test Skip"})}),Object(f.jsx)("div",{className:"mb-2 d-flex justify-content-center",children:Object(f.jsx)(Y,{isLoading:b,start:h,next:x,success:i})}),Object(f.jsx)("div",{className:"btn-main-container btn-block mb-2",children:Object(f.jsx)(K,{isLoading:b,start:h,stop:g,next:x,success:i})})]})]})};ce.defaultProps={task:function(e){var n=e.words,t=e.isRecognised;return Object(f.jsx)("h1",{children:Object(f.jsx)(X,{words:n,isRecognised:t})})}};var re=function(){var e=Object(i.f)(),n=e.language,t=e.courseName,s=e.unit,c=I((function(){return ae({language:n,courseName:t,unit:s})})),r=c.data,a=c.reload;return r?Object(f.jsx)(ce,{phrase:r.phrase,refresh:a,onSuccess:function(e){return ie({success:e,phrase:r.phrase,language:n,courseName:t,unit:s})}}):Object(f.jsx)("span",{children:"No data"})},ae=function(e){var n=e.language,t=e.courseName,s=e.unit;return oe({language:n,courseName:t,unit:s}).then((function(e){return e.find((function(e){return!e.progress}))}))},oe=function(e){var n=e.language,s=e.courseName,c=e.unit,r="".concat(n,"_").concat(s,"_").concat(c);return localStorage.getItem(r)?Promise.resolve(JSON.parse(localStorage.getItem(r)||"[]")):t(40)("./".concat(n,"/").concat(s,"/").concat(c)).then((function(e){return localStorage.setItem(r,JSON.stringify(e.default)),e.default}))},ie=function(e){var n=e.phrase,t=e.language,s=e.courseName,c=e.unit;if(!e.success)return Promise.resolve();var r="".concat(t,"_").concat(s,"_").concat(c);return oe({language:t,courseName:s,unit:c}).then((function(e){var t=e.findIndex((function(e){return e.phrase===n})),s=e;s[t].progress=100,localStorage.setItem(r,JSON.stringify(s.sort((function(e,n){return e.progress-n.progress}))))})).then((function(){return G(t,s,c)}))},ue=function(e){var n=e.phrase,t=e.progress;return Object(f.jsxs)("div",{className:"phrase-info container d-flex align-text-bottom",children:[Object(f.jsx)("span",{children:n}),Object(f.jsx)("span",{className:"ms-auto ",children:"".concat(t||0," %")})]})};ue.defaultProps={progress:0};t(91);var le=function(){var e=Object(i.f)(),n=e.language,t=e.courseName,s=e.unit;return Object(f.jsxs)("div",{className:"container pb-1",children:[Object(f.jsx)("h1",{children:s.charAt(0).toUpperCase()+s.substring(1).replace(/-/g," ")}),Object(f.jsx)(o.b,{to:"/train/".concat(n,"/").concat(t,"/").concat(s),children:Object(f.jsx)("h2",{children:"Train Speech"})}),Object(f.jsx)("div",{className:"phrase-info-container",children:Object(f.jsx)(F,{get:function(){return be(n,t,s)},renderItem:de})})]})},de=function(e,n){return Object(f.jsx)(ue,{phrase:e.phrase,progress:e.progress?e.progress:0},"lang_courses_".concat(n))},be=function(e,n,s){var c="".concat(e,"_").concat(n,"_").concat(s);return localStorage.getItem(c)?Promise.resolve(JSON.parse(localStorage.getItem(c)||"[]")):t(40)("./".concat(e,"/").concat(n,"/").concat(s)).then((function(e){return console.log(e),localStorage.setItem(c,JSON.stringify(e.default)),e.default}))},je=function(e){var n=e.types,t=e.setType;return Object(f.jsx)("nav",{className:"navbar nav-pills sticky-top",children:Object(f.jsx)("div",{className:"container-fluid",children:Object(f.jsx)("ul",{className:"nav",children:n.map((function(e){return Object(f.jsx)("li",{className:"nav-item",children:Object(f.jsx)("button",{type:"button",className:"nav-link",onClick:function(){return t(e)},children:e})},e)}))})})})},he=t(43),fe=(t(92),function(e,n){return e===n}),ge=function(e){var n=e.isLoading,t=e.success,s=e.next;return n?Object(f.jsx)("span",{children:"Is loading"}):void 0===t?Object(f.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:s,children:"Skip"}):t?Object(f.jsx)("button",{type:"button",className:"btn btn-success",onClick:s,children:"Next"}):Object(f.jsx)("button",{type:"button",className:"btn btn-primary",onClick:s,children:"Next"})},pe=function(e){var n=e.phrase,t=e.select,s=e.success,c=e.isSelected,r=e.isTarget;return Object(f.jsx)("button",{type:"button",className:"block btn ".concat(me(s,r,c)),onClick:function(){return t(n)},children:n})},me=function(e,n,t){return void 0===e?"btn-outline-secondary":n?"btn-success disabled":t?"disabled btn-danger ":"btn-outline-secondary disabled"},Oe=function(e){var n=e.target,t=e.phrases,s=e.isLoading,c=e.selected,r=e.setSelected,a=e.success;if(s)return null;var o=[];return t.forEach((function(e){o.push(Object(f.jsx)(pe,{phrase:e,isTarget:n===e,isSelected:c===e,select:r,success:a},e))})),Object(f.jsx)(f.Fragment,{children:o})};function ve(e){var n=Object(s.useState)(new Audio(e)),t=Object(j.a)(n,1)[0],c=Object(s.useState)(!1),r=Object(j.a)(c,2),a=r[0],o=r[1];return Object(s.useEffect)((function(){a?t.play():t.pause()}),[a]),Object(s.useEffect)((function(){return t.addEventListener("ended",(function(){return o(!1)})),function(){t.removeEventListener("ended",(function(){return o(!1)}))}}),[]),{play:function(){return o(!0)}}}var xe=t.p+"static/media/nice.662ebf33.m4a",Ne=t.p+"static/media/bruh.edf70c96.m4a",ye=function(e){var n=e.target,t=e.phrases,c=e.refresh,r=(e.onSuccess,e.task),a=Object(s.useState)(),o=Object(j.a)(a,2),i=o[0],u=o[1],l=function(e){var n=e.target,t=e.setSuccess,c=Object(s.useState)(""),r=Object(j.a)(c,2),a=r[0],o=r[1];return Object(s.useEffect)((function(){a&&t(fe(n,a))})),{selected:a,setSelected:o}}({target:n,setSuccess:u}),d=l.selected,b=l.setSelected,h=function(){var e=ve(xe),n=ve(Ne);return{play:function(t){void 0!==t&&(t?e.play():n.play())}}}();Object(s.useEffect)((function(){h.play(i)}),[d,i]);return Object(f.jsxs)("div",{className:"container",style:{maxWidth:"768px"},children:[Object(f.jsx)("h1",{children:r}),Object(f.jsxs)("div",{id:"control-panel",children:[Object(f.jsx)("div",{className:"mb-2 d-flex justify-content-center",children:Object(f.jsx)(ge,{isLoading:!1,next:function(){u(void 0),b(""),c()},success:i})}),Object(f.jsx)("div",{className:"btn-main-container btn-block mb-2",children:Object(f.jsx)(Oe,{target:n,phrases:t,isLoading:!1,selected:d,setSelected:b,success:i})})]})]})},Se=function(e){var n=e.data,t=e.type,c=Object(s.useState)(0),r=Object(j.a)(c,2),a=r[0],o=r[1],i=function(){return o(a+1)};if("Speech"===t){var u=we(n);return Object(f.jsx)(ce,{phrase:u.phrase,task:ke(u.ru),refresh:i,onSuccess:function(){return Promise.resolve()}})}if("FourBlocks"===t){var d=Math.randomSample(n,4),b=Object(he.a)(d),h=b[0],g=b.slice(1),p=Math.shuffle([h].concat(Object(l.a)(g)));return Object(f.jsx)(ye,{target:h.phrase,task:h.ru,phrases:p.map((function(e){return e.phrase})),refresh:i,onSuccess:function(){return Promise.resolve()}})}return Object(f.jsx)("span",{children:"Not selected type"})},ke=function(e){return function(){return Object(f.jsx)("h1",{children:e})}},we=function(e){return Math.randomElement(e)},_e=["Speech","FourBlocks"],Ce=function(){var e=I(Ie),n=e.data,t=e.isLoading,c=Object(s.useState)("FourBlocks"),r=Object(j.a)(c,2),a=r[0],o=r[1];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(je,{types:_e,setType:o}),n&&a&&!t?Object(f.jsx)(Se,{data:n,type:a}):Object(f.jsx)("span",{children:"No data"})]})},Ie=function(){return t.e(1).then(t.t.bind(null,50,3)).then((function(e){return e.default}))};var Le=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(p,{}),Object(f.jsx)("div",{className:"app container",children:Object(f.jsxs)(i.c,{children:[Object(f.jsx)(i.a,{path:"/",component:m,exact:!0}),Object(f.jsx)(i.a,{path:"/learn",component:w}),Object(f.jsx)(i.a,{path:"/courses",exact:!0,component:R}),Object(f.jsx)(i.a,{path:"/courses/:language/:courseName",exact:!0,component:D}),Object(f.jsx)(i.a,{path:"/courses/:language/:courseName/:unit",component:le}),Object(f.jsx)(i.a,{path:"/train/:language/:courseName/:unit",component:re}),Object(f.jsx)(i.a,{path:"/train",component:Ce}),Object(f.jsx)(i.a,{component:O})]})})]})})},Ee=function(e){e&&e instanceof Function&&t.e(30).then(t.bind(null,94)).then((function(n){var t=n.getCLS,s=n.getFID,c=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(Le,{})}),document.getElementById("root")),Ee()}},[[93,28,29]]]);
//# sourceMappingURL=main.40219f03.chunk.js.map