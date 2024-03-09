let state = {
    profilePage: {
        posts: [{id: 1, message: 'Hi! How are you?', likeCount: 2},
            {id: 2, message: 'It\'s my first message', likeCount: 25},
            {id: 3, message: 'It\'s my second message', likeCount: 27},
            {id: 4, message: 'It\'s my treteee message', likeCount: 29},
            {id: 5, message: 'It\'s my tresdf234teee message', likeCount: 28989},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Миша'},
            {id: 3, name: 'Глаша'},
            {id: 4, name: 'Yaura'},
            {id: 5, name: 'Oleg'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'эщькере'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Sky'},
        ]
    },
}

export let addPost = (postMessage) => {
    let newPost ={
        id: 6,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost);
}

export default state;