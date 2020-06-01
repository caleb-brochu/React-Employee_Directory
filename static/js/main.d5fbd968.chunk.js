(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Mike","team":"Sales","tenure":3,"email":"Mike@mail.com","occupation":"Salesperson","location":"New York City"},{"id":2,"name":"Joe","team":"Finance","tenure":20,"email":"Joe@mail.com","occupation":"Accountant","location":"Pennsylvania"},{"id":3,"name":"Bill","team":"Engineering","tenure":15,"email":"Bill@mail.com","occupation":"Engineer","location":"Seattle"},{"id":4,"name":"Christina","team":"Quality","tenure":5,"email":"Christina@mail.com","occupation":"Quality Assurance Engineer","location":"Seattle"},{"id":5,"name":"Caitlin","team":"HR","tenure":1,"email":"Caitlin@mail.com","occupation":"Personeel Coordinator","location":"Lynnwood"},{"id":6,"name":"Alex","team":"Engineering","tenure":3,"email":"Alex@mail.com","occupation":"Engineer Manager","location":"Redmond"},{"id":7,"name":"Ben","team":"Sales","tenure":4,"email":"Ben@mail.com","occupation":"Sales Manager","location":"Seattle"},{"id":8,"name":"Todd","team":"Operations","tenure":20,"email":"Todd@mail.com","occupation":"Planner","location":"Redmond"},{"id":9,"name":"Matt","team":"Operations","tenure":7,"email":"Matt@mail.com","occupation":"Operationg Director","location":"Redmond"},{"id":10,"name":"Erica","team":"Supply Chain","tenure":2,"email":"Erica@mail.com","occupation":"Buyer","location":"Lynnwood"},{"id":11,"name":"Herman","team":"Engineering","tenure":30,"email":"Herman@mail.com","occupation":"Software Engineer","location":"Seattle"},{"id":12,"name":"Danny","team":"Facilities","tenure":12,"email":"Danny@mail.com","occupation":"Manager","location":"Lynnwood"}]')},,,,,,,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),o=t.n(r),i=(t(14),t(4)),c=t(5),m=t(6),u=t(8),s=t(7);t(15);var d=function(e){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"content"},l.a.createElement("h2",null,e.name),l.a.createElement("h4",null,e.occupation),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Team: "),e.team),l.a.createElement("li",null,l.a.createElement("strong",null,"Tenure: "),e.tenure),l.a.createElement("li",null,l.a.createElement("strong",null,"Location: "),e.location),l.a.createElement("li",null,l.a.createElement("strong",null,"Email: "),e.email))))};t(16);var h=function(e){return l.a.createElement("div",{className:"wrapper"},e.children)};t(17);var p=function(e){return l.a.createElement("h1",{className:"team-heading"},e.children)};t(18);var E=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Search by Team"),l.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Enter Team",id:"search"}),l.a.createElement("button",{onClick:e.handleFilterSubmit,className:"btn btn-primary"},"Filter"),l.a.createElement("button",{onClick:e.handleFilterClear,className:"btn btn-primary"},"Clear Filter")))};t(19);var f=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"search"},"Sort by:"),l.a.createElement("br",null),l.a.createElement("button",{onClick:e.handleSortName,className:"btn btn-primary"},"Name"),l.a.createElement("button",{onClick:e.handleSortTenure,className:"btn btn-primary"},"Tenure"),l.a.createElement("button",{onClick:e.handleSortLocation,className:"btn btn-primary"},"Location")))},y=t(1),v=function(e){Object(u.a)(t,e);var a=Object(s.a)(t);function t(){var e;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={employees:y},e.handleInputChange=function(a){var t=a.target.value,n=a.target.name;e.setState(Object(i.a)({},n,t))},e.handleFilterSubmit=function(a){a.preventDefault(),e.filterTeam(e.state.search)},e.handleFilterClear=function(a){a.preventDefault(),e.setState({employees:y})},e.filterTeam=function(a){var t=e.state.employees.filter((function(e){return e.team===a}));e.setState({employees:t})},e.handleSortName=function(a){a.preventDefault();var t=e.state.employees.sort((function(e,a){return e.name.localeCompare(a.name)}));e.setState({employees:t})},e.handleSortTenure=function(a){a.preventDefault();var t=e.state.employees.sort((function(e,a){return e.tenure-a.tenure}));e.setState({employees:t})},e.handleSortLocation=function(a){a.preventDefault();var t=e.state.employees.sort((function(e,a){return e.location.localeCompare(a.location)}));e.setState({employees:t})},e}return Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null,"Employee Directory"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(E,{value:this.state.search,handleInputChange:this.handleInputChange,handleFilterSubmit:this.handleFilterSubmit,handleFilterClear:this.handleFilterClear})),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(f,{value:this.state.search,handleSortName:this.handleSortName,handleSortTenure:this.handleSortTenure,handleSortLocation:this.handleSortLocation})))),l.a.createElement(h,null," ",this.state.employees.map((function(e){return l.a.createElement(d,{id:e.id,key:e.id,name:e.name,team:e.team,email:e.email,tenure:e.tenure,occupation:e.occupation,location:e.location})}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d5fbd968.chunk.js.map