(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{56:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),i=(a(56),a(9)),l=a(5),u=a(13),s=a(51),m=a(6),d=a(34),p=a(24),f=a(4),b="UPDATE_PRODUCTS",E="ADD_TO_CART",g="ADD_MULTIPLE_TO_CART",h="REMOVE_FROM_CART",v="CLEAR_CART",y="UPDATE_CART_QUANTITY",O="TOGGLE_CART",j="UPDATE_CATEGORIES",w="UPDATE_CURRENT_CATEGORY",k={products:[],categories:[],currentCategory:"",cart:[],cartOpen:!1},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(f.a)(Object(f.a)({},e),{},{products:Object(p.a)(t.products)});case E:return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(p.a)(e.cart),[t.product])});case g:return Object(f.a)(Object(f.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),Object(p.a)(t.products))});case y:return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case h:var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(f.a)(Object(f.a)({},e),{},{cartOpen:a.length>0,cart:a});case v:return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!1,cart:[]});case O:return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!e.cartOpen});case j:return Object(f.a)(Object(f.a)({},e),{},{categories:Object(p.a)(t.categories)});case w:return Object(f.a)(Object(f.a)({},e),{},{currentCategory:t.currentCategory});default:return e}},N=Object(d.b)(_);function x(e,t,a){return new Promise((function(n,r){var c,o,i,l=window.indexedDB.open("shop-shop",1);l.onupgradeneeded=function(e){var t=l.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},l.onerror=function(e){console.log("There was an error")},l.onsuccess=function(r){switch(c=l.result,o=c.transaction(e,"readwrite"),i=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":i.put(a),n(a);break;case"get":var u=i.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":i.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var C=function(e){var t=Object(m.b)(),a=Object(m.c)((function(e){return e})),n=e.image,c=e.name,o=e._id,l=e.price,u=e.quantity,s=a.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(o)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("div",null,u," ",function(e,t){return 1===t?e:e+"s"}("item",u)," in stock"),r.a.createElement("span",null,"$",l)),r.a.createElement("button",{onClick:function(){var a=s.find((function(e){return e._id===o}));a?(t({type:y,_id:o,purchaseQuantity:parseInt(a.purchaseQuantity)+1}),x("cart","put",Object(f.a)(Object(f.a)({},a),{},{purchaseQuantity:parseInt(a.purchaseQuantity)+1}))):(t({type:E,product:Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:1})}),x("cart","put",Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},S=a(11),T=a(22),A=a(18),$=a.n(A);function I(){var e=Object(T.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]);return I=function(){return e},e}function D(){var e=Object(T.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"]);return D=function(){return e},e}function Q(){var e=Object(T.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]);return Q=function(){return e},e}function P(){var e=Object(T.a)(["\n  query getCheckout($products: [ID]!) {\n    checkout(products: $products) {\n      session\n    }\n  }\n"]);return P=function(){return e},e}function R(){var e=Object(T.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]);return R=function(){return e},e}var F=$()(R()),U=$()(P()),L=($()(Q()),$()(D())),q=$()(I()),W=a.p+"static/media/spinner.689d9a07.gif";var B=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=t.currentCategory,c=Object(S.c)(F),o=c.loading,i=c.data;return Object(n.useEffect)((function(){i?(e({type:b,products:i.products}),i.products.forEach((function(e){x("products","put",e)}))):o||x("products","get").then((function(t){e({type:b,products:t})}))}),[i,o,e]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),t.products.length?r.a.createElement("div",{className:"flex-row"},(a?t.products.filter((function(e){return e.category._id===a})):t.products).map((function(e){return r.a.createElement(C,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),o?r.a.createElement("img",{src:W,alt:"loading"}):null)};var G=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})).categories,a=Object(S.c)(L),c=a.loading,o=a.data;return Object(n.useEffect)((function(){o?(e({type:j,categories:o.categories}),o.categories.forEach((function(e){x("categories","put",e)}))):c||x("categories","get").then((function(t){e({type:j,categories:t})}))}),[o,c,e]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),t.map((function(t){return r.a.createElement("button",{key:t._id,onClick:function(){var a;a=t._id,e({type:w,currentCategory:a})}},t.name)})))},Y=a(19),M=a.n(Y),H=a(23),J=a(17),z=a(48),V=function(e){var t=e.item,a=Object(m.b)();return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var n=e.target.value;"0"===n?(a({type:h,_id:t._id}),x("cart","delete",Object(f.a)({},t))):(a({type:y,_id:t._id,purchaseQuantity:parseInt(n)}),x("cart","put",Object(f.a)(Object(f.a)({},t),{},{purchaseQuantity:parseInt(n)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){a({type:h,_id:e._id}),x("cart","delete",Object(f.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},K=a(49),X=a(50),Z=a(41),ee=a.n(Z),te=new(function(){function e(){Object(K.a)(this,e)}return Object(X.a)(e,[{key:"getProfile",value:function(){return ee()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return ee()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),ae=(a(66),Object(z.a)("pk_test_TYooMQauvdEDq54NiTphI7jx")),ne=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=Object(S.a)(U),c=Object(J.a)(a,2),o=c[0],i=c[1].data;function l(){e({type:O})}return Object(n.useEffect)((function(){i&&ae.then((function(e){e.redirectToCheckout({sessionId:i.checkout.session})}))}),[i]),Object(n.useEffect)((function(){function a(){return(a=Object(H.a)(M.a.mark((function t(){var a;return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x("cart","get");case 2:a=t.sent,e({type:g,products:Object(p.a)(a)});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.cart.length||function(){a.apply(this,arguments)}()}),[t.cart.length,e]),t.cartOpen?r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:l},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),t.cart.length?r.a.createElement("div",null,t.cart.map((function(e){return r.a.createElement(V,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return t.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),te.loggedIn()?r.a.createElement("button",{onClick:function(){var e=[];t.cart.forEach((function(t){for(var a=0;a<t.purchaseQuantity;a++)e.push(t._id)})),o({variables:{products:e}})}},"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!")):r.a.createElement("div",{className:"cart-closed",onClick:l},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"))},re=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(G,null),r.a.createElement(B,null),r.a.createElement(ne,null))};var ce=function(){var e=Object(m.b)(),t=Object(m.c)((function(e){return e})),a=Object(l.f)().id,c=Object(n.useState)({}),o=Object(J.a)(c,2),u=o[0],s=o[1],d=Object(S.c)(F),p=d.loading,g=d.data,v=t.products,O=t.cart;return Object(n.useEffect)((function(){v.length?s(v.find((function(e){return e._id===a}))):g?(e({type:b,products:g.products}),g.products.forEach((function(e){x("products","put",e)}))):p||x("products","get").then((function(t){e({type:b,products:t})}))}),[v,g,p,e,a]),r.a.createElement(r.a.Fragment,null,u&&O?r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,u.name),r.a.createElement("p",null,u.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",u.price," ",r.a.createElement("button",{onClick:function(){var t=O.find((function(e){return e._id===a}));t?(e({type:y,_id:a,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),x("cart","put",Object(f.a)(Object(f.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(e({type:E,product:Object(f.a)(Object(f.a)({},u),{},{purchaseQuantity:1})}),x("cart","put",Object(f.a)(Object(f.a)({},u),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!O.find((function(e){return e._id===u._id})),onClick:function(){e({type:h,_id:u._id}),x("cart","delete",Object(f.a)({},u))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(u.image),alt:u.name})):null,p?r.a.createElement("img",{src:W,alt:"loading"}):null,r.a.createElement(ne,null))};var oe=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},ie=function(){return r.a.createElement("div",null,r.a.createElement(oe,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},le=a(27);function ue(){var e=Object(T.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return ue=function(){return e},e}function se(){var e=Object(T.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]);return se=function(){return e},e}function me(){var e=Object(T.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return me=function(){return e},e}var de=$()(me()),pe=$()(se()),fe=$()(ue());var be=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(J.a)(t,2),c=a[0],o=a[1],l=Object(S.b)(de),u=Object(J.a)(l,2),s=u[0],m=u[1].error,d=function(){var e=Object(H.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,te.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(f.a)(Object(f.a)({},c),{},Object(le.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:d},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),m?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var Ee=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(J.a)(t,2),c=a[0],o=a[1],l=Object(S.b)(fe),u=Object(J.a)(l,1)[0],s=function(){var e=Object(H.a)(M.a.mark((function e(t){var a,n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,te.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.target,a=t.name,n=t.value;o(Object(f.a)(Object(f.a)({},c),{},Object(le.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:m})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:m})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:m})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:m})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ge=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(i.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,te.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return te.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(i.b,{to:"/login"},"Login")))))};var he=function(){var e=Object(S.b)(pe),t=Object(J.a)(e,1)[0];return Object(n.useEffect)((function(){function e(){return(e=Object(H.a)(M.a.mark((function e(){var a,n,r,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x("cart","get");case 2:if(a=e.sent,!(n=a.map((function(e){return e._id}))).length){e.next=11;break}return e.next=7,t({variables:{products:n}});case 7:r=e.sent,c=r.data,c.addOrder.products.forEach((function(e){x("cart","delete",e)}));case 11:setTimeout((function(){window.location.assign("/")}),3e3);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),r.a.createElement("div",null,r.a.createElement(oe,null,r.a.createElement("h1",null,"Success!"),r.a.createElement("h2",null,"Thank you for your purchase!"),r.a.createElement("h2",null,"You will now be redirected to the home page")))};var ve=function(){var e,t=Object(S.c)(q).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(i.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(i.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},ye=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var Oe=function(){return r.a.createElement(u.a,{client:ye},r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement(m.a,{store:N},r.a.createElement(ge,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:re}),r.a.createElement(l.a,{exact:!0,path:"/login",component:be}),r.a.createElement(l.a,{exact:!0,path:"/signup",component:Ee}),r.a.createElement(l.a,{exact:!0,path:"/success",component:he}),r.a.createElement(l.a,{exact:!0,path:"/orderHistory",component:ve}),r.a.createElement(l.a,{exact:!0,path:"/products/:id",component:ce}),r.a.createElement(l.a,{component:ie}))))))},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function we(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");je?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):we(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):we(t,e)}))}}()}},[[67,1,2]]]);
//# sourceMappingURL=main.38efed1d.chunk.js.map