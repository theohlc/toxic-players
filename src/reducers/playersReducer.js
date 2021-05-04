export function playersReducer(state = {
    players: []
}, action) {
    switch (action.type) {
        case 'ADD_PLAYER':
            console.log('ADD_PLAYER action executed')
            return {
                ...state,
                players: [
                    ...state.players,
                    {username: 'users name'}
                ]
            }
    
        default:
            return state;
    }
}