(this.webpackJsonpgo=this.webpackJsonpgo||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n.n(c),a=n(3),o=n.n(a),i=(n(13),n(4)),u=n(5),h=n(7),j=n(6);n(14),n(15);function l(e){var t=e.monster;return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(s.jsx)("h2",{children:t.name})]})}n(16);function d(e){var t=e.monsters;return Object(s.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(s.jsx)(l,{monster:e},e.id)}))})}n(17);var f=function(e){return Object(s.jsx)("input",{className:"search-bar",type:"search",placeholder:"search monsters",value:e.value,onChange:e.onChange})},m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).onChange=function(e){s.setState({searchText:e.target.value})},s.state={monsters:[],searchText:""},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchText,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Monsters Hut"}),Object(s.jsx)(f,{value:this.state.searchText,onChange:this.onChange}),Object(s.jsx)(d,{monsters:c})]})}}]),n}(c.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.33937431.chunk.js.map