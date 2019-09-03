# Hello!  My name is Adriaan Balt and I built this blog platform from scratch using [Create React App](https://github.com/facebook/create-react-app) in about 10 working hours.

## You can find more information about me at:
* [Website](http://www.adriaanbalt.com) 
* [Resume](http://www.adriaanbalt.com/assets/Adriaan-Balt-resume.pdf)
* [LinkedIn profile](https://linkedin.com/in/adriaanbalt) 
* [Github profile](https://github.com/adriaanbalt)

## Files and Folders explanation
* `/globalStyles` is where universal files are located.  They are loaded into /index.scss which does not include `module` in its name so it does not act like a css module.
* React directives can be found in the `/components` folder, including the screens themselves as their helper directives like `Search` or `DropDown`
* There is an analytics middleware that is able to catch each action that is performed.  As you can see in that file, some actions have been chosen to dispatch analytics events to the server (there is no server but this is where that functionality would exist)
* Using HOC to have inheritance between the screens, which helps with the animations as well as the responsiveness of the app.  If I had more time I would further flesh out the animations.
* The data is stored within the `reducers` folder and is combined together in the `Store.js` file.
* Selectors are used to memoize and quickly retrieve state.
* Actions are available across the app located in the `actions` folder.
* The blog posts are located in `/app/src/reducers/posts.js`.  You can add or update them there.  If there was a backend, this reducer would be hydrated by the backend service.
* I made the blog posts an object because it would allow for faster look ups rather than searching through arrays in various circumstances.  I could have taken the array approach but I like to try O(1) whenever I can.

## Things I would have liked to get to:
* Flesh out the i18n helper to make the hard coded copy easier to translate
* Implement related posts at the bottom of each article
* Enable sharing functionality of some sort
* Maybe built a drawer for mobile but not sure what I would put in it. (maybe my list of favorite articles...)
* I would have liked to animate between sort and search lists (although I'm happy I have cross fade between the screens)
* A backend possibly built with Node
* The ability to make comments on the posts
* Add analyzer to review bundle sizes

## Strange things
* There is a warning from router but the creators of React Router haven't fixed it yet, not sure why that is the case. [See more here](https://github.com/ReactTraining/react-router/issues/6382)

## How to run the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
