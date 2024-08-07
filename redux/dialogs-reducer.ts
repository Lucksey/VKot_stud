const SEND_MESSAGE = 'SEND_MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Миша'},
        {id: 3, name: 'Глаша'},
        {id: 4, name: 'Yura'},
        {id: 5, name: 'Oleg'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'эщькере'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Sky'}
    ] as Array<MessageType>,

};

export type InitialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

export const sendMessage = (newMessageBody: string): SendMessageActionType => ({type: SEND_MESSAGE, newMessageBody}) // ActionCreator
export default dialogsReducer;