export const addReport = (player, text) => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_PLAYER_REQUEST' });
        fetch(`http://localhost:3000/players/${player.id}/reports`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'report': {
                    'text': text,
                    'player_id': player.id
                }
            })
        })
            .then(res => res.json())
            .then(report => dispatch({ type: 'ADD_REPORT', payload: { report, id: player.id }}))
    }
}

export const fetchReports = (player) => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_REPORTS_REQUEST' });
        fetch(`http://localhost:3000/players/${player.id}/reports`)
            .then(res => res.json())
            .then(reports => dispatch({ type: 'ADD_REPORTS', payload: { reports, id: player.id } }))
    }
}