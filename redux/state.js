const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed!')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 4, message: this._state.profilePage.newPostText, likeCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
/*export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}*/

export default store;
window.store = store;
