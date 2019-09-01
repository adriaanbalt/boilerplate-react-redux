import { createSelector } from 'reselect'

const getPosts = state => state.PostsReducer.posts

export default createSelector(
    getPosts,
    (posts) => posts.filter( post => post.id === '001' )
)