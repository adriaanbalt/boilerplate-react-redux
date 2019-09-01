import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import BlogListView from './BlogListView'
import BlogDetailsView from './BlogDetailsView'

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
  render() {
    const { location } = this.props
    return (
      <React.Fragment>
        <Switch location={location}>
          <Route exact
            path={`/`}
            render={
              () => (
                <ScreenTransition animationKey={location.key}>
                  <BlogListView />
                </ScreenTransition>
              )
            }
          />
          <Route
            path={`/details/:id`}
            render={
              () => (
                <ScreenTransition animationKey={location.key}>
                  <BlogDetailsView />
                </ScreenTransition>
              )
            }
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(connect(
  null,
  null,
)(App))