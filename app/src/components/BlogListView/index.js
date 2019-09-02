import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import withScreen from '../../hoc/withScreen'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

import {
    toggleFavorite
} from '../../actions'


const BlogListViewItem = ({ title, id, image, favorite, toggleFavorite }) => (
    <div className={styles.listItem} >
        <Link to={`/details/${id}`}>{title}</Link>
        <span style={{ color: 'red' }} onClick={() => toggleFavorite(id) }>
        {
            !favorite
            &&
            <IoIosHeartEmpty/>
        }
        {
            favorite
            &&
            <IoIosHeart />
        }
        </span>
        <img src={image}/>
    </div>
)

/**
 * @class BlogListView
 * @extends {Component}
 */
class BlogListView extends Component {

    render() {
        const { posts, toggleFavorite, sort, searchResults } = this.props
        return (
            <div className={styles.BlogListView}>
                <h1>List View</h1>
                <div className={styles.listContainer}>
                {
                    // converting to an array from an object of keys
                    // we can talk about this in person but the idea here is to reduce lookups with javascript cached data
                    // ideally data is downloaded once and cached, then the frontend can look it up quickly if the data is objects
                    // i've been trying this technique more recently when I've been handling hundreds of thousands of data entries (still on the fence but I'm kind of liking it at this time)
                    Object.entries(posts)
                        .filter( post => {
                            if ( searchResults.length ) {
                                return searchResults.indexOf(post[1].id) >= 0
                            } else {
                                return true
                            }
                        })
                        .sort( (a,b) => {
                            // sort 
                            if ( sort.sortOptions[sort.selected].type === 'number' ) {
                                return a[1][sort.selected] - b[1][sort.selected] // comparing numbers (like chronological order or how long it takes to read the article)
                            } else if ( sort.sortOptions[sort.selected].type === 'letter' ) {
                                return a[1][sort.selected] > b[1][sort.selected] // order by the title alphabeticall
                            } else if (sort.sortOptions[sort.selected].type === 'boolean') {
                                return b[1][sort.selected] - a[1][sort.selected] // order by boolean, like by favorite (flipped versus number because we want true to be first)
                            }
                        })
                        .map((post, index) => {
                            // post is an object of (key, value) @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
                            return <BlogListViewItem key={`key-BlogListViewItem-${index}`} {...post[1]} toggleFavorite={toggleFavorite} />
                        })
                }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.PostsReducer.posts,
    sort: state.SortReducer,
    searchResults: state.SearchReducer.results,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleFavorite,
}, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    (component) => withScreen(component, 'from-left'),
)(BlogListView)
