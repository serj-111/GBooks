(this.webpackJsonpbookapp=this.webpackJsonpbookapp||[]).push([[0],{31:function(e,t,c){},33:function(e,t,c){},37:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){"use strict";c.r(t);var o=c(1),a=c.n(o),l=c(16),n=c.n(l),s=(c(31),c(20)),r=c.n(s),i=c(25),d=c(26),j=(c(33),c(3)),b=(c(37),c(10)),u=c.p+"static/media/book_thumbnail.94cd23fa.png",h=c(0),O=function(e){var t=e.loadMore,c=Object(j.b)(),o=Object(j.c)((function(e){return e.allBooksReducer.books})),a=Object(j.c)((function(e){return e.allBooksReducer.totalItems})),l=Object(j.c)((function(e){return e.allBooksReducer.isFetching})),n=Object(j.c)((function(e){return e.allBooksReducer.loadmore_button_display})),s=Object(j.c)((function(e){return e.allBooksReducer.isFetching_loadmore})),r=Object(j.c)((function(e){return e.allBooksReducer.display_scrollUp_button})),i=Object(j.c)((function(e){return e.allBooksReducer.error_indicator}));return window.addEventListener("scroll",(function(e){e.currentTarget.scrollY>800?c({type:"DISPLAY_SCROLLUP_BUTTON",payload:""}):c({type:"DISPLAY_SCROLLUP_BUTTON",payload:"none"})})),0===i?Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)("h2",{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}):l?Object(h.jsx)("div",{className:"loading",children:Object(h.jsxs)("svg",{className:"book-shelf",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 84 94",height:"200",width:"200",children:[Object(h.jsx)("path",{fill:"none",d:"M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"}),Object(h.jsxs)("g",{className:"book-shelf__book book-shelf__book--one",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#5199fc",d:"M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"}),Object(h.jsx)("path",{fill:"#afd7fb",d:"M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"})]}),Object(h.jsxs)("g",{className:"book-shelf__book book-shelf__book--two",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#ff9868",d:"M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"}),Object(h.jsx)("path",{fill:"#d06061",d:"M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"})]}),Object(h.jsxs)("g",{className:"book-shelf__book book-shelf__book--three",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#ff5068",d:"M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"}),Object(h.jsx)("path",{fill:"#d93368",d:"M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"})]}),Object(h.jsxs)("g",{fillRule:"evenodd",children:[Object(h.jsx)("path",{className:"book-shelf__shelf",fill:"#ae8280",d:"M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"}),Object(h.jsx)("path",{fill:"#855f6d",d:"M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"})]})]})}):Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"container mb-3",children:[Object(h.jsx)("div",{className:"my-4 mx-4 total_items",children:a}),Object(h.jsx)("div",{className:"row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4",children:o.map((function(e){var t,o,a=e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:u,l=e.volumeInfo.categories?null===(t=e.volumeInfo.categories)||void 0===t?void 0:t[0]:"No category",n=e.volumeInfo.authors?e.volumeInfo.authors.join(", "):e.volumeInfo.authors;return(null===(o=e.volumeInfo.authors)||void 0===o?void 0:o.length)>3&&(n=e.volumeInfo.authors.slice(0,3).join(", ")+"..."),Object(h.jsx)(b.b,{className:"col book_block",to:"/book",onClick:function(){c({type:"BOOK",payload:e})},children:Object(h.jsxs)("div",{className:"card h-100",children:[Object(h.jsx)("img",{src:a,className:"book_image mb-3 rounded shadow",alt:"Book thumbnail"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:Object(h.jsx)("u",{children:l})}),Object(h.jsx)("h6",{children:Object(h.jsx)("strong",{children:e.volumeInfo.title})}),Object(h.jsx)("p",{children:Object(h.jsx)("small",{className:"text-muted",children:n})})]})]})},e.etag)}))}),Object(h.jsxs)("div",{className:"row mt-3 d-flex justify-content-center",children:[Object(h.jsx)("div",{className:"loadmore_button mb-5 rounded",onClick:t,style:{display:n},children:Object(h.jsx)("strong",{children:s})}),Object(h.jsx)("div",{className:"up_button mb-5 rounded",onClick:function(){window.scrollTo(0,0)},style:{display:r},children:Object(h.jsx)("i",{className:"fas fa-chevron-up"})})]})]})})},f=c(15),m=(c(41),c(5)),p=function(e){var t=e.fetchBooks,c=e.scrollRef,a=e.fetchFavorites,l=Object(j.b)(),n=Object(m.e)(),s=Object(o.useState)(!1),r=Object(f.a)(s,2),i=r[0],d=r[1],u=Object(o.useState)(!1),O=Object(f.a)(u,2),p=O[0],v=O[1],x=Object(j.c)((function(e){return e.allBooksReducer.placeholder})),y=Object(j.c)((function(e){return e.allBooksReducer.input}));l(i?{type:"FREE_EBOOKS",payload:"&filter=free-ebooks"}:{type:"FREE_EBOOKS",payload:""}),l(p?{type:"SEARCH_BY_AUTHOR",payload:"inauthor:"}:{type:"SEARCH_BY_AUTHOR",payload:""});var _=""===y?{visibility:"hidden"}:{display:""};return Object(h.jsx)("div",{ref:c,className:"header container-fluid rounded",children:Object(h.jsx)("div",{className:"header_layer py-4 shadow rounded",children:Object(h.jsxs)("div",{className:"header_content row my-2",children:[Object(h.jsx)("div",{className:"col-sm-4 d-flex justify-content-center ",children:Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("div",{className:"fas fa-book",children:Object(h.jsxs)("div",{className:"title",children:["Gbooks",Object(h.jsx)("br",{}),Object(h.jsxs)("h6",{children:["\u041f\u043e\u0438\u0441\u043a \u043a\u043d\u0438\u0433 ",Object(h.jsx)("br",{}),"\u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0435 Google"]})]})})})}),Object(h.jsx)("div",{className:"col-sm-8",children:Object(h.jsxs)("div",{className:"row d-flex justify-content-center",children:[Object(h.jsx)("div",{className:"col d-flex justify-content-center",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.push("/"),t()},children:[Object(h.jsx)("input",{className:"search_bar rounded",type:"text",placeholder:x,onChange:function(e){l({type:"INPUT",payload:e.target.value})}}),Object(h.jsx)("i",{className:"fas fa-times",onClick:function(e){e.target.previousSibling.value="",l({type:"INPUT",payload:""})},style:_}),Object(h.jsx)(b.b,{to:"/",children:Object(h.jsx)("i",{className:"fas fa-search",onClick:t})})]})}),Object(h.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(h.jsxs)("div",{className:"col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(h.jsx)("label",{className:"label_config",children:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(h.jsxs)("select",{className:"rounded",onChange:function(e){return l({type:"CHANGE_CATEGORY",payload:e.target.value})},children:[Object(h.jsx)("option",{value:"",children:"\u0412\u0441\u0435"}),Object(h.jsx)("option",{value:"+subject:art",children:"\u0418\u0441\u043a\u0443\u0441\u0441\u0442\u0432\u043e"}),Object(h.jsx)("option",{value:"+subject:biography",children:"\u0411\u0438\u043e\u0433\u0440\u0430\u0444\u0438\u044f"}),Object(h.jsx)("option",{value:"+subject:computers",children:"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b"}),Object(h.jsx)("option",{value:"+subject:history",children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"}),Object(h.jsx)("option",{value:"+subject:medical",children:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430"}),Object(h.jsx)("option",{value:"+subject:poetry",children:"\u041f\u043e\u044d\u0437\u0438\u044f"})]}),Object(h.jsx)("i",{className:"fas fa-caret-down"})]}),Object(h.jsxs)("div",{className:"col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3",children:[Object(h.jsx)("label",{className:"label_config",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),Object(h.jsxs)("select",{className:"rounded",onChange:function(e){return l({type:"CHANGE_ORDER",payload:e.target.value})},id:"sort",children:[Object(h.jsx)("option",{value:"&orderBy=relevance",children:"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e"}),Object(h.jsx)("option",{value:"&orderBy=newest",children:"\u041d\u043e\u0432\u044b\u0435"})]}),Object(h.jsx)("i",{className:"fas fa-caret-down"})]})]}),Object(h.jsxs)("div",{className:"row d-flex justify-content-center pt-3",children:[Object(h.jsx)("div",{className:"col-md-auto d-flex justify-content-center d-flex align-items-center pt-3",children:Object(h.jsxs)("div",{className:"btn-group",role:"group","aria-label":"Basic checkbox toggle button group",children:[Object(h.jsx)("input",{type:"checkbox",className:"btn-check",id:"btn-check-one-outlined",checked:p,onChange:function(){return v(!p)}}),Object(h.jsx)("label",{className:"btn btn-outline-secondary",htmlFor:"btn-check-one-outlined",children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0430\u0432\u0442\u043e\u0440\u0443"}),Object(h.jsx)("input",{type:"checkbox",className:"btn-check",id:"btn-check-two-outlined",checked:i,onChange:function(){return d(!i)}}),Object(h.jsx)("label",{className:"btn btn-outline-secondary",htmlFor:"btn-check-two-outlined",children:"\u0422\u043e\u043b\u044c\u043a\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0435"})]})}),Object(h.jsx)("div",{className:"col-md-auto d-flex justify-content-center d-flex align-items-center pt-3",children:Object(h.jsx)(b.b,{className:"btn btn-outline-secondary",to:"/favorites",onClick:function(){a()},children:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"})})]})]})})]})})})},v=(c(42),function(e){var t=e.scrollRef;Object(o.useEffect)((function(){window.scrollTo(0,t.current.scrollHeight)}));var c=Object(o.useState)(!1),a=Object(f.a)(c,2),l=a[0],n=a[1],s=Object(j.c)((function(e){return e.currentBookReducer.book})),r=Object(j.b)(),i=Object(j.c)((function(e){return e.currentBookReducer.checked})),d=Object(m.e)();"checked"===localStorage.getItem(s.id)?r({type:"SET_CHECKED",payload:"checked"}):null!==localStorage.getItem(s.id)&&""!==localStorage.getItem(s.id)||r({type:"SET_CHECKED",payload:""});var b=function(){d.goBack()},O=function(){var e,t,c,o,a,r,d,j,O,f,m,p,v,x,y=(null===(e=s.volumeInfo)||void 0===e?void 0:e.imageLinks)?s.volumeInfo.imageLinks.thumbnail:u,_=(null===(t=s.volumeInfo)||void 0===t?void 0:t.categories)?s.volumeInfo.categories:"",g=(null===(c=s.volumeInfo)||void 0===c?void 0:c.authors)?null===(o=s.volumeInfo)||void 0===o?void 0:o.authors.join(", "):null===(a=s.volumeInfo)||void 0===a?void 0:a.authors,k=(null===(r=s.saleInfo)||void 0===r?void 0:r.buyLink)?Object(h.jsx)("a",{href:s.saleInfo.buyLink,rel:"noreferrer",target:"_blank",className:"buy_button shadow mb-3 rounded",children:"\u041f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u0432 Google Play"}):"",N=(null===(d=s.volumeInfo)||void 0===d?void 0:d.pageCount)?Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:["\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u0438\u0446:\xa0",Object(h.jsx)("strong",{children:s.volumeInfo.pageCount})]}):"",I=(null===(j=s.saleInfo)||void 0===j?void 0:j.listPrice)?Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:["\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:\xa0",Object(h.jsx)("strong",{children:s.saleInfo.listPrice.amount}),"\xa0",s.saleInfo.listPrice.currencyCode]}):"",R=(null===(O=s.volumeInfo)||void 0===O?void 0:O.publishedDate)?Object(h.jsxs)("div",{className:"d-flex justify-content-center",children:["\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438:\xa0",s.volumeInfo.publishedDate]}):"",E=(null===(f=s.volumeInfo)||void 0===f?void 0:f.publisher)?Object(h.jsx)("div",{className:"d-flex justify-content-center mb-2",children:s.volumeInfo.publisher}):"",w=(null===(m=s.volumeInfo)||void 0===m?void 0:m.previewLink)&&(null===(p=s.saleInfo)||void 0===p?void 0:p.isEbook)?Object(h.jsx)("a",{href:s.volumeInfo.previewLink,rel:"noreferrer",target:"_blank",className:"buy_button shadow mb-3 rounded",children:"\u041f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043e\u0442\u0440\u044b\u0432\u043e\u043a"}):"";return Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"row pt-5 d-flex justify-content-center",children:[Object(h.jsxs)("div",{className:"col-sm-6",children:[Object(h.jsx)("div",{className:"row mb-3 d-flex justify-content-center",children:Object(h.jsx)("img",{src:y,className:"current_card_img rounded shadow",alt:"Book thumbnail"})}),Object(h.jsxs)("div",{className:"row mb-5 text-muted",children:[R,E,N,I]})]}),Object(h.jsxs)("div",{className:"col-sm-6",children:[Object(h.jsx)("input",{type:"checkbox",className:"btn-check",id:s.id,checked:i,onChange:function(){return e=s,n(!l),void(l||""!==localStorage.getItem(s.id)&&null!==localStorage.getItem(s.id)?(localStorage.setItem("".concat(e.id),""),console.log(e.id+" \u0423\u0434\u0430\u043b\u0435\u043d\u043e"),n(!l)):(localStorage.setItem("".concat(e.id),"checked"),console.log(e.id+" \u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"),n(!l)));var e}}),Object(h.jsx)("label",{className:"fas fa-star btn btn-outline-secondary",htmlFor:s.id}),Object(h.jsx)("h3",{className:"mb-3",children:null===(v=s.volumeInfo)||void 0===v?void 0:v.title}),Object(h.jsx)("h6",{className:"text-muted",children:g}),Object(h.jsx)("h6",{className:"my-3",children:Object(h.jsx)("u",{children:_})}),Object(h.jsx)("p",{className:"description mb-4",children:null===(x=s.volumeInfo)||void 0===x?void 0:x.description}),k,w,Object(h.jsx)("div",{className:"back_button shadow mb-5 rounded",onClick:b,children:"\u041d\u0430\u0437\u0430\u0434"})]})]})})};return Object(h.jsx)("div",{children:Object(h.jsx)(O,{})})}),x=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.allBooksReducer.favorites})),c=Object(j.c)((function(e){return e.allBooksReducer.isFetching})),o="",a=t.reduce((function(e,t){for(var c,o=0;o<localStorage.length;o++)(c=localStorage.key(o))===t.id&&""!==localStorage.getItem(c)&&e.push(t);return e}),[]);return 0!==t.length&&0!==a.length||(o=" (\u041f\u0443\u0441\u0442\u043e)"),c?Object(h.jsx)("div",{className:"loading",children:Object(h.jsxs)("svg",{className:"book-shelf",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 84 94",height:"200",width:"200",children:[Object(h.jsx)("path",{fill:"none",d:"M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"}),Object(h.jsxs)("g",{className:"book-shelf__book book-shelf__book--one",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#5199fc",d:"M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"}),Object(h.jsx)("path",{fill:"#afd7fb",d:"M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"})]}),Object(h.jsxs)("g",{className:"book-shelf__book book-shelf__book--two",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#ff9868",d:"M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"}),Object(h.jsx)("path",{fill:"#d06061",d:"M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"})]}),Object(h.jsxs)("g",{className:"book-shelf__book book-shelf__book--three",fillRule:"evenodd",children:[Object(h.jsx)("path",{fill:"#ff5068",d:"M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"}),Object(h.jsx)("path",{fill:"#d93368",d:"M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"})]}),Object(h.jsxs)("g",{fillRule:"evenodd",children:[Object(h.jsx)("path",{className:"book-shelf__shelf",fill:"#ae8280",d:"M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"}),Object(h.jsx)("path",{fill:"#855f6d",d:"M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"})]})]})}):Object(h.jsxs)("div",{className:"container mb-5",children:[Object(h.jsxs)("h3",{className:"my-4 mx-4",children:["\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 ",o]}),Object(h.jsx)("div",{className:" row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4",children:a.map((function(t){var c,o,a=t.volumeInfo.imageLinks?t.volumeInfo.imageLinks.thumbnail:u,l=t.volumeInfo.categories?null===(c=t.volumeInfo.categories)||void 0===c?void 0:c[0].split("/")[0]:"No category",n=t.volumeInfo.authors?t.volumeInfo.authors.join(", "):t.volumeInfo.authors;return(null===(o=t.volumeInfo.authors)||void 0===o?void 0:o.length)>3&&(n=t.volumeInfo.authors.slice(0,3).join(", ")+"..."),Object(h.jsx)(b.b,{className:"col book_block",to:"/book",onClick:function(){e({type:"BOOK",payload:t})},children:Object(h.jsxs)("div",{className:"card h-100",children:[Object(h.jsx)("img",{src:a,className:"book_image mb-3 rounded shadow",alt:"Book thumbnail"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:Object(h.jsx)("u",{children:l})}),Object(h.jsx)("h6",{children:Object(h.jsx)("strong",{children:t.volumeInfo.title})}),Object(h.jsx)("p",{children:Object(h.jsx)("small",{className:"text-muted",children:n})})]})]})},t.etag)}))})]})};var y=function(){var e=a.a.createRef(),t=Object(j.b)(),c=Object(j.c)((function(e){return e.allBooksReducer.startIndex})),o=Object(j.c)((function(e){return e.allBooksReducer.input})),l=Object(j.c)((function(e){return e.allBooksReducer.orderBy})),n=Object(j.c)((function(e){return e.allBooksReducer.category})),s=Object(j.c)((function(e){return e.allBooksReducer.input_for_loadmore})),u=Object(j.c)((function(e){return e.allBooksReducer.orderBy_for_loadmore})),f=Object(j.c)((function(e){return e.allBooksReducer.category_for_loadmore})),y=Object(j.c)((function(e){return e.allBooksReducer.free_ebooks})),_=Object(j.c)((function(e){return e.allBooksReducer.search_by_author})),g=[],k=[];t(_?{type:"INPUT_PLACEHOLDER",payload:"\u0410\u0432\u0442\u043e\u0440"}:{type:"INPUT_PLACEHOLDER",payload:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"});var N=function(e){if(!e.ok)throw Error(e.statusText);return e.json()},I=function(){t({type:"IS_FETCHING_LOADMORE",payload:Object(h.jsx)("i",{className:"fas fa-redo-alt"})}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s).concat(f,"&startIndex=").concat(c,"&maxResults=15&").concat(u).concat(y,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then(N).then((function(e){t({type:"LOADMORE_BOOKS",payload:e.items}),t({type:"IS_FETCHING_LOADMORE",payload:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435"}),t({type:"START_INDEX",payload:15}),c>=e.totalItems-15?t({type:"LOADMORE_BUTTON",payload:"none"}):t({type:"LOADMORE_BUTTON",payload:""})})).catch((function(e){t({type:"ERROR_INDICATOR",payload:!0}),console.log("\u041e\u0448\u0438\u0431\u043a\u0430 loadMore "+e)}))},R=function(){var e=Object(d.a)(r.a.mark((function e(){var c,o,a,l,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t({type:"IS_FETCHING",payload:!0}),c=0;c<localStorage.length;c++)o=localStorage.key(c),localStorage.key(c)!==localStorage.key(c-1)&&k.push({id:localStorage.key(c),value:localStorage.getItem(o)});k=k.filter((function(e){return"checked"===e.value})),a=Object(i.a)(k),e.prev=4,a.s();case 6:if((l=a.n()).done){e.next=12;break}return n=l.value,e.next=10,fetch("https://www.googleapis.com/books/v1/volumes/".concat(n.id)).then(N).then((function(e){g.push(e)})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 fetchFavorites "+e)}));case 10:e.next=6;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),a.e(e.t0);case 17:return e.prev=17,a.f(),e.finish(17);case 20:t({type:"FAVORITES",payload:g}),t({type:"IS_FETCHING",payload:!1}),k=[],g=[];case 24:case"end":return e.stop()}}),e,null,[[4,14,17,20]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(p,{fetchFavorites:R,fetchBooks:function(){o?(t({type:"IS_FETCHING",payload:!0}),fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(_).concat(o).concat(n,"&startIndex=0&maxResults=15").concat(l).concat(y,"&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k")).then(N).then((function(e){console.log(e);var c="",a=e.totalItems.toString()[e.totalItems.toString().length-1],s=e.totalItems.toString()[e.totalItems.toString().length-2],r=Number(s+a);c=r>4&&r<21?" \u0438\u0437\u0434\u0430\u043d\u0438\u0439":"2"===a||"3"===a||"4"===a?" \u0438\u0437\u0434\u0430\u043d\u0438\u044f":"1"===a?" \u0438\u0437\u0434\u0430\u043d\u0438\u0435":" \u0438\u0437\u0434\u0430\u043d\u0438\u0439",t({type:"FETCH_BOOKS",payload:e.items}),t({type:"ERROR_INDICATOR",payload:e.totalItems}),t({type:"IS_FETCHING",payload:!1}),t({type:"TOTAL_ITEMS",payload:Object(h.jsx)("h3",{children:Object(h.jsxs)("span",{children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e ",Object(h.jsx)("strong",{children:e.totalItems}),c]})})}),t({type:"INPUT_PLACEHOLDER",payload:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),t({type:"CHANGE_INPUT_FOR_LOADMORE",payload:o}),t({type:"CHANGE_ORDER_FOR_LOADMORE",payload:l}),t({type:"CHANGE_CATEGORY_FOR_LOADMORE",payload:n}),t({type:"CLEAR_START_INDEX",payload:15}),e.totalItems>15?t({type:"LOADMORE_BUTTON",payload:""}):t({type:"LOADMORE_BUTTON",payload:"none"})})).catch((function(e){console.log("\u041e\u0448\u0438\u0431\u043a\u0430 fetchBooks "+e)}))):t({type:"INPUT_PLACEHOLDER",payload:"\u041f\u0443\u0441\u0442\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441"})},scrollRef:e}),Object(h.jsx)(m.a,{exact:!0,path:"/",render:function(){return Object(h.jsx)(O,{loadMore:I})}}),Object(h.jsx)(m.a,{path:"/book",render:function(){return Object(h.jsx)(v,{scrollRef:e})}}),Object(h.jsx)(m.a,{path:"/favorites",render:function(){return Object(h.jsx)(x,{})}})]})},_=c(24),g=c(2),k={large_thumbnail:"",book:"",favorites:"",checked:""},N=c(23),I={books:[],totalItems:null,isFetching:!1,loadmore_button_display:"none",input:"",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",orderBy:"&orderBy=relevance",category:"",isFetching_loadmore:"\u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435",input_for_loadmore:"",orderBy_for_loadmore:"",category_for_loadmore:"",startIndex:15,display_scrollUp_button:"none",error_indicator:void 0,free_ebooks:"",search_by_author:"",favorites:[]},R=Object(_.a)({allBooksReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BOOKS":return Object(g.a)(Object(g.a)({},e),{},{books:t.payload});case"LOADMORE_BOOKS":return Object(g.a)(Object(g.a)({},e),{},{books:[].concat(Object(N.a)(e.books),Object(N.a)(t.payload))});case"TOTAL_ITEMS":return Object(g.a)(Object(g.a)({},e),{},{totalItems:t.payload});case"IS_FETCHING":return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.payload});case"LOADMORE_BUTTON":return Object(g.a)(Object(g.a)({},e),{},{loadmore_button_display:t.payload});case"INPUT":return Object(g.a)(Object(g.a)({},e),{},{input:t.payload});case"INPUT_PLACEHOLDER":return Object(g.a)(Object(g.a)({},e),{},{placeholder:t.payload});case"CHANGE_ORDER":return Object(g.a)(Object(g.a)({},e),{},{orderBy:t.payload});case"CHANGE_CATEGORY":return Object(g.a)(Object(g.a)({},e),{},{category:t.payload});case"IS_FETCHING_LOADMORE":return Object(g.a)(Object(g.a)({},e),{},{isFetching_loadmore:t.payload});case"CHANGE_INPUT_FOR_LOADMORE":return Object(g.a)(Object(g.a)({},e),{},{input_for_loadmore:t.payload});case"CHANGE_ORDER_FOR_LOADMORE":return Object(g.a)(Object(g.a)({},e),{},{orderBy_for_loadmore:t.payload});case"CHANGE_CATEGORY_FOR_LOADMORE":return Object(g.a)(Object(g.a)({},e),{},{category_for_loadmore:t.payload});case"START_INDEX":return Object(g.a)(Object(g.a)({},e),{},{startIndex:e.startIndex+t.payload});case"CLEAR_START_INDEX":return Object(g.a)(Object(g.a)({},e),{},{startIndex:t.payload});case"DISPLAY_SCROLLUP_BUTTON":return Object(g.a)(Object(g.a)({},e),{},{display_scrollUp_button:t.payload});case"ERROR_INDICATOR":return Object(g.a)(Object(g.a)({},e),{},{error_indicator:t.payload});case"FREE_EBOOKS":return Object(g.a)(Object(g.a)({},e),{},{free_ebooks:t.payload});case"SEARCH_BY_AUTHOR":return Object(g.a)(Object(g.a)({},e),{},{search_by_author:t.payload});case"FAVORITES":return Object(g.a)(Object(g.a)({},e),{},{favorites:t.payload});default:return e}},currentBookReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOK":return Object(g.a)(Object(g.a)({},e),{},{book:t.payload});case"LARGE_THUMBNAIL":return Object(g.a)(Object(g.a)({},e),{},{large_thumbnail:t.payload});case"SET_CHECKED":return Object(g.a)(Object(g.a)({},e),{},{checked:t.payload});default:return e}}}),E=Object(_.b)(R);n.a.render(Object(h.jsx)(j.a,{store:E,children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.ecfa5611.chunk.js.map