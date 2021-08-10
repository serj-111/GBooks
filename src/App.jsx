import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Books} from "./components/Books";
import {Header} from "./components/Header";
import {CurrentBook} from "./components/CurrentBook";
import {BrowserRouter, Route} from "react-router-dom";

function App() {

    const dispatch = useDispatch()
    const startIndex = useSelector(state => state.allBooksReducer.startIndex)
    const input = useSelector(state => state.allBooksReducer.input)
    const orderBy = useSelector( state => state.allBooksReducer.orderBy)
    const category = useSelector( state => state.allBooksReducer.category)
    const input_for_loadmore = useSelector( state => state.allBooksReducer.input_for_loadmore)
    const orderBy_for_loadmore = useSelector( state => state.allBooksReducer.orderBy_for_loadmore)
    const category_for_loadmore = useSelector( state => state.allBooksReducer.category_for_loadmore)

    const fetchBooks = () => {
        if (input === "") {
            dispatch({type: "INPUT_PLACEHOLDER", payload: "Empty request"})
            dispatch({type: "FETCH_BOOKS", payload: []})
            dispatch({type: "TOTAL_ITEMS", payload: ""})
            dispatch({type: "LOADMORE_BUTTON", payload: "none"})
        } else {
            dispatch({type: "IS_FETCHING", payload: true})
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}${category}&startIndex=0&maxResults=30${orderBy}&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k`)
                .then(response => response.json())
                .then(result => {
                    dispatch({type: "IS_FETCHING", payload: false})
                    dispatch({type: "FETCH_BOOKS", payload: result.items})
                    dispatch({type: "TOTAL_ITEMS", payload: <span>Found <strong>{result.totalItems}</strong> results</span>})
                    dispatch({type: "INPUT_PLACEHOLDER", payload: "Book title"})
                    dispatch({type: "CHANGE_INPUT_FOR_LOADMORE", payload: input})
                    dispatch({type: "CHANGE_ORDER_FOR_LOADMORE", payload: orderBy})
                    dispatch({type: "CHANGE_CATEGORY_FOR_LOADMORE", payload: category})
                    dispatch({type: "CLEAR_START_INDEX", payload: 30})
                    result.totalItems > 30 ? dispatch({type: "LOADMORE_BUTTON", payload: ""}) : dispatch({type: "LOADMORE_BUTTON", payload: "none"})
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
    const loadMore = () => {
        dispatch({type: "IS_FETCHING_LOADMORE", payload: <i className="fas fa-redo-alt"/>})
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${input_for_loadmore}${category_for_loadmore}&startIndex=${startIndex}&maxResults=30&${orderBy_for_loadmore}&key=AIzaSyCxJF0JN_3n7DjrjVPcNFbBDdpveeeWm1k`)
            .then(response => response.json())
            .then(result => {
                dispatch({type: "LOADMORE_BOOKS", payload: result.items})
                dispatch({type: "IS_FETCHING_LOADMORE", payload: "Load more"})
                dispatch({type: "START_INDEX", payload: 30})
                startIndex >= result.totalItems - 30 ? dispatch({type: "LOADMORE_BUTTON", payload: "none"}) : dispatch({type: "LOADMORE_BUTTON", payload: ""})
            })
            .catch(e => {
                console.log(e)
            })
    }
    return(
        <BrowserRouter>
            <Header fetchBooks={fetchBooks}/>
            <Route exact path="/" render={()=><Books loadMore={loadMore}/>}/>
            <Route path="/book" render={()=><CurrentBook />}/>
        </BrowserRouter>
    );

}
export default App;