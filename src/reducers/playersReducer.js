export function playersReducer(state = {
    players: []
}, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return {
                ...state,
                players: [
                    ...state.players,
                    action.payload.player
                ]
            }

        case 'ADD_PLAYERS':
            return {
                ...state,
                players: action.payload.players
            }
    
        default:
            return state;
    }
}