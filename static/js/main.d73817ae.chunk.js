(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,function(e,a,t){e.exports={link:"Header_link__s9Qz9",active:"Header_active__36N3Q",block:"Header_block__bQPQi",header:"Header_header__7EdYq"}},function(e,a,t){e.exports={messageSection:"Message_messageSection__3x-dR",ava:"Message_ava__1cic_",mBody:"Message_mBody__16luW",name:"Message_name__3ufS_",message:"Message_message__3QzcT",time:"Message_time__2AQuu",inputSection:"Message_inputSection__2Kjk1",formInner:"Message_formInner__1TxD2",decor:"Message_decor__3kR1q"}},,,function(e,a,t){e.exports={wrapper:"Affairs_wrapper__2krny",mappedAffairs:"Affairs_mappedAffairs__ikmE_",table:"Affairs_table__1hieA",filterButtons:"Affairs_filterButtons__2o2Xz",active:"Affairs_active__33ItX"}},function(e,a,t){e.exports={wrapper:"Greeting_wrapper__1Yt0B",form:"Greeting_form__x3850",input:"Greeting_input__3llhY",errorInput:"Greeting_errorInput__3Ywak",button:"Greeting_button__7Ryvv",count:"Greeting_count__36G4N"}},,,function(e,a,t){e.exports={default:"SuperButton_default__3glfo",red:"SuperButton_red__3Tgda"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1O7VK",errorInput:"SuperInputText_errorInput__3uprf",error:"SuperInputText_error__1zGK0",inv:"SuperInputText_inv__GkiEk"}},function(e,a,t){e.exports={blue:"HW4_blue__3gthj",column:"HW4_column__25LBL",testSpanError:"HW4_testSpanError__2Yu1a"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__1bOM2",spanClassName:"SuperCheckbox_spanClassName__11N03"}},function(e,a,t){e.exports={spanWrapper:"HW6_spanWrapper__2AuoB",buttonsWrapper:"HW6_buttonsWrapper__GUWD9"}},function(e,a,t){e.exports={HW8Wrapper:"HW8_HW8Wrapper__1JAst",tableContainer:"HW8_tableContainer__1sjcQ"}},,,function(e,a,t){e.exports={App:"App_App__AhHE2"}},function(e,a,t){e.exports={spanStyle:"SuperEditableSpan_spanStyle__3GmfH"}},function(e,a,t){e.exports={select:"SuperSelect_select__NVuHD"}},function(e,a,t){e.exports={radio:"SuperRadio_radio__3Gg35"}},function(e,a,t){e.exports={HW7Wrapper:"HW7_HW7Wrapper__2S2ne"}},function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),o=(t(31),t(21)),u=t.n(o),s=t(8),i=t(1),m=t(7),p=t(2),d=t(6),E=t.n(d);var _=function(e){return r.a.createElement("div",{className:E.a.messageSection},r.a.createElement("div",{className:E.a.ava},r.a.createElement("img",{src:e.avatar,alt:"ava"})),r.a.createElement("div",{className:E.a.mBody},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",{className:E.a.message},e.message),r.a.createElement("div",{className:E.a.time},e.time)))};var f=function(){var e=Object(n.useState)([{avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"Some Text",time:(new Date).toLocaleTimeString("ru-Ru",{hour:"2-digit",minute:"2-digit"})}]),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(p.a)(c,2),u=o[0],s=o[1],i=t.map((function(e){return r.a.createElement(_,{key:e.message,avatar:e.avatar,name:e.name,message:e.message,time:e.time})})),d=function(){u.trim()&&l([].concat(Object(m.a)(t),[{avatar:t[0].avatar,name:t[0].name,message:u,time:t[0].time}])),s("")};return r.a.createElement("div",null,i,r.a.createElement("div",{className:E.a.inputSection},r.a.createElement("form",{className:E.a.decor},r.a.createElement("div",{className:E.a.formInner},r.a.createElement("textarea",{placeholder:"Enter your message...",value:u,onChange:function(e){s(e.currentTarget.value)},onKeyDown:function(e){13===e.keyCode&&e.ctrlKey&&d()}}),r.a.createElement("button",{type:"button",onClick:d},"Send")))))};var v=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(f,null),r.a.createElement("hr",null))},h=t(9),g=t.n(h),b=t(13),k=t.n(b),N=t(4),C=["red","className"],y=function(e){var a=e.red,t=e.className,n=Object(N.a)(e,C),l="".concat(a?k.a.red:k.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var O=function(e){var a=e.affair,t=a._id,n=a.name,l=a.priority,c={color:"high"===l?"red":"middle"===l?"#ff9900":"green"};return r.a.createElement("table",{className:g.a.table},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,n),r.a.createElement("td",{style:c},"[",l,"]"),r.a.createElement("td",null,r.a.createElement(y,{className:k.a.red,onClick:function(){return e.deleteAffairCallback(t)}},"x")))))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t=function(a){return function(){return e.setFilter(a)}},n=function(a){return e.filter===a?g.a.active:""};return r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",{className:g.a.mappedAffairs},a.length>0?a:r.a.createElement("span",null,"No tasks in the list")),r.a.createElement("div",{className:g.a.filterButtons},r.a.createElement(y,{className:n("all"),onClick:t("all")},"All"),r.a.createElement(y,{className:n("high"),onClick:t("high")},"High"),r.a.createElement(y,{className:n("middle"),onClick:t("middle")},"Middle"),r.a.createElement(y,{className:n("low"),onClick:t("low")},"Low")))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var x=function(){var e=Object(n.useState)(S),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(p.a)(c,2),u=o[0],s=o[1],i=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{filter:u,data:i,setFilter:s,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null))},w=t(10),W=t.n(w),A=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.onEnterPress,u=l?W.a.errorInput:W.a.input;return r.a.createElement("div",{className:W.a.wrapper},r.a.createElement("form",{className:W.a.form},r.a.createElement("input",{value:a,onChange:t,onBlur:t,onKeyPress:o,className:u,placeholder:"Enter the name..."}),r.a.createElement("button",{className:W.a.button,onClick:n,disabled:!a},r.a.createElement("span",null,"Add")),r.a.createElement("span",{className:W.a.count},c)))},H=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(p.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(!0),i=Object(p.a)(s,2),m=i[0],d=i[1],E=function(){t(o),alert("Hello ".concat(o,"!")),u("")},_=a.length;return r.a.createElement(A,{name:o,setNameCallback:function(e){var a=e.currentTarget.value.trim();a?(u(a),m&&d(!1)):(o&&u(""),d(!0))},addUser:E,error:m,totalUsers:_,onEnterPress:function(e){"Enter"===e.key&&o&&E()}})},T=t(34);var I=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(H,{users:t,addUserCallback:function(e){l([{_id:Object(T.a)(),name:e}].concat(Object(m.a)(t)))}}),r.a.createElement("hr",null))},B=t(14),G=t.n(B),M=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],P=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,s=Object(N.a)(e,M),i="".concat(G.a.error," ").concat(u||""),m="".concat(G.a.superInput," ").concat(o," ").concat(c?G.a.errorInput:"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},s)),c?r.a.createElement("span",{className:i},c):r.a.createElement("span",{className:G.a.inv},"\u0430"))},F=t(15),K=t.n(F),D=t(16),J=t.n(D),Q=["type","onChange","onChangeChecked","className","spanClassName","children"],U=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(N.a)(e,Q),o="".concat(J.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:J.a.spanClassName},l))};var R=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),s=Object(p.a)(u,2),i=s[0],m=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:K.a.column},r.a.createElement(P,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(P,{className:K.a.blue}),r.a.createElement(y,null,"default"),r.a.createElement(y,{red:!0,onClick:o},"delete "),r.a.createElement(y,{disabled:!0},"disabled"),r.a.createElement(U,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(U,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=t(22),z=t.n(Y),L=["autoFocus","onBlur","onEnter","spanProps"],q=["children","onDoubleClick","className"],X=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(N.a)(e,L),o=Object(n.useState)(!1),u=Object(p.a)(o,2),s=u[0],i=u[1],m=l||{},d=m.children,E=m.onDoubleClick,_=(m.className,Object(N.a)(m,q)),f=z.a.spanStyle;return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){i(!s),a&&a(e)},onEnter:function(){i(!s),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!s),E&&E(e)},className:f},_),d||c.value))};function V(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function Z(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}V("test",{x:"A",y:1});Z("test",{x:"",y:0});var $=t(17),ee=t.n($);var ae=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,"homeworks 6",r.a.createElement("div",{className:ee.a.spanWrapper},r.a.createElement(X,{value:t,onChangeText:l,spanProps:{children:t?void 0:"\u270e enter text..."}})),r.a.createElement("div",{className:ee.a.buttonsWrapper},r.a.createElement(y,{onClick:function(){V("editable-span-value",t)}},"save"),r.a.createElement(y,{onClick:function(){l(Z("editable-span-value",t))}},"restore")),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(v,null),r.a.createElement(x,null),r.a.createElement(I,null),r.a.createElement(R,null),r.a.createElement(ae,null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},re=t(23),le=t.n(re),ce=["options","onChange","onChangeOption"],oe=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(N.a)(e,ce),c=a?a.map((function(e,a){return r.a.createElement("option",{key:a+e,value:e},e)})):[];return r.a.createElement("select",Object.assign({className:le.a.select,onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},ue=t(24),se=t.n(ue),ie=["type","name","options","value","onChange","onChangeOption"],me=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(N.a)(e,ie),function(e){l&&l(e),c&&c(e.currentTarget.value)}),u=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t},r.a.createElement("input",{type:"radio",name:a,checked:n===e,value:e,onChange:o}),r.a.createElement("span",null,e))})):[];return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:se.a.radio},u))},pe=t(25),de=t.n(pe),Ee=["x","y","z"];var _e=function(){var e=Object(n.useState)(Ee[1]),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",{className:de.a.HW7Wrapper},r.a.createElement("div",null,r.a.createElement(oe,{options:Ee,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(me,{name:"radio",options:Ee,value:t,onChangeOption:l}))),r.a.createElement("hr",null),r.a.createElement("hr",null))},fe=function(e,a){switch(a.type){case"sort":return Object(m.a)(e.sort((function(e,t){return"up"===a.payload?e.name>t.name?1:-1:e.name<t.name?1:-1})));case"check":return Object(m.a)(e.sort((function(e,a){return e.name>a.name?1:-1}))).filter((function(e){return e.age>a.payload}));default:return e}},ve=t(18),he=t.n(ve),ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var be=function(){var e=Object(n.useState)(ge),a=Object(p.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("table",{key:e._id},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",r.a.createElement("div",{className:he.a.HW8Wrapper},r.a.createElement("div",{className:he.a.tableContainer},c),r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(fe(ge,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(y,{onClick:function(){return l(fe(ge,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(y,{onClick:function(){return l(fe(ge,{type:"check",payload:18}))}}," check 18"))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ke=function(){return r.a.createElement("div",null,r.a.createElement(_e,null),r.a.createElement(be,null))};var Ne=function(){return r.a.createElement("div",null,"Junior+")},Ce="/pre-junior",ye="/junior",Oe="/junior-plus";var je=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:Ce})}),r.a.createElement(i.b,{path:Ce,element:r.a.createElement(te,null)}),r.a.createElement(i.b,{path:ye,element:r.a.createElement(ke,null)}),r.a.createElement(i.b,{path:Oe,element:r.a.createElement(Ne,null)}),r.a.createElement(i.b,{path:"/*",element:r.a.createElement(ne,null)})))},Se=t(5),xe=t.n(Se);var we=function(){return r.a.createElement("div",{className:xe.a.header},r.a.createElement(s.b,{to:Ce,className:function(e){return e.isActive?"".concat(xe.a.link," ").concat(xe.a.active):xe.a.link}},"pre-junior"),r.a.createElement(s.b,{to:ye,className:function(e){return e.isActive?"".concat(xe.a.link," ").concat(xe.a.active):xe.a.link}},"junior"),r.a.createElement(s.b,{to:Oe,className:function(e){return e.isActive?"".concat(xe.a.link," ").concat(xe.a.active):xe.a.link}},"junior-plus"),r.a.createElement("div",{className:xe.a.block}))};var We=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(we,null),r.a.createElement("hr",null),r.a.createElement(je,null)))};var Ae=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(We,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.d73817ae.chunk.js.map