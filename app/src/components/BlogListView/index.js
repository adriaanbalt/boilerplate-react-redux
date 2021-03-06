import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import Moment from 'moment'

import withScreen from '../../hoc/withScreen'
import FavoriteHeart from '../FavoriteHeart'
import DropDown from '../DropDown'
import Search from '../Search'
import {
    toggleFavorite,
    selectSortOption,
} from '../../actions'

import styles from './styles.module.scss'

const BlogListViewItem = ({ title, id, thumbnail, favorite, toggleFavorite, created, timeToRead }) => {
    const momentDate = Moment.unix( created )
    return (
        <article className={styles.listItem}>
            <Link to={`/details/${id}`}>
                <div className={styles.imgContainer}>
                    <img src={thumbnail} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className={styles.bottom}>
                    <p>
                        {
                            momentDate.format('MMMM D, YYYY')
                        }
                    </p>
                    <p>
                        {
                            `${timeToRead} min to read`
                        }
                    </p>
                </div>
            </Link>
            <FavoriteHeart id={id} favorite={favorite} toggleFavorite={toggleFavorite} size={20} />
        </article>
    )
}

/**
 * @class BlogListView
 * @extends {Component}
 */
class BlogListView extends Component {

    render() {
        const { 
            posts, 
            toggleFavorite, 
            sort, 
            searchResults,
            selectSortOption,
        } = this.props
        return (
            <section className={styles.BlogListView}>
                <div className={styles.customizeOptions}>
                    <div>
                        <Search />
                    </div>
                    <div>
                        <span>Sort:</span>
                        <DropDown handleChange={selectSortOption} value={sort.value}>
                            {
                                Object.entries(sort.sortOptions).map( option => option[1] ).map((option, index) => {
                                    return <option key={`sort-option-${index}`} value={option.id}>{option.label}</option>
                                })
                            }
                        </DropDown>
                    </div>
                </div>
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
                            return 1;
                        })
                        .map((post, index) => {
                            // post is an object of (key, value) @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
                            return <BlogListViewItem key={`key-BlogListViewItem-${index}`} {...post[1]} toggleFavorite={toggleFavorite} />
                        })
                }
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.PostsReducer.posts,
    sort: state.SortReducer,
    searchResults: state.SearchReducer.results,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    toggleFavorite,
    selectSortOption,
}, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    (component) => withScreen(component, 'from-left'), // this technique allows for custom transitions between screens
)(BlogListView)
