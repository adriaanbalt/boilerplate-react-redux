import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import withScreen from '../../hoc/withScreen'

const BlogListViewItem = ({ title, id }) => (
    <Link to={`/details/${id}`}>{title}</Link>
)

/**
 * @class BlogListView
 * @extends {Component}
 */
class BlogListView extends Component {

    render() {
        return (
            <div className={classnames(styles["BlogListView"], "screen")}>
                <h1>List View</h1>
                {
                    this.props.posts.map((post, index) => <BlogListViewItem key={`key-BlogListViewItem-${index}`} {...post} />)
                }
                <Link to="/">Home</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.PostsReducer.posts,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    (component) => withScreen(component, 'from-left'),
)(BlogListView)
