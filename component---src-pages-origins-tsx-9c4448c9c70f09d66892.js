(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{154:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(480),i=a(487),c=a(486),s=a(247),o=a(171);t.default=Object(o.b)(function(){return n.createElement(r.a,null,n.createElement(i.a,{vertical:!0},n.createElement(c.a,{as:"h2"},n.createElement(s.a,{name:"info circle"}),n.createElement(c.a.Content,null,"About"))),n.createElement(i.a,{vertical:!0},n.createElement("p",null,"This starter was created by @fabien0102."),n.createElement("p",null,"For any question, I'm on ",n.createElement("a",{href:"https://discord.gg/2bz8EzW",target:"blank"},"discord #reactiflux/gatsby")),n.createElement("p",null,"For any issues, any PR are welcoming",n.createElement("a",{href:"https://github.com/fabien0102/gatsby-starter/issues",target:"blank"}," on this repository"))))})},163:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},164:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return c});a(33);var n=a(180),r=a(182),i=function(){return{type:"TOGGLE_SIDEBAR"}},c=Object(n.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(r.devToolsEnhancer)({}))},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(32),o=a.n(s);a.d(t,"a",function(){return o.a});a(163),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},167:function(e,t,a){"use strict";a(168),a(166);var n=a(0),r=a(162),i=a(164),c=a(480),s=a(484),o=a(170),l=a.n(o);t.a=Object(r.b)()(function(e){var t=e.items,a=e.pathname,r=e.Link,o=e.inverted,u=e.dispatch;return n.createElement(c.a,null,n.createElement(s.a,{size:"large",pointing:!0,secondary:!0,inverted:o},n.createElement(s.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return u&&u(Object(i.b)())}}),n.createElement(s.a.Item,{className:"mobile hidden"},n.createElement("img",{src:l.a,alt:"Logo"})),t.map(function(e){var t=e.exact?a===e.path:a.startsWith(e.path);return n.createElement(s.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},169:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),s=a(54),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},170:function(e,t,a){e.exports=a.p+"static/Shaper-f6f1be2ec1037b98b6a22fea4534c6b6.png"},171:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(165),c=a(0),s=a(167),o=(a(168),a(74),a(166),a(162)),l=a(485),u=a(484),m=a(247),p=Object(o.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,a=e.pathname,n=e.Link,r=e.visible,i=function(e){return e.exact?a===e.path:a.startsWith(e.path)},s=t.find(function(e){return i(e)})||{};return c.createElement(l.a,{as:u.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:s.inverted},t.map(function(e){var t=i(e);return c.createElement(u.a.Item,{as:n,to:e.path,active:t,key:e.path},c.createElement(m.a,{name:e.icon}),e.name)}))}),h=a(487),b=a(480),d=(a(183),a(184),a(185),a(186),a(164));a.d(t,"a",function(){return f}),a.d(t,"b",function(){return v});var f=[{name:"Home",path:"/",exact:!0},{name:"TME Pictures",path:"/pictures/",exact:!0},{name:"Community",path:"/community/",exact:!1},{name:"News",path:"/news/",exact:!1},{name:"Shop",path:"/shop/",exact:!1},{name:"Origins",path:"/origins/",exact:!1},{name:"Book",path:"/book/",exact:!1},{name:"Game Sign-up",path:"/blog/",exact:!1}],E=function(e){var t=e.location.pathname,a="/"===t;return c.createElement(o.a,{store:d.a},c.createElement(l.a.Pushable,{as:h.a},c.createElement(p,{Link:i.a,pathname:t,items:f,visible:!1}),c.createElement(l.a.Pusher,{style:{minHeight:"100vh"}},a?null:c.createElement(s.a,{Link:i.a,pathname:t,items:f}),c.createElement("div",{style:{paddingBottom:60}},e.children),c.createElement(h.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},c.createElement(b.a,{textAlign:"center"},c.createElement("p",null,"Powered with ",c.createElement(m.a,{name:"heart"})," by Gatsby 2.0"))))))},v=function(e){return function(t){function a(){return t.apply(this,arguments)||this}return r()(a,t),a.prototype.render=function(){return c.createElement(E,{location:this.props.location},c.createElement(e,this.props))},a}(c.Component)}}}]);
//# sourceMappingURL=component---src-pages-origins-tsx-9c4448c9c70f09d66892.js.map