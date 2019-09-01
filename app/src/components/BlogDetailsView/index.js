import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import withScreen from '../../hoc/withScreen'
import getPost from '../../selectors/getPost';

/**
 * @class BlogDetailsView
 * @extends {Component}
 */
class BlogDetailsView extends Component {

    render() {
        console.log( "blog details view", this.props)
        const {
            title
        } = this.props.post
        return (
            <div className={classnames("screen", styles["BlogDetailsView"])}>
                <h1>{title}</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: getPost( state, ownProps )
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    (component) => withScreen(component, 'from-left'),
)(BlogDetailsView)
