import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return <div className = {s.dialog}>
		<NavLink to = {path}>{props.name}</NavLink>
	</div>
}

const Message = (props) => {
	return <div className = {s.message}>{props.message}</div>
}

const Dialogs = () => {
	let dialogs = [
		{id: 1, name: 'Juliya'},
		{id: 2, name: 'Anton'},
		{id: 3, name: 'Sofiya'},
		{id: 4, name: 'Valeriya'},
	]

	let messages = [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hello'},
		{id: 3, message: 'Aloha'},
		{id: 4, message: 'How are you?'},
	]

	let dialogsElements = dialogs.map (d => <DialogItem name = {d.name} id = {d.id} />);

	let messagesElements = messages.map (m => <Message message = {m.message} />);

	return (
		<div className = {s.dialogs}>
			<div className = {s.items}>
				{dialogsElements}
			</div>

			<div className = {s.messages}>
				{messagesElements}
			</div>
		</div>
	);
}

export default Dialogs;
