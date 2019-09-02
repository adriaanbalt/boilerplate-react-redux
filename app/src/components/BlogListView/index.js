import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import withScreen from '../../hoc/withScreen'
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import Moment from 'moment'

import {
    toggleFavorite
} from '../../actions'


const BlogListViewItem = ({ title, id, thumbnail, favorite, toggleFavorite, created, timeToRead }) => {
    const momentDate = Moment.unix( created )
    return (
        <div className={styles.listItem}>
            <Link to={`/details/${id}`}>
                <div className={styles.imgContainer}>
                    <img src={thumbnail}/>
                </div>
                <h2>{title}</h2>
                <div className={styles.bottom}>
                    <div>
                        {
                            momentDate.format('MMMM D, YYYY')
                        }
                    </div>
                    <div>
                        {
                            `${timeToRead} min to read`
                        }
                    </div>
                </div>
            </Link>
            <span className={ styles.favoriteContainer } onClick={() => toggleFavorite(id)}>
            {
                !favorite
                &&
                <IoIosHeartEmpty size={20}/>
            }
            {
                favorite
                &&
                <IoIosHeart size={20}/>
            }
            </span>
        </div>
    )
}

/**
 * @class BlogListView
 * @extends {Component}
 */
class BlogListView extends Component {

    render() {
        const { posts, toggleFavorite, sort, searchResults } = this.props
        return (
            <div className={styles.BlogListView}>
                <div className={styles.listContainer}>
                {
                    // converting to an array from an object of keys
                    // we can talk about this in person but the idea here is to reduce lookups with javascript cached data
                    // ideally data is downloaded once and cached, then the frontend can look it up quickly if the data is objects
                    // i've been trying this technique more recently when I've been handling hundreds of thousands of data entries (still on the fence but I'm kind of liking it at this time)
                    Object.entries(posts)
                        .filter( post => {
                            // search
                            if ( searchResults.length ) {
                                // filter if there are search results
                                return searchResults.indexOf(post[1].id) >= 0
                            } else {
                                // if there are no results then show all posts
                                return true
                            }
                        })
                        .sort( (a,b) => {
                            // sort 
                            if ( sort.sortOptions[sort.selected].type === 'number' || sort.sortOptions[sort.selected].type === 'boolean' ) {
                                // comparing numbers (like chronological order or how long it takes to read the article)
                                // order by boolean, like by favorite (flipped versus number because we want true to be first)
                                return b[1][sort.selected] - a[1][sort.selected] 
                            } else if ( sort.sortOptions[sort.selected].type === 'letter' ) {
                                // order by the title alphabeticall
                                return a[1][sort.selected] > b[1][sort.selected] ? 1 : -1
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
