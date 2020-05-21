
export const searchReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_SEARCH_ITEM':
            return state.concat(action.payload)
        default:
            return state
    }
}