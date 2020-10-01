import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'

import withScreen from '../../hoc/withScreen'
import {
} from '../../actions'

import styles from './styles.module.scss'

/**
 * @class Empty
 * @extends {Component}
 */
class Empty extends Component {

    render() {
        return (
            <section>Learn React</section>
        )
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
    (component) => withScreen(component, 'from-left'), // this technique allows for custom transitions between screens
)(Empty)
