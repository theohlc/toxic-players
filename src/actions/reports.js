export const addReport = (player, text, type) => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_PLAYER_REQUEST' });
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

export const removeReport = (report) => {
    return (dispatch) => {
        dispatch({ type: 'START_REMOVING_REPORTS_REQUEST' });
        fetch(`http://localhost:3000/players/${report.player_id}/reports/${report.id}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(report => dispatch({ type: 'REMOVE_REPORT', payload: { report, id: report.player_id } }))
    }
}

export const switchReportForm = (player = {}) => {
    return { type: 'SWITCH_REPORT_FORM', payload: { player } }
}