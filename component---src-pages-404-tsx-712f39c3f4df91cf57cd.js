(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(298),c=n(247),i=n(486),o=n(171);t.default=Object(o.b)(function(){return a.createElement(r.a,{centered:!0,verticalAlign:"middle",style:{minHeight:"700px"}},a.createElement(r.a.Column,null,a.createElement(r.a.Row,{style:{textAlign:"center"}},a.createElement(c.a,{name:"marker",size:"huge"}),a.createElement(i.a,{as:"h1"},"You are here!"),a.createElement(i.a,{as:"h2"},"But nothing found for you #404"))))})},163:function(e,t,n){var a;e.exports=(a=n(169))&&a.default||a},164:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});n(33);var a=n(180),r=n(182),c=function(){return{type:"TOGGLE_SIDEBAR"}},i=Object(a.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(r.devToolsEnhancer)({}))},165:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=n(32),l=n.n(o);n.d(t,"a",function(){return l.a});n(163),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},167:function(e,t,n){"use strict";n(168),n(166);var a=n(0),r=n(162),c=n(164),i=n(480),o=n(484),l=n(170),s=n.n(l);t.a=Object(r.b)()(function(e){var t=e.items,n=e.pathname,r=e.Link,l=e.inverted,d=e.dispatch;return a.createElement(i.a,null,a.createElement(o.a,{size:"large",pointing:!0,secondary:!0,inverted:l},a.createElement(o.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return d&&d(Object(c.b)())}}),a.createElement(o.a.Item,{className:"mobile hidden"},a.createElement("img",{src:s.a,alt:"Logo"})),t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return a.createElement(o.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},169:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),o=n(54),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},170:function(e,t,n){e.exports=n.p+"static/Shaper-f6f1be2ec1037b98b6a22fea4534c6b6.png"},171:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(165),i=n(0),o=n(167),l=(n(168),n(74),n(166),n(162)),s=n(485),d=n(484),u=n(247),m=Object(l.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,n=e.pathname,a=e.Link,r=e.visible,c=function(e){return e.exact?n===e.path:n.startsWith(e.path)},o=t.find(function(e){return c(e)})||{};return i.createElement(s.a,{as:d.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:o.inverted},t.map(function(e){var t=c(e);return i.createElement(d.a.Item,{as:a,to:e.path,active:t,key:e.path},i.createElement(u.a,{name:e.icon}),e.name)}))}),b=n(487),p=n(480),h=(n(183),n(184),n(185),n(186),n(164));n.d(t,"a",function(){return f}),n.d(t,"b",function(){return g});var f=[{name:"Home",path:"/",exact:!0},{name:"TME Pictures",path:"/pictures/",exact:!0},{name:"Community",path:"/community/",exact:!1},{name:"News",path:"/news/",exact:!1},{name:"Shop",path:"/shop/",exact:!1},{name:"Origins",path:"/origins/",exact:!1},{name:"Book",path:"/book/",exact:!1},{name:"Game Sign-up",path:"/blog/",exact:!1}],v=function(e){var t=e.location.pathname,n="/"===t;return i.createElement(l.a,{store:h.a},i.createElement(s.a.Pushable,{as:b.a},i.createElement(m,{Link:c.a,pathname:t,items:f,visible:!1}),i.createElement(s.a.Pusher,{style:{minHeight:"100vh"}},n?null:i.createElement(o.a,{Link:c.a,pathname:t,items:f}),i.createElement("div",{style:{paddingBottom:60}},e.children),i.createElement(b.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},i.createElement(p.a,{textAlign:"center"},i.createElement("p",null,"Powered with ",i.createElement(u.a,{name:"heart"})," by Gatsby 2.0"))))))},g=function(e){return function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return i.createElement(v,{location:this.props.location},i.createElement(e,this.props))},n}(i.Component)}},189:function(e,t,n){var a=n(207),r=n(208),c=n(209);e.exports=function(e){return a(e)||r(e)||c()}},207:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},208:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},209:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},298:function(e,t,n){"use strict";n(189);var a=n(73),r=n.n(a),c=n(160),i=n.n(c),o=(n(4),n(0)),l=n.n(o),s=n(191),d=n(258),u=n(259),m=n(278);function b(e){var t=e.children,n=e.className,a=e.computer,c=e.color,o=e.floated,m=e.largeScreen,p=e.mobile,h=e.only,f=e.stretched,v=e.tablet,g=e.textAlign,j=e.verticalAlign,O=e.widescreen,E=e.width,y=i()(c,Object(s.a)(f,"stretched"),Object(s.c)(h,"only"),Object(s.d)(g),Object(s.e)(o,"floated"),Object(s.f)(j),Object(s.g)(a,"wide computer"),Object(s.g)(m,"wide large screen"),Object(s.g)(p,"wide mobile"),Object(s.g)(v,"wide tablet"),Object(s.g)(O,"wide widescreen"),Object(s.g)(E,"wide"),"column",n),w=Object(d.a)(b,e),x=Object(u.a)(b,e);return l.a.createElement(x,r()({},w,{className:y}),t)}b.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],b.propTypes={},b.create=Object(m.c)(b,function(e){return{children:e}});var p=b;function h(e){var t=e.centered,n=e.children,a=e.className,c=e.color,o=e.columns,m=e.divided,b=e.only,p=e.reversed,f=e.stretched,v=e.textAlign,g=e.verticalAlign,j=i()(c,Object(s.a)(t,"centered"),Object(s.a)(m,"divided"),Object(s.a)(f,"stretched"),Object(s.c)(b,"only"),Object(s.c)(p,"reversed"),Object(s.d)(v),Object(s.f)(g),Object(s.g)(o,"column",!0),"row",a),O=Object(d.a)(h,e),E=Object(u.a)(h,e);return l.a.createElement(E,r()({},O,{className:j}),n)}h.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],h.propTypes={};var f=h;function v(e){var t=e.celled,n=e.centered,a=e.children,c=e.className,o=e.columns,m=e.container,b=e.divided,p=e.doubling,h=e.inverted,f=e.padded,g=e.relaxed,j=e.reversed,O=e.stackable,E=e.stretched,y=e.textAlign,w=e.verticalAlign,x=i()("ui",Object(s.a)(n,"centered"),Object(s.a)(m,"container"),Object(s.a)(p,"doubling"),Object(s.a)(h,"inverted"),Object(s.a)(O,"stackable"),Object(s.a)(E,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(b,"divided"),Object(s.b)(f,"padded"),Object(s.b)(g,"relaxed"),Object(s.c)(j,"reversed"),Object(s.d)(y),Object(s.f)(w),Object(s.g)(o,"column",!0),"grid",c),A=Object(d.a)(v,e),k=Object(u.a)(v,e);return l.a.createElement(k,r()({},A,{className:x}),a)}v.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],v.Column=p,v.Row=f,v.propTypes={};t.a=v}}]);
//# sourceMappingURL=component---src-pages-404-tsx-712f39c3f4df91cf57cd.js.map