export const addPlayer = (username, text, type) => {
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
            .then(player => {
                dispatch({ type: 'ADD_PLAYER', payload: { player }});
                console.log(text)
                console.log(type)
                fetch(`http://localhost:3000/players/${player.id}/reports`, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'report': {
                            'text': text,
                            'report_type': type,
                            'player_id': player.id
                        }
                    })
                })
                .then(res => res.json())
                .then(
                    report =>{
                        console.log(report.player_id); 
                        dispatch({ type: 'ADD_REPORT_NEW_USER', payload: { report, id: report.player_id }})
                    })
            })
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

export const voteOnPlayer = (toxicVote, player) => {
    if (toxicVote === true) {
        return { type: 'TOXIC_VOTE', player}
    } else {
        return { type: 'NOT_TOXIC_VOTE', player}
    }
}