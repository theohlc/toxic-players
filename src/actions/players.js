export const addPlayer = (username) => {
    return { type: 'ADD_PLAYER', payload: {
        username: username} 
    }
}

export const fetchPlayers = () => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_PLAYERS_REQUEST' });
        fetch('http://localhost:3000/players')
            .then(res => res.json())
            .then(players => dispatch({ type: 'ADD_PLAYERS', payload: { players }}))
    }
}