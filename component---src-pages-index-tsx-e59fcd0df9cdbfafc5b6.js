(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{158:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(165),c=a(167),l=a(171),o=a(487),s=a(480),d=a(485),u=(a(189),a(73)),m=a.n(u),p=a(173),b=a.n(p),h=a(174),v=a.n(h),f=a(175),O=a.n(f),j=a(176),g=a.n(j),E=a(177),y=a.n(E),x=a(35),w=a.n(x),N=a(34),k=a.n(N),A=a(179),q=a.n(A),C=a(193),P=a.n(C),T=a(160),L=a.n(T),S=(a(4),a(159)),I=a(191),R=a(258),G=a(259),z=a(278),D=a(247),V=a(297);function B(e){var t=e.children,a=e.className,n=e.content,r=e.hidden,c=e.visible,l=L()(Object(I.a)(c,"visible"),Object(I.a)(r,"hidden"),"content",a),o=Object(R.a)(B,e),s=Object(G.a)(B,e);return i.a.createElement(s,m()({},o,{className:l}),S.a.isNil(t)?n:t)}B.handledProps=["as","children","className","content","hidden","visible"],B.propTypes={};var J=B,K=a(206),H=a.n(K);function W(e){var t=e.attached,a=e.basic,n=e.buttons,r=e.children,c=e.className,l=e.color,o=e.compact,s=e.content,d=e.floated,u=e.fluid,p=e.icon,b=e.inverted,h=e.labeled,v=e.negative,f=e.positive,O=e.primary,j=e.secondary,g=e.size,E=e.toggle,y=e.vertical,x=e.widths,w=L()("ui",l,g,Object(I.a)(a,"basic"),Object(I.a)(o,"compact"),Object(I.a)(u,"fluid"),Object(I.a)(p,"icon"),Object(I.a)(b,"inverted"),Object(I.a)(h,"labeled"),Object(I.a)(v,"negative"),Object(I.a)(f,"positive"),Object(I.a)(O,"primary"),Object(I.a)(j,"secondary"),Object(I.a)(E,"toggle"),Object(I.a)(y,"vertical"),Object(I.b)(t,"attached"),Object(I.e)(d,"floated"),Object(I.g)(x),"buttons",c),N=Object(R.a)(W,e),k=Object(G.a)(W,e);return P()(n)?i.a.createElement(k,m()({},N,{className:w}),S.a.isNil(r)?s:r):i.a.createElement(k,m()({},N,{className:w}),H()(n,function(e){return Q.create(e)}))}W.handledProps=["as","attached","basic","buttons","children","className","color","compact","content","floated","fluid","icon","inverted","labeled","negative","positive","primary","secondary","size","toggle","vertical","widths"],W.propTypes={};var _=W;function F(e){var t=e.className,a=e.text,n=L()("or",t),r=Object(R.a)(F,e),c=Object(G.a)(F,e);return i.a.createElement(c,m()({},r,{className:n,"data-text":a}))}F.handledProps=["as","className","text"],F.propTypes={};var M=F,U=function(e){function t(){var e,a;b()(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return a=O()(this,(e=g()(t)).call.apply(e,[this].concat(i))),k()(w()(w()(a)),"computeElementType",function(){var e=a.props,t=e.attached,n=e.label;if(!P()(t)||!P()(n))return"div"}),k()(w()(w()(a)),"computeTabIndex",function(e){var t=a.props,n=t.disabled,i=t.tabIndex;return P()(i)?n?-1:"div"===e?0:void 0:i}),k()(w()(w()(a)),"focus",function(){return q()(a.ref,"focus")}),k()(w()(w()(a)),"handleClick",function(e){a.props.disabled?e.preventDefault():q()(a.props,"onClick",e,a.props)}),k()(w()(w()(a)),"handleRef",function(e){return a.ref=e}),k()(w()(w()(a)),"hasIconClass",function(){var e=a.props,t=e.labelPosition,n=e.children,i=e.content,r=e.icon;return!0===r||r&&(t||S.a.isNil(n)&&P()(i))}),a}return y()(t,e),v()(t,[{key:"render",value:function(){var e=this.props,a=e.active,n=e.animated,r=e.attached,c=e.basic,l=e.children,o=e.circular,s=e.className,d=e.color,u=e.compact,p=e.content,b=e.disabled,h=e.floated,v=e.fluid,f=e.icon,O=e.inverted,j=e.label,g=e.labelPosition,E=e.loading,y=e.negative,x=e.positive,w=e.primary,N=e.secondary,k=e.role,A=e.size,q=e.toggle,C=L()(d,A,Object(I.a)(a,"active"),Object(I.a)(c,"basic"),Object(I.a)(o,"circular"),Object(I.a)(u,"compact"),Object(I.a)(v,"fluid"),Object(I.a)(this.hasIconClass(),"icon"),Object(I.a)(O,"inverted"),Object(I.a)(E,"loading"),Object(I.a)(y,"negative"),Object(I.a)(x,"positive"),Object(I.a)(w,"primary"),Object(I.a)(N,"secondary"),Object(I.a)(q,"toggle"),Object(I.b)(n,"animated"),Object(I.b)(r,"attached")),T=L()(Object(I.b)(g||!!j,"labeled")),z=L()(Object(I.a)(b,"disabled"),Object(I.e)(h,"floated")),B=Object(R.a)(t,this.props),J=Object(G.a)(t,this.props,this.computeElementType),K=this.computeTabIndex(J);if(!P()(j)){var H=L()("ui",C,"button",s),W=L()("ui",T,"button",s,z),_=V.a.create(j,{defaultProps:{basic:!0,pointing:"left"===g?"right":"left"},autoGenerateKey:!1});return i.a.createElement(J,m()({},B,{className:W,onClick:this.handleClick}),"left"===g&&_,i.a.createElement("button",{className:H,disabled:b,ref:this.handleRef,tabIndex:K},D.a.create(f,{autoGenerateKey:!1})," ",p),("right"===g||!g)&&_)}var F=L()("ui",C,z,T,"button",s),M=!S.a.isNil(l);return i.a.createElement(J,m()({},B,{className:F,disabled:b&&"button"===J||void 0,onClick:this.handleClick,ref:this.handleRef,role:k,tabIndex:K}),M&&l,!M&&D.a.create(f,{autoGenerateKey:!1}),!M&&p)}}]),t}(n.Component);k()(U,"defaultProps",{as:"button",role:"button"}),k()(U,"Content",J),k()(U,"Group",_),k()(U,"Or",M),k()(U,"handledProps",["active","animated","as","attached","basic","children","circular","className","color","compact","content","disabled","floated","fluid","icon","inverted","label","labelPosition","loading","negative","onClick","positive","primary","role","secondary","size","tabIndex","toggle"]),U.propTypes={},U.create=Object(z.c)(U,function(e){return{content:e}});var Q=U,X=a(298);t.default=Object(l.b)(function(e){return n.createElement("div",null,n.createElement(o.a,{vertical:!0,inverted:!0,textAlign:"center",className:"masthead"},n.createElement(c.a,{Link:r.a,pathname:e.location.pathname,items:l.a,inverted:!0}),n.createElement(s.a,{text:!0},n.createElement(d.a,{inverted:!0,as:"h1"},"Gatsby 2.0 - Starter kit"),n.createElement(d.a,{inverted:!0,as:"h2"},"Typescript - Jest - Semantic UI"),n.createElement(Q,{primary:!0,size:"huge"},"Get started!"))),n.createElement(o.a,{vertical:!0,className:"stripe"},n.createElement(X.a,{stackable:!0,verticalAlign:"middle",className:"container"},n.createElement(X.a.Row,null,n.createElement(X.a.Column,{width:"8"},n.createElement(d.a,null,"Lorem ipsum"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),n.createElement(d.a,null,"Dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio.")),n.createElement(X.a.Column,{width:"6",floated:"right"},n.createElement(d.a,null,"Lorem ipsum"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."),n.createElement(d.a,null,"Dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laudantium ad, quae, perspiciatis ipsa distinctio."))))),n.createElement(o.a,{vertical:!0,className:"stripe alternate feature"},n.createElement(X.a,{columns:"3",textAlign:"center",divided:!0,relaxed:!0,stackable:!0,className:"container"},n.createElement(X.a.Row,null,n.createElement(X.a.Column,null,n.createElement(d.a,{icon:!0},n.createElement(D.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),n.createElement(X.a.Column,null,n.createElement(d.a,{icon:!0},n.createElement(D.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat.")),n.createElement(X.a.Column,null,n.createElement(d.a,{icon:!0},n.createElement(D.a,{name:"wizard"}),"A kind of magic!"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas eaque at quae cupiditate aspernatur quibusdam! Distinctio quod non, harum dolorum earum molestias, beatae expedita aliquam dolorem asperiores nemo amet quaerat."))))))})},163:function(e,t,a){var n;e.exports=(n=a(169))&&n.default||n},164:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return c});a(33);var n=a(180),i=a(182),r=function(){return{type:"TOGGLE_SIDEBAR"}},c=Object(n.createStore)(function(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{isSidebarVisible:!e.isSidebarVisible});default:return e}},{isSidebarVisible:!1},Object(i.devToolsEnhancer)({}))},165:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(4),c=a.n(r),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a});a(163),i.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},167:function(e,t,a){"use strict";a(168),a(166);var n=a(0),i=a(162),r=a(164),c=a(480),l=a(484),o=a(170),s=a.n(o);t.a=Object(i.b)()(function(e){var t=e.items,a=e.pathname,i=e.Link,o=e.inverted,d=e.dispatch;return n.createElement(c.a,null,n.createElement(l.a,{size:"large",pointing:!0,secondary:!0,inverted:o},n.createElement(l.a.Item,{as:"a",className:"mobile only",icon:"sidebar",onClick:function(){return d&&d(Object(r.b)())}}),n.createElement(l.a.Item,{className:"mobile hidden"},n.createElement("img",{src:s.a,alt:"Logo"})),t.map(function(e){var t=e.exact?a===e.path:a.startsWith(e.path);return n.createElement(l.a.Item,{as:i,className:"mobile hidden",name:e.name,to:e.path,key:e.path,active:t})})))})},169:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a.n(n),r=a(4),c=a.n(r),l=a(54),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},170:function(e,t,a){e.exports=a.p+"static/Shaper-f6f1be2ec1037b98b6a22fea4534c6b6.png"},171:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(165),c=a(0),l=a(167),o=(a(168),a(74),a(166),a(162)),s=a(486),d=a(484),u=a(247),m=Object(o.b)(function(e){return{visible:e.isSidebarVisible}})(function(e){var t=e.items,a=e.pathname,n=e.Link,i=e.visible,r=function(e){return e.exact?a===e.path:a.startsWith(e.path)},l=t.find(function(e){return r(e)})||{};return c.createElement(s.a,{as:d.a,animation:"slide along",width:"thin",visible:i,icon:"labeled",vertical:!0,inverted:l.inverted},t.map(function(e){var t=r(e);return c.createElement(d.a.Item,{as:n,to:e.path,active:t,key:e.path},c.createElement(u.a,{name:e.icon}),e.name)}))}),p=a(487),b=a(480),h=(a(183),a(184),a(185),a(186),a(164));a.d(t,"a",function(){return v}),a.d(t,"b",function(){return O});var v=[{name:"Home",path:"/",exact:!0},{name:"TME Pictures",path:"/pictures/",exact:!0},{name:"Community",path:"/community/",exact:!1},{name:"News",path:"/news/",exact:!1},{name:"Shop",path:"/shop/",exact:!1},{name:"Origins",path:"/origins/",exact:!1},{name:"Book",path:"/book/",exact:!1},{name:"Game Sign-up",path:"/blog/",exact:!1}],f=function(e){var t=e.location.pathname,a="/"===t;return c.createElement(o.a,{store:h.a},c.createElement(s.a.Pushable,{as:p.a},c.createElement(m,{Link:r.a,pathname:t,items:v,visible:!1}),c.createElement(s.a.Pusher,{style:{minHeight:"100vh"}},a?null:c.createElement(l.a,{Link:r.a,pathname:t,items:v}),c.createElement("div",{style:{paddingBottom:60}},e.children),c.createElement(p.a,{inverted:!0,vertical:!0,style:{position:"absolute",bottom:0,width:"100%"}},c.createElement(b.a,{textAlign:"center"},c.createElement("p",null,"Powered with ",c.createElement(u.a,{name:"heart"})," by Gatsby 2.0"))))))},O=function(e){return function(t){function a(){return t.apply(this,arguments)||this}return i()(a,t),a.prototype.render=function(){return c.createElement(f,{location:this.props.location},c.createElement(e,this.props))},a}(c.Component)}},189:function(e,t,a){var n=a(207),i=a(208),r=a(209);e.exports=function(e){return n(e)||i(e)||r()}},207:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}},208:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},209:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},298:function(e,t,a){"use strict";a(189);var n=a(73),i=a.n(n),r=a(160),c=a.n(r),l=(a(4),a(0)),o=a.n(l),s=a(191),d=a(258),u=a(259),m=a(278);function p(e){var t=e.children,a=e.className,n=e.computer,r=e.color,l=e.floated,m=e.largeScreen,b=e.mobile,h=e.only,v=e.stretched,f=e.tablet,O=e.textAlign,j=e.verticalAlign,g=e.widescreen,E=e.width,y=c()(r,Object(s.a)(v,"stretched"),Object(s.c)(h,"only"),Object(s.d)(O),Object(s.e)(l,"floated"),Object(s.f)(j),Object(s.g)(n,"wide computer"),Object(s.g)(m,"wide large screen"),Object(s.g)(b,"wide mobile"),Object(s.g)(f,"wide tablet"),Object(s.g)(g,"wide widescreen"),Object(s.g)(E,"wide"),"column",a),x=Object(d.a)(p,e),w=Object(u.a)(p,e);return o.a.createElement(w,i()({},x,{className:y}),t)}p.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],p.propTypes={},p.create=Object(m.c)(p,function(e){return{children:e}});var b=p;function h(e){var t=e.centered,a=e.children,n=e.className,r=e.color,l=e.columns,m=e.divided,p=e.only,b=e.reversed,v=e.stretched,f=e.textAlign,O=e.verticalAlign,j=c()(r,Object(s.a)(t,"centered"),Object(s.a)(m,"divided"),Object(s.a)(v,"stretched"),Object(s.c)(p,"only"),Object(s.c)(b,"reversed"),Object(s.d)(f),Object(s.f)(O),Object(s.g)(l,"column",!0),"row",n),g=Object(d.a)(h,e),E=Object(u.a)(h,e);return o.a.createElement(E,i()({},g,{className:j}),a)}h.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],h.propTypes={};var v=h;function f(e){var t=e.celled,a=e.centered,n=e.children,r=e.className,l=e.columns,m=e.container,p=e.divided,b=e.doubling,h=e.inverted,v=e.padded,O=e.relaxed,j=e.reversed,g=e.stackable,E=e.stretched,y=e.textAlign,x=e.verticalAlign,w=c()("ui",Object(s.a)(a,"centered"),Object(s.a)(m,"container"),Object(s.a)(b,"doubling"),Object(s.a)(h,"inverted"),Object(s.a)(g,"stackable"),Object(s.a)(E,"stretched"),Object(s.b)(t,"celled"),Object(s.b)(p,"divided"),Object(s.b)(v,"padded"),Object(s.b)(O,"relaxed"),Object(s.c)(j,"reversed"),Object(s.d)(y),Object(s.f)(x),Object(s.g)(l,"column",!0),"grid",r),N=Object(d.a)(f,e),k=Object(u.a)(f,e);return o.a.createElement(k,i()({},N,{className:w}),n)}f.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],f.Column=b,f.Row=v,f.propTypes={};t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-tsx-e59fcd0df9cdbfafc5b6.js.map