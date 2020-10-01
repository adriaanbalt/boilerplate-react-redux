import React from 'react';
import { render } from '@testing-library/react';
import withScreen from '../../hoc/withScreen'
import Empty from './index.js';
import { Provider } from 'react-redux'
import store, { history } from '../../Store';

test("Does EMPTY render", () => {
    const { getByText } = render(
        <Provider store={store}>
            <Empty />
        </Provider>
    );
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
})