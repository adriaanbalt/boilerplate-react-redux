/* 
  src/reducers/posts.js
*/
const initialState = {
    posts: [
        {
            id: '001',
            title: "Post 001"
        },
        {
            id: '002',
            title: "Post 002"
        },
    ]
}
export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
