import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import { Link } from 'react-router-dom'
import withScreen from '../../hoc/withScreen'
import getPost from '../../selectors/getPost';
import YouTube from 'react-youtube';

import styles from './styles.module.scss';

import {
    toggleFavorite
} from '../../actions'

/**
 * @class BlogDetailsView
 * @extends {Component}
 */
class BlogDetailsView extends Component {

    render() {
        const {
            post: {
                id,
                title,
                thumbnail,
                videoId,
                timeToRead,
            },
            toggleFavorite,
        } = this.props; 
        return (
            <div className={styles["BlogDetailsView"]}>
                <div>
                    <h1>{title}</h1>
                    <div onClick={ () => toggleFavorite( id ) }>Add to Favorites</div>
                    <div>{`${timeToRead} min to read`}</div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <YouTube 
                        videoId={videoId}
                        opts={{
                            height: '390',
                            width: '640',
                            playerVars: { // https://developers.google.com/youtube/player_parameters
                                autoplay: 0
                            }
                        }}
                        onReady={this._onReady} />
                </div>
                <div>
                    <img src={thumbnail} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    post: getPost( state, ownProps )
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
)(BlogDetailsView)
