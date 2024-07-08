!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p=(window.__sw__.assetPath + '/bundles/sloxchangecustomernumber/'),r(r.s="82in")}({"82in":function(e,t,r){"use strict";r.r(t);r("FTny");Shopware.Component.override("sw-customer-base-info",{template:'{% block sw_customer_base_metadata_customer_number %}\r\n\t<sw-description-list>\r\n\t\t<dt class="sw-customer-base-info__label">\r\n\t\t\t{{ $tc(\'sw-customer.baseInfo.labelCustomerNumber\') }}\r\n\t\t</dt>\r\n\t\t<dd v-if="!customerEditMode" class="sw-customer-base__label-customer-number">\r\n\t\t\t{{ customer.customerNumber }}\r\n\t\t</dd>\r\n\t\t<dd v-else class="sw-customer-base__label-customer-number">\r\n\t\t\t<sw-text-field v-model="customer.customerNumber" :placeholder="customer.customerNumber"/>\r\n\t\t\t<input type="hidden" name="oldCustomerNumber" :value="oldCustomerNumber">\r\n\t\t</dd>\r\n\t</sw-description-list>\r\n{% endblock %}\r\n\r\n\r\n',data:function(){return{oldCustomerNumber:null}},mounted:function(){this.oldCustomerNumber=this.customer.customerNumber}});var n=r("gZDZ"),o=r("Oi8p");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(o=n.key,i=void 0,i=function(e,t){if("object"!==u(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==u(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===u(i)?i:String(i)),n)}var o,i}function a(e,t){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var o=f(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}function l(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Shopware.Component.override("sw-customer-detail",{snippets:{"de-DE":n,"en-GB":o},inject:["SloxService"],computed:{oldCustomerNumber:function(){return this.$parent.$parent.$el.querySelector('input[name="oldCustomerNumber"]')}},methods:{onSave:function(){var e=this;this.oldCustomerNumber.value!=this.customer.customerNumber&&null!==this.oldCustomerNumber.value&&""!==this.oldCustomerNumber.value.trim()?this.SloxService.searchCustomer(this.customer.customerNumber).then((function(t){t.success?e.createNotificationError({message:e.$tc("sw-customer.baseInfo.customerNumberNotAvailable")}):e.$super("onSave")})).catch((function(e){})):this.$super("onSave")}}});var d=Shopware.Classes.ApiService,p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(u,e);var t,r,n,o=c(u);function u(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"slox_service";return i(this,u),o.call(this,e,t,r)}return t=u,(r=[{key:"searchCustomer",value:function(e){var t="".concat(this.getApiBasePath(),"/searchCustomer");return this.httpClient.post(t,{customerNumber:e,headers:this.getBasicHeaders()}).then((function(e){return d.handleResponse(e)}))}}])&&s(t.prototype,r),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(d),m=Shopware.Application;m.addServiceProvider("SloxService",(function(e){var t=m.getContainer("init");return new p(t.httpClient,e.loginService)}))},FTny:function(e,t,r){var n=r("OpCN");n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r("P8hj").default)("62955c44",n,!0,{})},Oi8p:function(e){e.exports=JSON.parse('{"sw-customer":{"baseInfo":{"customerNumberNotAvailable":"Customer number already exists, please choose another."}}}')},OpCN:function(e,t,r){},P8hj:function(e,t,r){"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var u=t[o],i=u[0],s={id:e+":"+o,css:u[1],media:u[2],sourceMap:u[3]};n[i]?n[i].parts.push(s):r.push(n[i]={id:i,parts:[s]})}return r}r.r(t),r.d(t,"default",(function(){return m}));var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u={},i=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,a=0,c=!1,l=function(){},f=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(e,t,r,o){c=r,f=o||{};var i=n(e,t);return b(i),function(t){for(var r=[],o=0;o<i.length;o++){var s=i[o];(a=u[s.id]).refs--,r.push(a)}t?b(i=n(e,t)):i=[];for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}}function b(e){for(var t=0;t<e.length;t++){var r=e[t],n=u[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(v(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var i=[];for(o=0;o<r.parts.length;o++)i.push(v(r.parts[o]));u[r.id]={id:r.id,refs:1,parts:i}}}}function h(){var e=document.createElement("style");return e.type="text/css",i.appendChild(e),e}function v(e){var t,r,n=document.querySelector("style["+d+'~="'+e.id+'"]');if(n){if(c)return l;n.parentNode.removeChild(n)}if(p){var o=a++;n=s||(s=h()),t=S.bind(null,n,o,!1),r=S.bind(null,n,o,!0)}else n=h(),t=w.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var y,g=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function S(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function w(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),f.ssrId&&e.setAttribute(d,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},gZDZ:function(e){e.exports=JSON.parse('{"sw-customer":{"baseInfo":{"customerNumberNotAvailable":"Die Kundennummer ist bereits im System vorhanden; bitte wählen Sie eine andere."}}}')}});