$(document).ready(function () {
    // let RegisterUser = document.getElementById('register-user');
    // let Comments = $('#comments');
    // let ShopUser = $('#shop-user');
    // let Users = $('#users');
    // let OnlineUsers = $('#online-users');


    // let data = {
    //     labels: ['', '', '', '', '', ''],
    //     datasets: [
    //         {
    //             data: [100, 500, 600, 700, 400, 800],
    //             backgroundColor: 'transparent',
    //             borderColor: '#fff',
    //             borderWidth: 2,
    //             pointBackgroundColor: '#fff'
    //         }
    //     ]
    // };


    // let RegisterUserChart = new Chart(RegisterUser, {
    //     type: 'line',
    //     data,
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let ShopUserChart = new Chart(ShopUser, {
    //     type: 'line',
    //     data: {
    //         labels: ['', '', '', '', '', ''],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: 'transparent',
    //                 borderColor: '#fff',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#fff'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let UsersChart = new Chart(Users, {
    //     type: 'bar',
    //     data: {
    //         labels: ['', '', '', '', '', ''],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: '#fff',
    //                 borderColor: '#fff',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#fff'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let CommentsChart = new Chart(Comments, {
    //     type: 'bar',
    //     data: {
    //         labels: ['', '', '', '', '', ''],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: '#fff',
    //                 borderColor: '#fff',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#fff'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });
    // let OnlineUsersChart = new Chart(OnlineUsers, {
    //     type: 'line',
    //     data: {
    //         labels: ['یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    //         datasets: [
    //             {
    //                 data: [100, 500, 600, 700, 400, 800],
    //                 backgroundColor: 'rgba(0,0,0,.4)',
    //                 borderColor: '#555',
    //                 borderWidth: 2,
    //                 pointBackgroundColor: '#333'
    //             }
    //         ]
    //     },
    //     options: {
    //         layout: {
    //             padding: {
    //                 left: 5,
    //                 right: 5
    //             }
    //         },
    //         scales: {
    //             yAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ],
    //             xAxes: [
    //                 {
    //                     display: false
    //                 }
    //             ]
    //         },
    //         legend: {
    //             display: false
    //         }
    //     }
    // });

    $(window).resize(() => {
        resizeTemplate();
    })

    function resizeTemplate() {
        if ($(window).width() <= 768) {
            $('#sidebar').collapse('hide');
        } else {
            $('#sidebar').collapse('show');
        }
    }
    resizeTemplate();

    $('#sidebar').on('hide.bs.collapse', function (e) {
        console.log('hide');
        if (e.target == this)
            $('#main').removeClass(['col-lg-10', 'col-md-9']);
    })
    $('#sidebar').on('show.bs.collapse', function (e) {
        console.log('show');
        if (e.target == this)
            $('#main').addClass(['col-lg-10', 'col-md-9']);
    })
});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button[not:disabled]:hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel[not:disabled]:hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger[not:disabled]:hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
/*!
 * 
 * persian-date -  1.0.5
 * Reza Babakhani <babakhani.reza@gmail.com>
 * http://babakhani.github.io/PersianWebToolkit/docs/persian-date/
 * Under WTFPL license 
 * 
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["persianDate"] = factory();
	else
		root["persianDate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var durationUnit = __webpack_require__(4).durationUnit;

var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, [{
        key: 'toPersianDigit',


        /**
         * @description return converted string to persian digit
         * @param digit
         * @returns {string|*}
         */
        value: function toPersianDigit(digit) {
            var latinDigit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return digit.toString().replace(/\d+/g, function (digit) {
                var enDigitArr = [],
                    peDigitArr = [],
                    i = void 0,
                    j = void 0;
                for (i = 0; i < digit.length; i += 1) {
                    enDigitArr.push(digit.charCodeAt(i));
                }
                for (j = 0; j < enDigitArr.length; j += 1) {
                    peDigitArr.push(String.fromCharCode(enDigitArr[j] + (!!latinDigit && latinDigit === true ? 1584 : 1728)));
                }
                return peDigitArr.join('');
            });
        }

        /**
         * @param number
         * @param targetLength
         * @returns {string}
         */

    }, {
        key: 'leftZeroFill',
        value: function leftZeroFill(number, targetLength) {
            var output = number + '';
            while (output.length < targetLength) {
                output = '0' + output;
            }
            return output;
        }

        /**
         * @description normalize duration params and return valid param
         * @return {{unit: *, value: *}}
         */

    }, {
        key: 'normalizeDuration',
        value: function normalizeDuration() {
            var unit = void 0,
                value = void 0;
            if (typeof arguments[0] === 'string') {
                unit = arguments[0];
                value = arguments[1];
            } else {
                value = arguments[0];
                unit = arguments[1];
            }
            if (durationUnit.year.indexOf(unit) > -1) {
                unit = 'year';
            } else if (durationUnit.month.indexOf(unit) > -1) {
                unit = 'month';
            } else if (durationUnit.day.indexOf(unit) > -1) {
                unit = 'day';
            } else if (durationUnit.hour.indexOf(unit) > -1) {
                unit = 'hour';
            } else if (durationUnit.minute.indexOf(unit) > -1) {
                unit = 'minute';
            } else if (durationUnit.second.indexOf(unit) > -1) {
                unit = 'second';
            } else if (durationUnit.millisecond.indexOf(unit) > -1) {
                unit = 'millisecond';
            }
            return {
                unit: unit,
                value: value
            };
        }

        /**
         *
         * @param number
         * @returns {number}
         */

    }, {
        key: 'absRound',
        value: function absRound(number) {
            if (number < 0) {
                return Math.ceil(number);
            } else {
                return Math.floor(number);
            }
        }

        /**
         *
         * @param number
         * @return {number}
         */

    }, {
        key: 'absFloor',
        value: function absFloor(number) {
            if (number < 0) {
                // -0 -> 0
                return Math.ceil(number) || 0;
            } else {
                return Math.floor(number);
            }
        }
    }]);

    return Helpers;
}();

module.exports = Helpers;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TypeChecking = __webpack_require__(10);
var Algorithms = __webpack_require__(2);
var Helpers = __webpack_require__(0);
var Duration = __webpack_require__(5);
var toPersianDigit = new Helpers().toPersianDigit;
var leftZeroFill = new Helpers().leftZeroFill;
var normalizeDuration = new Helpers().normalizeDuration;
var fa = __webpack_require__(7);
var en = __webpack_require__(6);

/**
 * @description persian date class
 */

