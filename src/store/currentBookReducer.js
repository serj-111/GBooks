const defaultState = {
    large_thumbnail: "",
    book: "",
    favorites: "",
    checked: "",
}

export const currentBookReducer = (state= defaultState, action)=> {
    switch (action.type) {
        case "BOOK":
            return {...state, book: action.payload}
        case "LARGE_THUMBNAIL":
            return {...state, large_thumbnail: action.payload}
        case "SET_CHECKED":
            return {...state, checked: action.payload}

        default: return state

    }
}
