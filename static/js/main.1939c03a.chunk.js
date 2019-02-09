(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(31)},17:function(e,t,a){},19:function(e,t,a){},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(5),c=a.n(r),i=(a(17),a(6)),s=a(7),o=a(10),u=a(8),m=a(9),d=a(1),f=(a(19),function(){return l.a.createElement("header",{role:"banner"},l.a.createElement("div",{className:"has-flex"},l.a.createElement("div",{className:"is-not-flexed"},l.a.createElement("h1",null,"Starfinder GM Tools")),l.a.createElement("div",{className:"is-flexed"},l.a.createElement("div",{className:"version"},"v0.1.0"))))}),h=a(2),E=a.n(h),b=a(3),v=(a(23),function(e){e.preventDefault();var t=e.target.getAttribute("data-value"),a=document.querySelector("#number-of-die").value;document.querySelector(".dice-result .result").innerHTML=(Math.floor(Math.random()*parseInt(t,10))+1)*parseInt(a,10)}),p=function(){return l.a.createElement("div",null,l.a.createElement("h2",{id:"dice"},"Dice roller"),l.a.createElement("form",null,l.a.createElement("label",null,"Number of die:",l.a.createElement("input",{type:"text",id:"number-of-die",defaultValue:"1",maxLength:"2"})),l.a.createElement("div",{className:"dice-options"},l.a.createElement("button",{className:"die","aria-label":"4-sided","data-value":"4",onClick:function(e){return v(e)}},"d4"),l.a.createElement("button",{className:"die","aria-label":"6-sided","data-value":"6",onClick:function(e){return v(e)}},"d6"),l.a.createElement("button",{className:"die","aria-label":"8-sided","data-value":"8",onClick:function(e){return v(e)}},"d8"),l.a.createElement("button",{className:"die","aria-label":"10-sided","data-value":"10",onClick:function(e){return v(e)}},"d10"),l.a.createElement("button",{className:"die","aria-label":"12-sided","data-value":"12",onClick:function(e){return v(e)}},"d12"),l.a.createElement("button",{className:"die","aria-label":"20-sided","data-value":"20",onClick:function(e){return v(e)}},"d20"))),l.a.createElement("div",{className:"dice-result"},l.a.createElement("div",{className:"result"},"~")))},N=(a(25),function(){var e=Object(b.a)(E.a.mark(function e(t,a){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a();case 3:if(!(n=e.sent)||!n.length){e.next=7;break}return localStorage.setItem("__starfinder",JSON.stringify(n)),e.abrupt("return",alert("Saved!"));case 7:return e.abrupt("return",alert("No players to save."));case 8:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()),y=function(){var e=Object(b.a)(E.a.mark(function e(t,a){var n;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!(n=JSON.parse(localStorage.getItem("__starfinder")))||!n.length){e.next=5;break}return n.forEach(function(e){a(e)}),e.abrupt("return");case 5:return e.abrupt("return",alert("No player data to load."));case 6:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),w=function(e){var t=e.addPlayer,a=e.getPlayers,n=e.showNewSheet;return l.a.createElement("div",{className:"nav"},l.a.createElement("nav",{className:"has-radius","aria-labelledby":"tools"},l.a.createElement("h2",{id:"tools"},"Tools"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{className:"new-player",onClick:function(e){return n(e,!0)}},"New player")),l.a.createElement("li",null,l.a.createElement("button",{className:"new-note"},"New note"))),l.a.createElement("h2",null,"Save / Load"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("button",{onClick:function(e){return N(e,a)}},"Save")),l.a.createElement("li",null,l.a.createElement("button",{onClick:function(e){return y(e,t)}},"Load")))),l.a.createElement("div",{className:"dice"},l.a.createElement(p,null)))},x=(a(27),function(e){var t=e.addPlayer,a=e.showNewSheet;return l.a.createElement("div",{className:"new-sheet",tabIndex:"-1"},l.a.createElement("h2",null,"Create a new player"),l.a.createElement("form",null,l.a.createElement("div",{className:"has-flex"},l.a.createElement("label",{htmlFor:"realName",className:"is-not-flexed"},"Real name:"),l.a.createElement("input",{type:"text",id:"realName",className:"is-flexed"})),l.a.createElement("div",{className:"has-flex"},l.a.createElement("label",{htmlFor:"playerName",className:"is-not-flexed"},"Player name:"),l.a.createElement("input",{type:"text",id:"playerName",className:"is-flexed"})),l.a.createElement("div",{className:"has-flex"},l.a.createElement("div",{className:"is-flexed"},l.a.createElement("label",{htmlFor:"str","aria-label":"Strength"},"STR"),l.a.createElement("input",{type:"number",id:"str"})),l.a.createElement("div",{className:"is-flexed"},l.a.createElement("label",{htmlFor:"dex","aria-label":"Dexterity"},"DEX"),l.a.createElement("input",{type:"number",id:"dex"})),l.a.createElement("div",{className:"is-flexed"},l.a.createElement("label",{htmlFor:"con","aria-label":"Constitution"},"CON"),l.a.createElement("input",{type:"number",id:"con"})),l.a.createElement("div",{className:"is-flexed"},l.a.createElement("label",{htmlFor:"int","aria-label":"Intelligence"},"INT"),l.a.createElement("input",{type:"number",id:"int"})),l.a.createElement("div",{className:"is-flexed"},l.a.createElement("label",{htmlFor:"wis","aria-label":"Wisdom"},"WIS"),l.a.createElement("input",{type:"number",id:"wis"})),l.a.createElement("div",{className:"is-flexed"},l.a.createElement("label",{htmlFor:"cha","aria-label":"Charisma"},"CHA"),l.a.createElement("input",{type:"number",id:"cha"})))),l.a.createElement("p",null,l.a.createElement("em",null,"You will be able to add the additional details later.")),l.a.createElement("div",null,l.a.createElement("button",{onClick:function(e){return function(e,t){e.preventDefault();var a=document.querySelector(".new-sheet form"),n=Array.from(a.querySelectorAll("input")),l={},r=!1;return n.forEach(function(e){e.value?l[e.id]=e.value:r=!0}),r?alert("All player values are needed."):t(l)}(e,t)}},"Save player"),l.a.createElement("button",{onClick:function(e){return a(e,!1)}},"Cancel")))}),S=(a(29),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).state={players:[],toggleNewSheet:!1},e.addPlayer=e.addPlayer.bind(Object(d.a)(Object(d.a)(e))),e.getPlayers=e.getPlayers.bind(Object(d.a)(Object(d.a)(e))),e.showNewSheet=e.showNewSheet.bind(Object(d.a)(Object(d.a)(e))),e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"addPlayer",value:function(e){this.setState({players:this.state.players.concat(e),toggleNewSheet:!1})}},{key:"getPlayers",value:function(){var e=this;return new Promise(function(t){t(e.state.players)})}},{key:"showNewSheet",value:function(e,t){e.preventDefault(),this.setState({toggleNewSheet:t}),setTimeout(function(){t?document.querySelector(".new-sheet").focus():document.querySelector(".new-player").focus()},100)}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(f,null),l.a.createElement("div",{className:"has-flex"},l.a.createElement("div",{className:"is-not-flexed"},l.a.createElement(w,{addPlayer:this.addPlayer,getPlayers:this.getPlayers,showNewSheet:this.showNewSheet})),l.a.createElement("div",{className:"is-flexed"},this.state.toggleNewSheet?l.a.createElement(x,{showNewSheet:this.showNewSheet,addPlayer:this.addPlayer}):this.state.players.length?this.state.players.map(function(e,t){return l.a.createElement("div",{className:"player-card",key:t},l.a.createElement("h3",null,e.playerName),l.a.createElement("button",null,"View"),l.a.createElement("button",null,"Remove"))}):"Create a new player to get started.")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.1939c03a.chunk.js.map