var PersianDateClass = function () {

    /**
     * @param input
     * @return {PersianDateClass}
     */
    function PersianDateClass(input) {
        _classCallCheck(this, PersianDateClass);

        this.calendarType = PersianDateClass.calendarType;
        this.localType = PersianDateClass.localType;
        this.leapYearMode = PersianDateClass.leapYearMode;

        this.algorithms = new Algorithms(this);
        this.version = "1.0.5";
        this._utcMode = false;
        if (this.localType !== 'fa') {
            this.formatPersian = false;
        } else {
            this.formatPersian = '_default';
        }
        this.setup(input);
        this.ON = this.algorithms.ON;
        return this;
    }

    /**
     * @param input
     */


    _createClass(PersianDateClass, [{
        key: 'setup',
        value: function setup(input) {
            // Convert Any thing to Gregorian Date
            if (TypeChecking.isDate(input)) {
                this._gDateToCalculators(input);
            } else if (TypeChecking.isArray(input)) {
                this.algorithmsCalc([input[0], input[1] ? input[1] : 1, input[2] ? input[2] : 1, input[3], input[4], input[5], input[6] ? input[6] : 0]);
            } else if (TypeChecking.isNumber(input)) {
                var fromUnix = new Date(input);
                this._gDateToCalculators(fromUnix);
            }
            // instance of pDate
            else if (input instanceof PersianDateClass) {
                    this.algorithmsCalc([input.year(), input.month(), input.date(), input.hour(), input.minute(), input.second(), input.millisecond()]);
                }
                // ASP.NET JSON Date
                else if (input && input.substring(0, 6) === '/Date(') {
                        var fromDotNet = new Date(parseInt(input.substr(6)));
                        this._gDateToCalculators(fromDotNet);
                    } else {
                        var now = new Date();
                        this._gDateToCalculators(now);
                    }
        }

        /**
         * @param input
         * @return {*}
         * @private
         */

    }, {
        key: '_getSyncedClass',
        value: function _getSyncedClass(input) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode);
            return new syncedCelander(input);
        }

        /**
         * @param inputgDate
         * @private
         */

    }, {
        key: '_gDateToCalculators',
        value: function _gDateToCalculators(inputgDate) {
            this.algorithms.calcGregorian([inputgDate.getFullYear(), inputgDate.getMonth(), inputgDate.getDate(), inputgDate.getHours(), inputgDate.getMinutes(), inputgDate.getSeconds(), inputgDate.getMilliseconds()]);
        }

        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @static
         * @return {*}
         */

    }, {
        key: 'rangeName',


        /**
         * @since 1.0.0
         * @description Helper method that return date range name like week days name, month names, month days names (specially in persian calendar).
         * @return {*}
         */
        value: function rangeName() {
            var t = this.calendarType;
            if (this.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }

        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode(input) {
            this.leapYearMode = input;
            if (input === 'astronomical' && this.calendarType == 'persian') {
                this.leapYearMode = 'astronomical';
            } else if (input === 'algorithmic' && this.calendarType == 'persian') {
                this.leapYearMode = 'algorithmic';
            }
            this.algorithms.updateFromGregorian();
            return this;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toCalendar',


        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        value: function toCalendar(input) {
            this.calendarType = input;
            this.algorithms.updateFromGregorian();
            return this;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLocale',


        /**
         * @since 1.0.0
         * @param input
         * @return {PersianDateClass}
         */
        value: function toLocale(input) {
            this.localType = input;
            if (this.localType !== 'fa') {
                this.formatPersian = false;
            } else {
                this.formatPersian = '_default';
            }
            return this;
        }

        /**
         * @return {*}
         * @private
         */

    }, {
        key: '_locale',
        value: function _locale() {
            var t = this.calendarType;
            if (this.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekName',
        value: function _weekName(input) {
            return this._locale().weekdays[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekNameShort',
        value: function _weekNameShort(input) {
            return this._locale().weekdaysShort[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_weekNameMin',
        value: function _weekNameMin(input) {
            return this._locale().weekdaysMin[input - 1];
        }

        /**
         * @param input
         * @return {*}
         * @private
         */

    }, {
        key: '_dayName',
        value: function _dayName(input) {
            return this._locale().persianDaysName[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_monthName',
        value: function _monthName(input) {
            return this._locale().months[input - 1];
        }

        /**
         * @param input
         * @private
         */

    }, {
        key: '_monthNameShort',
        value: function _monthNameShort(input) {
            return this._locale().monthsShort[input - 1];
        }

        /**
         * @param obj
         * @returns {boolean}
         */

    }, {
        key: 'isPersianDate',


        /**
         * @param obj
         * @return {boolean}
         */
        value: function isPersianDate(obj) {
            return obj instanceof PersianDateClass;
        }

        /**
         * @returns {PersianDate}
         */

    }, {
        key: 'clone',
        value: function clone() {
            return this._getSyncedClass(this.ON.gDate);
        }

        /**
         * @since 1.0.0
         * @param dateArray
         * @return {*}
         */

    }, {
        key: 'algorithmsCalc',
        value: function algorithmsCalc(dateArray) {
            if (this.isPersianDate(dateArray)) {
                dateArray = [dateArray.year(), dateArray.month(), dateArray.date(), dateArray.hour(), dateArray.minute(), dateArray.second(), dateArray.millisecond()];
            }
            if (this.calendarType === 'persian' && this.leapYearMode == 'algorithmic') {
                return this.algorithms.calcPersian(dateArray);
            } else if (this.calendarType === 'persian' && this.leapYearMode == 'astronomical') {
                return this.algorithms.calcPersiana(dateArray);
            } else if (this.calendarType === 'gregorian') {
                dateArray[1] = dateArray[1] - 1;
                return this.algorithms.calcGregorian(dateArray);
            }
        }

        /**
         * @since 1.0.0
         * @return {*}
         */

    }, {
        key: 'calendar',
        value: function calendar() {
            var key = void 0;
            if (this.calendarType == 'persian') {
                if (this.leapYearMode == 'astronomical') {
                    key = 'persianAstro';
                } else if (this.leapYearMode == 'algorithmic') {
                    key = 'persianAlgo';
                }
            } else {
                key = 'gregorian';
            }
            return this.ON[key];
        }

        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */

    }, {
        key: 'duration',


        /**
         * @description return Duration object
         * @param input
         * @param key
         * @returns {Duration}
         */
        value: function duration(input, key) {
            return new Duration(input, key);
        }

        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */

    }, {
        key: 'isDuration',


        /**
         * @description check if passed object is duration
         * @param obj
         * @returns {boolean}
         */
        value: function isDuration(obj) {
            return obj instanceof Duration;
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'years',
        value: function years(input) {
            return this.year(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'year',
        value: function year(input) {
            if (input || input === 0) {
                this.algorithmsCalc([input, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]);
                return this;
            } else {
                return this.calendar().year;
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'month',
        value: function month(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), input, this.date()]);
                return this;
            } else {
                return this.calendar().month + 1;
            }
        }

        /**
         * Day of week
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */

    }, {
        key: 'days',
        value: function days() {
            return this.day();
        }

        /**
         * @returns {Function|Date.toJSON.day|date_json.day|PersianDate.day|day|output.day|*}
         */

    }, {
        key: 'day',
        value: function day() {
            return this.calendar().weekday;
        }

        /**
         * Day of Months
         * @param input
         * @returns {*}
         */

    }, {
        key: 'dates',
        value: function dates(input) {
            return this.date(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'date',
        value: function date(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), input]);
                return this;
            } else {
                return this.calendar().day;
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'hour',
        value: function hour(input) {
            return this.hours(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'hours',
        value: function hours(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), input]);
                return this;
            } else {
                return this.ON.gDate.getHours();
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'minute',
        value: function minute(input) {
            return this.minutes(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'minutes',
        value: function minutes(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), input]);
                return this;
            } else {
                return this.ON.gDate.getMinutes();
            }
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'second',
        value: function second(input) {
            return this.seconds(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'seconds',
        value: function seconds(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), input]);
                return this;
            } else {
                return this.ON.gDate.getSeconds();
            }
        }

        /**
         * @param input
         * @returns {*}
         * Getter Setter
         */

    }, {
        key: 'millisecond',
        value: function millisecond(input) {
            return this.milliseconds(input);
        }

        /**
         * @param input
         * @returns {*}
         */

    }, {
        key: 'milliseconds',
        value: function milliseconds(input) {
            if (input || input === 0) {
                this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), input]);
                return this;
            } else {
                return this.ON.gregorian.millisecond;
            }
        }

        /**
         * Return Milliseconds since the Unix Epoch (1318874398806)
         * @returns {*}
         * @private
         */
        //    _valueOf () {
        //        return this.ON.gDate.valueOf();
        //    }


    }, {
        key: 'unix',


        /**
         * Return Unix Timestamp (1318874398)
         * @param timestamp
         * @returns {*}
         */
        value: function unix(timestamp) {
            var output = void 0;
            if (timestamp) {
                return this._getSyncedClass(timestamp * 1000);
            } else {
                var str = this.ON.gDate.valueOf().toString();
                output = str.substring(0, str.length - 3);
            }
            return parseInt(output);
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'valueOf',
        value: function valueOf() {
            return this.ON.gDate.valueOf();
        }

        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */

    }, {
        key: 'getFirstWeekDayOfMonth',


        /**
         * @param year
         * @param month
         * @returns {*}
         * @since 1.0.0
         */
        value: function getFirstWeekDayOfMonth(year, month) {
            return this._getSyncedClass([year, month, 1]).day();
        }

        /**
         * @param input
         * @param val
         * @param asFloat
         * @returns {*}
         */

    }, {
        key: 'diff',
        value: function diff(input, val, asFloat) {
            var self = this,
                inputMoment = input,
                zoneDiff = 0,
                diff = self.ON.gDate - inputMoment.toDate() - zoneDiff,
                year = self.year() - inputMoment.year(),
                month = self.month() - inputMoment.month(),
                date = (self.date() - inputMoment.date()) * -1,
                output = void 0;

            if (val === 'months' || val === 'month') {
                output = year * 12 + month + date / 30;
            } else if (val === 'years' || val === 'year') {
                output = year + (month + date / 30) / 12;
            } else {
                output = val === 'seconds' || val === 'second' ? diff / 1e3 : // 1000
                val === 'minutes' || val === 'minute' ? diff / 6e4 : // 1000 * 60
                val === 'hours' || val === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                val === 'days' || val === 'day' ? diff / 864e5 : // 1000 * 60 * 60 * 24
                val === 'weeks' || val === 'week' ? diff / 6048e5 : // 1000 * 60 * 60 * 24 * 7
                diff;
            }
            if (output < 0) {
                output = output * -1;
            }
            return asFloat ? output : Math.round(output);
        }

        /**
         * @param key
         * @returns {*}
         */

    }, {
        key: 'startOf',
        value: function startOf(key) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
            // Simplify this\
            /* jshint ignore:start */
            switch (key) {
                case 'years':
                case 'year':
                    return new syncedCelander([this.year(), 1, 1]);
                case 'months':
                case 'month':
                    return new syncedCelander([this.year(), this.month(), 1]);
                case 'days':
                case 'day':
                    return new syncedCelander([this.year(), this.month(), this.date(), 0, 0, 0]);
                case 'hours':
                case 'hour':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
                case 'minutes':
                case 'minute':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
                case 'seconds':
                case 'second':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                case 'weeks':
                case 'week':
                    return new syncedCelander([this.year(), this.month(), this.date() - (this.calendar().weekday - 1)]);
                default:
                    return this.clone();
            }
            /* jshint ignore:end */
        }

        /**
         * @param key
         * @returns {*}
         */
        /* eslint-disable no-case-declarations */

    }, {
        key: 'endOf',
        value: function endOf(key) {
            var syncedCelander = PersianDateClass.toCalendar(this.calendarType).toLocale(this.localType);
            // Simplify this
            switch (key) {
                case 'years':
                case 'year':
                    var days = this.isLeapYear() ? 30 : 29;
                    return new syncedCelander([this.year(), 12, days, 23, 59, 59]);
                case 'months':
                case 'month':
                    var monthDays = this.daysInMonth(this.year(), this.month());
                    return new syncedCelander([this.year(), this.month(), monthDays, 23, 59, 59]);
                case 'days':
                case 'day':
                    return new syncedCelander([this.year(), this.month(), this.date(), 23, 59, 59]);
                case 'hours':
                case 'hour':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
                case 'minutes':
                case 'minute':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
                case 'seconds':
                case 'second':
                    return new syncedCelander([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                case 'weeks':
                case 'week':
                    var weekDayNumber = this.calendar().weekday;
                    return new syncedCelander([this.year(), this.month(), this.date() + (7 - weekDayNumber)]);
                default:
                    return this.clone();
            }
            /* eslint-enable no-case-declarations */
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'sod',
        value: function sod() {
            return this.startOf('day');
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'eod',
        value: function eod() {
            return this.endOf('day');
        }

        /** Get the timezone offset in minutes.
         * @return {*}
         */

    }, {
        key: 'zone',
        value: function zone(input) {
            if (input || input === 0) {
                this.ON.zone = input;
                return this;
            } else {
                return this.ON.zone;
            }
        }

        /**
         * @returns {PersianDate}
         */

    }, {
        key: 'local',
        value: function local() {
            var utcStamp = void 0;
            if (this._utcMode) {
                var ThatDayOffset = new Date(this.toDate()).getTimezoneOffset();
                var offsetMils = ThatDayOffset * 60 * 1000;
                if (ThatDayOffset < 0) {
                    utcStamp = this.valueOf() - offsetMils;
                } else {
                    /* istanbul ignore next */
                    utcStamp = this.valueOf() + offsetMils;
                }
                this.toCalendar(PersianDateClass.calendarType);
                var utcDate = new Date(utcStamp);
                this._gDateToCalculators(utcDate);
                this._utcMode = false;
                this.zone(ThatDayOffset);
                return this;
            } else {
                return this;
            }
        }

        /**
         * @param input
         * @return {*}
         */

    }, {
        key: 'utc',


        /**
         * @description Current date/time in UTC mode
         * @param input
         * @returns {*}
         */
        value: function utc(input) {
            var utcStamp = void 0;
            if (input) {
                return this._getSyncedClass(input).utc();
            }
            if (this._utcMode) {
                return this;
            } else {
                var offsetMils = this.zone() * 60 * 1000;
                if (this.zone() < 0) {
                    utcStamp = this.valueOf() + offsetMils;
                } else {
                    /* istanbul ignore next */
                    utcStamp = this.valueOf() - offsetMils;
                }
                var utcDate = new Date(utcStamp),
                    d = this._getSyncedClass(utcDate);
                this.algorithmsCalc(d);
                this._utcMode = true;
                this.zone(0);
                return this;
            }
        }

        /**
         * @returns {boolean}
         */

    }, {
        key: 'isUtc',
        value: function isUtc() {
            return this._utcMode;
        }

        /**
         * @returns {boolean}
         * @link https://fa.wikipedia.org/wiki/%D8%B3%D8%A7%D8%B9%D8%AA_%D8%AA%D8%A7%D8%A8%D8%B3%D8%AA%D8%A7%D9%86%DB%8C
         */

    }, {
        key: 'isDST',
        value: function isDST() {
            var month = this.month(),
                day = this.date();
            if (month == 1 && day > 1 || month == 6 && day < 31 || month < 6 && month >= 2) {
                return true;
            } else {
                return false;
            }
        }

        /**
         * @returns {boolean}
         */

    }, {
        key: 'isLeapYear',
        value: function isLeapYear(year) {
            if (year === undefined) {
                year = this.year();
            }
            if (this.calendarType == 'persian' && this.leapYearMode === 'algorithmic') {
                return this.algorithms.leap_persian(year);
            }
            if (this.calendarType == 'persian' && this.leapYearMode === 'astronomical') {
                return this.algorithms.leap_persiana(year);
            } else if (this.calendarType == 'gregorian') {
                return this.algorithms.leap_gregorian(year);
            }
        }

        /**
         * @param yearInput
         * @param monthInput
         * @returns {number}
         */

    }, {
        key: 'daysInMonth',
        value: function daysInMonth(yearInput, monthInput) {
            var year = yearInput ? yearInput : this.year(),
                month = monthInput ? monthInput : this.month();
            if (this.calendarType === 'persian') {
                if (month < 1 || month > 12) return 0;
                if (month < 7) return 31;
                if (month < 12) return 30;
                if (this.isLeapYear(year)) {
                    return 30;
                }
                return 29;
            }
            if (this.calendarType === 'gregorian') {
                return new Date(year, month, 0).getDate();
            }
        }

        /**
         * @description Return Native Javascript Date
         * @returns {*|PersianDate.gDate}
         */

    }, {
        key: 'toDate',
        value: function toDate() {
            return this.ON.gDate;
        }

        /**
         * @description Returns Array Of Persian Date
         * @returns {array}
         */

    }, {
        key: 'toArray',
        value: function toArray() {
            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
        }

        /**
         * @returns {*}
         */

    }, {
        key: 'formatNumber',
        value: function formatNumber() {
            var output = void 0,
                self = this;

            // if default conf dosent set follow golbal config
            if (this.formatPersian === '_default') {
                if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
                    /* istanbul ignore next */
                    if (self.formatPersian === false) {
                        output = false;
                    } else {
                        // Default Conf
                        output = true;
                    }
                }
                /* istanbul ignore next */
                else {
                        if (window.formatPersian === false) {
                            output = false;
                        } else {
                            // Default Conf
                            output = true;
                        }
                    }
            } else {
                if (this.formatPersian === true) {
                    output = true;
                } else if (this.formatPersian === false) {
                    output = false;
                } else {
                    Error('Invalid Config "formatPersian" !!');
                }
            }
            return output;
        }

        /**
         * @param inputString
         * @returns {*}
         */

    }, {
        key: 'format',
        value: function format(inputString) {
            var self = this,
                formattingTokens = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g,
                info = {
                year: self.year(),
                month: self.month(),
                hour: self.hours(),
                minute: self.minutes(),
                second: self.seconds(),
                date: self.date(),
                timezone: self.zone(),
                unix: self.unix()
            },
                formatToPersian = self.formatNumber();

            var checkPersian = function checkPersian(i) {
                if (formatToPersian) {
                    return toPersianDigit(i);
                } else {
                    return i;
                }
            };

            /* jshint ignore:start */
            function replaceFunction(input) {
                switch (input) {
                    // AM/PM
                    case 'a':
                        {
                            if (formatToPersian) return info.hour >= 12 ? 'ب ظ' : 'ق ظ';else return info.hour >= 12 ? 'PM' : 'AM';
                        }
                    // Hours (Int)
                    case 'H':
                        {
                            return checkPersian(info.hour);
                        }
                    case 'HH':
                        {
                            return checkPersian(leftZeroFill(info.hour, 2));
                        }
                    case 'h':
                        {
                            return checkPersian(info.hour % 12);
                        }
                    case 'hh':
                        {
                            return checkPersian(leftZeroFill(info.hour % 12, 2));
                        }
                    // Minutes
                    case 'm':
                        {
                            return checkPersian(leftZeroFill(info.minute, 2));
                        }
                    // Two Digit Minutes
                    case 'mm':
                        {
                            return checkPersian(leftZeroFill(info.minute, 2));
                        }
                    // Second
                    case 's':
                        {
                            return checkPersian(info.second);
                        }
                    case 'ss':
                        {
                            return checkPersian(leftZeroFill(info.second, 2));
                        }
                    // Day (Int)
                    case 'D':
                        {
                            return checkPersian(leftZeroFill(info.date));
                        }
                    // Return Two Digit
                    case 'DD':
                        {
                            return checkPersian(leftZeroFill(info.date, 2));
                        }
                    // Return day Of Month
                    case 'DDD':
                        {
                            var t = self.startOf('year');
                            return checkPersian(leftZeroFill(self.diff(t, 'days'), 3));
                        }
                    // Return Day of Year
                    case 'DDDD':
                        {
                            var _t = self.startOf('year');
                            return checkPersian(leftZeroFill(self.diff(_t, 'days'), 3));
                        }
                    // Return day Of week
                    case 'd':
                        {
                            return checkPersian(self.calendar().weekday);
                        }
                    // Return week day name abbr
                    case 'ddd':
                        {
                            return self._weekNameShort(self.calendar().weekday);
                        }
                    case 'dddd':
                        {
                            return self._weekName(self.calendar().weekday);
                        }
                    // Return Persian Day Name
                    case 'ddddd':
                        {
                            return self._dayName(self.calendar().day);
                        }
                    // Return Persian Day Name
                    case 'dddddd':
                        {
                            return self._weekNameMin(self.calendar().weekday);
                        }
                    // Return Persian Day Name
                    case 'w':
                        {
                            var _t2 = self.startOf('year'),
                                day = parseInt(self.diff(_t2, 'days') / 7) + 1;
                            return checkPersian(day);
                        }
                    // Return Persian Day Name
                    case 'ww':
                        {
                            var _t3 = self.startOf('year'),
                                _day = leftZeroFill(parseInt(self.diff(_t3, 'days') / 7) + 1, 2);
                            return checkPersian(_day);
                        }
                    // Month  (Int)
                    case 'M':
                        {
                            return checkPersian(info.month);
                        }
                    // Two Digit Month (Str)
                    case 'MM':
                        {
                            return checkPersian(leftZeroFill(info.month, 2));
                        }
                    // Abbr String of Month (Str)
                    case 'MMM':
                        {
                            return self._monthNameShort(info.month);
                        }
                    // Full String name of Month (Str)
                    case 'MMMM':
                        {
                            return self._monthName(info.month);
                        }
                    // Year
                    // Two Digit Year (Str)
                    case 'YY':
                        {
                            var yearDigitArray = info.year.toString().split('');
                            return checkPersian(yearDigitArray[2] + yearDigitArray[3]);
                        }
                    // Full Year (Int)
                    case 'YYYY':
                        {
                            return checkPersian(info.year);
                        }
                    /* istanbul ignore next */
                    case 'Z':
                        {
                            var flag = '+',
                                hours = Math.round(info.timezone / 60),
                                minutes = info.timezone % 60;

                            if (minutes < 0) {
                                minutes *= -1;
                            }
                            if (hours < 0) {
                                flag = '-';
                                hours *= -1;
                            }

                            var z = flag + leftZeroFill(hours, 2) + ':' + leftZeroFill(minutes, 2);
                            return checkPersian(z);
                        }
                    /* istanbul ignore next */
                    case 'ZZ':
                        {
                            var _flag = '+',
                                _hours = Math.round(info.timezone / 60),
                                _minutes = info.timezone % 60;

                            if (_minutes < 0) {
                                _minutes *= -1;
                            }
                            if (_hours < 0) {
                                _flag = '-';
                                _hours *= -1;
                            }
                            var _z = _flag + leftZeroFill(_hours, 2) + '' + leftZeroFill(_minutes, 2);
                            return checkPersian(_z);
                        }
                    /* istanbul ignore next */
                    case 'X':
                        {
                            return self.unix();
                        }
                    // 8:30 PM
                    case 'LT':
                        {
                            return self.format('H:m a');
                        }
                    // 09/04/1986
                    case 'L':
                        {
                            return self.format('YYYY/MM/DD');
                        }
                    // 9/4/1986
                    case 'l':
                        {
                            return self.format('YYYY/M/D');
                        }
                    // September 4th 1986
                    case 'LL':
                        {
                            return self.format('MMMM DD YYYY');
                        }
                    // Sep 4 1986
                    case 'll':
                        {
                            return self.format('MMM DD YYYY');
                        }
                    //September 4th 1986 8:30 PM
                    case 'LLL':
                        {
                            return self.format('MMMM YYYY DD   H:m  a');
                        }
                    // Sep 4 1986 8:30 PM
                    case 'lll':
                        {
                            return self.format('MMM YYYY DD   H:m  a');
                        }
                    //Thursday, September 4th 1986 8:30 PM
                    case 'LLLL':
                        {
                            return self.format('dddd D MMMM YYYY  H:m  a');
                        }
                    // Thu, Sep 4 1986 8:30 PM
                    case 'llll':
                        {
                            return self.format('ddd D MMM YYYY  H:m  a');
                        }
                }
            }

            /* jshint ignore:end */

            if (inputString) {
                return inputString.replace(formattingTokens, replaceFunction);
            } else {
                var _inputString = 'YYYY-MM-DD HH:mm:ss a';
                return _inputString.replace(formattingTokens, replaceFunction);
            }
        }

        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */

    }, {
        key: 'add',
        value: function add(key, value) {
            var duration = new Duration(key, value)._data,
                unit = normalizeDuration(key, value).unit;
            value = normalizeDuration(key, value).value;

            if (unit === 'year' || unit === 'month') {
                if (duration.years > 0) {
                    var newYear = this.year() + duration.years;
                    this.year(newYear);
                }
                if (duration.months > 0) {
                    var oldDate = this.date();
                    var newMonth = this.month() + duration.months;
                    var thisMonthDaysCount = this.daysInMonth(this.year(), newMonth);
                    if (oldDate >= thisMonthDaysCount) {
                        oldDate = thisMonthDaysCount;
                    }
                    this.date(oldDate);
                    this.month(newMonth);
                }
            }
            if (unit === 'day') {
                var oldHour = this.hour();
                var newDate = this.valueOf() + value * 24 * 60 * 60 * 1000;
                return this.unix(newDate / 1000).hour(oldHour);
            }
            if (unit === 'hour') {
                var _newDate = this.valueOf() + value * 60 * 60 * 1000;
                return this.unix(_newDate / 1000);
            }
            if (unit === 'minute') {
                var _newDate2 = this.valueOf() + value * 60 * 1000;
                return this.unix(_newDate2 / 1000);
            }
            if (unit === 'second') {
                var _newDate3 = this.valueOf() + value * 1000;
                return this.unix(_newDate3 / 1000);
            }
            if (unit === 'millisecond') {
                // log('add millisecond')
                var newMillisecond = this.valueOf() + value;
                return this.unix(newMillisecond / 1000);
            }
            return this._getSyncedClass(this.valueOf());
        }

        /**
         * @param key
         * @param value
         * @returns {PersianDate}
         */

    }, {
        key: 'subtract',
        value: function subtract(key, value) {
            var duration = new Duration(key, value)._data;
            var unit = normalizeDuration(key, value).unit;
            value = normalizeDuration(key, value).value;

            if (unit === 'year' || unit === 'month') {
                if (duration.years > 0) {
                    var newYear = this.year() - duration.years;
                    this.year(newYear);
                }
                if (duration.months > 0) {
                    var oldDate = this.date();
                    var newMonth = this.month() - duration.months;
                    this.month(newMonth);
                    var thisMonthDaysCount = this.daysInMonth(this.year(), this.month());
                    if (oldDate > thisMonthDaysCount) {
                        oldDate = thisMonthDaysCount;
                    }
                    this.date(oldDate);
                }
            }
            if (unit === 'day') {
                var oldHour = this.hour();
                var newDate = this.valueOf() - value * 24 * 60 * 60 * 1000;
                return this.unix(newDate / 1000).hour(oldHour);
            }
            if (unit === 'hour') {
                var _newDate4 = this.valueOf() - value * 60 * 60 * 1000;
                return this.unix(_newDate4 / 1000);
            }
            if (unit === 'minute') {
                var _newDate5 = this.valueOf() - value * 60 * 1000;
                return this.unix(_newDate5 / 1000);
            }
            if (unit === 'second') {
                var _newDate6 = this.valueOf() - value * 1000;
                return this.unix(_newDate6 / 1000);
            }
            if (unit === 'millisecond') {
                // log('add millisecond')
                var newMillisecond = this.valueOf() - value;
                return this.unix(newMillisecond / 1000);
            }
            return this._getSyncedClass(this.valueOf());
        }

        /**
         * check if a date is same as b
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {boolean}
         * @static
         */

    }, {
        key: 'isSameDay',


        /**
         * @param dateB
         * @since 1.0.0
         * @return {PersianDateClass|*|boolean}
         */
        value: function isSameDay(dateB) {
            return this && dateB && this.date() == dateB.date() && this.year() == dateB.year() && this.month() == dateB.month();
        }

        /**
         * @desc check if a month is same as b
         * @param {Date} dateA
         * @param {Date} dateB
         * @return {boolean}
         * @since 1.0.0
         * @static
         */

    }, {
        key: 'isSameMonth',


        /**
         * @desc check two for month similarity
         * @param dateA
         * @param dateB
         * @since 1.0.0
         * @return {*|boolean}
         */
        value: function isSameMonth(dateB) {
            return this && dateB && this.year() == this.year() && this.month() == dateB.month();
        }
    }], [{
        key: 'rangeName',
        value: function rangeName() {
            var p = PersianDateClass,
                t = p.calendarType;
            if (p.localType === 'fa') {
                if (t === 'persian') {
                    return fa.persian;
                } else {
                    return fa.gregorian;
                }
            } else {
                if (t === 'persian') {
                    return en.persian;
                } else {
                    return en.gregorian;
                }
            }
        }
    }, {
        key: 'toLeapYearMode',
        value: function toLeapYearMode(input) {
            var d = PersianDateClass;
            d.leapYearMode = input;
            return d;
        }
    }, {
        key: 'toCalendar',
        value: function toCalendar(input) {
            var d = PersianDateClass;
            d.calendarType = input;
            return d;
        }

        /**
         * @since 1.0.0
         * @static
         * @param input
         * @return {PersianDateClass}
         */

    }, {
        key: 'toLocale',
        value: function toLocale(input) {
            var d = PersianDateClass;
            d.localType = input;
            if (d.localType !== 'fa') {
                d.formatPersian = false;
            } else {
                d.formatPersian = '_default';
            }
            return d;
        }
    }, {
        key: 'isPersianDate',
        value: function isPersianDate(obj) {
            return obj instanceof PersianDateClass;
        }
    }, {
        key: 'duration',
        value: function duration(input, key) {
            return new Duration(input, key);
        }
    }, {
        key: 'isDuration',
        value: function isDuration(obj) {
            return obj instanceof Duration;
        }
    }, {
        key: 'unix',
        value: function unix(timestamp) {
            if (timestamp) {
                return new PersianDateClass(timestamp * 1000);
            } else {
                return new PersianDateClass().unix();
            }
        }
    }, {
        key: 'getFirstWeekDayOfMonth',
        value: function getFirstWeekDayOfMonth(year, month) {
            return new PersianDateClass([year, month, 1]).day();
        }
    }, {
        key: 'utc',
        value: function utc(input) {
            if (input) {
                return new PersianDateClass(input).utc();
            } else {
                return new PersianDateClass().utc();
            }
        }
    }, {
        key: 'isSameDay',
        value: function isSameDay(dateA, dateB) {
            return dateA && dateB && dateA.date() == dateB.date() && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
    }, {
        key: 'isSameMonth',
        value: function isSameMonth(dateA, dateB) {
            return dateA && dateB && dateA.year() == dateB.year() && dateA.month() == dateB.month();
        }
    }]);

    return PersianDateClass;
}();

/**
 * @type {PersianDateClass}
 */


module.exports = PersianDateClass;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Start algorithm class
var ASTRO = __webpack_require__(3);
var ON = __webpack_require__(9);

var Algorithms = function () {
    function Algorithms(parent) {
        _classCallCheck(this, Algorithms);

        this.parent = parent;
        this.ASTRO = new ASTRO();
        this.ON = new ON();
        /*  You may notice that a variety of array variables logically local
         to functions are declared globally here.  In JavaScript, construction
         of an array variable from source code occurs as the code is
         interpreted.  Making these variables pseudo-globals permits us
         to avoid overhead constructing and disposing of them in each
         call on the function in which whey are used.  */
        // TODO this block didnt used in main agorithm
        this.J0000 = 1721424.5; // Julian date of Gregorian epoch: 0000-01-01
        this.J1970 = 2440587.5; // Julian date at Unix epoch: 1970-01-01
        this.JMJD = 2400000.5; // Epoch of Modified Julian Date system
        this.NormLeap = [false /*"Normal year"*/, true /*"Leap year"*/];
        // TODO END
        this.GREGORIAN_EPOCH = 1721425.5;
        this.PERSIAN_EPOCH = 1948320.5;
    }

    /**
     * @desc LEAP_GREGORIAN  --  Is a given year in the Gregorian calendar a leap year ?
     * @param year
     * @return {boolean}
     */


    _createClass(Algorithms, [{
        key: 'leap_gregorian',
        value: function leap_gregorian(year) {
            return year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0);
        }

        /**
         * @desc Determine Julian day number from Gregorian calendar date
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'gregorian_to_jd',
        value: function gregorian_to_jd(year, month, day) {
            return this.GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) + -Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : this.leap_gregorian(year) ? -1 : -2) + day);
        }

        /**
         * @desc Calculate Gregorian calendar date from Julian day
         * @param {*} jd
         */

    }, {
        key: 'jd_to_gregorian',
        value: function jd_to_gregorian(jd) {
            var wjd = void 0,
                depoch = void 0,
                quadricent = void 0,
                dqc = void 0,
                cent = void 0,
                dcent = void 0,
                quad = void 0,
                dquad = void 0,
                yindex = void 0,
                year = void 0,
                yearday = void 0,
                leapadj = void 0,
                month = void 0,
                day = void 0;

            wjd = Math.floor(jd - 0.5) + 0.5;
            depoch = wjd - this.GREGORIAN_EPOCH;
            quadricent = Math.floor(depoch / 146097);
            dqc = this.ASTRO.mod(depoch, 146097);
            cent = Math.floor(dqc / 36524);
            dcent = this.ASTRO.mod(dqc, 36524);
            quad = Math.floor(dcent / 1461);
            dquad = this.ASTRO.mod(dcent, 1461);
            yindex = Math.floor(dquad / 365);
            year = quadricent * 400 + cent * 100 + quad * 4 + yindex;
            if (!(cent === 4 || yindex === 4)) {
                year++;
            }
            yearday = wjd - this.gregorian_to_jd(year, 1, 1);
            leapadj = wjd < this.gregorian_to_jd(year, 3, 1) ? 0 : this.leap_gregorian(year) ? 1 : 2;
            month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
            day = wjd - this.gregorian_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        /**
         * @param {*} year
         */
        //    leap_julian (year) {
        //        return this.ASTRO.mod(year, 4) === ((year > 0) ? 0 : 3);
        //    }


        /**
         * @desc Calculate Julian calendar date from Julian day
         * @param {*} td
         */
        //    jd_to_julian (td) {
        //        let z, a, b, c, d, e, year, month, day;
        //
        //        td += 0.5;
        //        z = Math.floor(td);
        //
        //        a = z;
        //        b = a + 1524;
        //        c = Math.floor((b - 122.1) / 365.25);
        //        d = Math.floor(365.25 * c);
        //        e = Math.floor((b - d) / 30.6001);
        //
        //        month = Math.floor((e < 14) ? (e - 1) : (e - 13));
        //        year = Math.floor((month > 2) ? (c - 4716) : (c - 4715));
        //        day = b - d - Math.floor(30.6001 * e);
        //
        //        /*  If year is less than 1, subtract one to convert from
        //         a zero based date system to the common era system in
        //         which the year -1 (1 B.C.E) is followed by year 1 (1 C.E.).  */
        //
        //        if (year < 1) {
        //            year--;
        //        }
        //
        //        return [year, month, day];
        //    }


        /**
         * @desc TEHRAN_EQUINOX  --  Determine Julian day and fraction of the
         March equinox at the Tehran meridian in
         a given Gregorian year.
         * @param {*} year
         */

    }, {
        key: 'tehran_equinox',
        value: function tehran_equinox(year) {
            var equJED = void 0,
                equJD = void 0,
                equAPP = void 0,
                equTehran = void 0,
                dtTehran = void 0;

            //  March equinox in dynamical time
            equJED = this.ASTRO.equinox(year, 0);

            //  Correct for delta T to obtain Universal time
            equJD = equJED - this.ASTRO.deltat(year) / (24 * 60 * 60);

            //  Apply the equation of time to yield the apparent time at Greenwich
            equAPP = equJD + this.ASTRO.equationOfTime(equJED);

            /*  Finally, we must correct for the constant difference between
             the Greenwich meridian andthe time zone standard for
             Iran Standard time, 52°30' to the East.  */

            dtTehran = (52 + 30 / 60.0 + 0 / (60.0 * 60.0)) / 360;
            equTehran = equAPP + dtTehran;

            return equTehran;
        }

        /**
         * @desc TEHRAN_EQUINOX_JD  --  Calculate Julian day during which the
         March equinox, reckoned from the Tehran
         meridian, occurred for a given Gregorian
         year.
         * @param {*} year
         */

    }, {
        key: 'tehran_equinox_jd',
        value: function tehran_equinox_jd(year) {
            var ep = void 0,
                epg = void 0;

            ep = this.tehran_equinox(year);
            epg = Math.floor(ep);

            return epg;
        }

        /**
         * @desc  PERSIANA_YEAR  --  Determine the year in the Persian
         astronomical calendar in which a
         given Julian day falls.  Returns an
         array of two elements:
          [0]  Persian year
         [1]  Julian day number containing
         equinox for this year.
         * @param {*} jd
         */

    }, {
        key: 'persiana_year',
        value: function persiana_year(jd) {
            var guess = this.jd_to_gregorian(jd)[0] - 2,
                lasteq = void 0,
                nexteq = void 0,
                adr = void 0;

            lasteq = this.tehran_equinox_jd(guess);
            while (lasteq > jd) {
                guess--;
                lasteq = this.tehran_equinox_jd(guess);
            }
            nexteq = lasteq - 1;
            while (!(lasteq <= jd && jd < nexteq)) {
                lasteq = nexteq;
                guess++;
                nexteq = this.tehran_equinox_jd(guess);
            }
            adr = Math.round((lasteq - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1;

            return [adr, lasteq];
        }

        /**
         * @desc Calculate date in the Persian astronomical
         calendar from Julian day.
         * @param {*} jd
         */

    }, {
        key: 'jd_to_persiana',
        value: function jd_to_persiana(jd) {
            var year = void 0,
                month = void 0,
                day = void 0,
                adr = void 0,
                equinox = void 0,
                yday = void 0;

            jd = Math.floor(jd) + 0.5;
            adr = this.persiana_year(jd);
            year = adr[0];
            equinox = adr[1];
            day = Math.floor((jd - equinox) / 30) + 1;

            yday = Math.floor(jd) - this.persiana_to_jd(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = Math.floor(jd) - this.persiana_to_jd(year, month, 1) + 1;

            return [year, month, day];
        }

        /**
         * @desc Obtain Julian day from a given Persian
         astronomical calendar date.
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'persiana_to_jd',
        value: function persiana_to_jd(year, month, day) {
            var adr = void 0,
                equinox = void 0,
                guess = void 0,
                jd = void 0;

            guess = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (year - 1 - 1);
            adr = [year - 1, 0];

            while (adr[0] < year) {
                adr = this.persiana_year(guess);
                guess = adr[1] + (this.ASTRO.TropicalYear + 2);
            }
            equinox = adr[1];

            jd = equinox + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + (day - 1);
            return jd;
        }

        /**
         * @desc Is a given year a leap year in the Persian astronomical calendar ?
         * @param {*} year
         */

    }, {
        key: 'leap_persiana',
        value: function leap_persiana(year) {
            return this.persiana_to_jd(year + 1, 1, 1) - this.persiana_to_jd(year, 1, 1) > 365;
        }

        /**
         * @desc Is a given year a leap year in the Persian calendar ?
         * also nasa use this algorithm https://eclipse.gsfc.nasa.gov/SKYCAL/algorithm.js search for 'getLastDayOfPersianMonth' and you can find it
         * @param {*} year
         *
         */

    }, {
        key: 'leap_persian',
        value: function leap_persian(year) {
            return ((year - (year > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682;
        }

        /**
         * @desc Determine Julian day from Persian date
         * @param {*} year
         * @param {*} month
         * @param {*} day
         */

    }, {
        key: 'persian_to_jd',
        value: function persian_to_jd(year, month, day) {
            var epbase = void 0,
                epyear = void 0;

            epbase = year - (year >= 0 ? 474 : 473);
            epyear = 474 + this.ASTRO.mod(epbase, 2820);

            return day + (month <= 7 ? (month - 1) * 31 : (month - 1) * 30 + 6) + Math.floor((epyear * 682 - 110) / 2816) + (epyear - 1) * 365 + Math.floor(epbase / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1);
        }

        /**
         * @desc Calculate Persian date from Julian day
         * @param {*} jd
         */

    }, {
        key: 'jd_to_persian',
        value: function jd_to_persian(jd) {
            var year = void 0,
                month = void 0,
                day = void 0,
                depoch = void 0,
                cycle = void 0,
                cyear = void 0,
                ycycle = void 0,
                aux1 = void 0,
                aux2 = void 0,
                yday = void 0;

            jd = Math.floor(jd) + 0.5;

            depoch = jd - this.persian_to_jd(475, 1, 1);
            cycle = Math.floor(depoch / 1029983);
            cyear = this.ASTRO.mod(depoch, 1029983);
            if (cyear === 1029982) {
                ycycle = 2820;
            } else {
                aux1 = Math.floor(cyear / 366);
                aux2 = this.ASTRO.mod(cyear, 366);
                ycycle = Math.floor((2134 * aux1 + 2816 * aux2 + 2815) / 1028522) + aux1 + 1;
            }
            year = ycycle + 2820 * cycle + 474;
            if (year <= 0) {
                year--;
            }
            yday = jd - this.persian_to_jd(year, 1, 1) + 1;
            month = yday <= 186 ? Math.ceil(yday / 31) : Math.ceil((yday - 6) / 30);
            day = jd - this.persian_to_jd(year, month, 1) + 1;
            return [year, month, day];
        }

        /**
         *
         * @param {*} weekday
         */

    }, {
        key: 'gWeekDayToPersian',
        value: function gWeekDayToPersian(weekday) {
            if (weekday + 2 === 8) {
                return 1;
            } else if (weekday + 2 === 7) {
                return 7;
            } else {
                return weekday + 2;
            }
        }

        /**
         * @desc updateFromGregorian  --  Update all calendars from Gregorian.
         "Why not Julian date?" you ask.  Because
         starting from Gregorian guarantees we're
         already snapped to an integral second, so
         we don't get roundoff errors in other
         calendars.
         */

    }, {
        key: 'updateFromGregorian',
        value: function updateFromGregorian() {
            var j = void 0,
                year = void 0,
                mon = void 0,
                mday = void 0,
                hour = void 0,
                min = void 0,
                sec = void 0,
                weekday = void 0,
                utime = void 0,
                perscal = void 0;

            year = this.ON.gregorian.year;
            mon = this.ON.gregorian.month;
            mday = this.ON.gregorian.day;
            hour = 0; //this.ON.gregorian.hour;
            min = 0; //this.ON.gregorian.minute;
            sec = 0; //this.ON.gregorian.second;

            this.ON.gDate = new Date(year, mon, mday, this.ON.gregorian.hour, this.ON.gregorian.minute, this.ON.gregorian.second, this.ON.gregorian.millisecond);

            if (this.parent._utcMode === false) {
                this.ON.zone = this.ON.gDate.getTimezoneOffset();
            }

            // Added for this algorithms cant parse 2016,13,32 successfully
            this.ON.gregorian.year = this.ON.gDate.getFullYear();
            this.ON.gregorian.month = this.ON.gDate.getMonth();
            this.ON.gregorian.day = this.ON.gDate.getDate();

            //  Update Julian day
            // ---------------------------------------------------------------------------
            j = this.gregorian_to_jd(year, mon + 1, mday) + Math.floor(sec + 60 * (min + 60 * hour) + 0.5) / 86400.0;

            this.ON.julianday = j;
            this.ON.modifiedjulianday = j - this.JMJD;

            //  Update day of week in Gregorian box
            // ---------------------------------------------------------------------------
            weekday = this.ASTRO.jwday(j);
            // Move to 1 indexed number
            this.ON.gregorian.weekday = weekday + 1;

            //  Update leap year status in Gregorian box
            // ---------------------------------------------------------------------------
            this.ON.gregorian.leap = this.NormLeap[this.leap_gregorian(year) ? 1 : 0];

            //  Update Julian Calendar
            // ---------------------------------------------------------------------------
            //        julcal = this.jd_to_julian(j);
            //
            //        this.ON.juliancalendar.year = julcal[0];
            //        this.ON.juliancalendar.month = julcal[1] - 1;
            //        this.ON.juliancalendar.day = julcal[2];
            //        this.ON.juliancalendar.leap = this.NormLeap[this.leap_julian(julcal[0]) ? 1 : 0];
            weekday = this.ASTRO.jwday(j);
            //        this.ON.juliancalendar.weekday = weekday;

            //  Update Persian Calendar
            // ---------------------------------------------------------------------------
            if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'algorithmic') {
                perscal = this.jd_to_persian(j);
                this.ON.persian.year = perscal[0];
                this.ON.persian.month = perscal[1] - 1;
                this.ON.persian.day = perscal[2];
                this.ON.persian.weekday = this.gWeekDayToPersian(weekday);
                this.ON.persian.leap = this.NormLeap[this.leap_persian(perscal[0]) ? 1 : 0];
            }

            //  Update Persian Astronomical Calendar
            // ---------------------------------------------------------------------------
            if (this.parent.calendarType == 'persian' && this.parent.leapYearMode == 'astronomical') {
                perscal = this.jd_to_persiana(j);
                this.ON.persianAstro.year = perscal[0];
                this.ON.persianAstro.month = perscal[1] - 1;
                this.ON.persianAstro.day = perscal[2];
                this.ON.persianAstro.weekday = this.gWeekDayToPersian(weekday);
                this.ON.persianAstro.leap = this.NormLeap[this.leap_persiana(perscal[0]) ? 1 : 0];
            }
            //  Update Gregorian serial number
            // ---------------------------------------------------------------------------
            if (this.ON.gregserial.day !== null) {
                this.ON.gregserial.day = j - this.J0000;
            }

            //  Update Unix time()
            // ---------------------------------------------------------------------------
            utime = (j - this.J1970) * (60 * 60 * 24 * 1000);

            this.ON.unixtime = Math.round(utime / 1000);
        }

        /**
         * @desc Perform calculation starting with a Gregorian date
         * @param {*} dateArray
         */

    }, {
        key: 'calcGregorian',
        value: function calcGregorian(dateArray) {
            if (dateArray[0] || dateArray[0] === 0) {
                this.ON.gregorian.year = dateArray[0];
            }
            if (dateArray[1] || dateArray[1] === 0) {
                this.ON.gregorian.month = dateArray[1];
            }
            if (dateArray[2] || dateArray[2] === 0) {
                this.ON.gregorian.day = dateArray[2];
            }
            if (dateArray[3] || dateArray[3] === 0) {
                this.ON.gregorian.hour = dateArray[3];
            }
            if (dateArray[4] || dateArray[4] === 0) {
                this.ON.gregorian.minute = dateArray[4];
            }
            if (dateArray[5] || dateArray[5] === 0) {
                this.ON.gregorian.second = dateArray[5];
            }
            if (dateArray[6] || dateArray[6] === 0) {
                this.ON.gregorian.millisecond = dateArray[6];
            }
            this.updateFromGregorian();
        }

        /**
         * @desc Perform calculation starting with a Julian date
         */

    }, {
        key: 'calcJulian',
        value: function calcJulian() {
            var j = void 0,
                date = void 0;
            j = this.ON.julianday;
            date = this.jd_to_gregorian(j);
            this.ON.gregorian.year = date[0];
            this.ON.gregorian.month = date[1] - 1;
            this.ON.gregorian.day = date[2];
            //        this.ON.gregorian.hour = this.pad(time[0], 2, " ");
            //        this.ON.gregorian.minute = this.pad(time[1], 2, "0");
            //        this.ON.gregorian.second = this.pad(time[2], 2, "0");
            this.updateFromGregorian();
        }

        /**
         * @desc Set Julian date and update all calendars
         * @param {*} j
         */

    }, {
        key: 'setJulian',
        value: function setJulian(j) {
            this.ON.julianday = j;
            this.calcJulian();
        }

        /**
         * @desc  Update from Persian calendar
         * @param {*} dateArray
         */

    }, {
        key: 'calcPersian',
        value: function calcPersian(dateArray) {
            if (dateArray[0]) {
                this.ON.persian.year = dateArray[0];
            }
            if (dateArray[1]) {
                this.ON.persian.month = dateArray[1];
            }
            if (dateArray[2]) {
                this.ON.persian.day = dateArray[2];
            }
            if (dateArray[3]) {
                this.ON.gregorian.hour = dateArray[3];
            }
            if (dateArray[4]) {
                this.ON.gregorian.minute = dateArray[4];
            }
            if (dateArray[5]) {
                this.ON.gregorian.second = dateArray[5];
            }
            if (dateArray[6]) {
                this.ON.gregorian.millisecond = dateArray[6];
            }

            this.setJulian(this.persian_to_jd(this.ON.persian.year, this.ON.persian.month, this.ON.persian.day));
        }

        /**
         * @desc Update from Persian astronomical calendar
         * @param {*} dateArray
         */

    }, {
        key: 'calcPersiana',
        value: function calcPersiana(dateArray) {
            if (dateArray[0]) {
                this.ON.persianAstro.year = dateArray[0];
            }
            if (dateArray[1]) {
                this.ON.persianAstro.month = dateArray[1];
            }
            if (dateArray[2]) {
                this.ON.persianAstro.day = dateArray[2];
            }

            if (dateArray[3]) {
                this.ON.gregorian.hour = dateArray[3];
            }
            if (dateArray[4]) {
                this.ON.gregorian.minute = dateArray[4];
            }
            if (dateArray[5]) {
                this.ON.gregorian.second = dateArray[5];
            }
            if (dateArray[6]) {
                this.ON.gregorian.millisecond = dateArray[6];
            }
            this.setJulian(this.persiana_to_jd(this.ON.persianAstro.year, this.ON.persianAstro.month, this.ON.persianAstro.day + 0.5));
        }
    }]);

    return Algorithms;
}();

module.exports = Algorithms;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 JavaScript functions for positional astronomy
 by John Walker  --  September, MIM
 http://www.fourmilab.ch/
 This program is in the public domain.
 */

var ASTRO = function () {
    function ASTRO() {
        _classCallCheck(this, ASTRO);

        //  Frequently-used constants
        this.J2000 = 2451545.0; // Julian day of J2000 epoch
        this.JulianCentury = 36525.0; // Days in Julian century
        this.JulianMillennium = this.JulianCentury * 10; // Days in Julian millennium
        //        this.AstronomicalUnit = 149597870.0;           // Astronomical unit in kilometres
        this.TropicalYear = 365.24219878; // Mean solar tropical year

        /*  OBLIQEQ  --  Calculate the obliquity of the ecliptic for a given
         Julian date.  This uses Laskar's tenth-degree
         polynomial fit (J. Laskar, Astronomy and
         Astrophysics, Vol. 157, page 68 [1986]) which is
         accurate to within 0.01 arc second between AD 1000
         and AD 3000, and within a few seconds of arc for
         +/-10000 years around AD 2000.  If we're outside the
         range in which this fit is valid (deep time) we
         simply return the J2000 value of the obliquity, which
         happens to be almost precisely the mean.  */
        this.oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45];
        /* Periodic terms for nutation in longiude (delta \Psi) and
         obliquity (delta \Epsilon) as given in table 21.A of
         Meeus, "Astronomical Algorithms", first edition. */
        this.nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2];

        this.nutArgCoeff = [-171996, -1742, 92095, 89, /*  0,  0,  0,  0,  1 */
        -13187, -16, 5736, -31, /* -2,  0,  0,  2,  2 */
        -2274, -2, 977, -5, /*  0,  0,  0,  2,  2 */
        2062, 2, -895, 5, /*  0,  0,  0,  0,  2 */
        1426, -34, 54, -1, /*  0,  1,  0,  0,  0 */
        712, 1, -7, 0, /*  0,  0,  1,  0,  0 */
        -517, 12, 224, -6, /* -2,  1,  0,  2,  2 */
        -386, -4, 200, 0, /*  0,  0,  0,  2,  1 */
        -301, 0, 129, -1, /*  0,  0,  1,  2,  2 */
        217, -5, -95, 3, /* -2, -1,  0,  2,  2 */
        -158, 0, 0, 0, /* -2,  0,  1,  0,  0 */
        129, 1, -70, 0, /* -2,  0,  0,  2,  1 */
        123, 0, -53, 0, /*  0,  0, -1,  2,  2 */
        63, 0, 0, 0, /*  2,  0,  0,  0,  0 */
        63, 1, -33, 0, /*  0,  0,  1,  0,  1 */
        -59, 0, 26, 0, /*  2,  0, -1,  2,  2 */
        -58, -1, 32, 0, /*  0,  0, -1,  0,  1 */
        -51, 0, 27, 0, /*  0,  0,  1,  2,  1 */
        48, 0, 0, 0, /* -2,  0,  2,  0,  0 */
        46, 0, -24, 0, /*  0,  0, -2,  2,  1 */
        -38, 0, 16, 0, /*  2,  0,  0,  2,  2 */
        -31, 0, 13, 0, /*  0,  0,  2,  2,  2 */
        29, 0, 0, 0, /*  0,  0,  2,  0,  0 */
        29, 0, -12, 0, /* -2,  0,  1,  2,  2 */
        26, 0, 0, 0, /*  0,  0,  0,  2,  0 */
        -22, 0, 0, 0, /* -2,  0,  0,  2,  0 */
        21, 0, -10, 0, /*  0,  0, -1,  2,  1 */
        17, -1, 0, 0, /*  0,  2,  0,  0,  0 */
        16, 0, -8, 0, /*  2,  0, -1,  0,  1 */
        -16, 1, 7, 0, /* -2,  2,  0,  2,  2 */
        -15, 0, 9, 0, /*  0,  1,  0,  0,  1 */
        -13, 0, 7, 0, /* -2,  0,  1,  0,  1 */
        -12, 0, 6, 0, /*  0, -1,  0,  0,  1 */
        11, 0, 0, 0, /*  0,  0,  2, -2,  0 */
        -10, 0, 5, 0, /*  2,  0, -1,  2,  1 */
        -8, 0, 3, 0, /*  2,  0,  1,  2,  2 */
        7, 0, -3, 0, /*  0,  1,  0,  2,  2 */
        -7, 0, 0, 0, /* -2,  1,  1,  0,  0 */
        -7, 0, 3, 0, /*  0, -1,  0,  2,  2 */
        -7, 0, 3, 0, /*  2,  0,  0,  2,  1 */
        6, 0, 0, 0, /*  2,  0,  1,  0,  0 */
        6, 0, -3, 0, /* -2,  0,  2,  2,  2 */
        6, 0, -3, 0, /* -2,  0,  1,  2,  1 */
        -6, 0, 3, 0, /*  2,  0, -2,  0,  1 */
        -6, 0, 3, 0, /*  2,  0,  0,  0,  1 */
        5, 0, 0, 0, /*  0, -1,  1,  0,  0 */
        -5, 0, 3, 0, /* -2, -1,  0,  2,  1 */
        -5, 0, 3, 0, /* -2,  0,  0,  0,  1 */
        -5, 0, 3, 0, /*  0,  0,  2,  2,  1 */
        4, 0, 0, 0, /* -2,  0,  2,  0,  1 */
        4, 0, 0, 0, /* -2,  1,  0,  2,  1 */
        4, 0, 0, 0, /*  0,  0,  1, -2,  0 */
        -4, 0, 0, 0, /* -1,  0,  1,  0,  0 */
        -4, 0, 0, 0, /* -2,  1,  0,  0,  0 */
        -4, 0, 0, 0, /*  1,  0,  0,  0,  0 */
        3, 0, 0, 0, /*  0,  0,  1,  2,  0 */
        -3, 0, 0, 0, /* -1, -1,  1,  0,  0 */
        -3, 0, 0, 0, /*  0,  1,  1,  0,  0 */
        -3, 0, 0, 0, /*  0, -1,  1,  2,  2 */
        -3, 0, 0, 0, /*  2, -1, -1,  2,  2 */
        -3, 0, 0, 0, /*  0,  0, -2,  2,  2 */
        -3, 0, 0, 0, /*  0,  0,  3,  2,  2 */
        -3, 0, 0, 0 /*  2, -1,  0,  2,  2 */
        ];

        /**
         * @desc Table of observed Delta T values at the beginning of even numbered years from 1620 through 2002.
         * @type Array
         */
        this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -0.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6];

        /*  EQUINOX  --  Determine the Julian Ephemeris Day of an
         equinox or solstice.  The "which" argument
         selects the item to be computed:
          0   March equinox
         1   June solstice
         2   September equinox
         3   December solstice
          */
        /**
         * @desc Periodic terms to obtain true time
         * @type Array
         */
        this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074];

        this.JDE0tab1000 = [new Array(1721139.29189, 365242.13740, 0.06134, 0.00111, -0.00071), new Array(1721233.25401, 365241.72562, -0.05323, 0.00907, 0.00025), new Array(1721325.70455, 365242.49558, -0.11677, -0.00297, 0.00074), new Array(1721414.39987, 365242.88257, -0.00769, -0.00933, -0.00006)];

        this.JDE0tab2000 = [new Array(2451623.80984, 365242.37404, 0.05169, -0.00411, -0.00057), new Array(2451716.56767, 365241.62603, 0.00325, 0.00888, -0.00030), new Array(2451810.21715, 365242.01767, -0.11575, 0.00337, 0.00078), new Array(2451900.05952, 365242.74049, -0.06223, -0.00823, 0.00032)];
    }

    /**
     *
     * @param Degrees to radians.
     * @return {number}
     */


    _createClass(ASTRO, [{
        key: "dtr",
        value: function dtr(d) {
            return d * Math.PI / 180.0;
        }

        /**
         * @desc Radians to degrees.
         * @param r
         * @return {number}
         */

    }, {
        key: "rtd",
        value: function rtd(r) {
            return r * 180.0 / Math.PI;
        }

        /**
         * @desc Range reduce angle in degrees.
         * @param a
         * @return {number}
         */

    }, {
        key: "fixangle",
        value: function fixangle(a) {
            return a - 360.0 * Math.floor(a / 360.0);
        }

        /**
         * @desc Range reduce angle in radians.
         * @param a
         * @return {number}
         */

    }, {
        key: "fixangr",
        value: function fixangr(a) {
            return a - 2 * Math.PI * Math.floor(a / (2 * Math.PI));
        }

        /**
         * @desc  Sine of an angle in degrees
         * @param d
         * @return {number}
         */

    }, {
        key: "dsin",
        value: function dsin(d) {
            return Math.sin(this.dtr(d));
        }

        /**
         * @desc Cosine of an angle in degrees
         * @param d
         * @return {number}
         */

    }, {
        key: "dcos",
        value: function dcos(d) {
            return Math.cos(this.dtr(d));
        }

        /**
         * @desc Modulus function which works for non-integers.
         * @param a
         * @param b
         * @return {number}
         */

    }, {
        key: "mod",
        value: function mod(a, b) {
            return a - b * Math.floor(a / b);
        }

        /**
         *
         * @param j
         * @return {number}
         */

    }, {
        key: "jwday",
        value: function jwday(j) {
            return this.mod(Math.floor(j + 1.5), 7);
        }

        /**
         *
         * @param jd
         * @return {number|*}
         */

    }, {
        key: "obliqeq",
        value: function obliqeq(jd) {
            var eps, u, v, i;
            v = u = (jd - this.J2000) / (this.JulianCentury * 100);
            eps = 23 + 26 / 60.0 + 21.448 / 3600.0;

            if (Math.abs(u) < 1.0) {
                for (i = 0; i < 10; i++) {
                    eps += this.oterms[i] / 3600.0 * v;
                    v *= u;
                }
            }
            return eps;
        }

        /**
         * @desc  Calculate the nutation in longitude, deltaPsi, and
         obliquity, deltaEpsilon for a given Julian date
         jd.  Results are returned as a two element Array
         giving (deltaPsi, deltaEpsilon) in degrees.
         * @param jd
         * @return Object
         */

    }, {
        key: "nutation",
        value: function nutation(jd) {
            var deltaPsi,
                deltaEpsilon,
                i,
                j,
                t = (jd - 2451545.0) / 36525.0,
                t2,
                t3,
                to10,
                ta = [],
                dp = 0,
                de = 0,
                ang;

            t3 = t * (t2 = t * t);

            /* Calculate angles.  The correspondence between the elements
             of our array and the terms cited in Meeus are:
              ta[0] = D  ta[0] = M  ta[2] = M'  ta[3] = F  ta[4] = \Omega
              */

            ta[0] = this.dtr(297.850363 + 445267.11148 * t - 0.0019142 * t2 + t3 / 189474.0);
            ta[1] = this.dtr(357.52772 + 35999.05034 * t - 0.0001603 * t2 - t3 / 300000.0);
            ta[2] = this.dtr(134.96298 + 477198.867398 * t + 0.0086972 * t2 + t3 / 56250.0);
            ta[3] = this.dtr(93.27191 + 483202.017538 * t - 0.0036825 * t2 + t3 / 327270);
            ta[4] = this.dtr(125.04452 - 1934.136261 * t + 0.0020708 * t2 + t3 / 450000.0);

            /* Range reduce the angles in case the sine and cosine functions
             don't do it as accurately or quickly. */

            for (i = 0; i < 5; i++) {
                ta[i] = this.fixangr(ta[i]);
            }

            to10 = t / 10.0;
            for (i = 0; i < 63; i++) {
                ang = 0;
                for (j = 0; j < 5; j++) {
                    if (this.nutArgMult[i * 5 + j] !== 0) {
                        ang += this.nutArgMult[i * 5 + j] * ta[j];
                    }
                }
                dp += (this.nutArgCoeff[i * 4 + 0] + this.nutArgCoeff[i * 4 + 1] * to10) * Math.sin(ang);
                de += (this.nutArgCoeff[i * 4 + 2] + this.nutArgCoeff[i * 4 + 3] * to10) * Math.cos(ang);
            }

            /* Return the result, converting from ten thousandths of arc
             seconds to radians in the process. */

            deltaPsi = dp / (3600.0 * 10000.0);
            deltaEpsilon = de / (3600.0 * 10000.0);

            return [deltaPsi, deltaEpsilon];
        }

        /**
         * @desc  Determine the difference, in seconds, between
         Dynamical time and Universal time.
         * @param year
         * @return {*}
         */

    }, {
        key: "deltat",
        value: function deltat(year) {
            var dt, f, i, t;

            if (year >= 1620 && year <= 2000) {
                i = Math.floor((year - 1620) / 2);
                f = (year - 1620) / 2 - i;
                /* Fractional part of year */
                dt = this.deltaTtab[i] + (this.deltaTtab[i + 1] - this.deltaTtab[i]) * f;
            } else {
                t = (year - 2000) / 100;
                if (year < 948) {
                    dt = 2177 + 497 * t + 44.1 * t * t;
                } else {
                    dt = 102 + 102 * t + 25.3 * t * t;
                    if (year > 2000 && year < 2100) {
                        dt += 0.37 * (year - 2100);
                    }
                }
            }
            return dt;
        }

        /**
         *
         * @param year
         * @param which
         * @return {*}
         */

    }, {
        key: "equinox",
        value: function equinox(year, which) {
            var deltaL = void 0,
                i = void 0,
                j = void 0,
                JDE0 = void 0,
                JDE = void 0,
                JDE0tab = void 0,
                S = void 0,
                T = void 0,
                W = void 0,
                Y = void 0;
            /*  Initialise terms for mean equinox and solstices.  We
             have two sets: one for years prior to 1000 and a second
             for subsequent years.  */

            if (year < 1000) {
                JDE0tab = this.JDE0tab1000;
                Y = year / 1000;
            } else {
                JDE0tab = this.JDE0tab2000;
                Y = (year - 2000) / 1000;
            }

            JDE0 = JDE0tab[which][0] + JDE0tab[which][1] * Y + JDE0tab[which][2] * Y * Y + JDE0tab[which][3] * Y * Y * Y + JDE0tab[which][4] * Y * Y * Y * Y;
            T = (JDE0 - 2451545.0) / 36525;
            W = 35999.373 * T - 2.47;
            deltaL = 1 + 0.0334 * this.dcos(W) + 0.0007 * this.dcos(2 * W);
            S = 0;
            for (i = j = 0; i < 24; i++) {
                S += this.EquinoxpTerms[j] * this.dcos(this.EquinoxpTerms[j + 1] + this.EquinoxpTerms[j + 2] * T);
                j += 3;
            }
            JDE = JDE0 + S * 0.00001 / deltaL;
            return JDE;
        }

        /**
         * @desc  Position of the Sun.  Please see the comments
         on the return statement at the end of this function
         which describe the array it returns.  We return
         intermediate values because they are useful in a
         variety of other contexts.
         * @param jd
         * @return Object
         */

    }, {
        key: "sunpos",
        value: function sunpos(jd) {
            var T = void 0,
                T2 = void 0,
                L0 = void 0,
                M = void 0,
                e = void 0,
                C = void 0,
                sunLong = void 0,
                sunAnomaly = void 0,
                sunR = void 0,
                Omega = void 0,
                Lambda = void 0,
                epsilon = void 0,
                epsilon0 = void 0,
                Alpha = void 0,
                Delta = void 0,
                AlphaApp = void 0,
                DeltaApp = void 0;

            T = (jd - this.J2000) / this.JulianCentury;
            T2 = T * T;
            L0 = 280.46646 + 36000.76983 * T + 0.0003032 * T2;
            L0 = this.fixangle(L0);
            M = 357.52911 + 35999.05029 * T + -0.0001537 * T2;
            M = this.fixangle(M);
            e = 0.016708634 + -0.000042037 * T + -0.0000001267 * T2;
            C = (1.914602 + -0.004817 * T + -0.000014 * T2) * this.dsin(M) + (0.019993 - 0.000101 * T) * this.dsin(2 * M) + 0.000289 * this.dsin(3 * M);
            sunLong = L0 + C;
            sunAnomaly = M + C;
            sunR = 1.000001018 * (1 - e * e) / (1 + e * this.dcos(sunAnomaly));
            Omega = 125.04 - 1934.136 * T;
            Lambda = sunLong + -0.00569 + -0.00478 * this.dsin(Omega);
            epsilon0 = this.obliqeq(jd);
            epsilon = epsilon0 + 0.00256 * this.dcos(Omega);
            Alpha = this.rtd(Math.atan2(this.dcos(epsilon0) * this.dsin(sunLong), this.dcos(sunLong)));
            Alpha = this.fixangle(Alpha);
            Delta = this.rtd(Math.asin(this.dsin(epsilon0) * this.dsin(sunLong)));
            AlphaApp = this.rtd(Math.atan2(this.dcos(epsilon) * this.dsin(Lambda), this.dcos(Lambda)));
            AlphaApp = this.fixangle(AlphaApp);
            DeltaApp = this.rtd(Math.asin(this.dsin(epsilon) * this.dsin(Lambda)));

            return [//  Angular quantities are expressed in decimal degrees
            L0, //  [0] Geometric mean longitude of the Sun
            M, //  [1] Mean anomaly of the Sun
            e, //  [2] Eccentricity of the Earth's orbit
            C, //  [3] Sun's equation of the Centre
            sunLong, //  [4] Sun's true longitude
            sunAnomaly, //  [5] Sun's true anomaly
            sunR, //  [6] Sun's radius vector in AU
            Lambda, //  [7] Sun's apparent longitude at true equinox of the date
            Alpha, //  [8] Sun's true right ascension
            Delta, //  [9] Sun's true declination
            AlphaApp, // [10] Sun's apparent right ascension
            DeltaApp // [11] Sun's apparent declination
            ];
        }

        /**
         * @desc Compute equation of time for a given moment. Returns the equation of time as a fraction of a day.
         * @param jd
         * @return {number|*}
         */

    }, {
        key: "equationOfTime",
        value: function equationOfTime(jd) {
            var alpha = void 0,
                deltaPsi = void 0,
                E = void 0,
                epsilon = void 0,
                L0 = void 0,
                tau = void 0;
            tau = (jd - this.J2000) / this.JulianMillennium;
            L0 = 280.4664567 + 360007.6982779 * tau + 0.03032028 * tau * tau + tau * tau * tau / 49931 + -(tau * tau * tau * tau / 15300) + -(tau * tau * tau * tau * tau / 2000000);
            L0 = this.fixangle(L0);
            alpha = this.sunpos(jd)[10];
            deltaPsi = this.nutation(jd)[0];
            epsilon = this.obliqeq(jd) + this.nutation(jd)[1];
            E = L0 + -0.0057183 + -alpha + deltaPsi * this.dcos(epsilon);
            E = E - 20.0 * Math.floor(E / 20.0);
            E = E / (24 * 60);
            return E;
        }
    }]);

    return ASTRO;
}();

module.exports = ASTRO;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    durationUnit: {
        year: ['y', 'years', 'year'],
        month: ['M', 'months', 'month'],
        day: ['d', 'days', 'day'],
        hour: ['h', 'hours', 'hour'],
        minute: ['m', 'minutes', 'minute'],
        second: ['s', 'second', 'seconds'],
        millisecond: ['ms', 'milliseconds', 'millisecond'],
        week: ['w', '', 'weeks', 'week']
    }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = __webpack_require__(0);
var normalizeDuration = new Helpers().normalizeDuration;
var absRound = new Helpers().absRound;
var absFloor = new Helpers().absFloor;
/**
 * Duration object constructor
 * @param duration
 * @class Duration
 * @constructor
 */

var Duration = function () {
    function Duration(key, value) {
        _classCallCheck(this, Duration);

        var duration = {},
            data = this._data = {},
            milliseconds = 0,
            normalizedUnit = normalizeDuration(key, value),
            unit = normalizedUnit.unit;
        duration[unit] = normalizedUnit.value;
        milliseconds = duration.milliseconds || duration.millisecond || duration.ms || 0;

        var years = duration.years || duration.year || duration.y || 0,
            months = duration.months || duration.month || duration.M || 0,
            weeks = duration.weeks || duration.w || duration.week || 0,
            days = duration.days || duration.d || duration.day || 0,
            hours = duration.hours || duration.hour || duration.h || 0,
            minutes = duration.minutes || duration.minute || duration.m || 0,
            seconds = duration.seconds || duration.second || duration.s || 0;
        // representation for dateAddRemove
        this._milliseconds = milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 36e5;
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = days + weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = months + years * 12;
        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;
        seconds += absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;
        minutes += absRound(seconds / 60);
        data.minutes = minutes % 60;
        hours += absRound(minutes / 60);
        data.hours = hours % 24;
        days += absRound(hours / 24);
        days += weeks * 7;
        data.days = days % 30;
        months += absRound(days / 30);
        data.months = months % 12;
        years += absRound(months / 12);
        data.years = years;
        return this;
    }

    _createClass(Duration, [{
        key: 'valueOf',
        value: function valueOf() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6;
        }
    }]);

    return Duration;
}();

module.exports = Duration;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    gregorian: {
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
    },
    persian: {
        months: ['Farvardin', 'Ordibehesht', 'Khordad', 'Tir', 'Mordad', 'Shahrivar', 'Mehr', 'Aban', 'Azar', 'Dey', 'Bahman', 'Esfand'],
        monthsShort: ['Far', 'Ord', 'Kho', 'Tir', 'Mor', 'Sha', 'Meh', 'Aba', 'Aza', 'Dey', 'Bah', 'Esf'],
        weekdays: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekdaysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        persianDaysName: ['Urmazd', 'Bahman', 'Ordibehesht', 'Shahrivar', 'Sepandarmaz', 'Khurdad', 'Amordad', 'Dey-be-azar', 'Azar', 'Aban', 'Khorshid', 'Mah', 'Tir', 'Gush', 'Dey-be-mehr', 'Mehr', 'Sorush', 'Rashn', 'Farvardin', 'Bahram', 'Ram', 'Bad', 'Dey-be-din', 'Din', 'Ord', 'Ashtad', 'Asman', 'Zamyad', 'Mantre-sepand', 'Anaram', 'Ziadi']
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Constants
 * @module constants
 */

module.exports = {
    gregorian: {
        months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
        weekdays: '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
        weekdaysShort: '\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647'.split('_'),
        weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_')
    },
    persian: {
        months: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'],
        monthsShort: ['فرو', 'ارد', 'خرد', 'تیر', 'مرد', 'شهر', 'مهر', 'آبا', 'آذر', 'دی', 'بهم', 'اسف'],
        weekdays: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهار شنبه', '\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647', 'جمعه'],
        weekdaysShort: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
        weekdaysMin: ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'],
        persianDaysName: ['اورمزد', 'بهمن', 'اوردیبهشت', 'شهریور', 'سپندارمذ', 'خورداد', 'امرداد', 'دی به آذز', 'آذز', 'آبان', 'خورشید', 'ماه', 'تیر', 'گوش', 'دی به مهر', 'مهر', 'سروش', 'رشن', 'فروردین', 'بهرام', 'رام', 'باد', 'دی به دین', 'دین', 'ارد', 'اشتاد', 'آسمان', 'زامیاد', 'مانتره سپند', 'انارام', 'زیادی']
    }
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var PersianDateClass = __webpack_require__(1);
PersianDateClass.calendarType = 'persian';
PersianDateClass.leapYearMode = 'astronomical';
PersianDateClass.localType = 'fa';
module.exports = PersianDateClass;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = function Container() {
    _classCallCheck(this, Container);

    this.gDate = null;
    /**
     *
     * @type {number}
     */
    this.modifiedjulianday = 0;

    /**
     *
     * @type {number}
     */
    this.julianday = 0;

    /**
     *
     * @type {{day: number}}
     */
    this.gregserial = {
        day: 0
    };

    this.zone = 0;

    /**
     *
     * @type {{year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, weekday: number, unix: number, leap: number}}
     */
    this.gregorian = {
        year: 0,
        month: 0,
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        weekday: 0,
        unix: 0,
        leap: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.juliancalendar = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.islamic = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.persianAlgo = this.persian = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, month: number, day: number, leap: number, weekday: number}}
     */
    this.persianAstro = {
        year: 0,
        month: 0,
        day: 0,
        leap: 0,
        weekday: 0
    };

    /**
     *
     * @type {{year: number, week: number, day: number}}
     */
    this.isoweek = {
        year: 0,
        week: 0,
        day: 0
    };

    /**
     *
     * @type {{year: number, day: number}}
     */
    this.isoday = {
        year: 0,
        day: 0
    };
};

module.exports = Container;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    /**
     * @param input
     * @returns {boolean}
     */
    isArray: function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isNumber: function isNumber(input) {
        return typeof input === 'number';
    },


    /**
     *
     * @param input
     * @returns {boolean}
     */
    isDate: function isDate(input) {
        return input instanceof Date;
    }
};

/***/ })
/******/ ]);
});
/*
** persian-datepicker - v1.1.3
** Reza Babakhani <babakhani.reza@gmail.com>
** http://babakhani.github.io/PersianWebToolkit/docs/datepicker
** Under WTFPL license 
*/ 

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["persianDatepicker"] = factory();
	else
		root["persianDatepicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Helper = {

    // leading edge, instead of the trailing.
    debounce: function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            var later = function later() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    },


    /**
     * @desc normal log
     * @param input
     * @example log('whoooooha')
     */
    log: function log(input) {
        /*eslint-disable no-console */
        console.log(input);
        /*eslint-enable no-console */
    },


    /* eslint-disable no-useless-escape */
    isMobile: function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }(),
    /* eslint-enable no-useless-escape */

    /**
     * @desc show debug messages if window.persianDatepickerDebug set as true
     * @param elem
     * @param input
     * @example window.persianDatepickerDebug = true;
     * debug('element','message');
     */
    debug: function debug(elem, input) {
        /*eslint-disable no-console */
        if (window.persianDatepickerDebug) {
            if (elem.constructor.name) {
                console.log('Debug: ' + elem.constructor.name + ' : ' + input);
            } else {
                console.log('Debug: ' + input);
            }
        }
        /*eslint-enable no-console */
    },
    delay: function delay(callback, ms) {
        clearTimeout(window.datepickerTimer);
        window.datepickerTimer = setTimeout(callback, ms);
    }
};

