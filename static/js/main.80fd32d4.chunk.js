(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),i=a(53),s=a.n(i),o=(a(65),a(54)),u=a(55),l=a(56),c=a(59),m=a(57),h=a(58),d=a(4),p=(a(66),a(21)),f=a.n(p);f.a.initializeApp({apiKey:"AIzaSyAgSfLzOQkWaCrt7ycNcnWhAxt9JyFR_cc",authDomain:"fun-food-friends-a5658.firebaseapp.com",databaseURL:"https://fun-food-friends-a5658.firebaseio.com",projectId:"fun-food-friends-a5658",storageBucket:"fun-food-friends-a5658.appspot.com",messagingSenderId:"690487521270"});var b=new f.a.auth.GoogleAuthProvider,v=f.a.auth(),g=f.a,E=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).state={currentItem:"",username:"",items:[],user:null},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e.login=e.login.bind(Object(d.a)(Object(d.a)(e))),e.logout=e.logout.bind(Object(d.a)(Object(d.a)(e))),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(o.a)({},e.target.name,e.target.value))}},{key:"logout",value:function(){var e=this;v.signOut().then(function(){e.setState({user:null})})}},{key:"login",value:function(){var e=this;v.signInWithPopup(b).then(function(t){var a=t.user;e.setState({user:a})})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=g.database().ref("items"),a={title:this.state.currentItem,user:this.state.user.displayName||this.state.user.email};t.push(a),this.setState({currentItem:"",username:""})}},{key:"componentDidMount",value:function(){var e=this;v.onAuthStateChanged(function(t){t&&e.setState({user:t})}),g.database().ref("items").on("value",function(t){var a=t.val(),n=[];for(var r in a)n.push({id:r,title:a[r].title,user:a[r].user});e.setState({items:n})})}},{key:"removeItem",value:function(e){g.database().ref("/items/".concat(e)).remove()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Fun Food Friends"),this.state.user?r.a.createElement("button",{onClick:this.logout},"Logout"):r.a.createElement("button",{onClick:this.login},"Log In"))),this.state.user?r.a.createElement("div",null,r.a.createElement("div",{className:"user-profile"},r.a.createElement("img",{src:this.state.user.photoURL})),r.a.createElement("div",{className:"container"},r.a.createElement("section",{className:"add-item"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"username",placeholder:"What's your name?",value:this.state.user.displayName||this.state.user.email}),r.a.createElement("input",{type:"text",name:"currentItem",placeholder:"What are you bringing?",onChange:this.handleChange,value:this.state.currentItem}),r.a.createElement("button",null,"Add Item"))),r.a.createElement("section",{className:"display-item"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("ul",null,this.state.items.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("h3",null,t.title),r.a.createElement("p",null,"brought by: ",t.user,t.user===e.state.user.displayName||t.user===e.state.user.email?r.a.createElement("button",{onClick:function(){return e.removeItem(t.id)}},"Remove Item"):null))})))))):r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"You must be logged in to see the potluck list and submit to it.")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e,t,a){e.exports=a(120)},65:function(e,t,a){},66:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.80fd32d4.chunk.js.map