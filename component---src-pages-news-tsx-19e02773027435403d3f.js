(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{153:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(480),i=n(487),c=n(486),o=n(247),s=n(171);t.default=Object(s.b)(function(){return a.createElement(r.a,null,a.createElement(i.a,{vertical:!0},a.createElement(c.a,{as:"h2"},a.createElement(o.a,{name:"book"}),a.createElement(c.a.Content,null,"News"))),a.createElement(i.a,{vertical:!0},a.createElement("p",null,"Great News!!!. We're launching a website."),a.createElement("p",null,"And today we're also launching the TME board game. Check it out on the ",a.createElement("a",{href:"/pictures/",target:"blank"},"TME Picures")," page.")))})},162:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(32),s=n.n(o);n.d(t,"a",function(){return s.a}),n.d(t,"b",function(){return o.withPrefix});n(164),r.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},164:function(e,t,n){var a;e.exports=(a=n(169))&&a.default||a},165:function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return c});n(33);var a=n(178),r=n(181),i=function(){return{type:"TOGGLE_SIDEBAR"}},c=Object(a.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(r.devToolsEnhancer)({}))},167:function(e,t,n){"use strict";n(168),n(166);var a=n(0),r=n(163),i=n(165),c=n(480),o=n(484),s=n(170),l=n.n(s);t.a=Object(r.b)()(function(e){var t=e.items,n=e.pathname,r=e.Link,s=e.inverted,u=e.dispatch;return a.createElement(c.a,null,a.createElement(o.a,{size:"large",pointing:!0,secondary:!0,inverted:s},a.createElement(o.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return u&&u(Object(i.b)())}}),a.createElement(o.a.Item,{className:"mobile hidden"},a.createElement("img",{src:l.a,alt:"Logo"})),t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return a.createElement(o.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},169:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=n(54),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},170:function(e,t,n){e.exports=n.p+"static/Shaper-f6f1be2ec1037b98b6a22fea4534c6b6.png"},171:function(e,t,n){"use strict";var a=n(7),r=n.n(a),i=n(162),c=n(0),o=n(167),s=(n(168),n(74),n(166),n(163)),l=n(485),u=n(484),m=n(247),p=Object(s.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,n=e.pathname,a=e.Link,r=e.visible,i=function(e){return e.exact?n===e.path:n.startsWith(e.path)},o=t.find(function(e){return i(e)})||{};return c.createElement(l.a,{as:u.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:o.inverted},t.map(function(e){var t=i(e);return c.createElement(u.a.Item,{as:a,to:e.path,active:t,key:e.path},c.createElement(m.a,{name:e.icon}),e.name)}))}),h=n(487),b=n(480),d=(n(182),n(183),n(184),n(185),n(165));n.d(t,"a",function(){return f}),n.d(t,"b",function(){return v});var f=[{name:"Home",path:"/",exact:!0},{name:"TME Pictures",path:"/pictures/",exact:!0},{name:"Community",path:"/community/",exact:!1},{name:"News",path:"/news/",exact:!1},{name:"Shop",path:"/shop/",exact:!1},{name:"Origins",path:"/origins/",exact:!1},{name:"Book",path:"/book/",exact:!1},{name:"Game Sign-up",path:"/blog/",exact:!1}],E=function(e){var t=e.location.pathname,n=t===Object(i.b)("/");return c.createElement(s.a,{store:d.a},c.createElement(l.a.Pushable,{as:h.a},c.createElement(p,{Link:i.a,pathname:t,items:f,visible:!1}),c.createElement(l.a.Pusher,{style:{minHeight:"100vh"}},n?null:c.createElement(o.a,{Link:i.a,pathname:t,items:f}),c.createElement("div",{style:{paddingBottom:60}},e.children),c.createElement(h.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},c.createElement(b.a,{textAlign:"center"},c.createElement("p",null,"Powered with ",c.createElement(m.a,{name:"heart"})," by Gatsby 2.0"))))))},v=function(e){return function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return c.createElement(E,{location:this.props.location},c.createElement(e,this.props))},n}(c.Component)}}}]);
//# sourceMappingURL=component---src-pages-news-tsx-19e02773027435403d3f.js.map