(this.webpackJsonppost=this.webpackJsonppost||[]).push([[0],{17:function(t,e,a){},24:function(t,e,a){},26:function(t,e,a){},27:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(5),i=a.n(c),r=(a(17),a(11)),o=a(10),u="ADD_POST",l={posts:[{author:"Anakin Skywalker",avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",nickname:"@dart_vader",date:"07.12.2021",content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",photo:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",comments:2,shares:3,likes:4},{author:"Lia",avatar:"https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",nickname:"@lia",date:"07.12.2021",content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",photo:"https://100oboi.ru/upload/iblock/825/4_4113_star_wars_movie_poster_rey_ma.jpg",comments:5,shares:9,likes:8},{author:"Lia-2",avatar:"https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",nickname:"@lia_lia",date:"07.12.2021",content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",photo:"https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",comments:6,shares:2,likes:10}]},p=Object(r.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;return e.type===u?{posts:[].concat(Object(o.a)(t.posts),[e.payload])}:t}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=a(2),h=a(12),m=a(3),b=(a(24),a(1)),d=[{author:"Anakin Skywalker",avatar:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",nickname:"@dart_vader"},{author:"Lia",avatar:"https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",nickname:"@lia"},{author:"Lia-2",avatar:"https://app2top.ru/wp-content/uploads/2021/01/ubisoft-starwars-1024x576.jpg",nickname:"@lia_lia"}],_=function(t){t.post,Object(j.c)((function(t){return t.posts}));var e=Object(s.useState)("Anakin Skywalker"),a=Object(m.a)(e,2),n=a[0],c=a[1],i=Object(s.useState)(""),r=Object(m.a)(i,2),o=r[0],l=r[1],p=Object(s.useState)(""),h=Object(m.a)(p,2),_=h[0],O=h[1],f=Object(j.b)(),x=function(t){t.preventDefault();var e=function(){var t=new Date,e=t.getUTCMonth()+1;return t.getUTCDate()+"."+e+"."+t.getUTCFullYear()}(),a=d.find((function(t){return t.author===n}));f(function(t){return{type:u,payload:t}}({author:a.author,avatar:a.avatar,nickname:a.nickname,date:e,content:o,photo:_,comments:0,shares:0,likes:0})),c(""),l(""),O("")};return Object(b.jsx)("div",{className:"form-container",children:Object(b.jsxs)("form",{className:"form",onSubmit:x,children:[Object(b.jsx)("select",{className:"form__info form__info-author",onChange:function(t){return c(t.target.value)},children:d.map((function(t,e){return Object(b.jsx)("option",{value:t.author,children:t.author},e)}))}),Object(b.jsx)("textarea",{className:"form__info form__info-text",type:"text",placeholder:"Type your post here",value:o,onChange:function(t){return l(t.target.value)}}),Object(b.jsx)("input",{className:"form__info form__info-link",type:"text",placeholder:"Paste your image link here",value:_,onChange:function(t){return O(t.target.value)}}),Object(b.jsx)("button",{className:"form__btn",type:"submit",onClick:x,children:"CREATE POST"})]})})},O=(a(26),function(t){var e=t.author,a=t.avatar,n=t.nickname,c=t.date,i=t.content,r=t.photo,o=t.comments,u=t.shares,l=t.likes,p=Object(s.useState)(0),j=Object(m.a)(p,2),h=j[0],d=j[1],_=Object(s.useState)(!1),O=Object(m.a)(_,2),f=O[0],x=O[1],k=Object(s.useState)(!1),v=Object(m.a)(k,2),g=v[0],w=v[1];return Object(b.jsxs)("div",{className:"post",children:[Object(b.jsxs)("div",{className:"post__info",children:[Object(b.jsx)("div",{className:"post__avatar",children:Object(b.jsx)("img",{className:"post__avatar-img",src:a,alt:"image"})}),Object(b.jsxs)("div",{className:"post__author",children:[Object(b.jsx)("p",{className:"post__author-name",children:e}),Object(b.jsx)("p",{className:"post__author-nickname",children:n}),Object(b.jsx)("div",{className:"post__date",children:c})]})]}),Object(b.jsx)("div",{className:"post__content",children:i}),Object(b.jsx)("div",{className:"post__image",children:Object(b.jsx)("img",{className:"post__image-img",src:r})}),Object(b.jsxs)("div",{className:"post__activities",children:[Object(b.jsxs)("button",{className:"post__activities-btn",onClick:function(){return d((function(t){return t?t-1:t+1}))},children:[Object(b.jsx)("i",{class:"far fa-comment"}),Object(b.jsx)("span",{children:o+h})]}),Object(b.jsxs)("button",{className:"post__activities-btn",onClick:function(){return x((function(t){return t?t-1:t+1}))},children:[Object(b.jsx)("i",{class:"far fa-heart"}),Object(b.jsx)("span",{children:l+f})]}),Object(b.jsxs)("button",{className:"post__activities-btn",onClick:function(){return w((function(t){return t+1}))},children:[Object(b.jsx)("i",{class:"fas fa-retweet"}),Object(b.jsx)("span",{children:u+g})]})]})]})}),f=function(){var t=Object(j.c)((function(t){return t.posts}));return Object(b.jsxs)("div",{children:[Object(b.jsx)(_,{}),Object(b.jsx)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:t.map((function(t,e){return Object(b.jsx)(O,Object(h.a)({},t),e)}))})]})};var x=function(){return Object(b.jsx)(j.a,{store:p,children:Object(b.jsx)("div",{children:Object(b.jsx)(f,{})})})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.767d8a48.chunk.js.map