(this.webpackJsonppoketimes=this.webpackJsonppoketimes||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/pokeball.f10bf078.png"},31:function(e,t,a){e.exports=a(59)},36:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(28),o=a.n(l),r=(a(36),a(7)),i=a(1),s=Object(i.f)((function(e){return c.a.createElement("nav",{className:"nav-wrapper red darken-3"},c.a.createElement("div",{className:"container"},c.a.createElement(r.b,{className:"brand-logo",to:"/"},"Poke' Times"),c.a.createElement("ul",{className:"right"},c.a.createElement("li",null,c.a.createElement(r.c,{exact:!0,to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(r.c,{to:"/about"},"About")),c.a.createElement("li",null,c.a.createElement(r.c,{to:"/contact"},"Contact")))))})),m=a(10),u=a(11),p=a(14),d=a(13),h=a(12),E=a.n(h),v=a(30),f=a.n(v),b=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={posts:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e.setState({posts:t.data.slice(0,10)})}))}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map((function(e){return c.a.createElement("div",{className:"post card ",key:e.id},c.a.createElement("img",{src:f.a,alt:"A Pokeball"}),c.a.createElement("div",{className:"card-content"},c.a.createElement(r.b,{to:"/"+e.id},c.a.createElement("span",{className:"card-title red-text"},e.title)),c.a.createElement("p",null,e.body)))})):c.a.createElement("div",{className:"center"},"No posts to show");return c.a.createElement("div",null,c.a.createElement("div",{className:"container home"},c.a.createElement("h4",{className:"center"},"Home"),t))}}]),a}(n.Component),g=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"About"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?")))},N=function(e){var t=["red","pink","orange","blue","green","yellow"][Math.floor(6*Math.random())]+"-text";return function(a){return c.a.createElement("div",{className:t},c.a.createElement(e,a))}}((function(e){return c.a.createElement("div",null,c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"Contact"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?")))})),k=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).state={post:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.post_id;E.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then((function(t){e.setState({post:t.data})}))}},{key:"render",value:function(){var e=this.state.post?c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"center"},this.state.post.title),c.a.createElement("p",null,this.state.post.body)):c.a.createElement("div",{className:"center"},"Loading post...");return c.a.createElement("div",{className:"container"},e)}}]),a}(n.Component),y=function(){return c.a.createElement(r.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:b}),c.a.createElement(i.a,{path:"/about",component:g}),c.a.createElement(i.a,{path:"/contact",component:N}),c.a.createElement(i.a,{path:"/:post_id",component:k}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.53c102d4.chunk.js.map