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
        {id: 1, message: 'hello'},
        {id: 2, message: 'lool'},
        {id: 3, message: 'yep'},
        {id: 4, message: 'fine'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body}]
            };
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessageBody) => ({type: 'SEND_MESSAGE', newMessageBody})

export default dialogsReducer
