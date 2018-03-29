function posts(state=[], action) {
    switch(action.type) {
        case 'INCREMENT_LIKES':
            state[action.index].likes++;
            return [...state];
        default:
            return state;
    }

}

export default posts;
