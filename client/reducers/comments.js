function postComments(state=[], action) {
    switch(action.type) {
        case 'ADD_COMMENT':
            return [...state, {
                text: action.comment,
                user: action.author
            }];
        case 'REMOVE_COMMENT':
            console.log("Removing a comment")
            return [
                ...state.filter((comment, i) => i !== action.i)
            ];
        default:
            return state;
    }
}

function comments(state = [], action) {
    if(typeof action.postId !== 'undefined') {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments;