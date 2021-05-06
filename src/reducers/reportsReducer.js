export function reportsReducer(state = {}, action) {
    switch (action.type) {
        case 'ADD_REPORT':
            console.log(action);
            return state;

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