module.exports = Helper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @type {string}
 */
var Template = "\n<div id=\"plotId\" class=\"datepicker-plot-area {{cssClass}}\">\n    {{#navigator.enabled}}\n        <div data-navigator class=\"datepicker-navigator\">\n            <div class=\"pwt-btn pwt-btn-next\">{{navigator.text.btnNextText}}</div>\n            <div class=\"pwt-btn pwt-btn-switch\">{{navigator.switch.text}}</div>\n            <div class=\"pwt-btn pwt-btn-prev\">{{navigator.text.btnPrevText}}</div>\n        </div>\n    {{/navigator.enabled}}\n    <div class=\"datepicker-grid-view\" >\n    {{#days.enabled}}\n        {{#days.viewMode}}\n        <div class=\"datepicker-day-view\" >    \n            <div class=\"month-grid-box\">\n                <div class=\"header\">\n                    <div class=\"title\"></div>\n                    <div class=\"header-row\">\n                        {{#weekdays.list}}\n                            <div class=\"header-row-cell\">{{.}}</div>\n                        {{/weekdays.list}}\n                    </div>\n                </div>    \n                <table cellspacing=\"0\" class=\"table-days\">\n                    <tbody>\n                        {{#days.list}}\n                           \n                            <tr>\n                                {{#.}}\n                                    {{#enabled}}\n                                        <td data-date=\"{{dataDate}}\" data-unix=\"{{dataUnix}}\" >\n                                            <span  class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class=\"alter-calendar-day\">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    {{^enabled}}\n                                        <td data-date=\"{{dataDate}}\" data-unix=\"{{dataUnix}}\" class=\"disabled\">\n                                            <span class=\"{{#otherMonth}}other-month{{/otherMonth}}\">{{title}}</span>\n                                            {{#altCalendarShowHint}}\n                                            <i  class=\"alter-calendar-day\">{{alterCalTitle}}</i>\n                                            {{/altCalendarShowHint}}\n                                        </td>\n                                    {{/enabled}}\n                                    \n                                {{/.}}\n                            </tr>\n                        {{/days.list}}\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        {{/days.viewMode}}\n    {{/days.enabled}}\n    \n    {{#month.enabled}}\n        {{#month.viewMode}}\n            <div class=\"datepicker-month-view\">\n                {{#month.list}}\n                    {{#enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                    {{^enabled}}               \n                        <div data-month=\"{{dataMonth}}\" class=\"month-item month-item-disable {{#selected}}selected{{/selected}}\">{{title}}</small></div>\n                    {{/enabled}}\n                {{/month.list}}\n            </div>\n        {{/month.viewMode}}\n    {{/month.enabled}}\n    \n    {{#year.enabled }}\n        {{#year.viewMode }}\n            <div class=\"datepicker-year-view\" >\n                {{#year.list}}\n                    {{#enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}\n                    {{^enabled}}\n                        <div data-year=\"{{dataYear}}\" class=\"year-item year-item-disable {{#selected}}selected{{/selected}}\">{{title}}</div>\n                    {{/enabled}}                    \n                {{/year.list}}\n            </div>\n        {{/year.viewMode }}\n    {{/year.enabled }}\n    \n    </div>\n    {{#time}}\n    {{#enabled}}\n    <div class=\"datepicker-time-view\">\n        {{#hour.enabled}}\n            <div class=\"hour time-segment\" data-time-key=\"hour\">\n                <div class=\"up-btn\" data-time-key=\"hour\">\u25B2</div>\n                <input value=\"{{hour.title}}\" type=\"text\" placeholder=\"hour\" class=\"hour-input\">\n                <div class=\"down-btn\" data-time-key=\"hour\">\u25BC</div>                    \n            </div>       \n            <div class=\"divider\">\n                <span>:</span>\n            </div>\n        {{/hour.enabled}}\n        {{#minute.enabled}}\n            <div class=\"minute time-segment\" data-time-key=\"minute\" >\n                <div class=\"up-btn\" data-time-key=\"minute\">\u25B2</div>\n                <input disabled value=\"{{minute.title}}\" type=\"text\" placeholder=\"minute\" class=\"minute-input\">\n                <div class=\"down-btn\" data-time-key=\"minute\">\u25BC</div>\n            </div>        \n            <div class=\"divider second-divider\">\n                <span>:</span>\n            </div>\n        {{/minute.enabled}}\n        {{#second.enabled}}\n            <div class=\"second time-segment\" data-time-key=\"second\"  >\n                <div class=\"up-btn\" data-time-key=\"second\" >\u25B2</div>\n                <input disabled value=\"{{second.title}}\"  type=\"text\" placeholder=\"second\" class=\"second-input\">\n                <div class=\"down-btn\" data-time-key=\"second\" >\u25BC</div>\n            </div>\n            <div class=\"divider meridian-divider\"></div>\n            <div class=\"divider meridian-divider\"></div>\n        {{/second.enabled}}\n        {{#meridian.enabled}}\n            <div class=\"meridian time-segment\" data-time-key=\"meridian\" >\n                <div class=\"up-btn\" data-time-key=\"meridian\">\u25B2</div>\n                <input disabled value=\"{{meridian.title}}\" type=\"text\" class=\"meridian-input\">\n                <div class=\"down-btn\" data-time-key=\"meridian\">\u25BC</div>\n            </div>\n        {{/meridian.enabled}}\n    </div>\n    {{/enabled}}\n    {{/time}}\n    \n    {{#toolbox}}\n    {{#enabled}}\n    <div class=\"toolbox\">\n        {{#toolbox.submitButton.enabled}}\n            <div class=\"pwt-btn-submit\">{{submitButtonText}}</div>\n        {{/toolbox.submitButton.enabled}}        \n        {{#toolbox.todayButton.enabled}}\n            <div class=\"pwt-btn-today\">{{todayButtonText}}</div>\n        {{/toolbox.todayButton.enabled}}        \n        {{#toolbox.calendarSwitch.enabled}}\n            <div class=\"pwt-btn-calendar\">{{calendarSwitchText}}</div>\n        {{/toolbox.calendarSwitch.enabled}}\n    </div>\n    {{/enabled}}\n    {{^enabled}}\n        {{#onlyTimePicker}}\n        <div class=\"toolbox\">\n            <div class=\"pwt-btn-submit\">{{submitButtonText}}</div>\n        </div>\n        {{/onlyTimePicker}}\n    {{/enabled}}\n    {{/toolbox}}\n</div>\n";

