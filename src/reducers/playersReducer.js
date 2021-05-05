export function playersReducer(state = {
    players: []
}, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [
                    ...state.players,
                    {
                        username: action.payload.username,
                        id: (state.players.length + 1)
                    }
                ]
            }
    
        default:
            return state;
    }
}