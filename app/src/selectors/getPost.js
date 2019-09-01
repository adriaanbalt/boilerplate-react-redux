import { createSelector } from 'reselect'

const getPosts = state => state.PostsReducer.posts

const selectPostFromParams = (state, props) => {
    // see comments in app/src/App.js for more information on why destructuring is happening here
    return props.location.pathname.split('/')[2]
}

export default createSelector(
    [getPosts, selectPostFromParams],
    (posts, id) => posts.filter( post => post.id === id )[0]
)