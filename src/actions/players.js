export const addPlayer = (username) => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_PLAYER_REQUEST' });
        fetch('http://localhost:3000/players', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'player': {
                    'username': username
                }
            })
        })
            .then(res => res.json())
            .then(player => dispatch({ type: 'ADD_PLAYER', payload: { player }}))
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