const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Миша'},
        {id: 3, name: 'Глаша'},
        {id: 4, name: 'Yura'},
        {id: 5, name: 'Oleg'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'эщькере'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Sky'}
    ],

};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length+1, message: action.newMessageBody}]
            };
        default:
            return state;
    }
}

export const sendMessage = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody}) // ActionCreator
export default dialogsReducer;