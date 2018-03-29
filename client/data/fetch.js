import {getComments} from "../actions/actionCreators";
import {getPosts} from "../actions/actionCreators";

function fetchComments () {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(getComments(responseJson));
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

function fetchPosts () {
    return function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch(getPosts(responseJson));
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function init (store) {
    store.dispatch(fetchComments());
    store.dispatch(fetchPosts());
}