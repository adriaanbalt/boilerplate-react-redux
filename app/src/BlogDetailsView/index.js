import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

const mapStateToProps = state => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch)

/**
 * @class App
 * @extends {Component}
 */
class BlogDetailsView extends Component {

    render() {
        return (
            <div className="BlogDetailsView">
                <h1>DETAIL</h1>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetailsView);
