import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree); // observer


