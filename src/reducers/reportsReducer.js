export function reportsReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_REPORT':
            return {
                ...state,
                [action.payload.id]: [
                    ...state[action.payload.id],
                    action.payload.report
                ]
            }

        case 'ADD_REPORTS':
            return {
                ...state,
                [action.payload.id]: action.payload.reports
            }

        case 'REMOVE_REPORT':
            let reportIndex = state[action.payload.report.player_id].findIndex(x => x.id === action.payload.report.id)
            state[action.payload.report.player_id].splice(reportIndex - 1, 1)
            
            return state;
    
        default:
            // console.log('hit default in reportsReducer')
            return state;
    }
}