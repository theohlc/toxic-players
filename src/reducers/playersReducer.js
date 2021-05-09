export function playersReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                    ...state,
                    action.payload.player
            ]

        case 'ADD_PLAYERS':
            return action.payload.players

        case 'TOXIC_VOTE':
            var playerIndex = state.findIndex(player => player.id === action.player.id)
            state[playerIndex].score = state[playerIndex].score + 1

            return state;

        case 'NOT_TOXIC_VOTE':
            var playerIndex = state.findIndex(player => player.id === action.player.id)
            state[playerIndex].score = state[playerIndex].score - 1
        
            return state;
    
        default:
            return state;
    }
}