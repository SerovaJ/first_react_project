const ADD_DIALOG_ELEMENT = 'ADD-DIALOG-ELEMENT';
const UPDATE_DIALOG_ELEMENT = 'UPDATE-DIALOG-ELEMENT';

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_DIALOG_ELEMENT:
			let newMessage = {
				id: 5,
				message: state.newMessage,
			}
	
			state.messages.push(newMessage);
			state.newMessage = '';
			return state;

		case UPDATE_DIALOG_ELEMENT:
			state.newMessage = action.dialogMessage;
			return state;

		default:
			return state;
	}
}

export const addDialogElementActionCreator = () => ({
	type: ADD_DIALOG_ELEMENT,
})

export const updateDialogElementActionCreator = (textMessage) => ({
	type: UPDATE_DIALOG_ELEMENT,
	dialogMessage: textMessage
})

export default dialogsReducer;
