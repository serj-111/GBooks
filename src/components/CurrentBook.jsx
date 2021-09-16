import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import './CurrentBook.scss';
import empty_book_thumbnail from "../media/book_thumbnail.png"
import {useEffect, useState} from "react";


export const CurrentBook = ({scrollRef}) => {

    useEffect(() => {
        window.scrollTo(0, scrollRef.current.scrollHeight)
    },[])

    const [switcher, setSwitcher] = useState(false)
    const book = useSelector(state => state.currentBookReducer.book)
    const dispatch = useDispatch()
    const checked = useSelector(state => state.currentBookReducer.checked)
    const history = useHistory()

    if (localStorage.getItem(book.id) === "checked") {
        dispatch({type: "SET_CHECKED", payload: "checked"})
    } else if (localStorage.getItem(book.id) === null || localStorage.getItem(book.id) === "") {
        dispatch({type: "SET_CHECKED", payload: ""})
    }

    const handlerFavorites = (props) => {
        setSwitcher(!switcher)
        if(!switcher && (localStorage.getItem(book.id) === "" || localStorage.getItem(book.id) === null)) {
            localStorage.setItem(`${props.id}`, "checked")
            console.log(props.id + " Добавлено")
            setSwitcher(!switcher)
        } else {
            localStorage.setItem(`${props.id}`, "")
            console.log(props.id + " Удалено")
            setSwitcher(!switcher)
        }
    }
    const BookBlock = () => {

        let thumbnail_url = book.volumeInfo?.imageLinks ? book.volumeInfo.imageLinks.thumbnail : empty_book_thumbnail
        let categories = book.volumeInfo?.categories ? book.volumeInfo.categories : ""
        let authors = book.volumeInfo?.authors ? book.volumeInfo?.authors.join(', ') : book.volumeInfo?.authors
        let buy_button = book.saleInfo?.buyLink ? <a href={book.saleInfo.buyLink} rel="noreferrer" target="_blank" className="buy_button shadow mb-3 rounded">Приобрести в Google Play</a> : ""
        let page_count = book.volumeInfo?.pageCount ? <div className="d-flex justify-content-center">Количество страниц:&nbsp;<strong>{book.volumeInfo.pageCount}</strong></div> : ""
        let sale_info = book.saleInfo?.listPrice ? <div className="d-flex justify-content-center">Стоимость:&nbsp;<strong>{book.saleInfo.listPrice.amount}</strong>&nbsp;{book.saleInfo.listPrice.currencyCode}</div> : ""
        let published_date = book.volumeInfo?.publishedDate ? <div className="d-flex justify-content-center">Дата публикации:&nbsp;{book.volumeInfo.publishedDate.split("-").reverse().join(".")}</div> : ""
        let publisher = book.volumeInfo?.publisher ? <div className="d-flex justify-content-center mb-2">{book.volumeInfo.publisher}</div> : ""
        let preview = book.volumeInfo?.previewLink && book.saleInfo?.isEbook ? <a href={book.volumeInfo.previewLink} rel="noreferrer" target="_blank" className="buy_button shadow mb-3 rounded">Прочитать отрывок</a> : ""
            return (
                <div className="container">
                    <div className="row pt-5 d-flex justify-content-center">
                        <div className="col-sm-6">
                            <div className="row mb-3 d-flex justify-content-center">
                                <img src={thumbnail_url} className="current_card_img rounded shadow" alt="Book thumbnail"/>
                            </div>
                            <div className="row mb-5 text-muted">
                                {published_date}
                                {publisher}
                                {page_count}
                                {sale_info}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <input type="checkbox" className="btn-check" id={book.id} checked={checked} onChange={ () => handlerFavorites(book)}/>
                            <label className="fas fa-star btn btn-outline-secondary" htmlFor={book.id}/>
                            <h3 className="mb-3">{book.volumeInfo?.title}</h3>
                            <h6 className="text-muted">{authors}</h6>
                            <h6 className="my-3"><u>{categories}</u></h6>
                            <p className="description mb-4">{book.volumeInfo?.description}</p>
                            {buy_button}
                            {preview}
                            <div className="back_button shadow mb-5 rounded" onClick={ () => history.goBack()}>Назад</div>
                        </div>
                    </div>
                </div>
            )
    }

        return (
            <div>
                <BookBlock/>
            </div>)

}