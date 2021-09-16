import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Books} from "./components/Books";
import {Header} from "./components/Header";
import {CurrentBook} from "./components/CurrentBook";
import {BrowserRouter, Route} from "react-router-dom";
import React, {useEffect} from "react";
import {Favorites} from "./components/Favorites";

function App() {

    //vk-tunnel --insecure=1 --http-protocol=https --ws-protocol=wss --host=localhost --port=10888

    const scrollRef = React.createRef()
    const dispatch = useDispatch()
    const startIndex = useSelector(state => state.allBooksReducer.startIndex)
    const input = useSelector(state => state.allBooksReducer.input)
    const orderBy = useSelector( state => state.allBooksReducer.orderBy)
    const category = useSelector( state => state.allBooksReducer.category)
    const input_for_loadmore = useSelector( state => state.allBooksReducer.input_for_loadmore)
    const orderBy_for_loadmore = useSelector( state => state.allBooksReducer.orderBy_for_loadmore)
    const category_for_loadmore = useSelector( state => state.allBooksReducer.category_for_loadmore)
    const free_ebooks = useSelector( state => state.allBooksReducer.free_ebooks)
    const search_by_author = useSelector( state => state.allBooksReducer.search_by_author)
    let favorite_books = []
    let favorites_filtered = []

    useEffect( () => {
        if (search_by_author) {
            dispatch({type: "INPUT_PLACEHOLDER", payload: "Автор"})
        } else {
            dispatch({type: "INPUT_PLACEHOLDER", payload: "Название"})
        }
    }, [search_by_author])


    const checkForError = (response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    };

    const fetchBooks = () => {
        if (!input) {
            dispatch({type: "INPUT_PLACEHOLDER", payload: "Пустой запрос"})
            setTimeout(() => {
                dispatch({type: "INPUT_PLACEHOLDER", payload: "Название"})
            },2000)
        } else {
            dispatch({type: "IS_FETCHING", payload: true})
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${search_by_author}${input}${category}&startIndex=0&maxResults=15${orderBy}${free_ebooks}&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k`)
                .then(checkForError)
                .then(result => {
                    console.log(result)
                    // Проверка окончания "издания"
                    let publication
                    let total_publications_one = result.totalItems.toString()[result.totalItems.toString().length-1]
                    let total_publications_ten = result.totalItems.toString()[result.totalItems.toString().length-2]
                    let total_publications_sum = Number(total_publications_ten + total_publications_one)
                    if (total_publications_sum > 4 && total_publications_sum < 21) publication = " изданий"
                    else if (total_publications_one === "2" || total_publications_one === "3" || total_publications_one === "4") publication = " издания"
                    else if (total_publications_one === "1") publication = " издание"
                    else publication = " изданий"

                    dispatch({type: "FETCH_BOOKS", payload: result.items})
                    dispatch({type: "ERROR_INDICATOR", payload: result.totalItems})
                    dispatch({type: "IS_FETCHING", payload: false})
                    dispatch({type: "TOTAL_ITEMS", payload: <h3><span>Найдено <strong>{result.totalItems}</strong>{publication}</span></h3>})
                    dispatch({type: "INPUT_PLACEHOLDER", payload: "Название"})
                    dispatch({type: "CHANGE_INPUT_FOR_LOADMORE", payload: input})
                    dispatch({type: "CHANGE_ORDER_FOR_LOADMORE", payload: orderBy})
                    dispatch({type: "CHANGE_CATEGORY_FOR_LOADMORE", payload: category})
                    dispatch({type: "CLEAR_START_INDEX", payload: 15})
                    result.totalItems > 15 ? dispatch({type: "LOADMORE_BUTTON", payload: ""}) : dispatch({type: "LOADMORE_BUTTON", payload: "none"})
                })
                .catch(e => {
                    console.log("Ошибка fetchBooks " + e)
                })
        }
    }
    const loadMore = () => {
        dispatch({type: "IS_FETCHING_LOADMORE", payload: <i className="fas fa-redo-alt"/>})
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input_for_loadmore}${category_for_loadmore}&startIndex=${startIndex}&maxResults=15&${orderBy_for_loadmore}${free_ebooks}&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k`)
            .then(checkForError)
            .then(result => {
                // let books_loadmore = result.items                     //запрос на перевод с англ категорий и добавление переведенных в массив loadmore
                // let res_loadmore = []
                // let categories = []
                // result.items.map( item => {
                //     let reg = /&/g
                //     if (item.volumeInfo.categories?.[0] === undefined) {
                //         categories.push("No category")
                //     } else {
                //         categories.push(item.volumeInfo.categories?.[0].replace(reg, "and"))
                //     }
                //     return categories
                // })
                // let categories_string = categories.join("@")
                // fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ru&dt=t&dj=1&source=icon&q=${categories_string}`)
                //     .then(response => response.json())
                //     .then(result => {
                //         console.log(categories_string)
                //         let categories_arr = result.sentences[0].trans.split("@")
                //         console.log(categories_arr)
                //         for (let i = 0; i < books_loadmore.length; i++) {
                //             books_loadmore[i] = {...books_loadmore[i], translated_category: categories_arr[i]}
                //             res_loadmore.push(books_loadmore[i])
                //             console.log(res_loadmore)
                //         }
                //     })
                //     .catch(e => {
                //         console.log("Ошибка перевода loadmore" + e)
                //     })

                dispatch({type: "LOADMORE_BOOKS", payload: result.items})
                dispatch({type: "IS_FETCHING_LOADMORE", payload: "Следующие"})
                dispatch({type: "START_INDEX", payload: 15})
                startIndex >= result.totalItems - 15 ? dispatch({type: "LOADMORE_BUTTON", payload: "none"}) : dispatch({type: "LOADMORE_BUTTON", payload: ""})
            })
            .catch(e => {
                dispatch({type: "ERROR_INDICATOR", payload: true})
                console.log("Ошибка loadMore " + e)
            })
    }


    const fetchFavorites = async () => {
        dispatch({type: "IS_FETCHING", payload: true})
        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            if (localStorage.key(i) !== localStorage.key(i-1)) {
                favorites_filtered.push({id: localStorage.key(i), value: localStorage.getItem(key)})
            }
        }
        favorites_filtered = favorites_filtered.filter( (item) => {
            return item.value === "checked"
        })

        for (const item of favorites_filtered) {
             await fetch(`https://www.googleapis.com/books/v1/volumes/${item.id}`)
                 .then(checkForError)
                 .then(result => {
                     favorite_books.push(result)
                 }).catch(e => {
                     console.log("Ошибка fetchFavorites " + e)
                })
        }
        dispatch({type: "FAVORITES", payload: favorite_books})
        dispatch({type: "IS_FETCHING", payload: false})
        favorites_filtered = []
        favorite_books = []
    }

    return(
        <BrowserRouter>
            <Header fetchFavorites={fetchFavorites} fetchBooks={fetchBooks} scrollRef={scrollRef} />
            <Route exact path="/" render={()=><Books loadMore={loadMore} />} />
            <Route path="/book" render={()=><CurrentBook scrollRef={scrollRef} />} />
            <Route path="/favorites" render={()=><Favorites />} />
        </BrowserRouter>
    );

}
export default App;