import React from 'react';
import ReactDOM from 'react-dom';
import { createStore ,applyMiddleware,compose} from 'redux'
//provider 应用在最外层，传入store即可，只用一次
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import {counter} from './index.redux'
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'; // redux-thunk可以用来处理异步
const store =  createStore(counter,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

ReactDOM.render(
    <Provider store={store}>
         <App/>
    </Provider>,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
