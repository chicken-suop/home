(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(n,t,e){n.exports=e.p+"static/media/1.2eacad58.svg"},33:function(n,t,e){n.exports=e.p+"static/media/2.52a10234.svg"},34:function(n,t,e){n.exports=e.p+"static/media/3.45810387.svg"},35:function(n,t,e){n.exports=e.p+"static/media/4.7bea2ee9.svg"},36:function(n,t,e){n.exports=e.p+"static/media/5.677e1439.svg"},37:function(n,t,e){n.exports=e.p+"static/media/6.7fc7eb19.svg"},38:function(n,t,e){n.exports=e.p+"static/media/7.e8e9b451.svg"},39:function(n,t,e){n.exports=e.p+"static/media/Aileron-Regular.d321fa78.otf"},40:function(n,t,e){n.exports=e.p+"static/media/BIG JOHN.aa3a0087.otf"},41:function(n,t,e){n.exports=e.p+"static/media/Finland Rounded Thin.68077ca3.otf"},43:function(n,t,e){n.exports=e(55)},55:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(0),o=e.n(a),i=e(18),c=e.n(i),l=e(9),u=e(10),s=e(15),f=e(11),m=e(16),h=e(13),d=e(7),p=e(28),b=e(17),g=function(n){function t(n){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(f.a)(t).call(this,n))).state={layers:[]},e.handleMove=e.handleMove.bind(Object(b.a)(Object(b.a)(e))),e}return Object(m.a)(t,n),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.rootElemWidth=this.root.clientWidth||this.root.offsetWidth||this.root.scrollWidth,this.rootElemHeight=this.root.clientHeight||this.root.offsetHeight||this.root.scrollHeight}},{key:"allLayers",value:function(){return o.a.Children.map(this.props.children,function(n){return n})}},{key:"handleMove",value:function(n){var t=n.pageX,e=n.pageY,r=this.allLayers().filter(function(n){return!n.props["data-staticlayer"]}),a=r?this.allLayers.length:0,o=document.body.scrollTop||document.getElementsByTagName("html")[0].scrollTop,i=document.body.scrollLeft,c=this.root.getBoundingClientRect(),l=300/this.rootElemWidth,u=500/this.rootElemWidth,s=.52-(t-c.left-i)/this.rootElemWidth,f=.52-(e-c.top-o)/this.rootElemHeight;this.setState({layers:r.map(function(n,t){return{transform:"\n          translateX(".concat(function(n){return s*(a-n)*(n/l)}(t),"px)\n          translateY(").concat(function(n){return f*(a-n)*(n/u)}(t),"px)\n        ")}})})}},{key:"render",value:function(){var n=this,t=this.allLayers();return o.a.createElement("div",{style:Object(p.a)({WebkitTapHighlightColor:"rgba(#000, 0)"},this.props.style?this.props.style:{}),onMouseMove:this.handleMove,onMouseLeave:function(){return n.setState({layers:[]})},ref:function(t){return n.root=t}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"}},t&&t.map(function(t,e){return o.a.Children.map(t,function(t){return o.a.cloneElement(t,{style:Object(p.a)({objectFit:"contain",WebkitTapHighlightColor:"rgba(#000, 0)"},n.props.style?n.props.style:{},{position:"absolute",width:"104%",height:"104%",top:"-2%",left:"-2%",transition:"all 0.1s ease-out"},n.state.layers[e]?n.state.layers[e]:{},t.props.style),key:e})})})))}}]),t}(o.a.Component);function v(){var n=Object(r.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return v=function(){return n},n}var y={red:"#E1605F",grey:"#DFDFDF",blue:"#020B3C"},j={desktop:992,tablet:768,phone:576},E=Object.keys(j).reduce(function(n,t){return n[t]=function(){return Object(d.b)(v(),j[t]/16,d.b.apply(void 0,arguments))},n},{}),O=e(22),x=e(32),w=e.n(x),k=e(33),z=e.n(k),F=e(34),H=e.n(F),W=e(35),C=e.n(W),L=e(36),B=e.n(L),M=e(37),D=e.n(M),P=e(38),T=e.n(P);function J(){var n=Object(r.a)(["font-size: 6rem;"]);return J=function(){return n},n}function R(){var n=Object(r.a)(["font-size: 7rem;"]);return R=function(){return n},n}function A(){var n=Object(r.a)(["\n  color: ",";\n  font-size: 8rem;\n  ","\n  ","\n"]);return A=function(){return n},n}function I(){var n=Object(r.a)(["display: block;"]);return I=function(){return n},n}function S(){var n=Object(r.a)(["padding: 10px 0;"]);return S=function(){return n},n}function N(){var n=Object(r.a)(["font-size: 4rem;"]);return N=function(){return n},n}function X(){var n=Object(r.a)(["font-size: 4rem;"]);return X=function(){return n},n}function Y(){var n=Object(r.a)(["\n  pointer-events: initial;\n  font-family: 'FinlandRounded';\n  margin: 0;\n  font-weight: normal;\n  color: ",";\n  display: inline-block;\n  padding: 0 20px;\n  font-size: 5rem;\n  ","\n  ","\n  ","\n  ","\n"]);return Y=function(){return n},n}function G(){var n=Object(r.a)(["text-align: right;"]);return G=function(){return n},n}function $(){var n=Object(r.a)(["\n  ","\n"]);return $=function(){return n},n}function q(){var n=Object(r.a)(["font-size: 3rem;"]);return q=function(){return n},n}function K(){var n=Object(r.a)(["font-size: 4rem;"]);return K=function(){return n},n}function Q(){var n=Object(r.a)(["\n  pointer-events: initial;\n  font-family: 'BigJohn';\n  margin: 0;\n  font-weight: normal;\n  color: ",";\n  font-size: 5rem;\n  ","\n  ","\n"]);return Q=function(){return n},n}function U(){var n=Object(r.a)(["\n  float: right;\n  padding: 30px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return U=function(){return n},n}function V(){var n=Object(r.a)(["\n  float: left;\n  padding: 30px;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #DFDFDF;\n  font-size: 2rem;\n  background-color: ",";\n"]);return V=function(){return n},n}function Z(){var n=Object(r.a)(["\n  background-color: ",";\n"]);return Z=function(){return n},n}function _(){var n=Object(r.a)(["\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  background-color: ",";\n"]);return _=function(){return n},n}function nn(){var n=Object(r.a)(["\n  height: 100%;\n  width: 100%;\n"]);return nn=function(){return n},n}function tn(){var n=Object(r.a)(["\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 50px 0 150px;\n  width: 83.33333%;\n  margin: 0 auto;\n  min-height: calc(100vh - 200px);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n"]);return tn=function(){return n},n}function en(){var n=Object(r.a)(["\n  height: 100vh;\n  position: relative;\n"]);return en=function(){return n},n}var rn=function(n){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(an,{id:"home"},o.a.createElement(cn,null,o.a.createElement(g,{style:{width:"100%",height:"100%",position:"absolute"}},o.a.createElement("img",{alt:"Part 1",src:w.a}),o.a.createElement("img",{alt:"Part 2",src:z.a}),o.a.createElement("img",{alt:"Part 3",src:H.a}),o.a.createElement("img",{alt:"Part 4",src:C.a}),o.a.createElement("img",{alt:"Part 5",src:B.a}),o.a.createElement("img",{alt:"Part 6",src:D.a}),o.a.createElement("img",{alt:"Part 7",src:T.a})),o.a.createElement(ln,null),o.a.createElement(un,null)),o.a.createElement(on,null,o.a.createElement(O.HashLink,{smooth:!0,to:"#home"},o.a.createElement(mn,null,"Elliot",o.a.createElement("br",null),"Schep")),o.a.createElement(hn,null,o.a.createElement(O.HashLink,{smooth:!0,to:"work"},o.a.createElement(dn,null,"work")),o.a.createElement(O.HashLink,{smooth:!0,to:"#about"},o.a.createElement(dn,null,"about")),o.a.createElement(dn,null,"resume")))),o.a.createElement(an,{id:"about"},o.a.createElement(cn,null,o.a.createElement(sn,null,"Full-stack developer with interests in design & art, computer networking and sound recording/reproduction.",o.a.createElement("br",null),o.a.createElement("br",null),"I\u2019m an independent, self-directed learner."),o.a.createElement(fn,null,o.a.createElement(pn,null,"About me.")))))}}]),t}(o.a.Component),an=d.c.section(en()),on=d.c.div(tn()),cn=d.c.div(nn()),ln=d.c.div(_(),y.red),un=Object(d.c)(ln)(Z(),y.grey),sn=Object(d.c)(ln)(V(),y.blue),fn=Object(d.c)(un)(U()),mn=d.c.h1(Q(),y.blue,E.tablet(K()),E.phone(q())),hn=d.c.div($(),E.phone(G())),dn=d.c.h2(Y(),y.blue,E.tablet(X()),E.phone(N()),E.phone(S()),E.phone(I())),pn=d.c.h1(A(),y.blue,E.tablet(R()),E.phone(J())),bn=function(n){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,n),Object(u.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{path:"/",component:rn}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var gn=e(27),vn=e(39),yn=e.n(vn),jn=e(40),En=e.n(jn),On=e(41),xn=e.n(On);function wn(){var n=Object(r.a)(["\n  @font-face {\n     font-family: Aileron;\n     src: url('","') format('opentype');\n  }\n  @font-face {\n     font-family: BigJohn;\n     src: url('","') format('opentype');\n  }\n  @font-face {\n     font-family: FinlandRounded;\n     src: url('","') format('opentype');\n  }\n\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    font-family: 'Aileron', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n"]);return wn=function(){return n},n}var kn=Object(d.a)(wn(),yn.a,En.a,xn.a);c.a.render(o.a.createElement(gn.a,{basename:"/home"},o.a.createElement(o.a.Fragment,null,o.a.createElement(bn,null),o.a.createElement(kn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[43,2,1]]]);
//# sourceMappingURL=main.b8e6907c.chunk.js.map