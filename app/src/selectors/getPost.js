import { createSelector } from 'reselect'

const getPosts = state => state.PostsReducer

export default createSelector(
    getPosts,
    (posts) => {
        posts
    }
)