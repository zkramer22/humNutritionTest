(window["webpackJsonphum-test"]=window["webpackJsonphum-test"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),c=n.n(i),l=(n(15),n(9)),s=n(8),d=n(1),o=n(2),u=n(4),m=n(3),f=n(5),h=(n(16),function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.handleChange,n=e.name,a=e.age,i=e.nextForm;return r.a.createElement("form",{id:"user-form"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{placeholder:"Name",name:"name",value:n,onChange:function(e){return t(e)}})),r.a.createElement("div",{className:"column"},r.a.createElement("label",null,"Age:"),r.a.createElement("input",{placeholder:"Age",type:"number",name:"age",value:a,onChange:function(e){return t(e)}}))),r.a.createElement("div",{className:"row",id:"next"},r.a.createElement("button",{onClick:function(e){return i(e)}},"NEXT")))}}]),t}(r.a.Component)),p=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.friends,n=e.deleteFriend;return r.a.createElement("ul",{id:"friend-list"},t.map(function(e,t){return r.a.createElement("li",{key:t,className:"row"},r.a.createElement("span",{className:"friend"}," ",e),r.a.createElement("button",{className:"delete-friend",onClick:n(t)},"-"))}))}}]),t}(r.a.Component),v=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.friend,n=e.friends,a=e.addFriend,i=e.deleteFriend,c=e.handleChange,l=e.handleSubmit;return r.a.createElement("form",{id:"friend-form",className:"hidden"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("label",null,"Friend Name:"))),r.a.createElement("div",{className:"row"},r.a.createElement("input",{className:"zero-margin",placeholder:"friend",name:"friend",value:t,onChange:function(e){return c(e)}}),r.a.createElement("button",{className:"zero-margin",onClick:function(e){return a(e)}},"+")),r.a.createElement(p,{friends:n,deleteFriend:i}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:function(e){return l(e)}},"SUBMIT")))}}]),t}(r.a.Component),E=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.age,a=e.friends,i=e.startOver;return r.a.createElement("div",{id:"data",className:"hidden"},r.a.createElement("p",null,"name: ",t),r.a.createElement("p",null,"age: ",n),r.a.createElement("p",null,r.a.createElement("strong",null,"Friends:")),a.map(function(e,t){return r.a.createElement("p",{key:t},"Friend #",t,": ",e)}),r.a.createElement("button",{className:"zero-margin",onClick:i},"Start Over"))}}]),t}(r.a.Component),b=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState(Object(s.a)({},e.target.name,e.target.value))},n.nextForm=function(e){e.preventDefault(),document.getElementById("user-form").classList.add("hidden"),document.getElementById("friend-form").classList.remove("hidden")},n.addFriend=function(e){e.preventDefault();var t=n.state.friend;n.setState({friend:"",friends:[].concat(Object(l.a)(n.state.friends),[t])})},n.deleteFriend=function(e){return function(t){t.preventDefault();var a=n.state.friends;a.splice(e,1),n.setState({friends:a})}},n.handleSubmit=function(e){e.preventDefault(),n.displayData()},n.startOver=function(e){e.preventDefault(),n.setState({name:"",age:"",friend:"",friends:[]}),document.getElementById("data").classList.add("hidden"),document.getElementById("user-form").classList.remove("hidden")},n.state={name:"",age:"",friend:"",friends:[]},n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"displayData",value:function(){document.getElementById("friend-form").classList.add("hidden"),document.getElementById("data").classList.remove("hidden")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(h,{name:this.state.name,age:this.state.age,nextForm:function(t){return e.nextForm(t)},handleChange:function(t){return e.handleChange(t)}}),r.a.createElement(v,{friend:this.state.friend,friends:this.state.friends,handleChange:function(t){return e.handleChange(t)},addFriend:function(t){return e.addFriend(t)},deleteFriend:function(t){return e.deleteFriend(t)},handleSubmit:function(t){return e.handleSubmit(t)}}),r.a.createElement(E,{name:this.state.name,age:this.state.age,friends:this.state.friends,startOver:function(t){return e.startOver(t)}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.25996e72.chunk.js.map