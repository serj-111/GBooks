(this.webpackJsonpbookapp=this.webpackJsonpbookapp||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},33:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){"use strict";c.r(t);var o=c(1),a=c.n(o),n=c(14),l=c.n(n),r=(c(28),c(29),c(3)),s=(c(33),c(10)),i=c.p+"static/media/book_thumbnail.94cd23fa.png",d=c(0),j=function(e){var t=e.loadMore,c=e.scrollRef,o=Object(r.b)(),a=Object(r.c)((function(e){return e.allBooksReducer.books})),n=Object(r.c)((function(e){return e.allBooksReducer.totalItems})),l=Object(r.c)((function(e){return e.allBooksReducer.isFetching})),j=Object(r.c)((function(e){return e.allBooksReducer.loadmore_button_display})),u=Object(r.c)((function(e){return e.allBooksReducer.isFetching_loadmore})),b=Object(r.c)((function(e){return e.allBooksReducer.display_scrollUp_button})),O=Object(r.c)((function(e){return e.allBooksReducer.error_indicator})),p=0;return window.addEventListener("scroll",(function(e){e.currentTarget.scrollY>800?o({type:"DISPLAY_SCROLLUP_BUTTON",payload:""}):o({type:"DISPLAY_SCROLLUP_BUTTON",payload:"none"})})),0===O?Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}):0===a.length?Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"\u041f\u0443\u0441\u0442\u043e"})}):l?Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("h2",{children:"...\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})}):Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"d-flex justify-content-center p-3",children:n}),Object(d.jsx)("div",{className:"container mb-3",children:Object(d.jsx)("div",{className:" row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4",children:a.map((function(e){var t=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:i,a=e.volumeInfo.categories?e.volumeInfo.categories[0]:"",n=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors;return Object(d.jsx)(s.b,{className:"col book_block",to:"/book",onClick:function(){return t=e,window.scrollTo(0,c.current.scrollHeight),void o({type:"BOOK_ETAG",payload:t.etag});var t},children:Object(d.jsxs)("div",{className:"card h-100",children:[Object(d.jsx)("img",{src:t,className:"book_image mb-3 rounded shadow",alt:"Book thumbnail"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:Object(d.jsx)("u",{children:a})}),Object(d.jsx)("h6",{children:e.volumeInfo.title}),Object(d.jsx)("p",{children:Object(d.jsx)("small",{className:"text-muted",children:n})})]})]})},p++)}))})}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(d.jsx)("div",{className:"loadmore_button mb-5 rounded",onClick:t,style:{display:j},children:Object(d.jsx)("strong",{children:u})}),Object(d.jsx)("div",{className:"up_button mb-5 rounded",onClick:function(){window.scrollTo(0,0)},style:{display:b},children:Object(d.jsx)("i",{className:"fas fa-chevron-up"})})]})})]})},u=c(22),b=(c(37),c(5)),O=function(e){var t=e.fetchBooks,c=e.scrollRef,a=Object(r.b)(),n=Object(b.e)(),l=Object(o.useState)(!1),i=Object(u.a)(l,2),j=i[0],O=i[1],p=Object(o.useState)(!1),h=Object(u.a)(p,2),m=h[0],f=h[1],y=Object(r.c)((function(e){return e.allBooksReducer.placeholder})),x=Object(r.c)((function(e){return e.allBooksReducer.input}));console.log(y);a(j?{type:"FREE_EBOOKS",payload:"&filter=free-ebooks"}:{type:"FREE_EBOOKS",payload:""}),a(m?{type:"SEARCH_BY_AUTHOR",payload:"inauthor:"}:{type:"SEARCH_BY_AUTHOR",payload:""});var _=""===x?{visibility:"hidden"}:{display:""};return Object(d.jsx)("div",{ref:c,className:"header container-fluid",children:Object(d.jsx)("div",{className:"header_layer py-5 shadow",children:Object(d.jsxs)("div",{className:"header_content row",children:[Object(d.jsx)("div",{className:"col-sm-4 d-flex justify-content-center",children:Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("div",{className:"fas fa-book",children:Object(d.jsxs)("div",{className:"title",children:["Gbooks",Object(d.jsx)("br",{}),Object(d.jsxs)("h6",{children:["\u041f\u043e\u0438\u0441\u043a \u043a\u043d\u0438\u0433 ",Object(d.jsx)("br",{}),"\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 Google"]})]})})})}),Object(d.jsx)("div",{className:"col-sm-8",children:Object(d.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(d.jsx)("div",{className:"col d-flex justify-content-center",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.push("/"),t()},children:[Object(d.jsx)("input",{className:"search_bar rounded",type:"text",placeholder:y,onChange:function(e){a({type:"INPUT",payload:e.target.value})}}),Object(d.jsx)("i",{className:"fas fa-times",onClick:function(e){e.target.previousSibling.value="",a({type:"INPUT",payload:""})},style:_}),Object(d.jsx)(s.b,{to:"/",children:Object(d.jsx)("i",{className:"fas fa-search",onClick:t})})]})}),Object(d.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(d.jsxs)("div",{className:"col-md-6 col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(d.jsx)("label",{children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(d.jsxs)("select",{className:"rounded",onChange:function(e){return a({type:"CHANGE_CATEGORY",payload:e.target.value})},children:[Object(d.jsx)("option",{value:"",children:"\u0412\u0441\u0435"}),Object(d.jsx)("option",{value:"+subject:art",children:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e"}),Object(d.jsx)("option",{value:"+subject:biography",children:"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),Object(d.jsx)("option",{value:"+subject:computers",children:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b"}),Object(d.jsx)("option",{value:"+subject:history",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(d.jsx)("option",{value:"+subject:medical",children:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430"}),Object(d.jsx)("option",{value:"+subject:poetry",children:"\u041f\u043e\u044d\u0437\u0438\u044f"})]})]}),Object(d.jsxs)("div",{className:" col-md-6 col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(d.jsx)("label",{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(d.jsxs)("select",{className:"rounded",onChange:function(e){return a({type:"CHANGE_ORDER",payload:e.target.value})},children:[Object(d.jsx)("option",{value:"&orderBy=relevance",children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"}),Object(d.jsx)("option",{value:"&orderBy=newest",children:"\u041d\u043e\u0432\u044b\u0435"})]})]})]}),Object(d.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(d.jsx)("div",{className:"col-md-auto col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3 mx-5",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox1",value:"option1",checked:m,onChange:function(){return f(!m)}}),Object(d.jsx)("label",{className:"form-check-label",htmlFor:"inlineCheckbox1",children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0430\u0432\u0442\u043e\u0440\u0443"})]})}),Object(d.jsx)("div",{className:"col-md-auto col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3",children:Object(d.jsxs)("div",{className:"form-check",children:[Object(d.jsx)("input",{className:"form-check-input",type:"checkbox",id:"inlineCheckbox2",value:"option1",checked:j,onChange:function(){return O(!j)}}),Object(d.jsx)("label",{className:"form-check-label ",htmlFor:"inlineCheckbox2",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435"})]})})]})]})})]})})})},p=(c(38),function(){var e=Object(b.e)(),t=Object(r.c)((function(e){return e.currentBookReducer.book_etag})),c=Object(r.c)((function(e){return e.allBooksReducer.books})),o=0,a=function(){e.goBack()},n=c.map((function(e){var c=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:i,n=e.volumeInfo.categories?e.volumeInfo.categories:"",l=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors,r=e.saleInfo.buyLink?Object(d.jsx)("a",{href:e.saleInfo.buyLink,rel:"noreferrer",target:"_blank",className:"buy_button shadow mb-3 rounded",children:"\u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0432 Google Play"}):"",s=e.volumeInfo.pageCount?Object(d.jsxs)("div",{className:"d-flex justify-content-center",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446:\xa0",Object(d.jsx)("strong",{children:e.volumeInfo.pageCount})]}):"",j=e.saleInfo.listPrice?Object(d.jsxs)("div",{className:"d-flex justify-content-center",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:\xa0",Object(d.jsx)("strong",{children:e.saleInfo.listPrice.amount}),"\xa0",e.saleInfo.listPrice.currencyCode]}):"",u=e.volumeInfo.publishedDate?Object(d.jsxs)("div",{className:"d-flex justify-content-center",children:["\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438:\xa0",e.volumeInfo.publishedDate]}):"",b=e.volumeInfo.publisher?Object(d.jsx)("div",{className:"d-flex justify-content-center mb-2",children:e.volumeInfo.publisher}):"",O=e.volumeInfo.previewLink?Object(d.jsx)("a",{href:e.volumeInfo.previewLink,rel:"noreferrer",target:"_blank",className:"buy_button shadow mb-3 rounded",children:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0442\u0440\u044b\u0432\u043e\u043a"}):"";return e.etag===t?Object(d.jsx)("div",{className:"container pt-5",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsxs)("div",{className:"col-sm-6",children:[Object(d.jsx)("div",{className:"row mb-3 d-flex justify-content-center",children:Object(d.jsx)("img",{src:c,className:"current_card_img rounded shadow",alt:"Book thumbnail"})}),Object(d.jsxs)("div",{className:"row mb-3 ",children:[u,b,s,j]})]}),Object(d.jsxs)("div",{className:"col-sm-6",children:[Object(d.jsx)("h3",{children:e.volumeInfo.title}),Object(d.jsx)("h5",{className:"text-muted",children:l}),Object(d.jsx)("p",{children:Object(d.jsx)("u",{children:n})}),Object(d.jsx)("p",{className:"description mb-4",children:e.volumeInfo.description}),r,O,Object(d.jsx)("div",{className:"back_button shadow mb-5 rounded",onClick:a,children:"\u041d\u0430\u0437\u0430\u0434"})]})]})},o++):null}));return Object(d.jsx)("div",{children:n})});var h=function(){var e=a.a.createRef(),t=Object(r.b)(),c=Object(r.c)((function(e){return e.allBooksReducer.startIndex})),o=Object(r.c)((function(e){return e.allBooksReducer.input})),n=Object(r.c)((function(e){return e.allBooksReducer.orderBy})),l=Object(r.c)((function(e){return e.allBooksReducer.category})),i=Object(r.c)((function(e){return e.allBooksReducer.input_for_loadmore})),u=Object(r.c)((function(e){return e.allBooksReducer.orderBy_for_loadmore})),h=Object(r.c)((function(e){return e.allBooksReducer.category_for_loadmore})),m=Object(r.c)((function(e){return e.allBooksReducer.free_ebooks})),f=Object(r.c)((function(e){return e.allBooksReducer.search_by_author}));t(f?{type:"INPUT_PLACEHOLDER",payload:"\u0410\u0432\u0442\u043e\u0440"}:{type:"INPUT_PLACEHOLDER",payload:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"});var y=function(){t({type:"IS_FETCHING_LOADMORE",payload:Object(d.jsx)("i",{className:"fas fa-redo-alt"})}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(i).concat(h,"&startIndex=").concat(c,"&maxResults=15&").concat(u).concat(m,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then((function(e){return e.json()})).then((function(e){t({type:"LOADMORE_BOOKS",payload:e.items}),t({type:"IS_FETCHING_LOADMORE",payload:"\u0415\u0449\u0435"}),t({type:"START_INDEX",payload:15}),c>=e.totalItems-15?t({type:"LOADMORE_BUTTON",payload:"none"}):t({type:"LOADMORE_BUTTON",payload:""})})).catch((function(e){t({type:"ERROR_INDICATOR",payload:!0}),console.log(e)}))};return Object(d.jsxs)(s.a,{children:[Object(d.jsx)(O,{fetchBooks:function(){o?(t({type:"IS_FETCHING",payload:!0}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(f).concat(o).concat(l,"&startIndex=0&maxResults=15").concat(n).concat(m,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then((function(e){return e.json()})).then((function(e){t({type:"ERROR_INDICATOR",payload:e.totalItems}),t({type:"FETCH_BOOKS",payload:e.items}),t({type:"IS_FETCHING",payload:!1}),t({type:"TOTAL_ITEMS",payload:Object(d.jsxs)("span",{children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",Object(d.jsx)("strong",{children:e.totalItems})]})}),t({type:"INPUT_PLACEHOLDER",payload:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),t({type:"CHANGE_INPUT_FOR_LOADMORE",payload:o}),t({type:"CHANGE_ORDER_FOR_LOADMORE",payload:n}),t({type:"CHANGE_CATEGORY_FOR_LOADMORE",payload:l}),t({type:"CLEAR_START_INDEX",payload:15}),e.totalItems>15?t({type:"LOADMORE_BUTTON",payload:""}):t({type:"LOADMORE_BUTTON",payload:"none"})})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 "+e)}))):(t({type:"INPUT_PLACEHOLDER",payload:"\u041f\u0443\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"}),t({type:"FETCH_BOOKS",payload:[]}),t({type:"TOTAL_ITEMS",payload:""}),t({type:"LOADMORE_BUTTON",payload:"none"}))},scrollRef:e}),Object(d.jsx)(b.a,{exact:!0,path:"/",render:function(){return Object(d.jsx)(j,{loadMore:y,scrollRef:e})}}),Object(d.jsx)(b.a,{path:"/book",render:function(){return Object(d.jsx)(p,{})}})]})},m=c(23),f=c(2),y={large_thumbnail:"",book_etag:""},x=c(17),_={books:[],totalItems:null,isFetching:!1,loadmore_button_display:"none",input:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",orderBy:"&orderBy=relevance",category:"",isFetching_loadmore:"\u0415\u0449\u0435",input_for_loadmore:"",orderBy_for_loadmore:"",category_for_loadmore:"",startIndex:15,display_scrollUp_button:"none",error_indicator:void 0,free_ebooks:"",search_by_author:""},v=Object(m.a)({allBooksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return Object(f.a)(Object(f.a)({},e),{},{books:Object(x.a)(t.payload)});case"LOADMORE_BOOKS":return Object(f.a)(Object(f.a)({},e),{},{books:[].concat(Object(x.a)(e.books),Object(x.a)(t.payload))});case"TOTAL_ITEMS":return Object(f.a)(Object(f.a)({},e),{},{totalItems:t.payload});case"IS_FETCHING":return Object(f.a)(Object(f.a)({},e),{},{isFetching:t.payload});case"LOADMORE_BUTTON":return Object(f.a)(Object(f.a)({},e),{},{loadmore_button_display:t.payload});case"INPUT":return Object(f.a)(Object(f.a)({},e),{},{input:t.payload});case"INPUT_PLACEHOLDER":return Object(f.a)(Object(f.a)({},e),{},{placeholder:t.payload});case"CHANGE_ORDER":return Object(f.a)(Object(f.a)({},e),{},{orderBy:t.payload});case"CHANGE_CATEGORY":return Object(f.a)(Object(f.a)({},e),{},{category:t.payload});case"IS_FETCHING_LOADMORE":return Object(f.a)(Object(f.a)({},e),{},{isFetching_loadmore:t.payload});case"CHANGE_INPUT_FOR_LOADMORE":return Object(f.a)(Object(f.a)({},e),{},{input_for_loadmore:t.payload});case"CHANGE_ORDER_FOR_LOADMORE":return Object(f.a)(Object(f.a)({},e),{},{orderBy_for_loadmore:t.payload});case"CHANGE_CATEGORY_FOR_LOADMORE":return Object(f.a)(Object(f.a)({},e),{},{category_for_loadmore:t.payload});case"START_INDEX":return Object(f.a)(Object(f.a)({},e),{},{startIndex:e.startIndex+t.payload});case"CLEAR_START_INDEX":return Object(f.a)(Object(f.a)({},e),{},{startIndex:t.payload});case"DISPLAY_SCROLLUP_BUTTON":return Object(f.a)(Object(f.a)({},e),{},{display_scrollUp_button:t.payload});case"ERROR_INDICATOR":return Object(f.a)(Object(f.a)({},e),{},{error_indicator:t.payload});case"FREE_EBOOKS":return Object(f.a)(Object(f.a)({},e),{},{free_ebooks:t.payload});case"SEARCH_BY_AUTHOR":return Object(f.a)(Object(f.a)({},e),{},{search_by_author:t.payload});default:return e}},currentBookReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK_ETAG":return Object(f.a)(Object(f.a)({},e),{},{book_etag:t.payload});case"LARGE_THUMBNAIL":return Object(f.a)(Object(f.a)({},e),{},{large_thumbnail:t.payload});default:return e}}}),N=Object(m.b)(v);l.a.render(Object(d.jsx)(r.a,{store:N,children:Object(d.jsx)(h,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.a82407f8.chunk.js.map