export function reportsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_REPORT':
            console.log(action);
            return state;

        case 'ADD_REPORTS':
            console.log(action);
            return state;
    
        default:
            console.log('hit default in reportsReducer')
            return state;
    }
}