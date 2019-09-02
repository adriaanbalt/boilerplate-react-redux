export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SELECT_SORT_OPTION = 'SELECT_SORT_OPTION'

export const toggleFavorite = (id) => (dispatch) => {
    dispatch({
        type: TOGGLE_FAVORITE,
        id,
    })
}

export const selectSortOption = (selected) => (dispatch) => {
    dispatch({
        type: SELECT_SORT_OPTION,
        selected,
    })
}