(this.webpackJsonpbookapp=this.webpackJsonpbookapp||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},30:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var o=c(0),a=c.n(o),n=c(13),r=c.n(n),l=(c(25),c(26),c(4)),s=(c(30),c(10)),i=c.p+"static/media/book_thumbnail.94cd23fa.png",d=c(1),j=function(e){var t=e.loadMore,c=e.scrollRef,o=Object(l.b)(),a=Object(l.c)((function(e){return e.allBooksReducer.books})),n=Object(l.c)((function(e){return e.allBooksReducer.totalItems})),r=Object(l.c)((function(e){return e.allBooksReducer.isFetching})),j=Object(l.c)((function(e){return e.allBooksReducer.loadmore_button_display})),u=Object(l.c)((function(e){return e.allBooksReducer.isFetching_loadmore})),O=0;return!0===r?Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"...Loading"})}):0===a.length?Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"No books"})}):Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"d-flex justify-content-center p-3",children:n}),Object(d.jsx)("div",{className:"container mb-3",children:Object(d.jsx)("div",{className:" row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4",children:a.map((function(e){var t=void 0===e.volumeInfo.imageLinks?i:e.volumeInfo.imageLinks.thumbnail,a=void 0===e.volumeInfo.categories?"":e.volumeInfo.categories[0],n=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors;return Object(d.jsx)(s.b,{className:"col book_block",to:"/book",onClick:function(){return t=e.etag,window.scrollTo(0,c.current.scrollHeight),void o({type:"BOOK_ETAG",payload:t});var t},children:Object(d.jsxs)("div",{className:"card h-100",children:[Object(d.jsx)("img",{src:t,className:"mb-3 rounded shadow",alt:"Book thumbnail"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("u",{children:a})}),Object(d.jsx)("h6",{children:e.volumeInfo.title}),Object(d.jsx)("p",{children:Object(d.jsx)("small",{className:"text-muted",children:n})})]})]})},O++)}))})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"row d-flex justify-content-center",children:Object(d.jsx)("div",{className:"loadmore_button mb-5 rounded",onClick:t,style:{display:j},children:Object(d.jsx)("h5",{children:u})})})})]})},u=(c(34),c(5)),O=function(e){var t=e.fetchBooks,c=e.scrollRef,o=Object(l.b)(),a=Object(u.e)(),n=Object(l.c)((function(e){return e.allBooksReducer.placeholder})),r=""===Object(l.c)((function(e){return e.allBooksReducer.input}))?{visibility:"hidden"}:{display:""};return Object(d.jsx)("div",{ref:c,className:"header container-fluid",children:Object(d.jsx)("div",{className:"header_layer py-5",children:Object(d.jsxs)("div",{className:"header_content row pb-3",children:[Object(d.jsx)("div",{className:"col-sm-4 d-flex justify-content-center",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("h1",{children:Object(d.jsx)("i",{className:"fas fa-book",children:Object(d.jsx)("div",{className:"title",children:"Gbooks"})})})})}),Object(d.jsx)("div",{className:"col-sm-8 ",children:Object(d.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(d.jsx)("div",{className:"col d-flex justify-content-center",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("/"),t()},children:[Object(d.jsx)("input",{className:"search_bar rounded",type:"text",placeholder:n,onChange:function(e){o({type:"INPUT",payload:e.target.value})}}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(e){e.target.previousSibling.value="",o({type:"INPUT",payload:""})},style:r}),Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("i",{className:"fas fa-search",onClick:t})})]})}),Object(d.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(d.jsxs)("div",{className:"col-md-6 d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(d.jsx)("label",{children:"Category"}),Object(d.jsxs)("select",{className:"rounded",onChange:function(e){o({type:"CHANGE_CATEGORY",payload:e.target.value})},children:[Object(d.jsx)("option",{value:"",children:"all"}),Object(d.jsx)("option",{value:"+subject:art",children:"art"}),Object(d.jsx)("option",{value:"+subject:biography",children:"biography"}),Object(d.jsx)("option",{value:"+subject:computers",children:"computers"}),Object(d.jsx)("option",{value:"+subject:history",children:"history"}),Object(d.jsx)("option",{value:"+subject:medical",children:"medical"}),Object(d.jsx)("option",{value:"+subject:poetry",children:"poetry"})]})]}),Object(d.jsxs)("div",{className:"col-md-6 d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(d.jsx)("label",{children:"Sorting"}),Object(d.jsxs)("select",{className:"rounded",onChange:function(e){o({type:"CHANGE_ORDER",payload:e.target.value})},children:[Object(d.jsx)("option",{value:"&orderBy=relevance",children:"relevance"}),Object(d.jsx)("option",{value:"&orderBy=newest",children:"newest"})]})]})]})]})})]})})})},b=(c(35),function(){var e=Object(u.e)(),t=Object(l.c)((function(e){return e.currentBookReducer.book_etag})),c=Object(l.c)((function(e){return e.allBooksReducer.books})),o=0,a=function(){e.goBack()},n=c.map((function(e){var c=void 0===e.volumeInfo.imageLinks?i:e.volumeInfo.imageLinks.thumbnail,n=void 0===e.volumeInfo.categories?"":e.volumeInfo.categories,r=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors,l=void 0===e.saleInfo.buyLink?"":Object(d.jsx)("a",{href:e.saleInfo.buyLink,rel:"noreferrer",target:"_blank",className:"buy_button shadow mb-3 rounded",children:"Buy on Google Play"});if(e.etag===t)return Object(d.jsx)("div",{className:"container pt-5",children:Object(d.jsxs)("div",{className:"row ",children:[Object(d.jsx)("div",{className:"card_wrapper col-sm-6 mb-5 d-flex justify-content-center h-100",children:Object(d.jsx)("img",{src:c,className:"current_card_img rounded shadow",alt:"Book thumbnail"})}),Object(d.jsxs)("div",{className:"col-sm-6",children:[Object(d.jsx)("h3",{children:e.volumeInfo.title}),Object(d.jsx)("h5",{className:"text-muted",children:r}),Object(d.jsx)("p",{children:Object(d.jsx)("u",{children:n})}),Object(d.jsx)("p",{className:"description mb-4",children:e.volumeInfo.description}),l,Object(d.jsx)("div",{className:"back_button shadow mb-5 rounded",onClick:a,children:"Back to list"})]})]})},o++)}));return Object(d.jsx)("div",{children:n})});var p=function(){var e=a.a.createRef(),t=Object(l.b)(),c=Object(l.c)((function(e){return e.allBooksReducer.startIndex})),o=Object(l.c)((function(e){return e.allBooksReducer.input})),n=Object(l.c)((function(e){return e.allBooksReducer.orderBy})),r=Object(l.c)((function(e){return e.allBooksReducer.category})),i=Object(l.c)((function(e){return e.allBooksReducer.input_for_loadmore})),p=Object(l.c)((function(e){return e.allBooksReducer.orderBy_for_loadmore})),h=Object(l.c)((function(e){return e.allBooksReducer.category_for_loadmore})),m=function(){t({type:"IS_FETCHING_LOADMORE",payload:Object(d.jsx)("i",{className:"fas fa-redo-alt"})}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(i).concat(h,"&startIndex=").concat(c,"&maxResults=30&").concat(p,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then((function(e){return e.json()})).then((function(e){t({type:"LOADMORE_BOOKS",payload:e.items}),t({type:"IS_FETCHING_LOADMORE",payload:"Load more"}),t({type:"START_INDEX",payload:30}),c>=e.totalItems-30?t({type:"LOADMORE_BUTTON",payload:"none"}):t({type:"LOADMORE_BUTTON",payload:""})})).catch((function(e){console.log(e)}))};return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(O,{fetchBooks:function(){""===o?(t({type:"INPUT_PLACEHOLDER",payload:"Empty request"}),t({type:"FETCH_BOOKS",payload:[]}),t({type:"TOTAL_ITEMS",payload:""}),t({type:"LOADMORE_BUTTON",payload:"none"})):(t({type:"IS_FETCHING",payload:!0}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(o).concat(r,"&startIndex=0&maxResults=30").concat(n,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then((function(e){return e.json()})).then((function(e){t({type:"IS_FETCHING",payload:!1}),t({type:"FETCH_BOOKS",payload:e.items}),t({type:"TOTAL_ITEMS",payload:Object(d.jsxs)("span",{children:["Found ",Object(d.jsx)("strong",{children:e.totalItems})," results"]})}),t({type:"INPUT_PLACEHOLDER",payload:"Book title"}),t({type:"CHANGE_INPUT_FOR_LOADMORE",payload:o}),t({type:"CHANGE_ORDER_FOR_LOADMORE",payload:n}),t({type:"CHANGE_CATEGORY_FOR_LOADMORE",payload:r}),t({type:"CLEAR_START_INDEX",payload:30}),e.totalItems>30?t({type:"LOADMORE_BUTTON",payload:""}):t({type:"LOADMORE_BUTTON",payload:"none"})})).catch((function(e){console.log(e)})))},scrollRef:e}),Object(d.jsx)(u.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(j,{loadMore:m,scrollRef:e})}}),Object(d.jsx)(u.a,{path:"/book",render:function(){return Object(d.jsx)(b,{})}})]})},h=c(20),m=c(2),y={book_etag:""},f=c(15),x={books:[],totalItems:null,isFetching:!1,loadmore_button_display:"none",input:"",placeholder:"Book title",orderBy:"&orderBy=relevance",category:"",isFetching_loadmore:"Load more",input_for_loadmore:"",orderBy_for_loadmore:"",category_for_loadmore:"",startIndex:30},_=Object(h.a)({allBooksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return Object(m.a)(Object(m.a)({},e),{},{books:Object(f.a)(t.payload)});case"LOADMORE_BOOKS":return Object(m.a)(Object(m.a)({},e),{},{books:[].concat(Object(f.a)(e.books),Object(f.a)(t.payload))});case"TOTAL_ITEMS":return Object(m.a)(Object(m.a)({},e),{},{totalItems:t.payload});case"IS_FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.payload});case"LOADMORE_BUTTON":return Object(m.a)(Object(m.a)({},e),{},{loadmore_button_display:t.payload});case"INPUT":return Object(m.a)(Object(m.a)({},e),{},{input:t.payload});case"INPUT_PLACEHOLDER":return Object(m.a)(Object(m.a)({},e),{},{placeholder:t.payload});case"CHANGE_ORDER":return Object(m.a)(Object(m.a)({},e),{},{orderBy:t.payload});case"CHANGE_CATEGORY":return Object(m.a)(Object(m.a)({},e),{},{category:t.payload});case"IS_FETCHING_LOADMORE":return Object(m.a)(Object(m.a)({},e),{},{isFetching_loadmore:t.payload});case"CHANGE_INPUT_FOR_LOADMORE":return Object(m.a)(Object(m.a)({},e),{},{input_for_loadmore:t.payload});case"CHANGE_ORDER_FOR_LOADMORE":return Object(m.a)(Object(m.a)({},e),{},{orderBy_for_loadmore:t.payload});case"CHANGE_CATEGORY_FOR_LOADMORE":return Object(m.a)(Object(m.a)({},e),{},{category_for_loadmore:t.payload});case"START_INDEX":return Object(m.a)(Object(m.a)({},e),{},{startIndex:e.startIndex+t.payload});case"CLEAR_START_INDEX":return Object(m.a)(Object(m.a)({},e),{},{startIndex:t.payload});default:return e}},currentBookReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_ETAG":return Object(m.a)(Object(m.a)({},e),{},{book_etag:t.payload});default:return e}}}),v=Object(h.b)(_);r.a.render(Object(d.jsx)(l.a,{store:v,children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.434d6c9f.chunk.js.map