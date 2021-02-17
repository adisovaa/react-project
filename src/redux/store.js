// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi it is my first message', likesCount: 12},
//                 {id: 2, message: 'Hi message', likesCount: 34},
//                 {id: 3, message: 'message', likesCount: 3},
//             ],
//             newPostText: 'type your messages'
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 'Maraya'},
//                 {id: 2, name: 'Elon'},
//                 {id: 3, name: 'Mark'},
//                 {id: 4, name: 'Karina'},
//                 {id: 5, name: 'Steve'},
//             ],
//             messages: [
//                 {id: 1, message: 'hello, baby!'},
//                 {id: 2, message: 'hello, baby!'},
//                 {id: 3, message: 'hello, baby!'},
//                 {id: 4, message: 'hello, baby!'},
//                 {id: 5, message: 'hello, baby!'},
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {  //action === actionCreator (EX. addPostActionCreator)
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
//
// export default store