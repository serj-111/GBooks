import './Header.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';
import {useEffect, useState} from "react";


export const Header = ({fetchBooks, scrollRef, fetchFavorites}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [checked_free_ebook, handlerFreeEbooks] = useState(false);
    const [checked_only_author, handlerOnlyAuthor] = useState(false);
    const [toggler, handlerToggle] = useState("far fa-caret-square-down navbar-toggler");
    const placeholder = useSelector(state => state.allBooksReducer.placeholder)
    const input = useSelector(state => state.allBooksReducer.input)
    const handlerOrder = (e) => dispatch({type: "CHANGE_ORDER", payload: e.target.value})
    const handlerCategory = (e) => dispatch({type: "CHANGE_CATEGORY", payload: e.target.value})

    const onSubmit = (e) => {
        e.preventDefault()
        history.push('/')
        fetchBooks()
    }

    const handlerFavorites = () => {
        fetchFavorites()
    }

    useEffect( () => {
        if (checked_free_ebook) {
            dispatch({type: "FREE_EBOOKS", payload: "&filter=free-ebooks"})
        } else {
            dispatch({type: "FREE_EBOOKS", payload: ""})
        }
    },[checked_free_ebook])

    useEffect( () => {
        if (checked_only_author) {
            dispatch({type: "SEARCH_BY_AUTHOR", payload: "inauthor:"})
        } else {
            dispatch({type: "SEARCH_BY_AUTHOR", payload: ""})
        }
    },[checked_only_author])

    const erase_button = input === "" ? {visibility: "hidden"} : {display: ""}

    const handlerToggler = () => {
        if (toggler === "far fa-caret-square-down navbar-toggler") {
            setTimeout(() => {
                handlerToggle("far fa-caret-square-up navbar-toggler")
            }, 300)
        } else {
            setTimeout(() => {
                handlerToggle("far fa-caret-square-down navbar-toggler")
            }, 300)
        }
    }

    return(
        <div ref={scrollRef} className="header container-fluid rounded">
            <div className="header_layer py-4 shadow rounded">
                <nav className="navbar navbar-expand-sm header_content row my-2 ">
                    <div className="col-sm-4 d-flex justify-content-center ">
                        <Link to="/"><div className="fas fa-book"><div className="title">Gbooks<br/><h6>Поиск книг <br/>в каталоге Google</h6></div></div></Link>
                    </div>
                    <div className="col-sm-8 search_block" >
                        <div className="row d-flex justify-content-center">
                            <div className="col d-flex justify-content-center" >
                                <form onSubmit={onSubmit}>
                                    <i className={toggler} data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" onClick={handlerToggler}/>
                                    <input className="search_bar rounded" type="text" placeholder={placeholder}
                                       onChange={ (event) => {
                                           dispatch({type: "INPUT", payload: event.target.value})
                                       }}/><i className="fas fa-times" onClick={ (e)=> {
                                           e.target.previousSibling.value = ""
                                           dispatch({type: "INPUT", payload: ""})
                                       }} style={erase_button}/>
                                    <Link to="/"><i className="fas fa-search" onClick={fetchBooks}/></Link>
                                </form>
                            </div>
                            <div className="row collapse navbar-collapse" id="navbarTogglerDemo03">
                                <div className="row d-flex justify-content-center pt-3 " >
                                    <div className="col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3">
                                        <label className="label_config">Категория</label>
                                        <select className="rounded" onChange={handlerCategory}>
                                            <option value="">Все</option>
                                            <option value="+subject:art">Искусство</option>
                                            <option value="+subject:biography">Биография</option>
                                            <option value="+subject:computers">Компьютеры</option>
                                            <option value="+subject:history">История</option>
                                            <option value="+subject:medical">Медицина</option>
                                            <option value="+subject:poetry">Поэзия</option>
                                        </select>
                                        <i className="fas fa-caret-down"/>
                                    </div>
                                    <div className="col-lg-auto d-flex justify-content-center d-flex align-items-center pt-3">
                                        <label className="label_config">Сортировка</label>
                                        <select className="rounded" onChange={handlerOrder}  id="sort">
                                            <option value="&orderBy=relevance">По умолчанию</option>
                                            <option value="&orderBy=newest">Новые</option>
                                        </select>
                                        <i className="fas fa-caret-down"/>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center pt-3">
                                    <div className="col-md-auto d-flex justify-content-center d-flex align-items-center pt-3">
                                        <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                            <input type="checkbox" className="btn-check" id="btn-check-one-outlined" checked={checked_only_author} onChange={ () => handlerOnlyAuthor(!checked_only_author)}/>
                                            <label className="btn btn-outline-secondary" htmlFor="btn-check-one-outlined">Поиск по автору</label>
                                            <input type="checkbox" className="btn-check" id="btn-check-two-outlined" checked={checked_free_ebook} onChange={ () => handlerFreeEbooks(!checked_free_ebook)}/>
                                            <label className="btn btn-outline-secondary" htmlFor="btn-check-two-outlined">Только бесплатные</label>
                                        </div>
                                    </div>
                                    <div className="col-md-auto d-flex justify-content-center d-flex align-items-center pt-3">
                                        <Link className="btn btn-outline-secondary" to="/favorites" onClick={handlerFavorites}>Избранное</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}