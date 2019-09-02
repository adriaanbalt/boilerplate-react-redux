import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux'
import YouTube from 'react-youtube';
import { IoIosArrowDown } from 'react-icons/io';
import withScreen from '../../hoc/withScreen'
import getPost from '../../selectors/getPost';

import styles from './styles.module.scss';

import {
    toggleFavorite
} from '../../actions'
import FavoriteHeart from '../FavoriteHeart';

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
                body,
                favorite,
            },
            toggleFavorite,
        } = this.props; 
        return (
            <section className={styles["BlogDetailsView"]}>
                <header>
                        <div className={styles.headerItem}>
                            <h1>{title}</h1>
                            <FavoriteHeart id={id} favorite={favorite} toggleFavorite={toggleFavorite} size={30}/>
                            <div>{`${timeToRead} min to read`}</div>
                            <IoIosArrowDown className={styles.arrowDownIcon } size={32}/>
                        </div>
                        <div className={styles.headerItem}>
                            <img src={thumbnail} />
                        </div>
                </header>
                <article className={styles.videoContainer}>
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
                </article>
                <article className={styles.body} dangerouslySetInnerHTML={{ __html: body }}></article>
            </section>
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
