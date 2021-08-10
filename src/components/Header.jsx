import './Header.scss';
import {useDispatch, useSelector} from "react-redux";
import {Link, useHistory} from 'react-router-dom';

export const Header = ({fetchBooks}) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const placeholder = useSelector(state => state.allBooksReducer.placeholder)


    const handlerOrder = (event) => {
        dispatch({type: "CHANGE_ORDER", payload: event.target.value})
    }
    const handlerCategory = (event) => {
        dispatch({type: "CHANGE_CATEGORY", payload: event.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        history.push('/')
        fetchBooks()
    }
    return(
        <div className="header container-fluid">
            <div className="header_layer">
                <div className="row header_content pb-3">
                    <div className="col-sm-4 d-flex justify-content-center">
                        <Link to="/"><h1><i className="fas fa-book"> Gbooks</i></h1></Link>
                    </div>
                    <div className="col-sm-8 ">
                        <div className="row d-flex justify-content-center">
                            <div className="col d-flex justify-content-center">
                                <form onSubmit={onSubmit}>
                                    <input className="search_bar rounded" type="text" placeholder={placeholder}
                                       onChange={ (event) => {
                                           dispatch({type: "INPUT", payload: event.target.value})
                                       }}/>
                                    <Link to="/"><i className="fas fa-search" onClick={fetchBooks}/></Link>
                                </form>
                            </div>
                            <div className="row d-flex justify-content-center pt-3">
                                <div className="col-md-6 d-flex justify-content-center d-flex align-items-center pt-3">
                                    <label>Category</label>
                                    <select className="rounded" onChange={handlerCategory}>
                                        <option value="">all</option>
                                        <option value="+subject:art">art</option>
                                        <option value="+subject:biography">biography</option>
                                        <option value="+subject:computers">computers</option>
                                        <option value="+subject:history">history</option>
                                        <option value="+subject:medical">medical</option>
                                        <option value="+subject:poetry">poetry</option>
                                    </select>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center d-flex align-items-center pt-3">
                                    <label>Sorting</label>
                                    <select className="rounded" onChange={handlerOrder}>
                                        <option value="&orderBy=relevance">relevance</option>
                                        <option value="&orderBy=newest">newest</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}