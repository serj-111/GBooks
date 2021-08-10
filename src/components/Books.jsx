import './Books.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import book_thumbnail from "../media/book_thumbnail.png"

export const Books = ({loadMore})=> {

    const dispatch = useDispatch()
    const books = useSelector(state => state.allBooksReducer.books)
    const totalItems = useSelector(state => state.allBooksReducer.totalItems)
    const isFetching = useSelector(state => state.allBooksReducer.isFetching)
    const loadmore_button_display = useSelector(state => state.allBooksReducer.loadmore_button_display)
    const isFetching_loadmore = useSelector(state => state.allBooksReducer.isFetching_loadmore)
    let key_counter = 0



    const handlerLink = (props) => {
        dispatch({type: "BOOK_ETAG", payload: props})
    }

    if (isFetching === true) {
        return (
            <div className="loading">
                <h2>...Loading</h2>
            </div>
        )
    } else if (books.length === 0) {
        return (
            <div className="loading">
                <h2>No books</h2>
            </div>
        )
    } else {
        return (
            <div>
                <p className="d-flex justify-content-center p-3">{totalItems}</p>
                <div className="container mb-3">
                    <div className=" row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
                            {books.map( item => {
                                let thumbnail_url = item.volumeInfo.imageLinks === undefined
                                    ? book_thumbnail
                                    : item.volumeInfo.imageLinks.thumbnail
                                let categories = item.volumeInfo.categories === undefined
                                    ? ""
                                    : item.volumeInfo.categories[0]
                                let authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : item.volumeInfo.authors
                                return (
                                    <Link className="col book_block"  key={key_counter++} to="/book" onClick={() => handlerLink(item.etag)}>
                                        <div className="card h-100">
                                            <img src={thumbnail_url} className="card-img-top shadow mb-3 bg-white rounded" alt="Book thumbnail"/>
                                            <div>
                                                <p><u>{categories}</u></p>
                                                <h6>{item.volumeInfo.title}</h6>
                                                <p><small className="text-muted">{authors}</small></p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="loadmore_button mb-5 rounded" onClick={loadMore} style={{display: loadmore_button_display}}>
                            <h5>{isFetching_loadmore}</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}