module.exports = Template;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var State = __webpack_require__(11);
var Toolbox = __webpack_require__(12);
var View = __webpack_require__(13);
var Input = __webpack_require__(6);
var API = __webpack_require__(3);
var Navigator = __webpack_require__(7);
var Options = __webpack_require__(8);
var PersianDateWrapper = __webpack_require__(10);

/**
 * Main datepicker object, manage every things
 */

var Model = function () {

  /**
   * @param inputElement
   * @param options
   * @private
   */
  function Model(inputElement, options) {
    _classCallCheck(this, Model);

    return this.components(inputElement, options);
  }

  _createClass(Model, [{
    key: 'components',
    value: function components(inputElement, options) {
      /**
       * @desc [initialUnix=null]
       * @type {unix}
       */
      this.initialUnix = null;

      /**
       * @desc inputElement=inputElement
       * @type {Object}
       */
      this.inputElement = inputElement;

      /**
       * @desc handle works about config
       * @type {Options}
       */
      this.options = new Options(options, this);

      /**
       *
       * @type {PersianDateWrapper}
       */
      this.PersianDate = new PersianDateWrapper(this);

      /**
       * @desc set and get selected and view and other state
       * @type {State}
       */
      this.state = new State(this);

      this.api = new API(this);

      /**
       * @desc handle works about input and alt field input element
       * @type {Input}
       */
      this.input = new Input(this, inputElement);

      /**
       * @desc render datepicker view base on State
       * @type {View}
       */
      this.view = new View(this);

      /**
       * @desc handle works about toolbox
       * @type {Toolbox}
       */
      this.toolbox = new Toolbox(this);

      /**
       *
       * @param unix
       */
      this.updateInput = function (unix) {
        this.input.update(unix);
      };

      this.state.setViewDateTime('unix', this.input.getOnInitState());
      this.state.setSelectedDateTime('unix', this.input.getOnInitState());
      this.view.render();

      /**
       * @desc handle navigation and dateoicker element events
       * @type {Navigator}
       */
      this.navigator = new Navigator(this);

      return this.api;
    }
  }]);

  return Model;
}();

