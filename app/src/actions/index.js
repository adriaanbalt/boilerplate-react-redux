import SearchSetup from '../components/Search/setup'

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const SELECT_SORT_OPTION = 'SELECT_SORT_OPTION'
export const PERFORM_SEARCH = 'PERFORM_SEARCH'

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

export const performSearch = (query) => async (dispatch) => {
    const results = await SearchSetup.performSearch(query)
    dispatch({
        type: PERFORM_SEARCH,
        query,
        results,
    })
}