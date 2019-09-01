export default store => next => action => {
    // for specific actions, run analytics calls to the end point
    // useful to consolidate analytics into a single place as opposed to spreading it across the app
    return next(action)
}