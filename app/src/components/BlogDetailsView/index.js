import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

/**
 * @class BlogDetailsView
 * @extends {Component}
 */
class BlogDetailsView extends Component {

    render() {
        console.log( 'blog details view', this.props)
        return (
            <div className={styles["BlogDetailsView"]}>
                <h1>DETAIL</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsView);
