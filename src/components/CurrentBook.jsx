import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './CurrentBook.scss';
import book_thumbnail from "../media/book_thumbnail.png"


export const CurrentBook = () => {

    const history = useHistory()
    const book_etag = useSelector(state => state.currentBookReducer.book_etag)
    const books = useSelector(state => state.allBooksReducer.books)
    let key_counter = 0

    const handlerBack = () => {
        history.goBack()
    }

    let arr_bookcards = books.map( item => {
        let thumbnail_url = item.volumeInfo.imageLinks === undefined
            ? book_thumbnail
            : item.volumeInfo.imageLinks.thumbnail
        let categories = item.volumeInfo.categories === undefined
            ? "" : item.volumeInfo.categories
        let authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : item.volumeInfo.authors
        let buy_button = item.saleInfo.buyLink === undefined ? "" : <a href={item.saleInfo.buyLink} rel="noreferrer" target="_blank" className="buy_button shadow mb-3 rounded">Buy on Google Play</a>

        if (item.etag === book_etag) {
            return (
                <div className="container pt-5" key={key_counter++}>
                    <div className="row ">
                        <div className="wrapper col-sm-6 mb-5">
                            <img src={thumbnail_url} className="img shadow bg-white rounded" alt="Book thumbnail"/>
                        </div>
                        <div className="col-sm-6">
                            <h3>{item.volumeInfo.title}</h3>
                            <h5 className="text-muted">{authors}</h5>
                            <p><u>{categories}</u></p>
                            <p className="description mb-4">{item.volumeInfo.description}</p>
                            {buy_button}
                            <div className="back_button shadow mb-5 rounded" onClick={handlerBack}>Back to list</div>
                        </div>
                    </div>
                </div>
            )
        }
    })

    return (
        <div>
            {arr_bookcards}
        </div>

    )
}