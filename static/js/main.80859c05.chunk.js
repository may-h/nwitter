(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{37:function(e,t,a){e.exports=a(61)},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(34),l=a.n(c),u=a(8),o=a(20),i=a(4),s=a(5),m=a.n(s),p=a(13),f=a(22);a(43),a(44),a(46);f.initializeApp({apiKey:"AIzaSyBCrolbgiNIW3LYOCGoy2Bg4eeAKuJrwHo",authDomain:"nwitter-6c818.firebaseapp.com",databaseURL:"https://nwitter-6c818.firebaseio.com",projectId:"nwitter-6c818",storageBucket:"nwitter-6c818.appspot.com",messagingSenderId:"518612756030",appId:"1:518612756030:web:ed4fd75874050b3e8d536f"});var d=f,b=f.auth(),E=f.firestore(),h=f.storage(),v=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(u.a)(l,2),i=o[0],s=o[1],f=Object(n.useState)(!0),d=Object(u.a)(f,2),E=d[0],h=d[1],v=Object(n.useState)(""),g=Object(u.a)(v,2),w=g[0],y=g[1],O=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!E){e.next=8;break}return e.next=5,b.createUserWithEmailAndPassword(a,i);case 5:n=e.sent,e.next=11;break;case 8:return e.next=10,b.signInWithEmailAndPassword(a,i);case 10:n=e.sent;case 11:console.log(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),y(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?c(n):"password"===a&&s(n)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:O,className:"container"},r.a.createElement("input",{type:"email",name:"email",placeholder:"Email",onChange:j,value:a,required:!0,className:"authInput"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",onChange:j,value:i,required:!0,className:"authInput"}),r.a.createElement("input",{type:"submit",className:"authInput authSubmit",value:E?"Create Account":"Log In"}),w&&r.a.createElement("span",{className:"authError"},w)),r.a.createElement("span",{onClick:function(){return h((function(e){return!e}))},className:"authSwitch"},E?"Sign In":"Create Account"))},g=a(10),w=a(21),y=function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(a=t.target.name)?n=new d.auth.GoogleAuthProvider:"github"===a&&(n=new d.auth.GithubAuthProvider),e.next=4,b.signInWithPopup(n);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"authContainer"},r.a.createElement(g.a,{icon:w.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),r.a.createElement(v,null),r.a.createElement("div",{className:"authBtns"},r.a.createElement("button",{onClick:e,name:"google",className:"authBtn"},"Continue with Google ",r.a.createElement(g.a,{icon:w.b})),r.a.createElement("button",{onClick:e,name:"github",className:"authBtn"},"Continue with Github ",r.a.createElement(g.a,{icon:w.a}))))},O=a(36),j=a(15),x=function(e){var t=e.nweetObj,a=e.isOwner,c=Object(n.useState)(!1),l=Object(u.a)(c,2),o=l[0],i=l[1],s=Object(n.useState)(t.text),f=Object(u.a)(s,2),d=f[0],b=f[1],v=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=window.confirm("Are you sure you wnat to delete this nweet?"),console.log(a),!a){e.next=7;break}return e.next=5,E.doc("nweets/".concat(t.id)).delete();case 5:return e.next=7,h.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){return i((function(e){return!e}))},y=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,E.doc("nweets/".concat(t.id)).update({text:d});case 3:i(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"nweet"},o?r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:y,className:"container nweetEdit"},r.a.createElement("input",{type:"text",placeholder:"Edit your nweet",value:d,required:!0,autoFocus:!0,onChange:function(e){var t=e.target.value;b(t)},className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Nweet",className:"formBtn"})),r.a.createElement("span",{onClick:w,className:"formBtn cancelBtn"},"Cancel")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,t.text),t.attachmentUrl&&r.a.createElement("img",{src:t.attachmentUrl}),a&&r.a.createElement("div",{class:"nweet__actions"},r.a.createElement("span",{onClick:v},r.a.createElement(g.a,{icon:j.d})),r.a.createElement("span",{onClick:w},r.a.createElement(g.a,{icon:j.a})))))},N=a(63),k=function(e){var t=e.userObj,a=Object(n.useState)(""),c=Object(u.a)(a,2),l=c[0],o=c[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),f=s[0],d=s[1],b=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,u;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==l){e.next=2;break}return e.abrupt("return");case 2:if(a.preventDefault(),n="",""===f){e.next=14;break}return e.next=7,h.ref().child("".concat(t.uid,"/").concat(Object(N.a)()));case 7:return r=e.sent,e.next=10,r.putString(f,"data_url");case 10:return c=e.sent,e.next=13,c.ref.getDownloadURL();case 13:n=e.sent;case 14:return u={text:l,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:n},e.next=17,E.collection("nweets").add(u);case 17:o(""),d("");case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:b,className:"factoryForm"},r.a.createElement("div",{className:"factoryInput__container"},r.a.createElement("input",{className:"factoryInput__input",value:l,onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),r.a.createElement("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})),r.a.createElement("label",{for:"attach-file",className:"factoryInput__label"},r.a.createElement("span",null,"Add photos"),r.a.createElement(g.a,{icon:j.b})),r.a.createElement("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.onloadend=function(e){console.log(e);var t=e.currentTarget.result;d(t)},a.readAsDataURL(t)},style:{opacity:0}}),f&&r.a.createElement("div",{className:"factoryForm__attachment"},r.a.createElement("img",{src:f,style:{backgroundImage:f}}),r.a.createElement("div",{className:"factoryForm__clear",onClick:function(){return d("")}},r.a.createElement("span",null,"Remove"),r.a.createElement(g.a,{icon:j.c}))))},I=function(e){var t=e.userObj,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){E.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(O.a)({id:e.id},e.data())}));o(t)}))}),[]),r.a.createElement("div",{className:"container"},r.a.createElement(k,{userObj:t}),r.a.createElement("div",{style:{marginTop:30}},l.map((function(e){return r.a.createElement(x,{key:e.id,nweetObj:e,isOwner:e.creatorId===t.uid})}))))},S=function(e){var t=e.userObj,a=e.refreshUser,c=Object(i.g)(),l=Object(n.useState)(t.newDisplayName),o=Object(u.a)(l,2),s=o[0],f=o[1],d=function(){var e=Object(p.a)(m.a.mark((function e(){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.collection("nweets").where("creatorId","==",t.uid).get();case 2:a=e.sent,console.log(a.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d()}),[]);var h=function(){var e=Object(p.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),t.displayName===s){e.next=4;break}return e.next=4,t.updateProfile({displayName:s});case 4:a(),f("");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:h,className:"profileForm"},r.a.createElement("input",{type:"text",placeholder:"Display name",value:s,onChange:function(e){var t=e.target.value;f(t)},autoFocus:!0,className:"formInput"}),r.a.createElement("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})),r.a.createElement("span",{className:"formBtn cancelBtn logOut",onClick:function(){b.signOut(),c.push("/"),a()}},"Log Out"))},C=function(e){var t=e.userObj;return r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",justifyContent:"center",marginTop:50}},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",style:{marginRight:10}},r.a.createElement(g.a,{icon:w.c,color:"#04AAFF",size:"2x"}))),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12}},r.a.createElement(g.a,{icon:j.e,color:"#04AAFF",size:"2x"}),r.a.createElement("span",{style:{marginTop:10}},t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile")))))},A=function(e){var t=e.isLoggedIn,a=e.userObj,n=e.refreshUser;return r.a.createElement(o.a,null,t&&r.a.createElement(C,{userObj:a}),r.a.createElement(i.d,null,t?r.a.createElement("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"}},r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(I,{userObj:a})),r.a.createElement(i.b,{exact:!0,path:"/profile"},r.a.createElement(S,{userObj:a,refreshUser:n}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(y,null)),r.a.createElement(i.a,{from:"*",to:"/"}))))};a(53);var F=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),o=Object(u.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){b.onAuthStateChanged((function(e){s(e?{displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}}:null),c(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,a?r.a.createElement(A,{refreshUser:function(){var e=b.currentUser;s({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(i),userObj:i}):"Initializing...")};a(60);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.80859c05.chunk.js.map