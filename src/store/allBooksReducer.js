
const defaultState = {
    books: [],
    totalItems: null,
    isFetching: false,
    loadmore_button_display: "none",
    input: "",
    placeholder: "Book title",
    orderBy: "&orderBy=relevance",
    category: "",
    isFetching_loadmore: "Load more",
    input_for_loadmore: "",
    orderBy_for_loadmore: "",
    category_for_loadmore: "",
    startIndex: 30,
}

export const allBooksReducer = (state= defaultState, action)=> {
    switch (action.type) {
        case "FETCH_BOOKS":
            return {...state, books: [...action.payload]}
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

        default: return state
    }
}