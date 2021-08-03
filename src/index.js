import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './store/reducers';
import createSageMiddleware from 'redux-saga';
import watchers from "./store/sagas";
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import "i18next";
import thunk from "redux-thunk";
import Modal from 'react-modal'


Modal.setAppElement(document.body)



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const saga = createSageMiddleware();

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(saga)),
);

saga.run(watchers)



ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
