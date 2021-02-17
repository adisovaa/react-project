const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Maraya'},
        {id: 2, name: 'Elon'},
        {id: 3, name: 'Mark'},
        {id: 4, name: 'Karina'},
        {id: 5, name: 'Steve'},
    ],
    messages: [
        {id: 1, message: 'hello, baby!'},
        {id: 2, message: 'hello, baby!'},
        {id: 3, message: 'hello, baby!'},
        {id: 4, message: 'hello, baby!'},
        {id: 5, message: 'hello, baby!'},
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE :
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: 'SEND_MESSAGE'})
export const updateNewMessageBodyCreator = (body) =>
    ({type: 'UPDATE_NEW_MESSAGE_BODY', body: body})

export default dialogsReducer
