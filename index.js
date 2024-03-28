import React from 'react';
import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

/*рендер начало*/
let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 addPost={store.addPost.bind(store)}
                 updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
/*рендер конец*/
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree); // observer

/*1.render находится в index,но его нужно передать в state,но передать не можем т.к
a)это будет цикл.зависимость
b) index импортирует state. и смотри a)
2.создали ф-ц subscribe с параметр observer,которая даёт себя на export и ждёт пока кто-то её пригласит
3.эту ф-ц принимает в гости index и даёт ей подарочек в виде render
4.subscribe возвращается домой c render(подарок) и распаковывает его*/

