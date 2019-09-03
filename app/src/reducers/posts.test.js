import { TOGGLE_FAVORITE } from "../actions";
import PostsReducer from './posts'

// after toggling a favorite on a specified item, make sure that it's property is updated correctly in the reducer
test("TOGGLE_FAVORITE toggles an individual post's favorite status", () => {
    const startingState = {
        posts: {
            '001': {
                favorite: false,
            }
        }
    }

    const action = {
        type: TOGGLE_FAVORITE,
        id: '001'
    }

    const state = PostsReducer(startingState, action)
    expect(state.posts).toEqual({
        '001': {
            favorite: true,
        }
    })
})