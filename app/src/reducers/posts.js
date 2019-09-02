import { TOGGLE_FAVORITE } from "../actions";

/* 
  src/reducers/posts.js
*/
const initialState = {
    posts: { 
        // this data object being an object will make lookups faster if there were a lot of posts
        // on the other hand, looping over it will require it to be an array but this could be cached for faster looping
        // this is not the best example of this but if the data was enormous (like thousands of entries, the look up on an object would be O(1) vs O(n))
        // if there was a backend, this could be pushed onto the server but then you would need to make requests to the server each time, which could/would be pretty slow since, ideally, HTTP requests should be reduced
        '001': {
            id: '001',
            title: "Beautiful mountain landscapes",
            timeToRead: 5,
            created: "",
            videoYoutubeId: "iDlLCKnOB2M",
            image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
        },
        '002': {
            id: '002',
            title: "Mountains and more great mountains",
            timeToRead: 15,
            created: "",
            videoYoutubeId: "5yvHqXhMPss",
            image: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
            favorite: false,
        },
        '003': {
            id: '003',
            title: "Great mountains",
            timeToRead: 10,
            created: "",
            videoYoutubeId: "NhBzhi9jPFs",
            image: "https://images.unsplash.com/photo-1498051097915-0f8feaaba917?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
        },
        '004': {
            id: '004',
            title: "Climbing mountains",
            timeToRead: 25,
            created: "",
            videoYoutubeId: "2SaOEUZQ2G8",
            image: "https://images.unsplash.com/photo-1498598457418-36ef20772bb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjQwMTAyfQ&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
        },
    },
}
export default (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_FAVORITE:
            return {
                ...state,
                posts: { ...state.posts, [action.id]: { ...state.posts[action.id], favorite: !state.posts[action.id].favorite }},
            }


        default:
            return state
    }
}
