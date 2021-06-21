import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'It\'s your new program!', likesCount: 12},
				{id: 2, message: 'Hello!', likesCount: 11},
			],
	
			newPostText: '',
		},

		dialogsPage: {
			dialogs: [
				{id: 1, name: 'Juliya'},
				{id: 2, name: 'Anton'},
				{id: 3, name: 'Sofiya'},
				{id: 4, name: 'Valeriya'},
			],

			messages: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'Hello'},
				{id: 3, message: 'Aloha'},
				{id: 4, message: 'How are you?'},
			],

			newMessage: '',
		}
	},

	_callSubscriber() {
		console.log('State changed')
	},

	getState() {
		return this._state;
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

		this._callSubscriber(this._state);
	}
}

export default store;
