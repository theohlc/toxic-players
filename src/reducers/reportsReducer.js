export function reportsReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_REPORT':
            console.log(action);
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
    
        default:
            // console.log('hit default in reportsReducer')
            return state;
    }
}