module.exports = Model;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This is the API documentation for persian-datepicker
 */
var API = function () {
    function API(model) {
        _classCallCheck(this, API);

        this.model = model;
    }

    /**
     * @description get current option object
     * @example var pd = $('.selector').persianDatepicker();
     * console.log(pd.options);
     */


    _createClass(API, [{
        key: 'show',


        /**
         * @description make datepicker visible
         * @example var pd = $('.selector').persianDatepicker();
         * pd.show();
         */
        value: function show() {
            this.model.view.show();
            this.model.options.onShow(this.model);
            return this.model;
        }

        /**
         * @description return datepicker current state
         * @since 1.0.0
         * @example var pd = $('.selector').persianDatepicker();
         * var state = pd.getState();
         *
         * console.log(state.selected);
         * console.log(state.view);
         * */

    }, {
        key: 'getState',
        value: function getState() {
            return this.model.state;
        }

        /**
         * @description make datepicker invisible
         * @example var pd = $('.selector').persianDatepicker();
         * pd.show();
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.model.view.hide();
            this.model.options.onHide(this.model);
            return this.model;
        }

        /**
         * @description toggle datepicker visibility state
         * @example var pd = $('.selector').persianDatepicker();
         * pd.toggle();
         */

    }, {
        key: 'toggle',
        value: function toggle() {
            this.model.view.toggle();
            this.model.options.onToggle(this.model);
            return this.model;
        }

        /**
         * @description destroy every thing clean dom and
         * @example var pd = $('.selector').persianDatepicker();
         * pd.destroy();
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            if (this.model) {
                this.model.view.destroy();
                this.model.options.onDestroy(this.model);
                delete this.model;
            }
        }

        /**
         * @description set selected date of datepicker accept unix timestamp
         * @param unix
         * @example var pd = $('.selector').persianDatepicker();
         * pd.setDate(1382276091100)
         */

    }, {
        key: 'setDate',
        value: function setDate(unix) {
            this.model.state.setSelectedDateTime('unix', unix);
            this.model.state.setViewDateTime('unix', unix);
            this.model.state.setSelectedDateTime('unix', unix);
            this.model.view.render(this.view);
            this.model.options.onSet(unix);
            return this.model;
        }
    }, {
        key: 'options',
        get: function get() {
            return this.model.options;
        }

        /**
         * @description set options live
         * @example var pd = $('.selector').persianDatepicker();
         * pd.options;
         * //return current options
         * pd.options = {};
         * // set options and render datepicker with new options
         */
        ,
        set: function set(inputOptions) {
            var opt = $.extend(true, this.model.options, inputOptions);
            this.model.view.destroy();
            this.model.components(this.model.inputElement, opt);
        }
    }]);

    return API;
}();

module.exports = API;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Helper = __webpack_require__(0);

/**
 * @description persian-datepicker configuration document
 */
var Config = {

  /**
   * @description set default calendar mode of datepicker, available options: 'persian', 'gregorian'
   * @default 'persian'
   * @type string
   * @since 1.0.0
   */
  'calendarType': 'persian',

  /**
   * @description calendar type and localization configuration
   * @type object
   * @since 1.0.0
   * @example
   * {
   *     'persian': {
   *         'locale': 'fa',
   *         'showHint': false,
   *         'leapYearMode': 'algorithmic' // "astronomical"
   *     },
   *
   *     'gregorian': {
   *         'locale': 'en',
   *         'showHint': false
   *     }
   * }
   *
   *
   *
   */
  'calendar': {

    /**
     * @description Persian calendar configuration
     * @type object
     * @since 1.0.0
     */
    'persian': {

      /**
       * @description set locale of Persian calendar available options: 'fa', 'en'
       * @default 'fa'
       * @type string
       * @since 1.0.0
       */
      'locale': 'fa',

      /**
       * @description if set true, small date hint of this calendar will be shown on another calendar
       * @type boolean
       * @default false
       * @since 1.0.0
       */
      'showHint': false,

      /**
       * @description Persian calendar leap year calculation mode, available options: 'algorithmic', 'astronomical'
       * @type string
       * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/leapyear
       * @default 'algorithmic'
       * @since 1.0.0
       */
      'leapYearMode': 'algorithmic' // "astronomical"
    },

    /**
     * @description Gregorian calendar configuration
     * @type object
     * @since 1.0.0
     */
    'gregorian': {

      /**
       * @description set locale of Gregorian calendar available options: 'fa', 'en'
       * @default 'en'
       * @type string
       * @since 1.0.0
       */
      'locale': 'en',

      /**
       * @description if set true, small date hint of this calendar will be shown on another calendar
       * @type boolean
       * @default false
       * @since 1.0.0
       */
      'showHint': false
    }
  },

  /**
   * @description if set true make enable responsive view on mobile devices
   * @type boolean
   * @since 1.0.0
   * @default true
   */
  'responsive': true,

  /**
   * @description if true datepicker render inline
   * @type boolean
   * @default false
   */
  'inline': false,

  /**
   * @description If set true datepicker init with input value date, use data-date property when you want set inline datepicker initial value
   * @type boolean
   * @default true
   */
  'initialValue': true,

  /**
   * @description Initial value calendar type, accept: 'persian', 'gregorian'
   * @type boolean
   * @default true
   */
  'initialValueType': 'gregorian',

  /**
   * @description from v1.0.0 this options is deprecated, use calendar.persian.locale instead
   * @deprecated
   * @type boolean
   * @default true
   */
  'persianDigit': true,

  /**
   * @description default view mode, Acceptable value : day,month,year
   * @type {string}
   * @default 'day'
   */
  'viewMode': 'day',

  /**
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
   * @type {boolean}
   * @default 'LLLL'
   */
  'format': 'LLLL',

  /**
   * @description format value of input
   * @param unixDate
   * @default function
   * @example function (unixDate) {
   *      var self = this;
   *      var pdate = new persianDate(unixDate);
   *      pdate.formatPersian = this.persianDigit;
   *      return pdate.format(self.format);
   *  }
   */
  'formatter': function formatter(unixDate) {
    var self = this,
        pdate = this.model.PersianDate.date(unixDate);
    return pdate.format(self.format);
  },

  /**
   * @description An input element that is to be updated with the selected date from the datepicker. Use the altFormat option to change the format of the date within this field. Leave as blank for no alternate field. acceptable value: : '#elementId','.element-class'
   * @type {boolean}
   * @default false
   * @example
   * altField: '#inputAltFirld'
   *
   * altField: '.input-alt-field'
   */
  'altField': false,

  /**
   * @description the date format, combination of d, dd, m, mm, yy, yyy.
   * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
   * @type {string}
   * @default 'unix'
   */
  'altFormat': 'unix',

  /**
   * @description format value of 'altField' input
   * @param unixDate
   * @default function
   * @example function (unixDate) {
   *      var self = this;
   *      var thisAltFormat = self.altFormat.toLowerCase();
   *      if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
   *          return new Date(unixDate);
   *      }
   *      if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
   *          return unixDate;
   *      }
   *      else {
   *          var pd = new persianDate(unixDate);
   *          pd.formatPersian = this.persianDigit;
   *          return pd.format(self.altFormat);
   *      }
   *  }
   */
  'altFieldFormatter': function altFieldFormatter(unixDate) {
    var self = this,
        thisAltFormat = self.altFormat.toLowerCase(),
        pd = void 0;
    if (thisAltFormat === 'gregorian' || thisAltFormat === 'g') {
      return new Date(unixDate);
    }
    if (thisAltFormat === 'unix' || thisAltFormat === 'u') {
      return unixDate;
    } else {
      pd = this.model.PersianDate.date(unixDate);
      return pd.format(self.altFormat);
    }
  },

  /**
   * @description Set min date on datepicker, prevent user select date before given unix time
   * @property minDate
   * @type Date
   * @default null
   */
  'minDate': null,

  /**
   * @description Set max date on datepicker, prevent user select date after given unix time
   * @property maxDate
   * @type Date
   * @default null
   */
  'maxDate': null,

  /**
   * @description navigator config object
   * @type {object}
   * @default true
   */
  'navigator': {
    /**
     * @description make navigator enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description navigate by scroll configuration
     * @type object
     * @description scroll navigation options
     */
    'scroll': {

      /**
       * @description if you want make disable scroll navigation set this option false
       * @type boolean
       * @default true
       */
      'enabled': true
    },

    /**
     * @description navigator text config object
     */
    'text': {
      /**
       * @description text of next button
       * @default '<'
       */
      'btnNextText': '<',

      /**
       * @description text of prev button
       * @default: '>'
       */
      'btnPrevText': '>'
    },

    /**
     * @description Called when navigator goes to next state
     * @event
     * @example function (navigator) {
     *      //log('navigator next ');
     *  }
     */
    'onNext': function onNext(datepickerObject) {
      Helper.debug(datepickerObject, 'Event: onNext');
    },

    /**
     * @description Called when navigator goes to previews state
     * @event
     * @example function (navigator) {
     *      //log('navigator prev ');
     *  }
     */
    'onPrev': function onPrev(datepickerObject) {
      Helper.debug(datepickerObject, 'Event: onPrev');
    },

    /**
     * @description Called when navigator switch
     * @event
     * @example function (datepickerObject) {
            // console.log('navigator switch ');
     *  }
     */
    'onSwitch': function onSwitch(datepickerObject) {
      Helper.debug(datepickerObject, 'dayPicker Event: onSwitch');
    }
  },

  /**
   * @description toolbox config object
   * @type {object}
   * @default true
   */
  'toolbox': {

    /**
     * @description boolean option that make toolbar enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description toolbox button text configuration
     * @type object
     * @deprecated from 1.0.0
     */
    'text': {

      /**
       * @description text of today button, deprecated from 1.0.0
       * @type string
       * @default 'امروز'
       * @deprecated from 1.0.0
       */
      btnToday: 'امروز'

    },

    /**
     * @description submit button configuration (only shown on mobile)
     * @since 1.0.0
     */
    submitButton: {

      /**
       * @description make submit button enable or disable
       * @type boolean
       * @default false
       * @since 1.0.0
       */
      enabled: Helper.isMobile,

      /**
       * @description submit button text
       * @since 1.0.0
       * @type object
       */
      text: {

        /**
         * @description show when current calendar is Persian
         * @since 1.0.0
         * @type object
         * @default تایید
         */
        fa: 'تایید',

        /**
         * @description show when current calendar is Gregorian
         * @since 1.0.0
         * @type object
         * @default submit
         */
        en: 'submit'
      },

      /**
       * @description Called when submit button clicked
       * @since 1.0.0
       * @type function
       * @event
       */
      onSubmit: function onSubmit(datepickerObject) {
        Helper.debug(datepickerObject, 'dayPicker Event: onSubmit');
      }
    },

    /**
     * @description toolbox today button configuration
     * @since 1.0.0
     */
    todayButton: {

      /**
       * @description make toolbox today button enable or disable
       * @type boolean
       * @since 1.0.0
       */
      enabled: true,

      /**
       * @description today button text
       * @since 1.0.0
       * @type object
       */
      text: {

        /**
         * @description show when current calendar is Persian
         * @since 1.0.0
         * @type object
         * @default امروز
         */
        fa: 'امروز',

        /**
         * @description show when current calendar is Gregorian
         * @since 1.0.0
         * @type object
         * @default today
         */
        en: 'today'
      },

      /**
       * @description Called when today button clicked
       * @since 1.0.0
       * @type function
       * @event
       */
      onToday: function onToday(datepickerObject) {
        Helper.debug(datepickerObject, 'dayPicker Event: onToday');
      }
    },

    /**
     * @description toolbox calendar switch configuration
     * @type object
     * @since 1.0.0
     */
    calendarSwitch: {

      /**
       * @description make calendar switch enable or disable
       * @type boolean
       * @since 1.0.0
       * @default true
       */
      enabled: true,

      /**
       * @description calendar switch text format string
       * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
       * @type string
       * @since 1.0.0
       * @default MMMM
       */
      format: 'MMMM',

      /**
       * @description Called when calendar switch clicked
       * @since 1.0.0
       * @type function
       * @event
       */
      onSwitch: function onSwitch(datepickerObject) {
        Helper.debug(datepickerObject, 'dayPicker Event: onSwitch');
      }
    },

    /**
     * @event
     * @param toolbox
     * @example function (toolbox) {
     *      //log('toolbox today btn');
     *  }
     *  @deprecated 1.0.0
     */
    onToday: function onToday(datepickerObject) {
      Helper.debug(datepickerObject, 'dayPicker Event: onToday');
    }
  },

  /**
   * @description if true all pickers hide and just show timepicker
   * @default false
   * @type boolean
   */
  'onlyTimePicker': false,

  /**
   * @description  if true date select just by click on day in month grid, and when user select month or year selected date doesnt change
   * @property justSelectOnDate
   * @type boolean
   * @default: true
   */
  'onlySelectOnDate': true,

  /**
   * @description Validate date access before render
   * @type function
   */
  'checkDate': function checkDate() {
    return true;
  },

  /**
   * @description Validate month access before render
   * @type {function}
   */
  'checkMonth': function checkMonth() {
    return true;
  },

  /**
   * @description Validate year access before render
   * @type {function}
   */
  'checkYear': function checkYear() {
    return true;
  },

  /**
   * @description timePicker configuration
   * @type {object}
   */
  'timePicker': {

    /**
     * @description make timePicker enable or disable
     * @type boolean
     */
    'enabled': false,

    /**
     * @description The amount that increases or decreases by pressing the button
     * @type number
     */
    'step': 1,

    /**
     * @description hour selector configuration
     * @type object
     */
    'hour': {

      /**
       * @description make hour selector enable or disable
       * @type boolean
       */
      'enabled': true,

      /**
       * @description The amount that increases or decreases hour, by pressing the button. overwrite by timepicker.step
       * @type boolean
       */
      'step': null
    },

    /**
     * @description minute selector configuration
     * @type object
     */
    'minute': {

      /**
       * @description make minute selector enable or disable
       * @type boolean
       */
      'enabled': true,

      /**
       * @description The amount that increases or decreases minute, by pressing the button. overwrite by timepicker.step
       * @description overwrite by parent step
       * @type boolean
       */
      'step': null
    },

    /**
     * @description second selector configuration
     * @type object
     */
    'second': {

      /**
       * @description make second selector enable or disable
       * @type boolean
       */
      'enabled': true,

      /**
       * @description The amount that increases or decreases second, by pressing the button. overwrite by timepicker.step
       * @type boolean
       */
      'step': null
    },

    /**
     * @description meridian selector configuration
     * @type object
     */
    'meridian': {

      /**
       * @description if you set this as false, datepicker timepicker system moved to 24-hour system
       * @type boolean
       */
      'enabled': false
    }
  },

  /**
   * @description dayPicker configuration
   * @type {object}
   */
  'dayPicker': {

    /**
     * @description make daypicker enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description daypicker title format string
     * @type string
     * @default 'YYYY MMMM'
     * @link http://babakhani.github.io/PersianWebToolkit/doc/persian-date/#format
     */
    'titleFormat': 'YYYY MMMM',

    /**
     * @description daypicker title formatter function
     * @param year
     * @param month
     * @return {*}
     */
    'titleFormatter': function titleFormatter(year, month) {
      var titleDate = this.model.PersianDate.date([year, month]);
      return titleDate.format(this.model.options.dayPicker.titleFormat);
    },

    /**
     * @description fired when user select date
     * @event
     * @param selectedDayUnix
     */
    'onSelect': function onSelect(selectedDayUnix) {
      Helper.debug(this, 'dayPicker Event: onSelect : ' + selectedDayUnix);
    }

  },

  /**
   * @description monthPicker configuration
   * @type {object}
   */
  'monthPicker': {

    /**
     * @description make monthPicker enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description monthPicker title format string
     * @type string
     * @default 'YYYY'
     */
    'titleFormat': 'YYYY',

    /**
     * @description monthPicker title formatter function
     * @param unix
     * @return {*}
     */
    'titleFormatter': function titleFormatter(unix) {
      var titleDate = this.model.PersianDate.date(unix);
      return titleDate.format(this.model.options.monthPicker.titleFormat);
    },

    /**
     * @description fired when user select month
     * @event
     * @param monthIndex
     */
    'onSelect': function onSelect(monthIndex) {
      Helper.debug(this, 'monthPicker Event: onSelect : ' + monthIndex);
    }
  },

  /**
   * @description yearPicker configuration
   * @type {object}
   */
  'yearPicker': {

    /**
     * @description make yearPicker enable or disable
     * @type boolean
     * @default true
     */
    'enabled': true,

    /**
     * @description yearPicker title format string
     * @type string
     * @default 'YYYY'
     */
    'titleFormat': 'YYYY',

    /**
     * @description yearPicker title formatter function
     * @param year
     * @return {string}
     */
    'titleFormatter': function titleFormatter(year) {
      var remaining = parseInt(year / 12, 10) * 12;
      var startYear = this.model.PersianDate.date([remaining]);
      var endYear = this.model.PersianDate.date([remaining + 11]);
      return startYear.format(this.model.options.yearPicker.titleFormat) + '-' + endYear.format(this.model.options.yearPicker.titleFormat);
    },

    /**
     * @description fired when user select year
     * @event
     * @param year
     */
    'onSelect': function onSelect(year) {
      Helper.debug(this, 'yearPicker Event: onSelect : ' + year);
    }
  },

  /**
   * @description Called when date Select by user.
   * @event
   * @param unixDate
   */
  'onSelect': function onSelect(unixDate) {
    Helper.debug(this, 'datepicker Event: onSelect : ' + unixDate);
  },

  /**
   * @description Called when date Select by api.
   * @event
   * @param unixDate
   */
  'onSet': function onSet(unixDate) {
    Helper.debug(this, 'datepicker Event: onSet : ' + unixDate);
  },

  /**
   * @description position of datepicker relative to input element
   * @type string | array
   * @default 'auto'
   * @example
   *  'position': 'auto'
   *'position': [10,10]
   */
  'position': 'auto',

  /**
   * @description A function that takes current datepicker instance. It is called just before the datepicker is displayed.
   * @event
   */
  'onShow': function onShow(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onShow ');
  },

  /**
   * @description A function that takes current datepicker instance. It is called just before the datepicker Hide.
   * @event
   */
  'onHide': function onHide(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onHide ');
  },

  /**
   * @description on toggle datepicker event
   * @event
   */
  'onToggle': function onToggle(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onToggle ');
  },

  /**
   * @description on destroy datepicker event
   * @event
   */
  'onDestroy': function onDestroy(datepickerObject) {
    Helper.debug(datepickerObject, 'Event: onDestroy ');
  },

  /**
   * @description If true datepicker close When select a date
   * @type {boolean}
   * @default false
   */
  'autoClose': false,

  /**
   * @description by default datepicker have a template string, and you can overwrite it simply by replace string in config.
   * @type string
   * @example
   * <div id="plotId" class="datepicker-plot-area datepicker-plot-area-inline-view">
   {{#navigator.enabled}}
   <div class="navigator">
   <div class="datepicker-header">
   <div class="btn btn-next">{{navigator.text.btnNextText}}</div>
   <div class="btn btn-switch">{{ navigator.switch.text }}</div>
   <div class="btn btn-prev">{{navigator.text.btnPrevText}}</div>
   </div>
   </div>
   {{/navigator.enabled}}
   <div class="datepicker-grid-view" >
   {{#days.enabled}}
   {{#days.viewMode}}
   <div class="datepicker-day-view" >
   <div class="month-grid-box">
   <div class="header">
   <div class="title"></div>
   <div class="header-row">
   <div class="header-row-cell">ش</div>
   <div class="header-row-cell">ی</div>
   <div class="header-row-cell">د</div>
   <div class="header-row-cell">س</div>
   <div class="header-row-cell">چ</div>
   <div class="header-row-cell">پ</div>
   <div class="header-row-cell">ج</div>
   </div>
   </div>
   <table cellspacing="0" class="table-days">
   <tbody>
   {{#days.list}}
    <tr>
   {{#.}}
    {{#enabled}}
   <td data-unix="{{dataUnix}}" ><span  class="{{#otherMonth}}other-month{{/otherMonth}} {{#selected}}selected{{/selected}}">{{title}}</span></td>
   {{/enabled}}
   {{^enabled}}
   <td data-unix="{{dataUnix}}" class="disabled"><span class="{{#otherMonth}}other-month{{/otherMonth}}">{{title}}</span></td>
   {{/enabled}}
    {{/.}}
   </tr>
   {{/days.list}}
   </tbody>
   </table>
   </div>
   </div>
   {{/days.viewMode}}
   {{/days.enabled}}
    {{#month.enabled}}
   {{#month.viewMode}}
   <div class="datepicker-month-view">
   {{#month.list}}
   {{#enabled}}
   <div data-month="{{dataMonth}}" class="month-item {{#selected}}selected{{/selected}}">{{title}}</small></div>
   {{/enabled}}
   {{^enabled}}
   <div data-month="{{dataMonth}}" class="month-item month-item-disable {{#selected}}selected{{/selected}}">{{title}}</small></div>
   {{/enabled}}
   {{/month.list}}
   </div>
   {{/month.viewMode}}
   {{/month.enabled}}
    {{#year.enabled }}
   {{#year.viewMode }}
   <div class="datepicker-year-view" >
   {{#year.list}}
   {{#enabled}}
   <div data-year="{{dataYear}}" class="year-item {{#selected}}selected{{/selected}}">{{title}}</div>
   {{/enabled}}
   {{^enabled}}
   <div data-year="{{dataYear}}" class="year-item year-item-disable {{#selected}}selected{{/selected}}">{{title}}</div>
   {{/enabled}}
   {{/year.list}}
   </div>
   {{/year.viewMode }}
   {{/year.enabled }}
    </div>
   {{#time}}
   {{#enabled}}
   <div class="datepicker-time-view">
   {{#hour.enabled}}
   <div class="hour time-segment" data-time-key="hour">
   <div class="up-btn" data-time-key="hour">▲</div>
   <input value="{{hour.title}}" type="text" placeholder="hour" class="hour-input">
   <div class="down-btn" data-time-key="hour">▼</div>
   </div>
   <div class="divider">:</div>
   {{/hour.enabled}}
   {{#minute.enabled}}
   <div class="minute time-segment" data-time-key="minute" >
   <div class="up-btn" data-time-key="minute">▲</div>
   <input value="{{minute.title}}" type="text" placeholder="minute" class="minute-input">
   <div class="down-btn" data-time-key="minute">▼</div>
   </div>
   <div class="divider second-divider">:</div>
   {{/minute.enabled}}
   {{#second.enabled}}
   <div class="second time-segment" data-time-key="second"  >
   <div class="up-btn" data-time-key="second" >▲</div>
   <input value="{{second.title}}"  type="text" placeholder="second" class="second-input">
   <div class="down-btn" data-time-key="second" >▼</div>
   </div>
   <div class="divider meridian-divider"></div>
   <div class="divider meridian-divider"></div>
   {{/second.enabled}}
   {{#meridian.enabled}}
   <div class="meridian time-segment" data-time-key="meridian" >
   <div class="up-btn" data-time-key="meridian">▲</div>
   <input value="{{meridian.title}}" type="text" class="meridian-input">
   <div class="down-btn" data-time-key="meridian">▼</div>
   </div>
   {{/meridian.enabled}}
   </div>
   {{/enabled}}
   {{/time}}
    {{#toolbox}}
   {{#enabled}}
   <div class="toolbox ">
   <div class="btn-today">{{text.btnToday}}</div>
   </div>
   {{/enabled}}
   {{/toolbox}}
   </div>
   */
  'template': null,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Under Implement ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * @description if true datepicker update self by user inputted date string, accept 'yyyy/mm/dd'
   * @example '1396/10/2', ''
   * @type {boolean}
   * @default false
   */
  'observer': false,

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////// Un  implemented ///////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  /**
   * @description waite time for last user key-down event, accept millisecond
   * @type {number}
   * @default 800
   */
  'inputDelay': 800
};

