(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(293),c=n(242),i=n(480),l=n(178);t.default=Object(l.b)(function(){return a.createElement(r.a,{centered:!0,verticalAlign:"middle",style:{minHeight:"700px"}},a.createElement(r.a.Column,null,a.createElement(r.a.Row,{style:{textAlign:"center"}},a.createElement(c.a,{name:"marker",size:"huge"}),a.createElement(i.a,{as:"h1"},"You are here!"),a.createElement(i.a,{as:"h2"},"But nothing found for you #404"))))})},164:function(e,t,n){var a;e.exports=(a=n(173))&&a.default||a},165:function(e,t,n){"use strict";n.d(t,"b",function(){return c}),n.d(t,"a",function(){return i});n(35);var a=n(183),r=n(196),c=function(){return{type:"TOGGLE_SIDEBAR"}},i=Object(a.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(r.devToolsEnhancer)({}))},166:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(4),i=n.n(c),l=n(32),o=n.n(l);n.d(t,"a",function(){return o.a});n(164),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},171:function(e,t,n){"use strict";n(172),n(169);var a=n(0),r=n(163),c=n(165),i=n(475),l=n(479),o=n(176),s=n.n(o);t.a=Object(r.b)()(function(e){var t=e.items,n=e.pathname,r=e.Link,o=e.inverted,d=e.dispatch;return a.createElement(i.a,null,a.createElement(l.a,{size:"large",pointing:!0,secondary:!0,inverted:o},a.createElement(l.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return d&&d(Object(c.b)())}}),a.createElement(l.a.Item,{className:"mobile hidden"},a.createElement("img",{src:s.a,alt:"Logo"})),t.map(function(e){var t=e.exact?n===e.path:n.startsWith(e.path);return a.createElement(l.a.Item,{as:r,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},173:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),c=n(4),i=n.n(c),l=n(55),o=n(2),s=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},176:function(e,t,n){e.exports=n.p+"static/Shaper-f6f1be2ec1037b98b6a22fea4534c6b6.png"},177:function(e,t,n){var a=n(202),r=n(203),c=n(204);e.exports=function(e){return a(e)||r(e)||c()}},178:function(e,t,n){"use strict";var a=n(7),r=n.n(a),c=n(166),i=n(0),l=n(171),o=(n(172),n(74),n(169),n(163)),s=n(481),d=n(479),u=n(242),b=Object(o.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,n=e.pathname,a=e.Link,r=e.visible,c=function(e){return e.exact?n===e.path:n.startsWith(e.path)},l=t.find(function(e){return c(e)})||{};return i.createElement(s.a,{as:d.a,animation:"slide along",width:"thin",visible:r,icon:"labeled",vertical:!0,inverted:l.inverted},t.map(function(e){var t=c(e);return i.createElement(d.a.Item,{as:a,to:e.path,active:t,key:e.path},i.createElement(u.a,{name:e.icon}),e.name)}))}),m=n(482),p=n(475),h=(n(198),n(199),n(200),n(201),n(165));n.d(t,"a",function(){return f}),n.d(t,"b",function(){return g});var f=[{name:"Home",path:"/",exact:!0,icon:"home",inverted:!0},{name:"About",path:"/about/",exact:!0,icon:"info circle"},{name:"Blog",path:"/blog/",exact:!1,icon:"newspaper"}],v=function(e){var t=e.location.pathname,n="/"===t;return i.createElement(o.a,{store:h.a},i.createElement(s.a.Pushable,{as:m.a},i.createElement(b,{Link:c.a,pathname:t,items:f,visible:!1}),i.createElement(s.a.Pusher,{style:{minHeight:"100vh"}},n?null:i.createElement(l.a,{Link:c.a,pathname:t,items:f}),i.createElement("div",{style:{paddingBottom:60}},e.children),i.createElement(m.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},i.createElement(p.a,{textAlign:"center"},i.createElement("p",null,"Powered with ",i.createElement(u.a,{name:"heart"})," by Gatsby 2.0"))))))},g=function(e){return function(t){function n(){return t.apply(this,arguments)||this}return r()(n,t),n.prototype.render=function(){return i.createElement(v,{location:this.props.location},i.createElement(e,this.props))},n}(i.Component)}},202:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},203:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},204:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},293:function(e,t,n){"use strict";n(177);var a=n(73),r=n.n(a),c=n(155),i=n.n(c),l=(n(4),n(0)),o=n.n(l),s=n(180),d=n(253),u=n(254),b=n(273);function m(e){var t=e.children,n=e.className,a=e.computer,c=e.color,l=e.floated,b=e.largeScreen,p=e.mobile,h=e.only,f=e.stretched,v=e.tablet,g=e.textAlign,j=e.verticalAlign,O=e.widescreen,E=e.width,y=i()(c,Object(s.a)(f,"stretched"),Object(s.c)(h,"only"),Object(s.d)(g),Object(s.e)(l,"floated"),Object(s.f)(j),Object(s.g)(a,"wide computer"),Object(s.g)(b,"wide large screen"),Object(s.g)(p,"wide mobile"),Object(s.g)(v,"wide tablet"),Object(s.g)(O,"wide widescreen"),Object(s.g)(E,"wide"),"column",n),w=Object(d.a)(m,e),x=Object(u.a)(m,e);return o.a.createElement(x,r()({},w,{className:y}),t)}m.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],m.propTypes={},m.create=Object(b.c)(m,function(e){return{children:e}});var p=m;function h(e){var t=e.centered,n=e.children,a=e.className,c=e.color,l=e.columns,b=e.divided,m=e.only,p=e.reversed,f=e.stretched,v=e.textAlign,g=e.verticalAlign,j=i()(c,Object(s.a)(t,"centered"),Object(s.a)(b,"divided"),Object(s.a)(f,"stretched"),Object(s.c)(m,"only"),Object(s.c)(p,"reversed"),Object(s.d)(v),Object(s.f)(g),Object(s.g)(l,"column",!0),"row",a),O=Object(d.a)(h,e),E=Object(u.a)(h,e);return o.a.createElement(E,r()({},O,{className:j}),n)}h.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],h.propTypes={};var f=h;function v(e){var t=e.celled,n=e.centered,a=e.children,c=e.className,l=e.columns,b=e.container,m=e.divided,p=e.doubling,h=e.inverted,f=e.padded,g=e.relaxed,j=e.reversed,O=e.stackable,E=e.stretched,y=e.textAlign,w=e.verticalAlign,x=i()("ui",Object(s.a)(n,"centered"),Object(s.a)(b,"container"),Object(s.a)(p,"doubling"),Object(s.a)(h,"inverted"),Object(s.a)(O,"stackable"),Object(s.a)(E,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(m,"divided"),Object(s.b)(f,"padded"),Object(s.b)(g,"relaxed"),Object(s.c)(j,"reversed"),Object(s.d)(y),Object(s.f)(w),Object(s.g)(l,"column",!0),"grid",c),A=Object(d.a)(v,e),k=Object(u.a)(v,e);return o.a.createElement(k,r()({},A,{className:x}),a)}v.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],v.Column=p,v.Row=f,v.propTypes={};t.a=v}}]);
//# sourceMappingURL=component---src-pages-404-tsx-822c966e2a4ad3ccbd1c.js.map