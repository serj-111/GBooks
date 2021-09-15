import './Books.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import empty_book_thumbnail from "../media/book_thumbnail.png"

export const Books = ({loadMore})=> {

    const dispatch = useDispatch()
    const books = useSelector(state => state.allBooksReducer.books)
    const totalItems = useSelector(state => state.allBooksReducer.totalItems)
    const isFetching = useSelector(state => state.allBooksReducer.isFetching)
    const loadmore_button_display = useSelector(state => state.allBooksReducer.loadmore_button_display)
    const isFetching_loadmore = useSelector(state => state.allBooksReducer.isFetching_loadmore)
    const display_scrollUp_button = useSelector(state => state.allBooksReducer.display_scrollUp_button)
    const error_indicator = useSelector(state => state.allBooksReducer.error_indicator)

    const currentBookHandler = (props) => {
        dispatch({type: "BOOK", payload: props})
    }

    const scrollHandler = (e) => {
        if (e.currentTarget.scrollY > 800) {
            dispatch({type: "DISPLAY_SCROLLUP_BUTTON", payload: ""})
        }else{
            dispatch({type: "DISPLAY_SCROLLUP_BUTTON", payload: "none"})
        }
    }
    window.addEventListener("scroll", scrollHandler)

    if (error_indicator === 0) {
        return (
            <div className="loading">
                <h2>Ничего не найдено</h2>
            </div>
        )
    } else if (isFetching) {
        return (
            <div className="loading">
                <svg className="book-shelf" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"
                     viewBox="0 0 84 94" height="200" width="200">
                    <path fill="none" d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"/>
                    <g className="book-shelf__book book-shelf__book--one" fillRule="evenodd">
                        <path fill="#5199fc" d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"/>
                        <path fill="#afd7fb" d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"/>
                    </g>
                    <g className="book-shelf__book book-shelf__book--two" fillRule="evenodd">
                        <path fill="#ff9868" d="M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"/>
                        <path fill="#d06061" d="M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"/>
                    </g>
                    <g className="book-shelf__book book-shelf__book--three" fillRule="evenodd">
                        <path fill="#ff5068" d="M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"/>
                        <path fill="#d93368" d="M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"/>
                    </g>
                    <g fillRule="evenodd">
                        <path className="book-shelf__shelf" fill="#ae8280" d="M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"/>
                        <path fill="#855f6d" d="M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"/>
                    </g>
                </svg>
            </div>
        )
    } else {
        return (
            <div>
                <div className="container mb-3">
                    <div className="my-4 mx-4 total_items">{totalItems}</div>
                    <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4" >
                        {books.map( (item) => {
                            let thumbnail_url = item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : empty_book_thumbnail
                            let categories = item.volumeInfo.categories ? item.volumeInfo.categories?.[0] : "No category"
                            let authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : item.volumeInfo.authors
                            if (item.volumeInfo.authors?.length > 3) {
                                authors = item.volumeInfo.authors.slice(0,3).join(', ') + "..."
                            }
                            return (
                                <Link className="col book_block"  key={item.etag} to="/book" onClick={() => currentBookHandler(item)}>
                                    <div className="card h-100">
                                        <img src={thumbnail_url} className="book_image mb-3 rounded shadow" alt="Book thumbnail"/>
                                        <div>
                                            <p><u>{categories}</u></p>
                                            <h6><strong>{item.volumeInfo.title}</strong></h6>
                                            <p><small className="text-muted">{authors}</small></p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="loadmore_button mb-5 rounded" onClick={loadMore} style={{display: loadmore_button_display}}>
                            <strong>{isFetching_loadmore}</strong>
                        </div>
                        <div className="up_button mb-5 rounded" onClick={() => {
                            window.scrollTo( 0, 0 );
                        }} style={{display: display_scrollUp_button}}>
                            <i className="fas fa-chevron-up"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}