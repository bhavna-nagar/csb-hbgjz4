(this.webpackJsonpfinal=this.webpackJsonpfinal||[]).push([[0],{1360:function(t,e){},1383:function(t,e,n){"use strict";n.r(e);var r=n(8),c=n(18),s=n(5),a=n.n(s),i=n(92),o=n.n(i),u=(n(189),n(26)),d=n(20),j=n(16),l=n(6),b=n(7),p=n(23),O=n(99),f=["body"];function h(t){return m.apply(this,arguments)}function m(){return m=Object(c.a)(Object(r.a)().mark((function t(e){var n,c,s,a,i,o,u,d=arguments;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=d.length>1&&void 0!==d[1]?d[1]:{},c=n.body,s=Object(O.a)(n,f),a={"Content-Type":"application/json"},i=Object(l.a)(Object(l.a)({method:c?"POST":"GET"},s),{},{headers:Object(l.a)(Object(l.a)({},a),s.headers)}),c&&(i.body=JSON.stringify(c)),t.prev=4,t.next=7,window.fetch(e,i);case 7:return u=t.sent,t.next=10,u.json();case 10:if(o=t.sent,!u.ok){t.next=13;break}return t.abrupt("return",{status:u.status,data:o,headers:u.headers,url:u.url});case 13:throw new Error(u.statusText);case 16:return t.prev=16,t.t0=t.catch(4),t.abrupt("return",Promise.reject(t.t0.message?t.t0.message:o));case 19:case"end":return t.stop()}}),t,null,[[4,16]])}))),m.apply(this,arguments)}h.get=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(t,Object(l.a)(Object(l.a)({},e),{},{method:"GET"}))},h.post=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(t,Object(l.a)(Object(l.a)({},n),{},{body:e}))};var x=Object(p.c)({sortComparer:function(t,e){return e.date.localeCompare(t.date)}}),v=Object(p.b)("notifications/fetchNotifications",function(){var t=Object(c.a)(Object(r.a)().mark((function t(e,n){var c,s,a,i,o,u;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.getState,s=S(c()),a=Object(b.a)(s,1),i=a[0],o=i?i.date:"",t.next=6,h.get("/fakeApi/notifications?since=".concat(o));case 6:return u=t.sent,t.abrupt("return",u.data);case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()),g=Object(p.d)({name:"notifications",initialState:x.getInitialState(),reducers:{allNotificationsRead:function(t,e){Object.values(t.entities).forEach((function(t){t.read=!0}))}},extraReducers:function(t){t.addCase(v.fulfilled,(function(t,e){var n=e.payload.map((function(t){return Object(l.a)(Object(l.a)({},t),{},{read:!1,isNew:!0})}));Object.values(t.entities).forEach((function(t){t.isNew=!t.read})),x.upsertMany(t,n)}))}}),y=g.actions.allNotificationsRead,w=g.reducer,S=x.getSelectors((function(t){return t.notifications})).selectAll,N=n(4),k=function(){var t,e=Object(j.b)(),n=Object(j.c)(S).filter((function(t){return!t.read})).length;return n>0&&(t=Object(N.jsx)("span",{className:"badge",children:n})),Object(N.jsx)("nav",{children:Object(N.jsxs)("section",{children:[Object(N.jsx)("h1",{children:"Redux Essentials Example"}),Object(N.jsxs)("div",{className:"navContent",children:[Object(N.jsxs)("div",{className:"navLinks",children:[Object(N.jsx)(u.b,{to:"/",children:"Posts"}),Object(N.jsx)(u.b,{to:"/users",children:"Users"}),Object(N.jsxs)(u.b,{to:"/notifications",children:["Notifications ",t]})]}),Object(N.jsx)("button",{className:"button",onClick:function(){e(v())},children:"Refresh Notifications"})]})]})})},I=function(t){var e=t.text,n=void 0===e?"":e,r=t.size,c=void 0===r?"5em":r,s=n?Object(N.jsx)("h4",{children:n}):null;return Object(N.jsxs)("div",{className:"spinner",children:[s,Object(N.jsx)("div",{className:"loader",style:{height:c,width:c}})]})},C=Object(p.c)(),A=C.getInitialState(),P=Object(p.b)("users/fetchUsers",Object(c.a)(Object(r.a)().mark((function t(){var e;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/fakeApi/users");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),T=Object(p.d)({name:"users",initialState:A,reducers:{},extraReducers:function(t){t.addCase(P.fulfilled,C.setAll)}}).reducer,E=C.getSelectors((function(t){return t.users})),F=E.selectAll,U=E.selectById,R=function(t){var e=t.userId,n=Object(j.c)((function(t){return U(t,e)}));return Object(N.jsxs)("span",{children:["by ",n?n.name:"Unknown author"]})},M=n(129),q=n(130),D=function(t){var e=t.timestamp,n="";if(e){var r=Object(M.a)(e),c=Object(q.a)(r);n="".concat(c," ago")}return Object(N.jsxs)("span",{title:e,children:["\xa0 ",Object(N.jsx)("i",{children:n})]})},J=n(96),B=Object(p.c)({sortComparer:function(t,e){return e.date.localeCompare(t.date)}}),K=B.getInitialState({status:"idle",error:null}),L=Object(p.b)("posts/fetchPosts",Object(c.a)(Object(r.a)().mark((function t(){var e;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("/fakeApi/posts");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))),G=Object(p.b)("posts/addNewPost",function(){var t=Object(c.a)(Object(r.a)().mark((function t(e){var n;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.post("/fakeApi/posts",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),W=Object(p.d)({name:"posts",initialState:K,reducers:{reactionAdded:function(t,e){var n=e.payload,r=n.postId,c=n.reaction,s=t.entities[r];s&&s.reactions[c]++},postUpdated:function(t,e){var n=e.payload,r=n.id,c=n.title,s=n.content,a=t.entities[r];a&&(a.title=c,a.content=s)}},extraReducers:function(t){t.addCase(L.pending,(function(t,e){t.status="loading"})).addCase(L.fulfilled,(function(t,e){t.status="succeeded",B.upsertMany(t,e.payload)})).addCase(L.rejected,(function(t,e){t.status="failed",t.error=e.error.message})).addCase(G.fulfilled,B.addOne)}}),z=W.actions,V=(z.postAdded,z.postUpdated),H=z.reactionAdded,Q=W.reducer,X=B.getSelectors((function(t){return t.posts})),Y=X.selectAll,Z=X.selectById,$=X.selectIds,_=Object(J.a)([Y,function(t,e){return e}],(function(t,e){return t.filter((function(t){return t.user===e}))})),tt={thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"},et=function(t){var e=t.post,n=Object(j.b)(),r=Object.entries(tt).map((function(t){var r=Object(b.a)(t,2),c=r[0],s=r[1];return Object(N.jsxs)("button",{type:"button",className:"muted-button reaction-button",onClick:function(){return n(H({postId:e.id,reaction:c}))},children:[s," ",e.reactions[c]]},c)}));return Object(N.jsx)("div",{children:r})},nt=function(t){var e=t.postId,n=Object(j.c)((function(t){return Z(t,e)}));return Object(N.jsxs)("article",{className:"post-excerpt",children:[Object(N.jsx)("h3",{children:n.title}),Object(N.jsxs)("div",{children:[Object(N.jsx)(R,{userId:n.user}),Object(N.jsx)(D,{timestamp:n.date})]}),Object(N.jsx)("p",{className:"post-content",children:n.content.substring(0,100)}),Object(N.jsx)(et,{post:n}),Object(N.jsx)(u.b,{to:"/posts/".concat(n.id),className:"button muted-button",children:"View Post"})]},n.id)},rt=function(){var t,e=Object(j.b)(),n=Object(j.c)($),r=Object(j.c)((function(t){return t.posts.status})),c=Object(j.c)((function(t){return t.posts.error}));return Object(s.useEffect)((function(){"idle"===r&&e(L())}),[r,e]),"loading"===r?t=Object(N.jsx)(I,{text:"Loading..."}):"succeeded"===r?t=n.map((function(t){return Object(N.jsx)(nt,{postId:t},t)})):"failed"===r&&(t=Object(N.jsx)("div",{children:c})),Object(N.jsxs)("section",{className:"posts-list",children:[Object(N.jsx)("h2",{children:"Posts"}),t]})},ct=function(){var t=Object(s.useState)(""),e=Object(b.a)(t,2),n=e[0],a=e[1],i=Object(s.useState)(""),o=Object(b.a)(i,2),u=o[0],d=o[1],l=Object(s.useState)(""),p=Object(b.a)(l,2),O=p[0],f=p[1],h=Object(s.useState)("idle"),m=Object(b.a)(h,2),x=m[0],v=m[1],g=Object(j.b)(),y=Object(j.c)(F),w=[n,u,O].every(Boolean)&&"idle"===x,S=function(){var t=Object(c.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!w){t.next=16;break}return t.prev=1,v("pending"),t.next=5,g(G({title:n,content:u,user:O})).unwrap();case 5:a(""),d(""),f(""),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error("Failed to save the post: ",t.t0);case 13:return t.prev=13,v("idle"),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,10,13,16]])})));return function(){return t.apply(this,arguments)}}(),k=y.map((function(t){return Object(N.jsx)("option",{value:t.id,children:t.name},t.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Add a New Post"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(N.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:n,onChange:function(t){return a(t.target.value)}}),Object(N.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),Object(N.jsxs)("select",{id:"postAuthor",value:O,onChange:function(t){return f(t.target.value)},children:[Object(N.jsx)("option",{value:""}),k]}),Object(N.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(N.jsx)("textarea",{id:"postContent",name:"postContent",value:u,onChange:function(t){return d(t.target.value)}}),Object(N.jsx)("button",{type:"button",onClick:S,disabled:!w,children:"Save Post"})]})]})},st=function(t){var e=t.match.params.postId,n=Object(j.c)((function(t){return Z(t,e)})),r=Object(s.useState)(n.title),c=Object(b.a)(r,2),a=c[0],i=c[1],o=Object(s.useState)(n.content),u=Object(b.a)(o,2),l=u[0],p=u[1],O=Object(j.b)(),f=Object(d.g)();return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Edit Post"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(N.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:a,onChange:function(t){return i(t.target.value)}}),Object(N.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(N.jsx)("textarea",{id:"postContent",name:"postContent",value:l,onChange:function(t){return p(t.target.value)}})]}),Object(N.jsx)("button",{type:"button",onClick:function(){a&&l&&(O(V({id:e,title:a,content:l})),f.push("/posts/".concat(e)))},children:"Save Post"})]})},at=function(t){var e=t.match.params.postId,n=Object(j.c)((function(t){return Z(t,e)}));return n?Object(N.jsx)("section",{children:Object(N.jsxs)("article",{className:"post",children:[Object(N.jsx)("h2",{children:n.title}),Object(N.jsxs)("div",{children:[Object(N.jsx)(R,{userId:n.user}),Object(N.jsx)(D,{timestamp:n.date})]}),Object(N.jsx)("p",{className:"post-content",children:n.content}),Object(N.jsx)(et,{post:n}),Object(N.jsx)(u.b,{to:"/editPost/".concat(n.id),className:"button",children:"Edit Post"})]})}):Object(N.jsx)("section",{children:Object(N.jsx)("h2",{children:"Post not found!"})})},it=function(){var t=Object(j.c)(F).map((function(t){return Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/users/".concat(t.id),children:t.name})},t.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Users"}),Object(N.jsx)("ul",{children:t})]})},ot=function(t){var e=t.match.params.userId,n=Object(j.c)((function(t){return U(t,e)})),r=Object(j.c)((function(t){return _(t,e)})).map((function(t){return Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/posts/".concat(t.id),children:t.title})},t.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:n.name}),Object(N.jsx)("ul",{children:r})]})},ut=n(177),dt=n.n(ut),jt=function(){var t=Object(j.b)(),e=Object(j.c)(S),n=Object(j.c)(F);Object(s.useLayoutEffect)((function(){t(y())}));var r=e.map((function(t){var e=Object(M.a)(t.date),r=Object(q.a)(e),c=n.find((function(e){return e.id===t.user}))||{name:"Unknown User"},s=dt()("notification",{new:t.isNew});return Object(N.jsxs)("div",{className:s,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:c.name})," ",t.message]}),Object(N.jsx)("div",{title:t.date,children:Object(N.jsxs)("i",{children:[r," ago"]})})]},t.id)}));return Object(N.jsxs)("section",{className:"notificationsList",children:[Object(N.jsx)("h2",{children:"Notifications"}),r]})};var lt,bt=function(){return Object(N.jsxs)(u.a,{children:[Object(N.jsx)(k,{}),Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(d.d,{children:[Object(N.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsx)(ct,{}),Object(N.jsx)(rt,{})]})}}),Object(N.jsx)(d.b,{exact:!0,path:"/posts/:postId",component:at}),Object(N.jsx)(d.b,{exact:!0,path:"/editPost/:postId",component:st}),Object(N.jsx)(d.b,{exact:!0,path:"/users",component:it}),Object(N.jsx)(d.b,{exact:!0,path:"/users/:userId",component:ot}),Object(N.jsx)(d.b,{exact:!0,path:"/notifications",component:jt}),Object(N.jsx)(d.a,{to:"/"})]})})]})},pt=Object(p.a)({reducer:{posts:Q,users:T,notifications:w}}),Ot=n(9),ft=n(27),ht=n(40),mt=n(183),xt=n(38),vt=n(45),gt=n.n(vt),yt=n(126),wt=n.n(yt),St=n(178),Nt=n(179),kt=["id"],It=2e3,Ct=wt()(),At=localStorage.getItem("randomTimestampSeed");function Pt(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Ct()*(e-t+1))+t}At?lt=new Date(At):(At=(lt=new Date).toISOString(),localStorage.setItem("randomTimestampSeed",At)),Ct=wt()(At),Object(Nt.setRandom)(Ct),gt.a.seed(lt.getTime());for(var Tt,Et=function(t){return t[Pt(0,t.length-1)]},Ft=Object(xt.factory)({user:{id:Object(xt.primaryKey)(p.e),firstName:String,lastName:String,name:String,username:String,posts:Object(xt.manyOf)("post")},post:{id:Object(xt.primaryKey)(p.e),title:String,date:String,content:String,reactions:Object(xt.oneOf)("reaction"),comments:Object(xt.manyOf)("comment"),user:Object(xt.oneOf)("user")},comment:{id:Object(xt.primaryKey)(String),date:String,text:String,post:Object(xt.oneOf)("post")},reaction:{id:Object(xt.primaryKey)(p.e),thumbsUp:Number,hooray:Number,heart:Number,rocket:Number,eyes:Number,post:Object(xt.oneOf)("post")}}),Ut=function(){var t=gt.a.name.firstName(),e=gt.a.name.lastName();return{firstName:t,lastName:e,name:"".concat(t," ").concat(e),username:gt.a.internet.userName()}},Rt=0;Rt<3;Rt++)for(var Mt=Ft.user.create(Ut()),qt=0;qt<3;qt++){var Dt=(Tt=Mt,{title:gt.a.lorem.words(),date:gt.a.date.recent(7).toISOString(),user:Tt,content:gt.a.lorem.paragraphs(),reactions:Ft.reaction.create()});Ft.post.create(Dt)}var Jt=function(t){return Object(l.a)(Object(l.a)({},t),{},{user:t.user.id})},Bt=[ht.c.get("/fakeApi/posts",(function(t,e,n){var r=Ft.post.getAll().map(Jt);return e(n.delay(It),n.json(r))})),ht.c.post("/fakeApi/posts",(function(t,e,n){var r=t.body;if("error"===r.content)return e(n.delay(It),n.status(500),n.json("Server error saving this post!"));r.date=(new Date).toISOString();var c=Ft.user.findFirst({where:{id:{equals:r.user}}});r.user=c,r.reactions=Ft.reaction.create();var s=Ft.post.create(r);return e(n.delay(It),n.json(Jt(s)))})),ht.c.get("/fakeApi/posts/:postId",(function(t,e,n){var r=Ft.post.findFirst({where:{id:{equals:t.params.postId}}});return e(n.delay(It),n.json(Jt(r)))})),ht.c.patch("/fakeApi/posts/:postId",(function(t,e,n){var r=t.body,c=(r.id,Object(O.a)(r,kt)),s=Ft.post.update({where:{id:{equals:t.params.postId}},data:c});return e(n.delay(It),n.json(Jt(s)))})),ht.c.get("/fakeApi/posts/:postId/comments",(function(t,e,n){var r=Ft.post.findFirst({where:{id:{equals:t.params.postId}}});return e(n.delay(It),n.json({comments:r.comments}))})),ht.c.post("/fakeApi/posts/:postId/reactions",(function(t,e,n){var r=t.params.postId,c=t.body.reaction,s=Ft.post.findFirst({where:{id:{equals:r}}}),a=Ft.post.update({where:{id:{equals:r}},data:{reactions:Object(l.a)(Object(l.a)({},s.reactions),{},Object(ft.a)({},c,s.reactions[c]+=1))}});return e(n.delay(It),n.json(Jt(a)))})),ht.c.get("/fakeApi/notifications",(function(t,e,n){var r=zt(void 0,Pt(1,5),Ft);return e(n.delay(It),n.json(r))})),ht.c.get("/fakeApi/users",(function(t,e,n){return e(n.delay(It),n.json(Ft.user.getAll()))}))],Kt=mt.a.apply(void 0,Bt),Lt=new St.Server("ws://localhost"),Gt=function(t,e){!function(t,e){t.send(JSON.stringify(e))}(t,{type:"notifications",payload:zt(e,Pt(1,5),Ft)})};Lt.on("connection",(function(t){t,t.on("message",(function(e){var n=JSON.parse(e);if("notifications"===n.type){var r=n.payload;Gt(t,r)}}))}));var Wt=["poked you","says hi!","is glad we're friends","sent you a gift"];function zt(t,e,n){var r,c=new Date;t?r=Object(M.a)(t):(r=new Date(c.valueOf())).setMinutes(r.getMinutes()-15);var s=Object(Ot.a)(Array(e)).map((function(){var t=Et(n.user.getAll()),e=Et(Wt);return{id:Object(p.e)(),date:gt.a.date.between(r,c).toISOString(),message:e,user:t.id}}));return s}function Vt(){return(Vt=Object(c.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Kt.start({onUnhandledRequest:"bypass"});case 2:pt.dispatch(P()),o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(j.a,{store:pt,children:Object(N.jsx)(bt,{})})}),document.getElementById("root"));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){Vt.apply(this,arguments)}()},189:function(t,e,n){}},[[1383,1,2]]]);
//# sourceMappingURL=main.c5e97e16.chunk.js.map