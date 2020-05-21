
export const hotelReducer = (state, action) => {
    switch(action.type) {
        case 'GET_ALL_HOTELS':
            return action.payload
        default:
            return state
    }
}