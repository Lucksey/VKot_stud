let rerenderEntireTree = () => {

}

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

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4, message: state.profilePage.newPostText, likeCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}

export default state;
/*1.render находится в index,но его нужно передать в state,но передать не можем т.к
a)это будет цикл.зависимость
b) index импортирует state. и смотри a)
2.создали ф-ц subscribe с параметр observer,которая даёт себя на export и ждёт пока кто-то её пригласит
3.эту ф-ц принимает в гости index и даёт ей подарочек в виде render
4.subscribe возвращается домой c render(подарок-observer) и распаковывает его*/
