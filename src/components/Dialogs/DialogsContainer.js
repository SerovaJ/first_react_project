import React from 'react';
import { addDialogElementActionCreator, updateDialogElementActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
	let state = props.store.getState();

	let onAddMessage = () => {
		props.store.dispatch(addDialogElementActionCreator());
	}

	let onDialogChange = (textMessage) => {
		props.store.dispatch(updateDialogElementActionCreator(textMessage));
	}

	return <Dialogs addDialogElement = {onAddMessage} updateDialogElement = {onDialogChange}
		dialogs = {state.dialogsPage.dialogs}
		messages = {state.dialogsPage.messages}
		newMessage = {state.profilePage.newMessage}
	/>
}

export default DialogsContainer;
