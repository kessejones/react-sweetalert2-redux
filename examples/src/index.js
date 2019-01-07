import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppRedux from './AppRedux';
import ReduxSweetAlert2, { reducer } from '../../lib/index';

const rootReducers = combineReducers({
    sweetalert2: reducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <AppRedux />
        <ReduxSweetAlert2 />
    </Provider>
);

ReactDOM.render(<App/>, document.getElementById('root'));