module.exports = Config;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Model = __webpack_require__(2);

/**
 * @author babakhani.reza@gmail.com
 * @description jquery plugin initializer
 */
(function ($) {
    /*eslint-disable no-unused-vars */
    $.fn.persianDatepicker = $.fn.pDatepicker = function (options) {
        var args = Array.prototype.slice.call(arguments),
            output = null,
            self = this;
        if (!this) {
            $.error('Invalid selector');
        }
        $(this).each(function () {
            // encapsulation Args
            var emptyArr = [],
                tempArg = args.concat(emptyArr),
                dp = $(this).data('datepicker'),
                funcName = null;
            if (dp && typeof tempArg[0] === 'string') {
                funcName = tempArg[0];
                output = dp[funcName](tempArg[0]);
            } else {
                self.pDatePicker = new Model(this, options);
            }
        });
        $(this).data('datepicker', self.pDatePicker);
        return self.pDatePicker;
    };
    /*eslint-enable no-unused-vars */
})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helper = __webpack_require__(0);
var PersianDateParser = __webpack_require__(9);
/**
 * Do every thing about input element like get default value, set new value, set alt field input and etc.
 */

var Input = function () {

    /**
     * @param {Model} model
     * @param {Element}
     * @return {Input}
     */
    function Input(model, inputElement) {
        _classCallCheck(this, Input);

        /**
         * @type {Object}
         */
        this.model = model;

        /**
         * @type {boolean}
         * @private
         */
        this._firstUpdate = true;

        /**
         * @type {Element}
         */
        this.elem = inputElement;

        if (this.model.options.observer) {
            this.observe();
        }

        this.addInitialClass();

        /**
         * @type {Number}
         */
        this.initialUnix = null;

        if (this.model.options.inline == false) {
            this._attachInputElementEvents();
        }

        return this;
    }

    _createClass(Input, [{
        key: 'addInitialClass',
        value: function addInitialClass() {
            $(this.elem).addClass('pwt-datepicker-input-element');
        }
    }, {
        key: 'parseInput',
        value: function parseInput(inputString) {
            var parse = new PersianDateParser(),
                that = this;
            if (parse.parse(inputString) !== undefined) {
                var pd = this.model.PersianDate.date(parse.parse(inputString)).valueOf();
                that.model.state.setSelectedDateTime('unix', pd);
                that.model.state.setViewDateTime('unix', pd);
                that.model.view.render();
            }
        }
    }, {
        key: 'observe',
        value: function observe() {
            var that = this;
            /////////////////   Manipulate by Copy And paste
            $(that.elem).bind('paste', function (e) {
                Helper.delay(function () {
                    that.parseInput(e.target.value);
                }, 60);
            });
            var typingTimer = void 0,
                doneTypingInterval = that.model.options.inputDelay,
                ctrlDown = false,
                ctrlKey = [17, 91],
                vKey = 86;

            $(document).keydown(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0) ctrlDown = true;
            }).keyup(function (e) {
                if ($.inArray(e.keyCode, ctrlKey) > 0) ctrlDown = false;
            });

            $(that.elem).bind('keyup', function (e) {
                var $self = $(this);
                var trueKey = false;
                if (e.keyCode === 8 || e.keyCode < 105 && e.keyCode > 96 || e.keyCode < 58 && e.keyCode > 47 || ctrlDown && (e.keyCode == vKey || $.inArray(e.keyCode, ctrlKey) > 0)) {
                    trueKey = true;
                }
                if (trueKey) {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(function () {
                        doneTyping($self);
                    }, doneTypingInterval);
                }
            });

            $(that.elem).on('keydown', function () {
                clearTimeout(typingTimer);
            });
            function doneTyping($self) {
                that.parseInput($self.val());
            }

            /////////////////   Manipulate by alt changes
            // TODO
            // self.model.options.altField.bind("change", function () {
            //     //if (!self._flagSelfManipulate) {
            //         let newDate = new Date($(this).val());
            //         if (newDate !== "Invalid Date") {
            //             let newPersainDate = this.model.PersianDate.date(newDate);
            //             self.selectDate(newPersainDate.valueOf());
            //         }
            //   //  }
            // });
        }

        /**
         * @private
         * @desc attach events to input field
         */

    }, {
        key: '_attachInputElementEvents',
        value: function _attachInputElementEvents() {
            var that = this;
            var closePickerHandler = function closePickerHandler(e) {
                if (!$(e.target).is(that.elem) && !$(e.target).is(that.model.view.$container) && $(e.target).closest('#' + that.model.view.$container.attr('id')).length == 0 && !$(e.target).is($(that.elem).children())) {
                    that.model.api.hide();
                    $('body').unbind('click', closePickerHandler);
                }
            };

            $(this.elem).on('focus click', Helper.debounce(function (evt) {
                that.model.api.show();
                if (that.model.state.ui.isInline === false) {
                    $('body').unbind('click', closePickerHandler).bind('click', closePickerHandler);
                }
                if (Helper.isMobile) {
                    $(this).blur();
                }
                evt.stopPropagation();
                return false;
            }, 200));
        }

        /**
         * @desc get <input/> element position
         * @return {{top: Number, left: Number}}
         * @todo remove jquery
         */

    }, {
        key: 'getInputPosition',
        value: function getInputPosition() {
            return $(this.elem).offset();
        }

        /**
         * @desc get <input/> element size
         * @return {{width: Number, height: Number}}
         * @todo remove jquery
         */

    }, {
        key: 'getInputSize',
        value: function getInputSize() {
            return {
                width: $(this.elem).outerWidth(),
                height: $(this.elem).outerHeight()
            };
        }

        /**
         * @desc update <input/> element value
         * @param {Number} unix
         * @todo remove jquery
         * @private
         */

    }, {
        key: '_updateAltField',
        value: function _updateAltField(unix) {
            var value = this.model.options.altFieldFormatter(unix);
            $(this.model.options.altField).val(value);
        }

        /**
         * @desc update <input/> element value
         * @param {Number} unix
         * @todo remove jquery
         * @private
         */

    }, {
        key: '_updateInputField',
        value: function _updateInputField(unix) {
            var value = this.model.options.formatter(unix);
            if ($(this.elem).val() != value) {
                $(this.elem).val(value);
            }
        }

        /**
         * @param unix
         */

    }, {
        key: 'update',
        value: function update(unix) {
            if (this.model.options.initialValue == false && this._firstUpdate) {
                this._firstUpdate = false;
            } else {
                this._updateInputField(unix);
                this._updateAltField(unix);
            }
        }

        /**
         * @desc return initial value
         * @return {Number} - unix
         */

    }, {
        key: 'getOnInitState',
        value: function getOnInitState() {
            var persianDatePickerTimeRegex = '^([0-1][0-9]|2[0-3]):([0-5][0-9])(?::([0-5][0-9]))?$';
            var garegurianDate = null,
                $inputElem = $(this.elem),
                inputValue = void 0;

            // Define input value by check inline mode and input mode

            if ($inputElem[0].nodeName === 'INPUT') {
                inputValue = $inputElem[0].getAttribute('value');
            } else {
                inputValue = $inputElem.data('date');
            }

            // Check time string by regex
            if (inputValue && inputValue.match(persianDatePickerTimeRegex)) {
                var timeArray = inputValue.split(':'),
                    tempDate = new Date();
                tempDate.setHours(timeArray[0]);
                tempDate.setMinutes(timeArray[1]);
                if (timeArray[2]) {
                    tempDate.setSeconds(timeArray[2]);
                } else {
                    tempDate.setSeconds(0);
                }
                this.initialUnix = tempDate.valueOf();
            } else {
                if (this.model.options.initialValueType === 'persian' && inputValue) {
                    var parse = new PersianDateParser();
                    var pd = new persianDate(parse.parse(inputValue)).valueOf();
                    garegurianDate = new Date(pd).valueOf();
                } else if (inputValue) {
                    garegurianDate = new Date(inputValue).valueOf();
                }

                if (garegurianDate && garegurianDate != 'undefined') {
                    this.initialUnix = garegurianDate;
                } else {
                    this.initialUnix = new Date().valueOf();
                }
            }
            return this.initialUnix;
        }
    }]);

    return Input;
}();

module.exports = Input;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hamster = __webpack_require__(14);

/**
 * This navigator class do every thing about navigate and select date
 * @public
 */

