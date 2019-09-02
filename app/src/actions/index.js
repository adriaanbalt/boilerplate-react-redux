export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'

export const toggleFavorite = (id) => (dispatch) => {
    console.log( 'toggleFavorite', id)
    dispatch({
        type: TOGGLE_FAVORITE,
        id,
    })
}