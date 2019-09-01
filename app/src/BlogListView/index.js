import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
    posts: state.PostsReducer.posts,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

/**
 * @class App
 * @extends {Component}
 */
class BlogListView extends Component {

    render() {
        console.log('blog list view', this.props)
        return (
            <div className={styles["BlogListView"]}>
                <h1>List View</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogListView);
