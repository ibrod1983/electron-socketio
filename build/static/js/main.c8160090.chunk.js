(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(19),C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(20),C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(24),C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(21),C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(25),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(23),_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(28),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__),_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(78),_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8__),_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(57),_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(22),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__),_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(79),_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11__),_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(80),_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_12__),_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(81),_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__),_StringMessage__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(137),_NumberMessage__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(138),_ObjectMessage__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(139),styles=function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}},SendMessage=function(_React$Component){function SendMessage(){var _getPrototypeOf2,_this;Object(C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,SendMessage);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(SendMessage)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={event:"",message:"",tab:"String",error:!1},_this.onEventChange=function(e){var t=e.target.value;_this.setState({event:t})},_this.onMessageChange=function(e){var t=!1;"Object"===_this.state.tab&&(_this.isObject(e)||(t=!0));_this.setState({message:e,error:t})},_this.isObject=function(value){var evalResult;try{return eval("evalResult = ".concat(value)),"object"===typeof evalResult&&evalResult}catch(e){return!1}},_this.onSubmit=function(e){e.preventDefault();var value=_this.state.message;switch(_this.state.tab){case"Number":value=parseInt(value);break;case"Object":var evalResult;eval("evalResult = ".concat(value)),value=evalResult}_this.props.onSubmit(_this.state.event,value)},_this.handleTabChange=function(e){_this.setState({tab:e.target.value})},_this}return Object(C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(SendMessage,_React$Component),Object(C_Users_nesber_Desktop_electron_chat_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(SendMessage,[{key:"render",value:function(){var e=this.props.classes;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form",{className:e.root,onSubmit:this.onSubmit,autoComplete:"off"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a,{label:"Event name",required:!0,onChange:this.onEventChange,value:this.state.event,type:"text",fullWidth:!0,name:"event",margin:"dense",variant:"outlined"}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_11___default.a,{className:e.formControl},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_8___default.a,{htmlFor:"age-simple"},"Format"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default.a,{value:this.state.tab,onChange:this.handleTabChange,inputProps:{name:"age",id:"age-simple"}},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a,{value:"String"},"String"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a,{value:"Number"},"Number"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_9___default.a,{value:"Object"},"Object")),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_12___default.a,null,"Select the message formatting")),"String"===this.state.tab&&react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_StringMessage__WEBPACK_IMPORTED_MODULE_14__.a,{onChange:this.onMessageChange,value:this.state.message}),"Number"===this.state.tab&&react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_NumberMessage__WEBPACK_IMPORTED_MODULE_15__.a,{onChange:this.onMessageChange,value:this.state.message}),"Object"===this.state.tab&&react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ObjectMessage__WEBPACK_IMPORTED_MODULE_16__.a,{error:this.state.error,onChange:this.onMessageChange,value:this.state.message}),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a,{disabled:!this.props.connected||this.state.error,type:"submit",variant:"contained",color:"primary"},"Send"))}}]),SendMessage}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);__webpack_exports__.a=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__.withStyles)(styles)(SendMessage)},137:function(e,t,n){"use strict";var a=n(0),_=n.n(a),r=n(23),o=n.n(r);t.a=function(e){return _.a.createElement(o.a,{label:"Message",multiline:!0,rows:10,onChange:function(t){e.onChange(t.target.value)},value:e.value,type:"text",fullWidth:!0,name:"message",margin:"dense",variant:"outlined"})}},138:function(e,t,n){"use strict";var a=n(0),_=n.n(a),r=n(23),o=n.n(r);t.a=function(e){return _.a.createElement(o.a,{label:"Message",required:!0,onChange:function(t){e.onChange(t.target.value)},value:e.value,type:"number",fullWidth:!0,name:"message",margin:"dense",variant:"outlined"})}},139:function(e,t,n){"use strict";var a=n(0),_=n.n(a),r=n(23),o=n.n(r);t.a=function(e){return _.a.createElement(o.a,{label:"Object message",required:!0,error:e.error,multiline:!0,rows:10,onChange:function(t){e.onChange(t.target.value)},value:e.value,type:"text",fullWidth:!0,name:"message",margin:"dense",variant:"outlined"})}},146:function(e,t,n){e.exports=n(330)},228:function(e,t,n){},319:function(e,t){},330:function(e,t,n){"use strict";n.r(t);var a=n(0),_=n.n(a),r=n(16),o=n.n(r),i=n(145),c=n(18),s=n(56),l=n(19),u=n(20),m=n(24),E=n(21),d=n(25),p=n(142),h=n.n(p),g=n(143),b=n.n(g),O=n(144),v=n.n(O),f=n(15),M=n.n(f),D=n(127),C=n.n(D),P=n(126),y=n.n(P),S=function(e){return _.a.createElement("div",null,"{",Object.keys(e.object).map(function(t){return _.a.createElement("div",null,_.a.createElement("span",null,t,": "),_.a.createElement("span",null,e.object[t]))}),"}")},I=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("item rendering!",this.props),_.a.createElement(y.a,null,_.a.createElement(C.a,{style:{padding:"15px"}},_.a.createElement(M.a,{style:{float:"right"},color:"textSecondary",gutterBottom:!0},this.props.time),_.a.createElement(M.a,{color:"primary",gutterBottom:!0},this.props.owner?"Sent":"Received"," event: ",this.props.eventName),"object"!==typeof(e=this.props.data)||Array.isArray(e)?Array.isArray(e)?_.a.createElement("div",null,_.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Type: Array"),_.a.createElement(M.a,{variant:"h5",color:"textPrimary",gutterBottom:!0},"[",e.toString(),"]")):_.a.createElement("div",null,_.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Type: String"),_.a.createElement(M.a,{variant:"h5",color:"textPrimary",gutterBottom:!0},e)):_.a.createElement("div",null,_.a.createElement(M.a,{color:"textSecondary",gutterBottom:!0},"Type: Object"),_.a.createElement(M.a,{color:"textPrimary",gutterBottom:!0},_.a.createElement(S,{object:e})))));var e}}]),t}(_.a.PureComponent),B=function(e){return _.a.createElement("ul",{style:{listStyle:"none",paddingLeft:"0"}},e.items.map(function(e,t){return _.a.createElement("li",{key:e.id,style:{display:"block",width:"100%",float:"left",marginBottom:"15px"}},_.a.createElement("div",{style:{float:e.owner?"left":"right",width:"40%"}},_.a.createElement(I,{owner:e.owner,eventName:e.eventName,time:e.time,data:e.data})))}))},R=n(128),T=n.n(R),A=n(129),w=n.n(A),L=n(22),U=Object(L.withStyles)(function(e){return{chip:{}}})(function(e){var t=e.classes;return _.a.createElement(T.a,{label:e.name,className:t.chip,color:"primary",icon:_.a.createElement(w.a,null),onDelete:e.onDelete,variant:"outlined"})}),W={marginBottom:"10px",marginTop:"10px"},k=function(e){return _.a.createElement("div",null,_.a.createElement(M.a,{variant:"subtitle1",gutterBottom:!0},"Listening to events:"),e.events.map(function(t){return _.a.createElement("div",{style:W},_.a.createElement(U,{onDelete:function(){e.onEventDelete(t.name)},name:t.name}))}))},K=n(130),j=n.n(K),q=(n(228),n(82)),x=n.n(q),N=n(134),F=n.n(N),H=n(135),$=n.n(H),z=n(28),J=n.n(z),G=n(132),V=n.n(G),Q=n(133),X=n.n(Q),Y=n(27),Z=n(131),ee=n.n(Z);var te,ne=function(e){return _.a.createElement("div",null,_.a.createElement(ee.a,{size:21,color:"inherit"}))},ae=n(40),_e=n.n(ae),re=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={address:"localhost:3001"},n.onChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(c.a)({},t,a))},n.onSubmit=function(e){switch(e.preventDefault(),n.props.connectionStatus){case"connected":case"reconnecting":case"connecting":n.onDisconnectSubmit();break;case"disconnected":n.onConnectSubmit()}},n.onConnectSubmit=function(e){n.props.onConnectSubmit(n.state.address)},n.onDisconnectSubmit=function(e){n.props.onDisconnectSubmit()},n.renderButton=function(){switch(n.props.connectionStatus){case"connected":return _.a.createElement(J.a,{type:"submit",color:"inherit"},"Disconnect");case"reconnecting":case"connecting":return _.a.createElement(J.a,{type:"submit",color:"inherit"},"Cancel");case"disconnected":return _.a.createElement(J.a,{type:"submit",color:"inherit"},"Connect")}},n.renderStatus=function(){switch(n.props.connectionStatus){case"reconnecting":case"connecting":return _.a.createElement(ne,null);case"disconnected":return _.a.createElement(V.a,null);case"connected":return _.a.createElement(X.a,null);default:return""}},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return _.a.createElement("form",{autoComplete:"off",onSubmit:this.onSubmit,className:e.root},_.a.createElement(F.a,{position:"static"},_.a.createElement($.a,null,_.a.createElement("div",{className:e.search},_.a.createElement("div",{className:e.searchIcon},this.renderStatus()),_.a.createElement(_e.a,{name:"address",value:this.state.address,onChange:this.onChange,placeholder:"localhost:3001",classes:{root:e.inputRoot,input:e.inputInput}})),this.renderButton())))}}]),t}(_.a.Component),oe=Object(L.withStyles)(function(e){return{root:{flexGrow:1},search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Y.fade)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Y.fade)(e.palette.common.white,.25)},marginRight:2*e.spacing.unit,marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:3*e.spacing.unit,width:"auto"}),searchIcon:{width:9*e.spacing.unit,height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit",width:"100%"},inputInput:Object(c.a)({paddingTop:e.spacing.unit,paddingRight:e.spacing.unit,paddingBottom:e.spacing.unit,paddingLeft:10*e.spacing.unit,transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:200})}})(re),ie=n(23),ce=n.n(ie),se=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,_=new Array(a),r=0;r<a;r++)_[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(_)))).state={event:""},n.onChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(c.a)({},t,a))},n.onSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.event)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return _.a.createElement("form",{onSubmit:this.onSubmit},_.a.createElement(ce.a,{label:"Event name",required:!0,onChange:this.onChange,value:this.state.event,type:"text",fullWidth:!0,name:"event",margin:"dense",variant:"outlined"}),_.a.createElement(J.a,{disabled:!this.props.connected,type:"submit",variant:"contained",color:"primary"},"Register"))}}]),t}(_.a.Component),le=n(136),ue=n(141),me=n.n(ue),Ee=n(140),de=n.n(Ee),pe=Object(L.createMuiTheme)({palette:{primary:me.a}}),he=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).state={address:"",eventName:"",items:[],tab:0,registeredEvents:{},connectionStatus:"disconnected",alertOpen:!1,alertContent:""},n.addDummyDataForDevelopment=function(){n.addItem("yoyo","Lorem Ipsum is simply dummy text of the printing and typesetting industry.",!0),n.addItem("welcome","heyyyy",!1)},n.registerEvent=function(e){console.log("registering event:",e),te&&(te.off(e),te.on(e,function(t){console.log("on:",e),n.addItem(e,t,!1)}),n.setState(function(t){return{registeredEvents:Object(s.a)({},t.registeredEvents,Object(c.a)({},e,{name:e}))}}))},n.addItem=function(e,t,a){var _=j()(),r=n.getTime();n.setState(function(n,o){return Object(s.a)({},n,{items:[].concat(Object(i.a)(n.items),[{id:_,eventName:e,time:r,data:t,owner:a}])})}),document.querySelector("#dummy").scrollIntoView({behavior:"smooth"})},n.onConnectSubmit=function(e){n.connect(e)},n.onDisconnectSubmit=function(){console.log("disconnected manually"),te.disconnect(),n.setState({connectionStatus:"disconnected"})},n.onMessageSubmit=function(e,t){n.addItem(e,t,!0),n.emitEvent(e,t)},n.emitEvent=function(e,t){te.emit(e,t)},n.onChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(c.a)({},t,a))},n.onEventSubmit=function(e){console.log(e),n.registerEvent(e)},n.onEventDelete=function(e){te.off(e);var t=Object(s.a)({},n.state.registeredEvents);delete t[e],n.setState({registeredEvents:t})},n.connect=function(e){if(console.log("connecting"),n.setState(function(){return{connectionStatus:"connecting"}}),te&&te.disconnect(),(te=window.socket=de()(e)).on("connect",function(){console.log("connected!"),n.setState({connectionStatus:"connected"})}),te.on("disconnect",function(e){console.log("reason",e),"io server disconnect"===e&&te.disconnect()}),te.on("connect_error",function(e){console.log("Error connecting!"),n.setState(function(){return{alertContent:"Error connecting to the server",alertOpen:!0}})}),te.on("reconnect",function(e){console.log("reconnected"),n.setState(function(){return{alertContent:"",connectionStatus:"connected",alertOpen:!1}})}),te.on("reconnecting",function(e){console.log("reconnecting"),n.setState(function(){return{connectionStatus:"reconnecting"}})}),Object.keys(n.state.registeredEvents).length>0){console.log("re-registering events");for(var t=Object.keys(n.state.registeredEvents),a=0;a<t.length;a++){var _=t[a];n.registerEvent(_)}}},n.getTime=function(){var e=n.getMoment();return x()(1e3*e).format("HH:mm")},n.getMoment=function(){return x()().unix()},n.handleTabChange=function(e,t){n.setState({tab:t})},n.handleAlertClose=function(e,t){"clickaway"!==t&&n.setState({alertOpen:!1})},n.items=_.a.createRef(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return _.a.createElement(L.MuiThemeProvider,{theme:pe},_.a.createElement("div",{id:"wrapper"},_.a.createElement(oe,{connectionStatus:this.state.connectionStatus,onDisconnectSubmit:this.onDisconnectSubmit,onConnectSubmit:this.onConnectSubmit}),_.a.createElement("div",{id:"main"},_.a.createElement("div",{className:"special_scroll",id:"panel"},_.a.createElement("div",{id:"send_messages"},_.a.createElement(M.a,{gutterBottom:!0,variant:"h6"},"Send messages"),_.a.createElement(le.a,{connected:"connected"===this.state.connectionStatus,onSubmit:this.onMessageSubmit})),_.a.createElement("div",{id:"events"},_.a.createElement(M.a,{gutterBottom:!0,variant:"h6"},"Register events"),_.a.createElement(se,{connected:"connected"===this.state.connectionStatus,onSubmit:this.onEventSubmit}),Object.keys(this.state.registeredEvents).length>0&&_.a.createElement("div",{id:"registered_events"},_.a.createElement(k,{onEventDelete:this.onEventDelete,events:Object.values(this.state.registeredEvents)})))),_.a.createElement("div",{className:"special_scroll",ref:this.items,id:"items"},_.a.createElement(M.a,{variant:"h6",gutterBottom:!0},"Messages sent/received"),_.a.createElement(B,{items:this.state.items}),_.a.createElement("div",{style:{float:"left",clear:"both"},id:"dummy"})))),_.a.createElement(h.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},variant:"error",open:this.state.alertOpen,autoHideDuration:4e3,onClose:this.handleAlertClose,ContentProps:{"aria-describedby":"message-id"},message:_.a.createElement("span",{id:"message-id"},this.state.alertContent),action:[_.a.createElement(b.a,{key:"close","aria-label":"Close",color:"inherit",onClick:this.handleAlertClose},_.a.createElement(v.a,null))]}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(_.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[146,1,2]]]);
//# sourceMappingURL=main.c8160090.chunk.js.map