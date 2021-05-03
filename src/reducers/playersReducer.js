export function playersReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            console.log('ADD_PLAYER action executed')
            break;
    
        default:
            return state;
    }
}