(this.webpackJsonpbookapp=this.webpackJsonpbookapp||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);c(0);var o=c(13),a=c.n(o),n=(c(25),c(26),c(4)),r=(c(30),c(10)),l=c.p+"static/media/book_thumbnail.94cd23fa.png",s=c(1),d=function(e){var t=e.loadMore,c=Object(n.b)(),o=Object(n.c)((function(e){return e.allBooksReducer.books})),a=Object(n.c)((function(e){return e.allBooksReducer.totalItems})),d=Object(n.c)((function(e){return e.allBooksReducer.isFetching})),i=Object(n.c)((function(e){return e.allBooksReducer.loadmore_button_display})),j=Object(n.c)((function(e){return e.allBooksReducer.isFetching_loadmore})),u=0;return!0===d?Object(s.jsx)("div",{className:"loading",children:Object(s.jsx)("h2",{children:"...Loading"})}):0===o.length?Object(s.jsx)("div",{className:"loading",children:Object(s.jsx)("h2",{children:"No books"})}):Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{className:"d-flex justify-content-center p-3",children:a}),Object(s.jsx)("div",{className:"container mb-3",children:Object(s.jsx)("div",{className:" row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4",children:o.map((function(e){var t=void 0===e.volumeInfo.imageLinks?l:e.volumeInfo.imageLinks.thumbnail,o=void 0===e.volumeInfo.categories?"":e.volumeInfo.categories[0],a=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors;return Object(s.jsx)(r.b,{className:"col book_block",to:"/book",onClick:function(){return t=e.etag,void c({type:"BOOK_ETAG",payload:t});var t},children:Object(s.jsxs)("div",{className:"card h-100",children:[Object(s.jsx)("img",{src:t,className:"card-img-top shadow mb-3 bg-white rounded",alt:"Book thumbnail"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:Object(s.jsx)("u",{children:o})}),Object(s.jsx)("h6",{children:e.volumeInfo.title}),Object(s.jsx)("p",{children:Object(s.jsx)("small",{className:"text-muted",children:a})})]})]})},u++)}))})}),Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"row d-flex justify-content-center",children:Object(s.jsx)("div",{className:"loadmore_button mb-5 rounded",onClick:t,style:{display:i},children:Object(s.jsx)("h5",{children:j})})})})]})},i=(c(34),c(5)),j=function(e){var t=e.fetchBooks,c=Object(n.b)(),o=Object(i.e)(),a=Object(n.c)((function(e){return e.allBooksReducer.placeholder}));return Object(s.jsx)("div",{className:"header container-fluid",children:Object(s.jsx)("div",{className:"header_layer",children:Object(s.jsxs)("div",{className:"row header_content pb-3",children:[Object(s.jsx)("div",{className:"col-sm-4 d-flex justify-content-center",children:Object(s.jsx)(r.b,{to:"/",children:Object(s.jsx)("h1",{children:Object(s.jsx)("i",{className:"fas fa-book",children:" Gbooks"})})})}),Object(s.jsx)("div",{className:"col-sm-8 ",children:Object(s.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(s.jsx)("div",{className:"col d-flex justify-content-center",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o.push("/"),t()},children:[Object(s.jsx)("input",{className:"search_bar rounded",type:"text",placeholder:a,onChange:function(e){c({type:"INPUT",payload:e.target.value})}}),Object(s.jsx)(r.b,{to:"/",children:Object(s.jsx)("i",{className:"fas fa-search",onClick:t})})]})}),Object(s.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(s.jsxs)("div",{className:"col-md-6 d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(s.jsx)("label",{children:"Category"}),Object(s.jsxs)("select",{className:"rounded",onChange:function(e){c({type:"CHANGE_CATEGORY",payload:e.target.value})},children:[Object(s.jsx)("option",{value:"",children:"all"}),Object(s.jsx)("option",{value:"+subject:art",children:"art"}),Object(s.jsx)("option",{value:"+subject:biography",children:"biography"}),Object(s.jsx)("option",{value:"+subject:computers",children:"computers"}),Object(s.jsx)("option",{value:"+subject:history",children:"history"}),Object(s.jsx)("option",{value:"+subject:medical",children:"medical"}),Object(s.jsx)("option",{value:"+subject:poetry",children:"poetry"})]})]}),Object(s.jsxs)("div",{className:"col-md-6 d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(s.jsx)("label",{children:"Sorting"}),Object(s.jsxs)("select",{className:"rounded",onChange:function(e){c({type:"CHANGE_ORDER",payload:e.target.value})},children:[Object(s.jsx)("option",{value:"&orderBy=relevance",children:"relevance"}),Object(s.jsx)("option",{value:"&orderBy=newest",children:"newest"})]})]})]})]})})]})})})},u=(c(35),function(){var e=Object(i.e)(),t=Object(n.c)((function(e){return e.currentBookReducer.book_etag})),c=Object(n.c)((function(e){return e.allBooksReducer.books})),o=0,a=function(){e.goBack()},r=c.map((function(e){var c=void 0===e.volumeInfo.imageLinks?l:e.volumeInfo.imageLinks.thumbnail,n=void 0===e.volumeInfo.categories?"":e.volumeInfo.categories,r=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors,d=void 0===e.saleInfo.buyLink?"":Object(s.jsx)("a",{href:e.saleInfo.buyLink,rel:"noreferrer",target:"_blank",className:"buy_button shadow mb-3 rounded",children:"Buy on Google Play"});if(e.etag===t)return Object(s.jsx)("div",{className:"container pt-5",children:Object(s.jsxs)("div",{className:"row ",children:[Object(s.jsx)("div",{className:"wrapper col-sm-6 mb-5",children:Object(s.jsx)("img",{src:c,className:"img shadow bg-white rounded",alt:"Book thumbnail"})}),Object(s.jsxs)("div",{className:"col-sm-6",children:[Object(s.jsx)("h3",{children:e.volumeInfo.title}),Object(s.jsx)("h5",{className:"text-muted",children:r}),Object(s.jsx)("p",{children:Object(s.jsx)("u",{children:n})}),Object(s.jsx)("p",{className:"description mb-4",children:e.volumeInfo.description}),d,Object(s.jsx)("div",{className:"back_button shadow mb-5 rounded",onClick:a,children:"Back to list"})]})]})},o++)}));return Object(s.jsx)("div",{children:r})});var O=function(){var e=Object(n.b)(),t=Object(n.c)((function(e){return e.allBooksReducer.startIndex})),c=Object(n.c)((function(e){return e.allBooksReducer.input})),o=Object(n.c)((function(e){return e.allBooksReducer.orderBy})),a=Object(n.c)((function(e){return e.allBooksReducer.category})),l=Object(n.c)((function(e){return e.allBooksReducer.input_for_loadmore})),O=Object(n.c)((function(e){return e.allBooksReducer.orderBy_for_loadmore})),b=Object(n.c)((function(e){return e.allBooksReducer.category_for_loadmore})),p=function(){e({type:"IS_FETCHING_LOADMORE",payload:Object(s.jsx)("i",{className:"fas fa-redo-alt"})}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(l).concat(b,"&startIndex=").concat(t,"&maxResults=30&").concat(O,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then((function(e){return e.json()})).then((function(c){e({type:"LOADMORE_BOOKS",payload:c.items}),e({type:"IS_FETCHING_LOADMORE",payload:"Load more"}),e({type:"START_INDEX",payload:30}),t>=c.totalItems-30?e({type:"LOADMORE_BUTTON",payload:"none"}):e({type:"LOADMORE_BUTTON",payload:""})})).catch((function(e){console.log(e)}))};return Object(s.jsxs)(r.a,{children:[Object(s.jsx)(j,{fetchBooks:function(){""===c?(e({type:"INPUT_PLACEHOLDER",payload:"Empty request"}),e({type:"FETCH_BOOKS",payload:[]}),e({type:"TOTAL_ITEMS",payload:""}),e({type:"LOADMORE_BUTTON",payload:"none"})):(e({type:"IS_FETCHING",payload:!0}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(c).concat(a,"&startIndex=0&maxResults=30").concat(o,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then((function(e){return e.json()})).then((function(t){e({type:"IS_FETCHING",payload:!1}),e({type:"FETCH_BOOKS",payload:t.items}),e({type:"TOTAL_ITEMS",payload:Object(s.jsxs)("span",{children:["Found ",Object(s.jsx)("strong",{children:t.totalItems})," results"]})}),e({type:"INPUT_PLACEHOLDER",payload:"Book title"}),e({type:"CHANGE_INPUT_FOR_LOADMORE",payload:c}),e({type:"CHANGE_ORDER_FOR_LOADMORE",payload:o}),e({type:"CHANGE_CATEGORY_FOR_LOADMORE",payload:a}),e({type:"CLEAR_START_INDEX",payload:30}),t.totalItems>30?e({type:"LOADMORE_BUTTON",payload:""}):e({type:"LOADMORE_BUTTON",payload:"none"})})).catch((function(e){console.log(e)})))}}),Object(s.jsx)(i.a,{exact:!0,path:"/",render:function(){return Object(s.jsx)(d,{loadMore:p})}}),Object(s.jsx)(i.a,{path:"/book",render:function(){return Object(s.jsx)(u,{})}})]})},b=c(20),p=c(2),h={book_etag:""},m=c(15),y={books:[],totalItems:null,isFetching:!1,loadmore_button_display:"none",input:"",placeholder:"Book title",orderBy:"&orderBy=relevance",category:"",isFetching_loadmore:"Load more",input_for_loadmore:"",orderBy_for_loadmore:"",category_for_loadmore:"",startIndex:30},f=Object(b.a)({allBooksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return Object(p.a)(Object(p.a)({},e),{},{books:Object(m.a)(t.payload)});case"LOADMORE_BOOKS":return Object(p.a)(Object(p.a)({},e),{},{books:[].concat(Object(m.a)(e.books),Object(m.a)(t.payload))});case"TOTAL_ITEMS":return Object(p.a)(Object(p.a)({},e),{},{totalItems:t.payload});case"IS_FETCHING":return Object(p.a)(Object(p.a)({},e),{},{isFetching:t.payload});case"LOADMORE_BUTTON":return Object(p.a)(Object(p.a)({},e),{},{loadmore_button_display:t.payload});case"INPUT":return Object(p.a)(Object(p.a)({},e),{},{input:t.payload});case"INPUT_PLACEHOLDER":return Object(p.a)(Object(p.a)({},e),{},{placeholder:t.payload});case"CHANGE_ORDER":return Object(p.a)(Object(p.a)({},e),{},{orderBy:t.payload});case"CHANGE_CATEGORY":return Object(p.a)(Object(p.a)({},e),{},{category:t.payload});case"IS_FETCHING_LOADMORE":return Object(p.a)(Object(p.a)({},e),{},{isFetching_loadmore:t.payload});case"CHANGE_INPUT_FOR_LOADMORE":return Object(p.a)(Object(p.a)({},e),{},{input_for_loadmore:t.payload});case"CHANGE_ORDER_FOR_LOADMORE":return Object(p.a)(Object(p.a)({},e),{},{orderBy_for_loadmore:t.payload});case"CHANGE_CATEGORY_FOR_LOADMORE":return Object(p.a)(Object(p.a)({},e),{},{category_for_loadmore:t.payload});case"START_INDEX":return Object(p.a)(Object(p.a)({},e),{},{startIndex:e.startIndex+t.payload});case"CLEAR_START_INDEX":return Object(p.a)(Object(p.a)({},e),{},{startIndex:t.payload});default:return e}},currentBookReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_ETAG":return Object(p.a)(Object(p.a)({},e),{},{book_etag:t.payload});default:return e}}}),x=Object(b.b)(f);a.a.render(Object(s.jsx)(n.a,{store:x,children:Object(s.jsx)(O,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9675c74b.chunk.js.map