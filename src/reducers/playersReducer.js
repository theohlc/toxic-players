export function playersReducer(state = {
    players: []
}, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [
                    ...state.players,
                    {username: action.username}
                ]
            }
    
        default:
            return state;
    }
}