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

        case 'ADD_PLAYERS':
            console.log(action.payload)
            return {
                ...state,
                players: action.payload.players
            }
    
        default:
            return state;
    }
}