var Navigator = function () {

    /**
     * @param {object} datepicker
     * @return {Navigator}
     */
    function Navigator(model) {
        _classCallCheck(this, Navigator);

        /**
         * @type {Datepicker}
         */
        this.model = model;
        this.liveAttach();
        this._attachEvents();
        return this;
    }

    /**
     * @desc attach events that needed attach after every render
     * @public
     * @todo attach as a live way
     */


    _createClass(Navigator, [{
        key: 'liveAttach',
        value: function liveAttach() {
            // Check options
            if (this.model.options.navigator.scroll.enabled) {
                var that = this;
                var gridPlot = $('#' + that.model.view.id + ' .datepicker-grid-view')[0];
                Hamster(gridPlot).wheel(function (event, delta) {
                    if (delta > 0) {
                        that.model.state.navigate('next');
                    } else {
                        that.model.state.navigate('prev');
                    }
                    that.model.view.render();
                    event.preventDefault();
                });

                if (this.model.options.timePicker.enabled) {
                    $('#' + that.model.view.id + ' .time-segment').each(function () {
                        Hamster(this).wheel(function (event, delta) {
                            var $target = $(event.target);
                            var key = $target.data('time-key') ? $target.data('time-key') : $target.parents('[data-time-key]').data('time-key');
                            if (key) {
                                if (delta > 0) {
                                    that.timeUp(key);
                                } else {
                                    that.timeDown(key);
                                }
                            }
                            that.model.view.render();
                            event.preventDefault();
                        });
                    });
                }
            }
        }

        /**
         * @desc set time up depend to timekey
         * @param {String} timekey - accept hour, minute,second
         * @public
         */

    }, {
        key: 'timeUp',
        value: function timeUp(timekey) {
            if (this.model.options.timePicker[timekey] == undefined) {
                return;
            }
            var step = void 0,
                t = void 0,
                that = this;
            if (timekey == 'meridian') {
                step = 12;
                if (this.model.state.view.meridian == 'PM') {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
                } else {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
                }
                this.model.state.meridianToggle();
            } else {
                step = this.model.options.timePicker[timekey].step;
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).add(timekey, step).valueOf();
            }
            this.model.state.setViewDateTime('unix', t);
            this.model.state.setSelectedDateTime('unix', t);
            this.model.view.renderTimePartial();
            clearTimeout(this.scrollDelayTimeDown);
            this.scrollDelayTimeUp = setTimeout(function () {
                that.model.view.markSelectedDay();
            }, 300);
        }

        /**
         * @desc set time down depend to timekey
         * @param {String} timekey - accept hour, minute,second
         * @public
         */

    }, {
        key: 'timeDown',
        value: function timeDown(timekey) {
            if (this.model.options.timePicker[timekey] == undefined) {
                return;
            }
            var step = void 0,
                t = void 0,
                that = this;
            if (timekey == 'meridian') {
                step = 12;
                if (this.model.state.view.meridian == 'AM') {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).add('hour', step).valueOf();
                } else {
                    t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract('hour', step).valueOf();
                }
                this.model.state.meridianToggle();
            } else {
                step = this.model.options.timePicker[timekey].step;
                t = this.model.PersianDate.date(this.model.state.selected.unixDate).subtract(timekey, step).valueOf();
            }
            this.model.state.setViewDateTime('unix', t);
            this.model.state.setSelectedDateTime('unix', t);
            this.model.view.renderTimePartial();
            clearTimeout(this.scrollDelayTimeDown);
            this.scrollDelayTimeDown = setTimeout(function () {
                that.model.view.markSelectedDay();
            }, 300);
        }

        /**
         * @desc attach dom events
         * @todo remove jquery
         * @private
         */

    }, {
        key: '_attachEvents',
        value: function _attachEvents() {
            var that = this;

            if (this.model.options.navigator.enabled) {
                /**
                 * @description navigator click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .pwt-btn', function () {
                    if ($(this).is('.pwt-btn-next')) {
                        that.model.state.navigate('next');
                        that.model.view.render();
                        that.model.options.navigator.onNext(that.model);
                    } else if ($(this).is('.pwt-btn-switch')) {
                        that.model.state.switchViewMode();
                        that.model.view.render();
                        that.model.options.navigator.onSwitch(that.model);
                    } else if ($(this).is('.pwt-btn-prev')) {
                        that.model.state.navigate('prev');
                        that.model.view.render();
                        that.model.options.navigator.onPrev(that.model);
                    }
                });
            }

            /**
             * @description check if timePicker enabled attach Events
             */
            if (this.model.options.timePicker.enabled) {

                /**
                 * @description time up btn click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .up-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeUp(timekey);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });

                /**
                 * @description time down btn click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .down-btn', function () {
                    var timekey = $(this).data('time-key');
                    that.timeDown(timekey);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });
            }

            /**
             * @description check if dayPicker enabled attach Events
             */
            if (this.model.options.dayPicker.enabled) {

                /**
                 * @description days click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-day-view td:not(.disabled)', function () {
                    var thisUnix = $(this).data('unix'),
                        mustRender = void 0;
                    that.model.state.setSelectedDateTime('unix', thisUnix);
                    if (that.model.state.selected.month !== that.model.state.view.month) {
                        mustRender = true;
                    } else {
                        mustRender = false;
                    }
                    that.model.state.setViewDateTime('unix', that.model.state.selected.unixDate);
                    if (that.model.options.autoClose) {
                        that.model.view.hide();
                        that.model.options.onHide(that);
                    }
                    if (mustRender) {
                        that.model.view.render();
                    } else {
                        that.model.view.markSelectedDay();
                    }
                    that.model.options.dayPicker.onSelect(thisUnix);
                    that.model.options.onSelect(thisUnix);
                });
            }

            /**
             * @description check if monthPicker enabled attach Events
             */
            if (this.model.options.monthPicker.enabled) {

                /**
                 * @description month click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-month-view .month-item:not(.month-item-disable)', function () {
                    var month = $(this).data('month');
                    that.model.state.switchViewModeTo('day');
                    if (!that.model.options.onlySelectOnDate) {
                        that.model.state.setSelectedDateTime('month', month);
                        if (that.model.options.autoClose) {
                            that.model.view.hide();
                            that.model.options.onHide(that);
                        }
                    }
                    that.model.state.setViewDateTime('month', month);
                    that.model.view.render();
                    that.model.options.monthPicker.onSelect(month);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });
            }

            /**
             * @description check if yearPicker enabled attach Events
             */
            if (this.model.options.yearPicker.enabled) {

                /**
                 * @description year click event
                 */
                $(document).on('click', '#' + that.model.view.id + ' .datepicker-year-view .year-item:not(.year-item-disable)', function () {
                    var year = $(this).data('year');
                    that.model.state.switchViewModeTo('month');
                    if (!that.model.options.onlySelectOnDate) {
                        that.model.state.setSelectedDateTime('year', year);
                        if (that.model.options.autoClose) {
                            that.model.view.hide();
                            that.model.options.onHide(that);
                        }
                    }
                    that.model.state.setViewDateTime('year', year);
                    that.model.view.render();
                    that.model.options.yearPicker.onSelect(year);
                    that.model.options.onSelect(that.model.state.selected.unix);
                });
            }
        }
    }]);

    return Navigator;
}();

module.exports = Navigator;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = __webpack_require__(4);
var Template = __webpack_require__(1);
/**
 * Extend default config from user interred and do compatibility works
 * @public
 */

var Options = function () {

    /**
     * @param {object} options config passed when initialize
     * @return {object}
     * @todo remove jquery
     */
    function Options(options, model) {
        _classCallCheck(this, Options);

        this.model = model;
        return this._compatibility($.extend(true, this, Config, options));
    }

    /**
     * @private
     * @param options
     */


    _createClass(Options, [{
        key: '_compatibility',
        value: function _compatibility(options) {

            if (options.inline) {
                options.toolbox.submitButton.enabled = false;
            }

            if (!options.template) {
                options.template = Template;
            }
            persianDate.toCalendar(options.calendarType);
            persianDate.toLocale(options.calendar[options.calendarType].locale);
            if (options.onlyTimePicker) {
                options.dayPicker.enabled = false;
                options.monthPicker.enabled = false;
                options.yearPicker.enabled = false;
                options.navigator.enabled = false;
                options.toolbox.enabled = false;
                options.timePicker.enabled = true;
            }

            if (options.timePicker.hour.step === null) {
                options.timePicker.hour.step = options.timePicker.step;
            }
            if (options.timePicker.minute.step === null) {
                options.timePicker.minute.step = options.timePicker.step;
            }
            if (options.timePicker.second.step === null) {
                options.timePicker.second.step = options.timePicker.step;
            }

            if (options.dayPicker.enabled === false) {
                options.onlySelectOnDate = false;
            }

            options._viewModeList = [];
            if (options.dayPicker.enabled) {
                options._viewModeList.push('day');
            }
            if (options.monthPicker.enabled) {
                options._viewModeList.push('month');
            }
            if (options.yearPicker.enabled) {
                options._viewModeList.push('year');
            }
        }
    }]);

    return Options;
}();

module.exports = Options;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersianDateParser = function () {
    function PersianDateParser() {
        _classCallCheck(this, PersianDateParser);

        this.pattern = {
            jalali: /^[1-4]\d{3}(\/|-|\.)((0?[1-6](\/|-|\.)((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))(\/|-|\.)(30|([1-2][0-9])|(0?[1-9]))))$/g
        };
    }

    _createClass(PersianDateParser, [{
        key: 'parse',
        value: function parse(inputString) {
            var that = this,
                persianDateArray = void 0,
                jalaliPat = new RegExp(that.pattern.jalali);

            String.prototype.toEnglishDigits = function () {
                var charCodeZero = '۰'.charCodeAt(0);
                return this.replace(/[۰-۹]/g, function (w) {
                    return w.charCodeAt(0) - charCodeZero;
                });
            };

            inputString = inputString.toEnglishDigits();

            if (jalaliPat.test(inputString)) {
                /* eslint-disable no-useless-escape */
                persianDateArray = inputString.split(/\/|-|\,|\./).map(Number);
                /* eslint-enable no-useless-escape */
                return persianDateArray;
            } else {
                return undefined;
            }
        }
    }]);

    return PersianDateParser;
}();

module.exports = PersianDateParser;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersianDateWrapper = function () {
    function PersianDateWrapper(model) {
        _classCallCheck(this, PersianDateWrapper);

        this.model = model;
        this.model.options.calendar_ = this.model.options.calendarType;
        this.model.options.locale_ = this.model.options.calendar[this.model.options.calendarType].locale;
        return this;
    }

    _createClass(PersianDateWrapper, [{
        key: "date",
        value: function date(input) {
            if (window.inspdCount || window.inspdCount === 0) {
                window.inspdCount++;
            } else {
                window.inspdCount = 0;
            }
            var that = this;
            var output = void 0,
                cp = void 0;
            cp = persianDate.toCalendar(that.model.options.calendar_);
            if (this.model.options.calendar[this.model.options.calendarType].leapYearMode) {
                cp.toLeapYearMode(this.model.options.calendar[this.model.options.calendarType].leapYearMode);
            }
            output = new cp(input);
            return output.toLocale(that.model.options.locale_);
        }
    }]);

    return PersianDateWrapper;
}();

module.exports = PersianDateWrapper;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * All state set in his object and get from this
 * also this object notify other object to update self or update view or etc.
 */
var State = function () {

    /**
     * @param {model} model
     * @return {State}
     */
    function State(model) {
        _classCallCheck(this, State);

        /**
         * @type {object}
         */
        this.model = model;

        /**
         * @type {Boolean}
         */
        this.filetredDate = this.model.options.minDate || this.model.options.maxDate;

        /**
         * @desc get generated view mode list from options object
         * @type {Array}
         */
        this.viewModeList = this.model.options._viewModeList;

        /**
         * @desc view mode string day, month, year
         * @type {String}
         * @default day
         * @todo add time to view modes
         */
        this.viewMode = this.viewModeList.indexOf(model.options.viewMode) > 0 ? model.options.viewMode : this.viewModeList[0];

        /**
         * @desc view mode string index in view mode list
         * @type {number}
         */
        this.viewModeIndex = this.viewModeList.indexOf(model.options.viewMode) > 0 ? this.viewModeList.indexOf(model.options.viewMode) : 0; // defaul 'day'


        /**
         * @desc contain filtered date objects
         * @type {{start: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}, end: {year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number}}}
         */
        this.filterDate = {
            start: {
                year: 0,
                month: 0,
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
                unixDate: 0
            },
            end: {
                year: 0,
                month: 0,
                date: 0,
                hour: 0,
                minute: 0,
                second: 0,
                unixDate: 0
            }
        };

        /**
         * @desc contain view date object
         * @type {{year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number, dateObject: null, meridian: string}}
         */
        this.view = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null,
            meridian: 'AM'
        };

        /**
         * @desc contain selected date object
         * @type {{year: number, month: number, date: number, hour: number, minute: number, second: number, unixDate: number, dateObject: null}}
         */
        this.selected = {
            year: 0,
            month: 0,
            date: 0,
            hour: 0,
            hour12: 0,
            minute: 0,
            second: 0,
            unixDate: 0,
            dateObject: null
        };

        this.ui = {
            isOpen: false,
            isInline: this.model.options.inline
        };

        this._setFilterDate(this.model.options.minDate, this.model.options.maxDate);
        return this;
    }

    /**
     * @private
     * @param minDate
     * @param maxDate
     */


    _createClass(State, [{
        key: '_setFilterDate',
        value: function _setFilterDate(minDate, maxDate) {
            var self = this;
            if (!minDate) {
                minDate = -2000000000000000;
            }
            if (!maxDate) {
                maxDate = 2000000000000000;
            }
            var pd = self.model.PersianDate.date(minDate);
            self.filterDate.start.unixDate = minDate;
            self.filterDate.start.hour = pd.hour();
            self.filterDate.start.minute = pd.minute();
            self.filterDate.start.second = pd.second();
            self.filterDate.start.month = pd.month();
            self.filterDate.start.date = pd.date();
            self.filterDate.start.year = pd.year();

            var pdEnd = self.model.PersianDate.date(maxDate);
            self.filterDate.end.unixDate = maxDate;
            self.filterDate.end.hour = pdEnd.hour();
            self.filterDate.end.minute = pdEnd.minute();
            self.filterDate.end.second = pdEnd.second();
            self.filterDate.end.month = pdEnd.month();
            self.filterDate.end.date = pdEnd.date();
            self.filterDate.end.year = pdEnd.year();
        }

        /**
         * @desc change view state
         * @param {String} nav - accept next, prev
         */

    }, {
        key: 'navigate',
        value: function navigate(nav) {
            if (nav == 'next') {
                if (this.viewMode == 'year') {
                    this.setViewDateTime('year', this.view.year + 12);
                }
                if (this.viewMode == 'month') {
                    var newYear = this.view.year + 1;
                    if (newYear === 0) {
                        newYear = 1;
                    }
                    this.setViewDateTime('year', newYear);
                }
                if (this.viewMode == 'day') {
                    var _newYear = this.view.year + 1;
                    if (_newYear === 0) {
                        _newYear = 1;
                    }
                    if (this.view.month + 1 == 13) {
                        this.setViewDateTime('year', _newYear);
                        this.setViewDateTime('month', 1);
                    } else {
                        this.setViewDateTime('month', this.view.month + 1);
                    }
                }
            } else {
                if (this.viewMode == 'year') {
                    this.setViewDateTime('year', this.view.year - 12);
                }
                if (this.viewMode == 'month') {
                    var _newYear2 = this.view.year - 1;
                    if (_newYear2 === 0) {
                        _newYear2 = -1;
                    }
                    this.setViewDateTime('year', _newYear2);
                }
                if (this.viewMode == 'day') {
                    if (this.view.month - 1 <= 0) {
                        var _newYear3 = this.view.year - 1;
                        if (_newYear3 === 0) {
                            _newYear3 = -1;
                        }
                        this.setViewDateTime('year', _newYear3);
                        this.setViewDateTime('month', 12);
                    } else {
                        this.setViewDateTime('month', this.view.month - 1);
                    }
                }
            }
        }

        /**
         * @public
         * @desc every time called view state changed to next in queue
         * @return {State}
         */

    }, {
        key: 'switchViewMode',
        value: function switchViewMode() {
            this.viewModeIndex = this.viewModeIndex + 1 >= this.viewModeList.length ? 0 : this.viewModeIndex + 1;
            this.viewMode = this.viewModeList[this.viewModeIndex] ? this.viewModeList[this.viewModeIndex] : this.viewModeList[0];
            this._setViewDateTimeUnix();
            return this;
        }

        /**
         * @desc switch to specified view mode
         * @param {String} viewMode - accept date, month, year
         */

    }, {
        key: 'switchViewModeTo',
        value: function switchViewModeTo(viewMode) {
            if (this.viewModeList.indexOf(viewMode) >= 0) {
                this.viewMode = viewMode;
                this.viewModeIndex = this.viewModeList.indexOf(viewMode);
            }
        }

        /**
         * @desc called on date select
         * @param {String} key - accept date, month, year, hour, minute, second
         * @param {Number} value
         * @public
         * @return {State}
         */

    }, {
        key: 'setSelectedDateTime',
        value: function setSelectedDateTime(key, value) {
            var that = this;
            switch (key) {
                case 'unix':
                    that.selected.unixDate = value;
                    var pd = this.model.PersianDate.date(value);
                    that.selected.year = pd.year();
                    that.selected.month = pd.month();
                    that.selected.date = pd.date();
                    that.selected.hour = pd.hour();
                    that.selected.hour12 = pd.format('hh');
                    that.selected.minute = pd.minute();
                    that.selected.second = pd.second();
                    break;
                case 'year':
                    this.selected.year = value;
                    break;
                case 'month':
                    this.selected.month = value;
                    break;
                case 'date':
                    this.selected.date = value;
                    break;
                case 'hour':
                    this.selected.hour = value;
                    break;
                case 'minute':
                    this.selected.minute = value;
                    break;
                case 'second':
                    this.selected.second = value;
                    break;
            }
            that._updateSelectedUnix();
            return this;
        }

        /**
         * @return {State}
         * @private
         */

    }, {
        key: '_updateSelectedUnix',
        value: function _updateSelectedUnix() {
            this.selected.dateObject = this.model.PersianDate.date([this.selected.year, this.selected.month, this.selected.date, this.view.hour, this.view.minute, this.view.second]);
            this.selected.unixDate = this.selected.dateObject.valueOf();
            this.model.updateInput(this.selected.unixDate);
            return this;
        }

        /**
         *
         * @return {State}
         * @private
         */

    }, {
        key: '_setViewDateTimeUnix',
        value: function _setViewDateTimeUnix() {
            this.view.dateObject = this.model.PersianDate.date([this.view.year, this.view.month, this.view.date, this.view.hour, this.view.minute, this.view.second]);
            this.view.year = this.view.dateObject.year();
            this.view.month = this.view.dateObject.month();
            this.view.date = this.view.dateObject.date();
            this.view.hour = this.view.dateObject.hour();
            this.view.hour12 = this.view.dateObject.format('hh');
            this.view.minute = this.view.dateObject.minute();
            this.view.second = this.view.dateObject.second();
            this.view.unixDate = this.view.dateObject.valueOf();
            return this;
        }

        /**
         *
         * @param {String} key -  accept date, month, year, hour, minute, second
         * @param {Number} value
         * @return {State}
         */

    }, {
        key: 'setViewDateTime',
        value: function setViewDateTime(key, value) {
            var self = this;
            switch (key) {
                case 'unix':
                    var pd = this.model.PersianDate.date(value);
                    self.view.year = pd.year();
                    self.view.month = pd.month();
                    self.view.date = pd.date();
                    self.view.hour = pd.hour();
                    self.view.minute = pd.minute();
                    self.view.second = pd.second();
                    break;
                case 'year':
                    this.view.year = value;
                    break;
                case 'month':
                    this.view.month = value;
                    break;
                case 'date':
                    this.view.date = value;
                    break;
                case 'hour':
                    this.view.hour = value;
                    break;
                case 'minute':
                    this.view.minute = value;
                    break;
                case 'second':
                    this.view.second = value;
                    break;
            }
            this._setViewDateTimeUnix();
            return this;
        }

        /**
         * desc change meridian state
         */

    }, {
        key: 'meridianToggle',
        value: function meridianToggle() {
            var self = this;
            if (self.view.meridian === 'AM') {
                self.view.meridian = 'PM';
            } else if (self.view.meridian === 'PM') {
                self.view.meridian = 'AM';
            }
        }
    }]);

    return State;
}();

module.exports = State;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Do every things about toolbox, like attach events to toolbox elements
 */
var Toolbox = function () {

    /**
     * @param {Datepicker} datepicker
     * @return {Toolbox}
     */
    function Toolbox(model) {
        _classCallCheck(this, Toolbox);

        /**
         * @type {Datepicker}
         */
        this.model = model;
        this._attachEvents();
        return this;
    }

    _createClass(Toolbox, [{
        key: '_toggleCalendartype',
        value: function _toggleCalendartype() {
            var that = this;
            if (that.model.options.calendar_ == 'persian') {
                that.model.options.calendar_ = 'gregorian';
                that.model.options.locale_ = this.model.options.calendar.gregorian.locale;
            } else {
                that.model.options.calendar_ = 'persian';
                that.model.options.locale_ = this.model.options.calendar.persian.locale;
            }
        }

        /**
         * attach all events about toolbox
         */

    }, {
        key: '_attachEvents',
        value: function _attachEvents() {
            var that = this;
            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-today', function () {
                that.model.state.setSelectedDateTime('unix', new Date().valueOf());
                that.model.state.setViewDateTime('unix', new Date().valueOf());
                that.model.view.reRender();
                /**
                 * @deprecated
                 * @todo remove this
                 */
                that.model.options.toolbox.onToday(that.model);
                that.model.options.toolbox.todayButton.onToday(that.model);
            });

            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-calendar', function () {
                that._toggleCalendartype();
                that.model.state.setSelectedDateTime('unix', that.model.state.selected.unixDate);
                that.model.state.setViewDateTime('unix', that.model.state.view.unixDate);
                that.model.view.render();
                that.model.options.toolbox.calendarSwitch.onSwitch(that.model);
            });

            $(document).on('click', '#' + that.model.view.id + ' .pwt-btn-submit', function () {
                that.model.view.hide();
                that.model.options.toolbox.submitButton.onSubmit(that.model);
                that.model.options.onHide(this);
            });
        }
    }]);

    return Toolbox;
}();

module.exports = Toolbox;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = __webpack_require__(1);
var Helper = __webpack_require__(0);
var Mustache = __webpack_require__(15);

/**
 * As its name suggests, all rendering works do in this object
 */

