(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var i=n(3),a=n.n(i),s=n(4),c=n(5),r=n(8),l=n(6),o=n(1),m=n.n(o),u=(n(13),n(7)),p=(n(14),n(0)),j=function(t){var e=t.images,n=t.itemWidth,i=t.frameSize,a=t.step,s=t.animationDuration,c=Object(o.useState)(0),r=Object(u.a)(c,2),l=r[0],m=r[1],j=e.length-i,d=0===l,b=l===j,h=Object(o.useRef)(i);return Object(o.useEffect)((function(){i>h.current&&l>j&&m((function(t){return t-1})),h.current=i}),[i,l,j]),Object(p.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*i,"px"),transition:"".concat(s,"ms")},children:[Object(p.jsx)("ul",{className:"Carousel__list",children:e.map((function(t,e){return Object(p.jsx)("li",{style:{transform:"translateX(".concat(-l*n,"px)"),transition:"".concat(s,"ms")},children:Object(p.jsx)("img",{src:t,alt:"".concat(e),width:n,style:{transition:"".concat(s,"ms")}})},t)}))}),Object(p.jsxs)("div",{className:"Carousel__buttons",children:[Object(p.jsx)("button",{type:"button",onClick:function(){m(l-a>0?l-a:0)},disabled:d,children:"Prev"}),Object(p.jsx)("button",{"data-cy":"next",type:"button",onClick:function(){m(l+a<j?l+a:j)},disabled:b,children:"Next"})]})]})},d=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,frameSize:3,step:3,animationDuration:1e3},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.images,i=e.itemWidth,a=e.frameSize,s=e.step,c=e.animationDuration;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",n.length," images"]}),Object(p.jsxs)("div",{className:"App__container",children:[Object(p.jsxs)("div",{className:"App__input-container",children:[Object(p.jsx)("label",{htmlFor:"itemId",children:"Item Width:"}),Object(p.jsx)("input",{className:"App__input",id:"itemId",type:"number",min:50,max:390,step:10,onChange:function(e){t.setState({itemWidth:+e.target.value})},value:i})]}),Object(p.jsxs)("div",{className:"App__input-container",children:[Object(p.jsx)("label",{htmlFor:"frameId",children:"Frame Size:"}),Object(p.jsx)("input",{className:"App__input",id:"frameId",type:"number",min:1,max:n.length,value:a,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(p.jsxs)("div",{className:"App__input-container",children:[Object(p.jsx)("label",{htmlFor:"stepId",children:"Step:"}),Object(p.jsx)("input",{className:"App__input",id:"stepId",type:"number",min:1,max:10,value:s,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(p.jsxs)("div",{className:"App__input-container",children:[Object(p.jsx)("label",{htmlFor:"animationDurationId",children:"Animation Duration:"}),Object(p.jsx)("input",{className:"App__input",id:"animationDurationId",type:"number",min:100,step:100,value:c,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]})]}),Object(p.jsx)(j,{images:n,step:s,frameSize:a,itemWidth:i,animationDuration:c})]})}}]),n}(m.a.Component),b=d;a.a.render(Object(p.jsx)(b,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.14071bfe.chunk.js.map