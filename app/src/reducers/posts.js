/* 
  src/reducers/posts.js
*/
const initialState = {
    posts: {
        '001': {
            title: "Post 001"
        },
        '002': {
            title: "Post 002"
        },
    }
}
export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