var View = function () {

    /**
     *
     * @param {Datepicker} model
     * @return {View}
     */
    function View(model) {
        _classCallCheck(this, View);

        /**
         * @type {number}
         */
        this.yearsViewCount = 12;

        /**
         *
         * @type {Datepicker}
         */
        this.model = model;

        /**
         *
         * @type {null}
         */
        this.rendered = null;

        /**
         *
         * @type {null}
         */
        this.$container = null;

        /**
         *
         * @type {string}
         */
        this.id = 'persianDateInstance-' + parseInt(Math.random(100) * 1000);
        var that = this;

        if (this.model.state.ui.isInline) {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container-inline"></div>').appendTo(that.model.inputElement);
        } else {
            this.$container = $('<div  id="' + this.id + '" class="datepicker-container"></div>').appendTo('body');
            this.hide();
            this.setPickerBoxPosition();
            this.addCompatibilityClass();
        }
        return this;
    }

    /**
     * @desc add css class to handle compatibility ui things
     */


    _createClass(View, [{
        key: 'addCompatibilityClass',
        value: function addCompatibilityClass() {
            if (Helper.isMobile && this.model.options.responsive) {
                this.$container.addClass('pwt-mobile-view');
            }
        }

        /**
         * @desc remove datepicker container element from dom
         */

    }, {
        key: 'destroy',
        value: function destroy() {
            this.$container.remove();
        }

        /**
         * @desc set datepicker container element based on <input/> element position
         */

    }, {
        key: 'setPickerBoxPosition',
        value: function setPickerBoxPosition() {
            var inputPosition = this.model.input.getInputPosition(),
                inputSize = this.model.input.getInputSize();

            if (Helper.isMobile && this.model.options.responsive) {
                return false;
            }

            if (this.model.options.position === 'auto') {
                this.$container.css({
                    left: inputPosition.left + 'px',
                    top: inputSize.height + inputPosition.top + 'px'
                });
            } else {
                this.$container.css({
                    left: this.model.options.position[1] + inputPosition.left + 'px',
                    top: this.model.options.position[0] + inputPosition.top + 'px'
                });
            }
        }

        /**
         * @desc show datepicker container element
         */

    }, {
        key: 'show',
        value: function show() {
            this.$container.removeClass('pwt-hide');
            this.setPickerBoxPosition();
        }

        /**
         * @desc hide datepicker container element
         */

    }, {
        key: 'hide',
        value: function hide() {
            this.$container.addClass('pwt-hide');
        }

        /**
         * @desc toggle datepicker container element
         */

    }, {
        key: 'toggle',
        value: function toggle() {
            this.$container.toggleClass('pwt-hide');
        }

        /**
         * @desc return navigator switch text
         * @param {String} data -  accept day, month, year
         * @private
         * @return {String}
         */

    }, {
        key: '_getNavSwitchText',
        value: function _getNavSwitchText(data) {
            var output = void 0;
            if (this.model.state.viewMode == 'day') {
                output = this.model.options.dayPicker.titleFormatter.call(this, data.year, data.month);
            } else if (this.model.state.viewMode == 'month') {
                output = this.model.options.monthPicker.titleFormatter.call(this, data.dateObject.valueOf());
            } else if (this.model.state.viewMode == 'year') {
                output = this.model.options.yearPicker.titleFormatter.call(this, data.year);
            }
            return output;
        }

        /**
         * @desc check year is accessible
         * @param {Number} year - year number
         * @return {Boolean}
         */

    }, {
        key: 'checkYearAccess',
        value: function checkYearAccess(year) {
            var output = true;
            if (this.model.state.filetredDate) {
                var startYear = this.model.state.filterDate.start.year,
                    endYear = this.model.state.filterDate.end.year;
                if (startYear && year < startYear) {
                    return false;
                } else if (endYear && year > endYear) {
                    return false;
                }
            }
            if (output) {
                return this.model.options.checkYear(year);
            }
        }

        /**
         * @private
         * @param viewState
         * @return {{enabled: boolean, viewMode: boolean, list: Array}}
         */

    }, {
        key: '_getYearViewModel',
        value: function _getYearViewModel(viewState) {
            var _this = this;

            var isEnabled = this.model.options.yearPicker.enabled;
            // Make performance better
            if (!isEnabled) {
                return {
                    enabled: false
                };
            }
            /**
             * @description Generate years list based on viewState year
             * @return ['1380',n+12,'1392']
             */
            var list = [].concat(_toConsumableArray(Array(this.yearsViewCount).keys())).map(function (value) {
                return value + parseInt(viewState.year / _this.yearsViewCount) * _this.yearsViewCount;
            });
            /*
             * @description Generate years object based on list
             */
            var yearsModel = [],
                yearStr = this.model.PersianDate.date();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    yearStr.year([i]);
                    yearsModel.push({
                        title: yearStr.format('YYYY'),
                        enabled: this.checkYearAccess(i),
                        dataYear: i,
                        selected: this.model.state.selected.year == i
                    });
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return {
                enabled: isEnabled,
                viewMode: this.model.state.viewMode == 'year',
                list: yearsModel
            };
        }

        /**
         * @desc check month is accessible
         * @param {Number} month - month number
         * @return {Boolean}
         */

    }, {
        key: 'checkMonthAccess',
        value: function checkMonthAccess(month) {
            month = month + 1;
            var output = true,
                y = this.model.state.view.year;
            if (this.model.state.filetredDate) {
                var startMonth = this.model.state.filterDate.start.month,
                    endMonth = this.model.state.filterDate.end.month,
                    startYear = this.model.state.filterDate.start.year,
                    endYear = this.model.state.filterDate.end.year;
                if (startMonth && endMonth && (y == endYear && month > endMonth || y > endYear) || y == startYear && month < startMonth || y < startYear) {
                    return false;
                } else if (endMonth && (y == endYear && month > endMonth || y > endYear)) {
                    return false;
                } else if (startMonth && (y == startYear && month < startMonth || y < startYear)) {
                    return false;
                }
            }
            if (output) {
                return this.model.options.checkMonth(month, y);
            }
        }

        /**
         * @private
         * @return {{enabled: boolean, viewMode: boolean, list: Array}}
         */

    }, {
        key: '_getMonthViewModel',
        value: function _getMonthViewModel() {
            var isEnaled = this.model.options.monthPicker.enabled;
            // Make performance better
            if (!isEnaled) {
                return {
                    enabled: false
                };
            }

            var monthModel = [],
                that = this;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = that.model.PersianDate.date().rangeName().months.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        index = _step2$value[0],
                        month = _step2$value[1];

                    monthModel.push({
                        title: month,
                        enabled: this.checkMonthAccess(index),
                        year: this.model.state.view.year,
                        dataMonth: index + 1,
                        selected: this.model.state.selected.year == this.model.state.view.year && this.model.state.selected.month == index + 1
                    });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            return {
                enabled: isEnaled,
                viewMode: this.model.state.viewMode == 'month',
                list: monthModel
            };
        }

        /**
         * @desc check day is accessible
         * @param {Number} thisUnix - month number
         * @return {Boolean}
         */

    }, {
        key: 'checkDayAccess',
        value: function checkDayAccess(unixtimespan) {
            var self = this,
                output = true;
            self.minDate = this.model.options.minDate;
            self.maxDate = this.model.options.maxDate;

            if (self.model.state.filetredDate) {
                if (self.minDate && self.maxDate) {
                    self.minDate = self.model.PersianDate.date(self.minDate).startOf('day').valueOf();
                    self.maxDate = self.model.PersianDate.date(self.maxDate).endOf('day').valueOf();
                    if (!(unixtimespan >= self.minDate && unixtimespan <= self.maxDate)) {
                        return false;
                    }
                } else if (self.minDate) {
                    self.minDate = self.model.PersianDate.date(self.minDate).startOf('day').valueOf();
                    if (unixtimespan <= self.minDate) {
                        return false;
                    }
                } else if (self.maxDate) {
                    self.maxDate = self.model.PersianDate.date(self.maxDate).endOf('day').valueOf();
                    if (unixtimespan >= self.maxDate) {
                        return false;
                    }
                }
            }
            if (output) {
                return self.model.options.checkDate(unixtimespan);
            }
        }

        /**
         * @private
         * @return {object}
         */

    }, {
        key: '_getDayViewModel',
        value: function _getDayViewModel() {
            if (this.model.state.viewMode != 'day') {
                return [];
            }

            var isEnabled = this.model.options.dayPicker.enabled;
            // Make performance better
            if (!isEnabled) {
                return {
                    enabled: false
                };
            }

            //log('if you see this many time your code has performance issue');
            var viewMonth = this.model.state.view.month,
                viewYear = this.model.state.view.year;
            var pdateInstance = this.model.PersianDate.date(),
                daysCount = pdateInstance.daysInMonth(viewYear, viewMonth),
                firstWeekDayOfMonth = pdateInstance.getFirstWeekDayOfMonth(viewYear, viewMonth) - 1,
                outputList = [],
                daysListindex = 0,
                nextMonthListIndex = 0,
                daysMatrix = [['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null'], ['null', 'null', 'null', 'null', 'null', 'null', 'null']];

            var anotherCalendar = this._getAnotherCalendar();
            var pdate = this.model.PersianDate.date();
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = daysMatrix.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _step3$value = _slicedToArray(_step3.value, 2),
                        rowIndex = _step3$value[0],
                        daysRow = _step3$value[1];

                    outputList[rowIndex] = [];
                    var _iteratorNormalCompletion4 = true;
                    var _didIteratorError4 = false;
                    var _iteratorError4 = undefined;

                    try {
                        for (var _iterator4 = daysRow.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                            var _step4$value = _slicedToArray(_step4.value, 1),
                                dayIndex = _step4$value[0];

                            var calcedDate = void 0,
                                otherMonth = void 0;
                            if (rowIndex === 0 && dayIndex < firstWeekDayOfMonth) {
                                calcedDate = pdate.unix(this.model.state.view.dateObject.startOf('month').valueOf() / 1000).subtract('days', firstWeekDayOfMonth - dayIndex);
                                otherMonth = true;
                            } else if (rowIndex === 0 && dayIndex >= firstWeekDayOfMonth || rowIndex <= 5 && daysListindex < daysCount) {
                                daysListindex += 1;
                                calcedDate = pdate.year(this.model.state.view.year).month(this.model.state.view.month).date(daysListindex);
                                otherMonth = false;
                            } else {
                                nextMonthListIndex += 1;
                                calcedDate = pdate.unix(this.model.state.view.dateObject.endOf('month').valueOf() / 1000).add('days', nextMonthListIndex);
                                otherMonth = true;
                            }
                            outputList[rowIndex].push({
                                title: calcedDate.format('D'),
                                alterCalTitle: new persianDate(calcedDate.valueOf()).toCalendar(anotherCalendar[0]).toLocale(anotherCalendar[1]).format('D'),
                                dataDate: [calcedDate.year(), calcedDate.month(), calcedDate.date()].join(','),
                                dataUnix: calcedDate.valueOf(),
                                otherMonth: otherMonth,
                                // TODO: make configurable
                                enabled: this.checkDayAccess(calcedDate.valueOf())
                            });
                        }
                    } catch (err) {
                        _didIteratorError4 = true;
                        _iteratorError4 = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                _iterator4.return();
                            }
                        } finally {
                            if (_didIteratorError4) {
                                throw _iteratorError4;
                            }
                        }
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return {
                enabled: isEnabled,
                viewMode: this.model.state.viewMode == 'day',
                list: outputList
            };
        }
    }, {
        key: 'markSelectedDay',
        value: function markSelectedDay() {
            var selected = this.model.state.selected;
            this.$container.find('.table-days td').each(function () {
                if ($(this).data('date') == [selected.year, selected.month, selected.date].join(',')) {
                    $(this).addClass('selected');
                } else {
                    $(this).removeClass('selected');
                }
            });
        }
    }, {
        key: 'markToday',
        value: function markToday() {
            var today = new persianDate();
            this.$container.find('.table-days td').each(function () {
                if ($(this).data('date') == [today.year(), today.month(), today.date()].join(',')) {
                    $(this).addClass('today');
                } else {
                    $(this).removeClass('today');
                }
            });
        }

        /**
         * @private
         * @return {{enabled: boolean, hour: {title, enabled: boolean}, minute: {title, enabled: boolean}, second: {title, enabled: boolean}, meridian: {title: (meridian|{title, enabled}|ClassDatepicker.ClassConfig.timePicker.meridian|{enabled}|string|string), enabled: boolean}}}
         */

    }, {
        key: '_getTimeViewModel',
        value: function _getTimeViewModel() {

            var isEnabled = this.model.options.timePicker.enabled;
            // Make performance better
            if (!isEnabled) {
                return {
                    enabled: false
                };
            }

            var hourTitle = void 0;
            if (this.model.options.timePicker.meridian.enabled) {
                hourTitle = this.model.state.view.dateObject.format('hh');
            } else {
                hourTitle = this.model.state.view.dateObject.format('HH');
            }

            return {
                enabled: isEnabled,
                hour: {
                    title: hourTitle,
                    enabled: this.model.options.timePicker.hour.enabled
                },
                minute: {
                    title: this.model.state.view.dateObject.format('mm'),
                    enabled: this.model.options.timePicker.minute.enabled
                },
                second: {
                    title: this.model.state.view.dateObject.format('ss'),
                    enabled: this.model.options.timePicker.second.enabled
                },
                meridian: {
                    title: this.model.state.view.dateObject.format('a'),
                    enabled: this.model.options.timePicker.meridian.enabled
                }
            };
        }

        /**
         *
         * @return {{enabled: boolean, list: (*|Array)}}
         * @private
         */

    }, {
        key: '_getWeekViewModel',
        value: function _getWeekViewModel() {
            return {
                enabled: true,
                list: this.model.PersianDate.date().rangeName().weekdaysMin
            };
        }

        /**
         *
         * @return {string}
         */

    }, {
        key: 'getCssClass',
        value: function getCssClass() {
            return [this.model.state.ui.isInline ? 'datepicker-plot-area-inline-view' : '', !this.model.options.timePicker.meridian.enabled ? 'datepicker-state-no-meridian' : '', this.model.options.onlyTimePicker ? 'datepicker-state-only-time' : '', !this.model.options.timePicker.second.enabled ? 'datepicker-state-no-second' : '', this.model.options.calendar_ == 'gregorian' ? 'datepicker-gregorian' : 'datepicker-persian'].join(' ');
        }

        /**
         * @param data
         * @return {*}
         */

    }, {
        key: 'getViewModel',
        value: function getViewModel(data) {
            var anotherCalendar = this._getAnotherCalendar();
            return {
                plotId: '',
                navigator: {
                    enabled: this.model.options.navigator.enabled,
                    switch: {
                        enabled: true,
                        text: this._getNavSwitchText(data)
                    },
                    text: this.model.options.navigator.text
                },
                selected: this.model.state.selected,
                time: this._getTimeViewModel(data),
                days: this._getDayViewModel(data),
                weekdays: this._getWeekViewModel(data),
                month: this._getMonthViewModel(data),
                year: this._getYearViewModel(data),
                toolbox: this.model.options.toolbox,
                cssClass: this.getCssClass(),
                onlyTimePicker: this.model.options.onlyTimePicker,
                altCalendarShowHint: this.model.options.calendar[anotherCalendar[0]].showHint,
                calendarSwitchText: this.model.state.view.dateObject.toCalendar(anotherCalendar[0]).toLocale(anotherCalendar[1]).format(this.model.options.toolbox.calendarSwitch.format),
                todayButtonText: this._getButtonText().todayButtontext,
                submitButtonText: this._getButtonText().submitButtonText
            };
        }
    }, {
        key: '_getButtonText',
        value: function _getButtonText() {
            var output = {};
            if (this.model.options.locale_ == 'fa') {
                output.todayButtontext = this.model.options.toolbox.todayButton.text.fa;
                output.submitButtonText = this.model.options.toolbox.submitButton.text.fa;
            } else if (this.model.options.locale_ == 'en') {
                output.todayButtontext = this.model.options.toolbox.todayButton.text.en;
                output.submitButtonText = this.model.options.toolbox.submitButton.text.en;
            }
            return output;
        }
    }, {
        key: '_getAnotherCalendar',
        value: function _getAnotherCalendar() {
            var that = this,
                cal = void 0,
                loc = void 0;
            if (that.model.options.calendar_ == 'persian') {
                cal = 'gregorian';
                loc = that.model.options.calendar.gregorian.locale;
            } else {
                cal = 'persian';
                loc = that.model.options.calendar.persian.locale;
            }
            return [cal, loc];
        }

        /**
         * @desc render times area, prevent performance issue with scroll and time section
         */

    }, {
        key: 'renderTimePartial',
        value: function renderTimePartial() {
            var timeViewModel = this._getTimeViewModel(this.model.state.view);
            this.$container.find('[data-time-key="hour"] input').val(timeViewModel.hour.title);
            this.$container.find('[data-time-key="minute"] input').val(timeViewModel.minute.title);
            this.$container.find('[data-time-key="second"] input').val(timeViewModel.second.title);
            this.$container.find('[data-time-key="meridian"] input').val(timeViewModel.meridian.title);
        }

        /**
         * @render datepicker view element
         * @param data
         */

    }, {
        key: 'render',
        value: function render(data) {
            if (!data) {
                data = this.model.state.view;
            }
            Helper.debug(this, 'render');
            Mustache.parse(Template);
            this.rendered = $(Mustache.render(this.model.options.template, this.getViewModel(data)));
            this.$container.empty().append(this.rendered);
            this.markSelectedDay();
            this.markToday();
            this.afterRender();
        }
    }, {
        key: 'reRender',
        value: function reRender() {
            var data = this.model.state.view;
            this.render(data);
        }

        /**
         * @desc do after render work like attache events
         */

    }, {
        key: 'afterRender',
        value: function afterRender() {
            if (this.model.navigator) {
                this.model.navigator.liveAttach();
            }
        }
    }]);

    return View;
}();

module.exports = View;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/*
 * Hamster.js v1.1.2
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

(function(window, document){
'use strict';

/**
 * Hamster
 * use this to create instances
 * @returns {Hamster.Instance}
 * @constructor
 */
var Hamster = function(element) {
  return new Hamster.Instance(element);
};

// default event name
Hamster.SUPPORT = 'wheel';

// default DOM methods
Hamster.ADD_EVENT = 'addEventListener';
Hamster.REMOVE_EVENT = 'removeEventListener';
Hamster.PREFIX = '';

// until browser inconsistencies have been fixed...
Hamster.READY = false;

Hamster.Instance = function(element){
  if (!Hamster.READY) {
    // fix browser inconsistencies
    Hamster.normalise.browser();

    // Hamster is ready...!
    Hamster.READY = true;
  }

  this.element = element;

  // store attached event handlers
  this.handlers = [];

  // return instance
  return this;
};

/**
 * create new hamster instance
 * all methods should return the instance itself, so it is chainable.
 * @param   {HTMLElement}       element
 * @returns {Hamster.Instance}
 * @constructor
 */
Hamster.Instance.prototype = {
  /**
   * bind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  wheel: function onEvent(handler, useCapture){
    Hamster.event.add(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.add(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  },

  /**
   * unbind events to the instance
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   * @returns {Hamster.Instance}
   */
  unwheel: function offEvent(handler, useCapture){
    // if no handler argument,
    // unbind the last bound handler (if exists)
    if (handler === undefined && (handler = this.handlers.slice(-1)[0])) {
      handler = handler.original;
    }

    Hamster.event.remove(this, Hamster.SUPPORT, handler, useCapture);

    // handle MozMousePixelScroll in older Firefox
    if (Hamster.SUPPORT === 'DOMMouseScroll') {
      Hamster.event.remove(this, 'MozMousePixelScroll', handler, useCapture);
    }

    return this;
  }
};

Hamster.event = {
  /**
   * cross-browser 'addWheelListener'
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  add: function add(hamster, eventName, handler, useCapture){
    // store the original handler
    var originalHandler = handler;

    // redefine the handler
    handler = function(originalEvent){

      if (!originalEvent) {
        originalEvent = window.event;
      }

      // create a normalised event object,
      // and normalise "deltas" of the mouse wheel
      var event = Hamster.normalise.event(originalEvent),
          delta = Hamster.normalise.delta(originalEvent);

      // fire the original handler with normalised arguments
      return originalHandler(event, delta[0], delta[1], delta[2]);

    };

    // cross-browser addEventListener
    hamster.element[Hamster.ADD_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // store original and normalised handlers on the instance
    hamster.handlers.push({
      original: originalHandler,
      normalised: handler
    });
  },

  /**
   * removeWheelListener
   * @param   {Instance}    hamster
   * @param   {String}      eventName
   * @param   {Function}    handler
   * @param   {Boolean}     useCapture
   */
  remove: function remove(hamster, eventName, handler, useCapture){
    // find the normalised handler on the instance
    var originalHandler = handler,
        lookup = {},
        handlers;
    for (var i = 0, len = hamster.handlers.length; i < len; ++i) {
      lookup[hamster.handlers[i].original] = hamster.handlers[i];
    }
    handlers = lookup[originalHandler];
    handler = handlers.normalised;

    // cross-browser removeEventListener
    hamster.element[Hamster.REMOVE_EVENT](Hamster.PREFIX + eventName, handler, useCapture || false);

    // remove original and normalised handlers from the instance
    for (var h in hamster.handlers) {
      if (hamster.handlers[h] == handlers) {
        hamster.handlers.splice(h, 1);
        break;
      }
    }
  }
};

/**
 * these hold the lowest deltas,
 * used to normalise the delta values
 * @type {Number}
 */
var lowestDelta,
    lowestDeltaXY;

Hamster.normalise = {
  /**
   * fix browser inconsistencies
   */
  browser: function normaliseBrowser(){
    // detect deprecated wheel events
    if (!('onwheel' in document || document.documentMode >= 9)) {
      Hamster.SUPPORT = document.onmousewheel !== undefined ?
                        'mousewheel' : // webkit and IE < 9 support at least "mousewheel"
                        'DOMMouseScroll'; // assume remaining browsers are older Firefox
    }

    // detect deprecated event model
    if (!window.addEventListener) {
      // assume IE < 9
      Hamster.ADD_EVENT = 'attachEvent';
      Hamster.REMOVE_EVENT = 'detachEvent';
      Hamster.PREFIX = 'on';
    }

  },

  /**
   * create a normalised event object
   * @param   {Function}    originalEvent
   * @returns {Object}      event
   */
   event: function normaliseEvent(originalEvent){
    var event = {
          // keep a reference to the original event object
          originalEvent: originalEvent,
          target: originalEvent.target || originalEvent.srcElement,
          type: 'wheel',
          deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
          deltaX: 0,
          delatZ: 0,
          preventDefault: function(){
            if (originalEvent.preventDefault) {
              originalEvent.preventDefault();
            } else {
              originalEvent.returnValue = false;
            }
          },
          stopPropagation: function(){
            if (originalEvent.stopPropagation) {
              originalEvent.stopPropagation();
            } else {
              originalEvent.cancelBubble = false;
            }
          }
        };

    // calculate deltaY (and deltaX) according to the event

    // 'mousewheel'
    if (originalEvent.wheelDelta) {
      event.deltaY = - 1/40 * originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaX) {
      event.deltaX = - 1/40 * originalEvent.wheelDeltaX;
    }

    // 'DomMouseScroll'
    if (originalEvent.detail) {
      event.deltaY = originalEvent.detail;
    }

    return event;
  },

  /**
   * normalise 'deltas' of the mouse wheel
   * @param   {Function}    originalEvent
   * @returns {Array}       deltas
   */
  delta: function normaliseDelta(originalEvent){
    var delta = 0,
      deltaX = 0,
      deltaY = 0,
      absDelta = 0,
      absDeltaXY = 0,
      fn;

    // normalise deltas according to the event

    // 'wheel' event
    if (originalEvent.deltaY) {
      deltaY = originalEvent.deltaY * -1;
      delta  = deltaY;
    }
    if (originalEvent.deltaX) {
      deltaX = originalEvent.deltaX;
      delta  = deltaX * -1;
    }

    // 'mousewheel' event
    if (originalEvent.wheelDelta) {
      delta = originalEvent.wheelDelta;
    }
    // webkit
    if (originalEvent.wheelDeltaY) {
      deltaY = originalEvent.wheelDeltaY;
    }
    if (originalEvent.wheelDeltaX) {
      deltaX = originalEvent.wheelDeltaX * -1;
    }

    // 'DomMouseScroll' event
    if (originalEvent.detail) {
      delta = originalEvent.detail * -1;
    }

    // Don't return NaN
    if (delta === 0) {
      return [0, 0, 0];
    }

    // look for lowest delta to normalize the delta values
    absDelta = Math.abs(delta);
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = absDelta;
    }
    absDeltaXY = Math.max(Math.abs(deltaY), Math.abs(deltaX));
    if (!lowestDeltaXY || absDeltaXY < lowestDeltaXY) {
      lowestDeltaXY = absDeltaXY;
    }

    // convert deltas to whole numbers
    fn = delta > 0 ? 'floor' : 'ceil';
    delta  = Math[fn](delta / lowestDelta);
    deltaX = Math[fn](deltaX / lowestDeltaXY);
    deltaY = Math[fn](deltaY / lowestDeltaXY);

    return [delta, deltaX, deltaY];
  }
};

if (typeof window.define === 'function' && window.define.amd) {
  // AMD
  window.define('hamster', [], function(){
    return Hamster;
  });
} else if (true) {
  // CommonJS
  module.exports = Hamster;
} else {
  // Browser global
  window.Hamster = Hamster;
}

})(window, window.document);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false Mustache: true*/

(function defineMustache (global, factory) {
  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
    factory(exports); // CommonJS
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
  } else {
    global.Mustache = {};
    factory(global.Mustache); // script, wsh, asp
  }
}(this, function mustacheFactory (mustache) {

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n')
            stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      token = [ type, value, start, scanner.pos ];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          value = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           **/
          while (value != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = hasProperty(value, names[index]);

            value = value[names[index++]];
          }
        } else {
          value = context.view[name];
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit)
          break;

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.cache = {};
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    this.cache = {};
  };

  /**
   * Parses and caches the given `template` and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.cache;
    var tokens = cache[template];

    if (tokens == null)
      tokens = cache[template] = parseTemplate(template, tags);

    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   */
  Writer.prototype.render = function render (template, view, partials) {
    var tokens = this.parse(template);
    var context = (view instanceof Context) ? view : new Context(view);
    return this.renderTokens(tokens, context, partials, template);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null)
      return this.renderTokens(this.parse(value), context, partials, value);
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  mustache.name = 'mustache.js';
  mustache.version = '2.3.0';
  mustache.tags = [ '{{', '}}' ];

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function render (template, view, partials) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.,
  /*eslint-disable */ // eslint wants camel cased function name
  mustache.to_html = function to_html (template, view, partials, send) {
    /*eslint-enable*/

    var result = mustache.render(template, view, partials);

    if (isFunction(send)) {
      send(result);
    } else {
      return result;
    }
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;
}));


/***/ })
/******/ ]);
});