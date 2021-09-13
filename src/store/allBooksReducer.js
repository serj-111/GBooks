
const defaultState = {
    books: [],
    totalItems: null,
    isFetching: false,
    loadmore_button_display: "none",
    input: "",
    placeholder: "Название",
    orderBy: "&orderBy=relevance",
    category: "",
    isFetching_loadmore: "Следующие",
    input_for_loadmore: "",
    orderBy_for_loadmore: "",
    category_for_loadmore: "",
    startIndex: 15,
    display_scrollUp_button: "none",
    error_indicator: undefined,
    free_ebooks: "",
    search_by_author: "",
    favorites: [],
}

export const allBooksReducer = (state= defaultState, action)=> {
    switch (action.type) {
        case "FETCH_BOOKS":
            return {...state, books: action.payload}
        case "LOADMORE_BOOKS":
            return {...state, books: [...state.books, ...action.payload]}
        case "TOTAL_ITEMS":
            return {...state, totalItems: action.payload}
        case "IS_FETCHING":
            return {...state, isFetching: action.payload}
        case "LOADMORE_BUTTON":
            return {...state, loadmore_button_display: action.payload}
        case "INPUT":
            return {...state, input: action.payload}
        case "INPUT_PLACEHOLDER":
            return {...state, placeholder: action.payload}
        case "CHANGE_ORDER" :
            return {...state, orderBy: action.payload}
        case "CHANGE_CATEGORY" :
            return {...state, category: action.payload}
        case "IS_FETCHING_LOADMORE" :
            return {...state, isFetching_loadmore: action.payload}
        case "CHANGE_INPUT_FOR_LOADMORE" :
            return {...state, input_for_loadmore: action.payload}
        case "CHANGE_ORDER_FOR_LOADMORE" :
            return {...state, orderBy_for_loadmore: action.payload}
        case "CHANGE_CATEGORY_FOR_LOADMORE" :
            return {...state, category_for_loadmore: action.payload}
        case "START_INDEX" :
            return {...state, startIndex: state.startIndex + action.payload}
        case "CLEAR_START_INDEX" :
            return {...state, startIndex: action.payload}
        case "DISPLAY_SCROLLUP_BUTTON" :
            return {...state, display_scrollUp_button: action.payload}
        case "ERROR_INDICATOR" :
            return {...state, error_indicator: action.payload}
        case "FREE_EBOOKS" :
            return {...state, free_ebooks: action.payload}
        case "SEARCH_BY_AUTHOR" :
            return {...state, search_by_author: action.payload}
        case "FAVORITES" :
            return {...state, favorites: action.payload}

        default: return state
    }
}