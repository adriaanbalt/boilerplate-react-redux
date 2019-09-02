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
            created: 1553486400,
            videoId: "iDlLCKnOB2M",
            thumbnail: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            favorite: false,
        },
        '002': {
            id: '002',
            title: "Mountains and more great mountains",
            timeToRead: 15,
            created: 925963200,
            videoId: "5yvHqXhMPss",
            thumbnail: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80",
            favorite: false,
        },
        '003': {
            id: '003',
            title: "Great mountains",
            timeToRead: 10,
            created: 1554523200,
            videoId: "NhBzhi9jPFs",
            thumbnail: "https://images.unsplash.com/photo-1483197452165-7abc4b248905?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            favorite: false,
        },
        '004': {
            id: '004',
            title: "Climbing mountains",
            timeToRead: 25,
            created: 1526097600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1472060650787-9726edbd6bd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
            favorite: false,
        },
        '005': {
            id: '005',
            title: "River delta",
            timeToRead: 3,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1483639033054-d6b9cf0eb19c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
            favorite: false,
        },
        '006': {
            id: '006',
            title: "Canyon River",
            timeToRead: 3,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506355683710-bd071c0a5828?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
        },
        '007': {
            id: '007',
            title: "River and Mountains",
            timeToRead: 3,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1494783329112-4a6795291178?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            favorite: false,
        },
        '008': {
            id: '008',
            title: "Beach palm trees",
            timeToRead: 6,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
            favorite: false,
        },
        '009': {
            id: '009',
            title: "Blue beach with island",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
            favorite: false,
        },
        '010': {
            id: '010',
            title: "Boats near the beach",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=704&q=80",
            favorite: false,
        },
        '011': {
            id: '011',
            title: "Walking in the desert",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1506773090264-ac0b07293a64?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
            favorite: false,
        },
        '012': {
            id: '012',
            title: "Desert camels",
            timeToRead: 9,
            created: 1413345600,
            videoId: "2SaOEUZQ2G8",
            thumbnail: "https://images.unsplash.com/photo-1505925119181-3537e71dbc72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
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
