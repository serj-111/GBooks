const defaultState = {
    book_etag: "",
}

export const currentBookReducer = (state= defaultState, action)=> {
    switch (action.type) {
        case "BOOK_ETAG":
            return {...state, book_etag: action.payload}
        default: return state
    }
}