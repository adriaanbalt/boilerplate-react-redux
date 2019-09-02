import { SELECT_SORT_OPTION } from "../actions";

/* 
  src/reducers/posts.js
*/
const initialState = {
    sortOptions: [
        { 
            id: "alphabetical",
            label: "Alphabetical",
        },
        { 
            id: "chronological",
            label: "Chronological",
        },
        { 
            id: "duration",
            label: "Time to Read",
        },
        { 
            id: "hasVideo",
            label: "Has Video?",
        },
    ],
    selected: "alphabetical"
}
export default (state = initialState, action) => {
    switch (action.type) {

        case SELECT_SORT_OPTION:
            return {
                ...state,
                selected: action.selected
            }

        default:
            return state
    }
}
