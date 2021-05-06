export const addReport = () => {
    return { type: 'ADD_REPORT'}
}

export const fetchReports = (player) => {
    return (dispatch) => {
        dispatch({ type: 'START_ADDING_REPORTS_REQUEST' });
        fetch(`http://localhost:3000/players/${player.id}/reports`)
            .then(res => res.json())
            .then(reports => dispatch({ type: 'ADD_REPORTS', payload: { reports, id: player.id } }))
    }
}