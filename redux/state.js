import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [{id: 1, message: 'Hi! How are you?', likeCount: 2},
            {id: 2, message: 'It\'s my first message', likeCount: 25},
            {id: 3, message: 'It\'s my second message', likeCount: 27},],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Миша'},
            {id: 3, name: 'Глаша'},
            {id: 4, name: 'Yaura'},
            {id: 5, name: 'Oleg'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'эщькере'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Sky'}
        ]
    },
    sidebat: {}
}

/*window.state = state;*/

export let addPost = () => {
    let newPost = {
        id: 4, message: state.profilePage.newPostText, likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;