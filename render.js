import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
/*
оставлено на черный день
export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>
    );
}
*/
