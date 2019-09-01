import React, { Component } from 'react';
import styles from './styles.module.scss';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import withScreen from '../../hoc/withScreen'

/**
 * @class BlogDetailsView
 * @extends {Component}
 */
class BlogDetailsView extends Component {

    render() {
        return (
            <div className={classnames("screen", styles["BlogDetailsView"])}>
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

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    (component) => withScreen(component, 'from-left'),
)(BlogDetailsView)
