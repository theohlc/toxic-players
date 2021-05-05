export function playersReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            return [
                    ...state,
                    action.payload.player
            ]

        case 'ADD_PLAYERS':
            return [
                action.payload.players
            ]
    
        default:
            console.log('hit default in playersReducer')
            return state;
    }
}