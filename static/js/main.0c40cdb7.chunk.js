(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(n,t,e){n.exports=e.p+"static/media/1.2eacad58.svg"},35:function(n,t,e){n.exports=e.p+"static/media/2.52a10234.svg"},36:function(n,t,e){n.exports=e.p+"static/media/3.45810387.svg"},37:function(n,t,e){n.exports=e.p+"static/media/4.7bea2ee9.svg"},38:function(n,t,e){n.exports=e.p+"static/media/5.677e1439.svg"},39:function(n,t,e){n.exports=e.p+"static/media/6.7fc7eb19.svg"},40:function(n,t,e){n.exports=e.p+"static/media/7.e8e9b451.svg"},41:function(n,t,e){n.exports=e.p+"static/media/01.ea35e2c4.png"},42:function(n,t,e){n.exports=e.p+"static/media/02.ea35e2c4.png"},43:function(n,t,e){n.exports=e.p+"static/media/03.ea35e2c4.png"},44:function(n,t,e){n.exports=e.p+"static/media/Aileron-Regular.d321fa78.otf"},45:function(n,t,e){n.exports=e.p+"static/media/BIG JOHN.aa3a0087.otf"},46:function(n,t,e){n.exports=e.p+"static/media/Finland Rounded Thin.68077ca3.otf"},48:function(n,t,e){n.exports=e(60)},60:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(0),o=e.n(a),i=e(20),c=e.n(i),l=e(9),s=e(10),u=e(15),m=e(11),f=e(16),p=e(13),d=e(4),h=e(27),b=e(17),g=function(n){function t(n){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this,n))).state={layers:[]},e.handleMove=e.handleMove.bind(Object(b.a)(Object(b.a)(e))),e}return Object(f.a)(t,n),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.rootElemWidth=this.root.clientWidth||this.root.offsetWidth||this.root.scrollWidth,this.rootElemHeight=this.root.clientHeight||this.root.offsetHeight||this.root.scrollHeight}},{key:"allLayers",value:function(){return o.a.Children.map(this.props.children,function(n){return n})}},{key:"handleMove",value:function(n){var t=n.pageX,e=n.pageY,r=this.allLayers().filter(function(n){return!n.props["data-staticlayer"]}),a=r?this.allLayers.length:0,o=document.body.scrollTop||document.getElementsByTagName("html")[0].scrollTop,i=document.body.scrollLeft,c=this.root.getBoundingClientRect(),l=300/this.rootElemWidth,s=500/this.rootElemWidth,u=.52-(t-c.left-i)/this.rootElemWidth,m=.52-(e-c.top-o)/this.rootElemHeight;this.setState({layers:r.map(function(n,t){return{transform:"\n          translateX(".concat(function(n){return u*(a-n)*(n/l)}(t),"px)\n          translateY(").concat(function(n){return m*(a-n)*(n/s)}(t),"px)\n        ")}})})}},{key:"render",value:function(){var n=this,t=this.allLayers();return o.a.createElement("div",{style:Object(h.a)({WebkitTapHighlightColor:"rgba(#000, 0)"},this.props.style?this.props.style:{}),onMouseMove:this.handleMove,onMouseLeave:function(){return n.setState({layers:[]})},ref:function(t){return n.root=t}},o.a.createElement("div",{style:{position:"relative",width:"100%",height:"100%",overflow:"hidden"}},t&&t.map(function(t,e){return o.a.Children.map(t,function(t){return o.a.cloneElement(t,{style:Object(h.a)({objectFit:"contain",WebkitTapHighlightColor:"rgba(#000, 0)"},n.props.style?n.props.style:{},{position:"absolute",width:"104%",height:"104%",top:"-2%",left:"-2%",transition:"all 0.1s ease-out"},n.state.layers[e]?n.state.layers[e]:{},t.props.style),key:e})})})))}}]),t}(o.a.Component);function v(){var n=Object(r.a)(["\n    @media (max-width: ","em) {\n      ","\n    }\n  "]);return v=function(){return n},n}var y={red:"#E1605F",grey:"#DFDFDF",blue:"#020B3C"},E={desktop:1024,tablet:768,phoneL:425,phoneM:375,phoneS:320},j=Object.keys(E).reduce(function(n,t){return n[t]=function(){return Object(d.b)(v(),E[t]/16,d.b.apply(void 0,arguments))},n},{}),O=e(18),x=e(19),k=e.n(x),w=e(34),z=e.n(w),L=e(35),F=e.n(L),H=e(36),C=e.n(H),M=e(37),P=e.n(M),W=e(38),D=e.n(W),R=e(39),T=e.n(R),B=e(40),S=e.n(B),X=e(41),A=e.n(X),Y=e(42),I=e.n(Y),J=e(43),N=e.n(J);function V(){var n=Object(r.a)(['\n  position: relative;\n  ::after {\n    content: "";\n    position: absolute;\n    right: 0;\n    left: 0;\n    opacity: 0;\n    border-bottom: 2px solid;\n    transform: scaleX(0);\n    transition: transform .3s cubic-bezier(.4,0,.2,1),opacity .3s cubic-bezier(.4,0,.2,1);\n    bottom: -.625rem;\n  }\n\n  :hover::after {\n    opacity: 1;\n    transform: scaleX(1);\n  }\n']);return V=function(){return n},n}function U(){var n=Object(r.a)(["\n  color: ",";\n  margin: 0;\n  margin-bottom: 60px;\n  ","\n"]);return U=function(){return n},n}function q(){var n=Object(r.a)(["\n    font-size: 4rem;\n    padding: 10px 0;\n    display: block;\n  "]);return q=function(){return n},n}function G(){var n=Object(r.a)(["font-size: 4rem;"]);return G=function(){return n},n}function K(){var n=Object(r.a)(["\n  pointer-events: initial;\n  font-family: 'FinlandRounded';\n  margin: 0;\n  font-weight: normal;\n  color: ",";\n  display: inline-block;\n  padding: 0 20px;\n  font-size: 5rem;\n  ","\n  ","\n"]);return K=function(){return n},n}function $(){var n=Object(r.a)(["text-align: right;"]);return $=function(){return n},n}function Q(){var n=Object(r.a)(["\n  ","\n"]);return Q=function(){return n},n}function Z(){var n=Object(r.a)(["font-size: 3rem;"]);return Z=function(){return n},n}function _(){var n=Object(r.a)(["font-size: 4rem;"]);return _=function(){return n},n}function nn(){var n=Object(r.a)(["\n  pointer-events: initial;\n  font-family: 'BigJohn';\n  margin: 0;\n  font-weight: normal;\n  color: ",";\n  font-size: 5rem;\n  ","\n  ","\n"]);return nn=function(){return n},n}function tn(){var n=Object(r.a)(["\n  width: auto;\n  flex: 1;\n  float: right;\n  padding: 7vw;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return tn=function(){return n},n}function en(){var n=Object(r.a)(["\n  width: auto;\n  flex: 1;\n  float: left;\n  padding: 7vw;\n  box-sizing: border-box;\n  color: #DFDFDF;\n  font-size: 2rem;\n  background-color: ",";\n"]);return en=function(){return n},n}function rn(){var n=Object(r.a)(["\n  background-color: ",";\n"]);return rn=function(){return n},n}function an(){var n=Object(r.a)(["\n  width: 50%;\n  height: 100%;\n  display: inline-block;\n  background-color: ",";\n"]);return an=function(){return n},n}function on(){var n=Object(r.a)(["\n  height: 100%;\n  width: 100%;\n  background-color: ",";\n  padding: ",";\n  position: relative;\n  box-sizing: border-box;\n"]);return on=function(){return n},n}function cn(){var n=Object(r.a)(["\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  padding: 50px 0 150px;\n  width: 83.33333%;\n  margin: 0 auto;\n  min-height: calc(100vh - 200px);\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: flex-start;\n"]);return cn=function(){return n},n}function ln(){var n=Object(r.a)(["\n  height: 50vh\n"]);return ln=function(){return n},n}function sn(){var n=Object(r.a)(["flex-direction: column;"]);return sn=function(){return n},n}function un(){var n=Object(r.a)(["\n  height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  ","\n"]);return un=function(){return n},n}function mn(){var n=Object(r.a)(["\n  position: relative;\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  padding: 1rem;\n  cursor: pointer;\n  transform: translate3d(0,0,0) scaleX(1);\n\n  ","\n\n  ::before {\n    width: .5rem;\n    height: .5rem;\n    background: #fff;\n    transition: transform .5s cubic-bezier(.175,.885,.32,1.275),opacity .5s;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate3d(-50%,-50%,0);\n    display: block;\n    content: '';\n    border-radius: 50%;\n    ","\n  }\n\n  > div {\n    transition: transform .6s cubic-bezier(.175,.885,.32,1.275) 0s;\n    transform: scaleX(0);\n\n    ","\n\n    > span {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      display: block;\n      content: '';\n      width: 1.5rem;\n      height: 1.5rem;\n      border: 1px solid #fff;\n      transform: translate3d(-50%,-50%,0) scaleY(0);\n      transition: transform .5s cubic-bezier(.175,.885,.32,1.275), -webkit-transform .5s cubic-bezier(.175,.885,.32,1.275);\n      border-radius: 50%;\n\n      ","\n    }\n  }\n"]);return mn=function(){return n},n}function fn(){var n=Object(r.a)(["\n    left: 50%;\n    bottom: 10rem;\n    transform: translate3d(-50%,0,0);\n  "]);return fn=function(){return n},n}function pn(){var n=Object(r.a)(["\n  position: absolute;\n  left: 11rem;\n  bottom: 10.5rem;\n  z-index: 1;\n  transition: opacity .5s .3s;\n  ","\n"]);return pn=function(){return n},n}var dn=function(n){function t(){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this))).projects=[{key:"01",title:"Ratskin homepage",date:"2018",url:"https://ratsk.in/",image:A.a},{key:"02",title:"Voom",date:"2017",url:"https://voom.space/",image:I.a},{key:"03",title:"Thinkspace",date:"2018",url:"https://www.thinkspacehq.com/",image:N.a}],n.changeDot=function(t){n.setState({activeProject:t})},n.state={activeProject:n.projects[0]},n}return Object(f.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){var n=this,t=this.state.activeProject;return o.a.createElement("div",null,o.a.createElement(gn,{id:"home"},o.a.createElement(En,null,o.a.createElement(g,{style:{width:"100%",height:"100%",position:"absolute"}},o.a.createElement("img",{alt:"Part 1",src:z.a}),o.a.createElement("img",{alt:"Part 2",src:F.a}),o.a.createElement("img",{alt:"Part 3",src:C.a}),o.a.createElement("img",{alt:"Part 4",src:P.a}),o.a.createElement("img",{alt:"Part 5",src:D.a}),o.a.createElement("img",{alt:"Part 6",src:T.a}),o.a.createElement("img",{alt:"Part 7",src:S.a})),o.a.createElement(jn,null),o.a.createElement(On,null)),o.a.createElement(yn,null,o.a.createElement(O.HashLink,{smooth:!0,to:"#home"},o.a.createElement(wn,null,"Elliot",o.a.createElement("br",null),"Schep")),o.a.createElement(zn,null,o.a.createElement(O.HashLink,{smooth:!0,to:"#my-projects"},o.a.createElement(Ln,null,o.a.createElement(Hn,null,"My projects"))),o.a.createElement(O.HashLink,{smooth:!0,to:"#about"},o.a.createElement(Ln,null,o.a.createElement(Hn,null,"about"))),o.a.createElement(O.HashLink,{smooth:!0,to:"#resume"},o.a.createElement(Ln,null,o.a.createElement(Hn,null,"resume")))))),o.a.createElement(gn,{id:"about"},o.a.createElement(xn,null,o.a.createElement(k.a,{compressor:1.3},o.a.createElement(Fn,{color:y.grey},"I\u2019M A FULL-STACK DEVELOPER WHO CURRENTLY LIVES IN POLAND.")),o.a.createElement(k.a,{compressor:2},o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"I\u2019m also an independent, self-directed learner and Australian. Some of my interests are design & art, computer networking and sound recording / reproduction."),o.a.createElement("p",null,"You can contact me at ",o.a.createElement(Hn,{href:"mailto:elliot@ratsk.in"},"elliot@ratsk.in"))))),o.a.createElement(kn,null,o.a.createElement(k.a,{compressor:1.3},o.a.createElement(Fn,null,"Hello")))),o.a.createElement(vn,{id:"my-projects"},o.a.createElement(En,{color:y.red},o.a.createElement(k.a,{compressor:1},o.a.createElement(Fn,{color:y.grey,center:"horizontal"},"My projects")))),o.a.createElement(gn,{id:"project-examples"},o.a.createElement(En,{color:y.red},o.a.createElement(hn,null,this.projects.map(function(e){return o.a.createElement(bn,{active:t.key===e.key,onClick:function(){return n.changeDot(e)}},o.a.createElement("div",null,o.a.createElement("span",null)))})))))}}]),t}(o.a.Component),hn=d.c.div(pn(),j.phoneL(fn())),bn=d.c.div(mn(),function(n){return!n.active&&"\n    :hover {\n      ::before {\n        transform: translate3d(-50%,-50%,0) scale(.6);\n      }\n\n      > div {\n        transform: scaleX(.8);\n\n        > span {\n          transform: translate3d(-50%,-50%,0) scaleY(.8);\n        }\n      }\n    }\n  "},function(n){return n.active&&"\n      transform: translate3d(-50%,-50%,0) scale(0);\n      opacity: 0;\n    "},function(n){return n.active&&"\n      transform: scaleX(1);\n    "},function(n){return n.active&&"\n        transform: translate3d(-50%,-50%,0) scaleY(1);\n      "}),gn=d.c.section(un(),j.phoneL(sn())),vn=Object(d.c)(gn)(ln()),yn=d.c.div(cn()),En=d.c.div(on(),function(n){return n.color||""},function(n){return n.padding||"initial"}),jn=d.c.div(an(),y.red),On=Object(d.c)(jn)(rn(),y.grey),xn=Object(d.c)(jn)(en(),y.blue),kn=Object(d.c)(On)(tn()),wn=d.c.h1(nn(),y.blue,j.tablet(_()),j.phoneL(Z())),zn=d.c.div(Q(),j.phoneL($())),Ln=d.c.h2(K(),y.blue,j.tablet(G()),j.phoneL(q())),Fn=d.c.h1(U(),function(n){return n.color||y.blue},function(n){return"horizontal"===n.center&&"\n    position: absolute;\n    top: 50%;\n    transform: translate(0, -50%);\n  "}),Hn=d.c.a(V()),Cn=function(n){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,n),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{path:"/",component:dn}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Mn=e(30),Pn=e(44),Wn=e.n(Pn),Dn=e(45),Rn=e.n(Dn),Tn=e(46),Bn=e.n(Tn);function Sn(){var n=Object(r.a)(["\n  @font-face {\n     font-family: Aileron;\n     src: url('","') format('opentype');\n  }\n  @font-face {\n     font-family: BigJohn;\n     src: url('","') format('opentype');\n  }\n  @font-face {\n     font-family: FinlandRounded;\n     src: url('","') format('opentype');\n  }\n\n  :root {\n    font-size: 62.5%;\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    font-size: 1.6rem;\n    font-family: 'Aileron', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  a {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  * {\n    outline: none;\n    box-sizing: border-box;\n  }\n"]);return Sn=function(){return n},n}var Xn=Object(d.a)(Sn(),Wn.a,Rn.a,Bn.a);c.a.render(o.a.createElement(Mn.a,{basename:"/home"},o.a.createElement(o.a.Fragment,null,o.a.createElement(Cn,null),o.a.createElement(Xn,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[48,2,1]]]);
//# sourceMappingURL=main.0c40cdb7.chunk.js.map