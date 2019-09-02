import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Header from './components/Header'
import BlogListView from './components/BlogListView'
import BlogDetailsView from './components/BlogDetailsView'

import styles from './App.module.scss'

import SearchSetup from './components/Search/setup';

const TIMEOUT = 600
const TRANSITION_CLASS = 'route-transition'

const ScreenTransition = ({
  animationKey,
  children,
  noTimeout,
  appear = false, /* should the transition play when the screen is initially mounted (i.e. the app's initial screen)? */
}) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={animationKey}
        timeout={noTimeout ? TIMEOUT : TIMEOUT}
        classNames={TRANSITION_CLASS}
        appear={appear}
      >
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  
  componentDidMount = () => {
    this.appLoaded()
  }

  appLoaded = () => {
    // this happens on first mount of the app (this could be after a loader)
    // create search index
    // need to convert the object version of the posts into an array to be manipulated by the search index
    SearchSetup.createFromData( Object.entries(this.props.posts).map(post=>post[1]) )
  }
  
  render() {
    const { 
      location,
    } = this.props
    return (
      <React.Fragment>
        <Header/>
        <div className={styles.ScreenContainer}>
          <Switch location={location}>
            <Route exact
              path={`/`}
              render={
                () => (
                  <ScreenTransition animationKey={location.key}>
                    <BlogListView {...this.props} />
                  </ScreenTransition>
                )
              }
            />
            <Route exact
              path={`/details/:id`}
              render={
                // using render() because this enables animating between screens (see above ScreenTransition wrapper)
                // @see https://reacttraining.com/react-router/web/api/Route/render-func
                // @see https://github.com/ReactTraining/react-router/issues/5870
                // however, when using render() the query params are not passed to the child component
                // this being the case, you must pass this.props down
                // unfortunately match.params will still not provide the :id as expected
                // you will need to deconstruct the url within the child component
                () => (
                  <ScreenTransition animationKey={location.key}>
                    <BlogDetailsView {...this.props} />
                  </ScreenTransition>
                )
              }
            />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.PostsReducer.posts,
})

const mapDispatchToProps = ( dispatch ) => bindActionCreators({
}, dispatch )

export default withRouter( connect(
  mapStateToProps,
  mapDispatchToProps
)( App ))
