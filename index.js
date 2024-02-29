import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [{id: 1, message: 'Hi! How are you?', likeCount: 2},
    {id: 2, message: 'It\'s my first message', likeCount: 25},
    {id: 3, message: 'It\'s my second message', likeCount: 27},
    {id: 3, message: 'It\'s my treteee message', likeCount: 29},
    {id: 3, message: 'It\'s my tresdf234teee message', likeCount: 28989},
]

let dialogs = [
    {id: 1, name: 'Sasha'},
    {id: 2, name: 'Миша'},
    {id: 3, name: 'Глаша'},
    {id: 4, name: 'Yaura'},
    {id: 5, name: 'Oleg'},
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'эщькере'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Sky'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
