import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

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
            ],
            newMessageBody: ""
        },
        sidebar: {}
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
        this ._state.profilePage = profileReducer(this._state.profilePage, action);
        this ._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this ._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
