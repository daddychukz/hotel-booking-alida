
export const searchReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_SEARCH_ITEM':
            console.log(state.concat(action.payload))
            return state.concat(action.payload)
        default:
            return state
    }
}