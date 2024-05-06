const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE}) // ActionCreator
export const updateNewMessageBody = (body) =>           // ActionCreator
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;