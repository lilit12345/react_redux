//increment likes
export const increment = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}
//add comment
export const addComment = (postId, author, comment) => {
    console.log("Dispatching add comment");
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}
//remove comment
export const removeComment = (postId, i) => {
    return {
        type: 'REMOVE_COMMENT',
        postId,
        i
    }

}

//get posts
export const getPosts = (payload) => {
    return {
        type: "GET_POSTS",
        payload
    }
}

//get comments
export const getComments = (payload) => {
    return {
        type: "GET_COMMENTS",
        payload
    }
}