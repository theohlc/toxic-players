export const addPlayer = (username) => {
    return { type: 'ADD_PLAYER', payload: {
        username: username} 
    }
}