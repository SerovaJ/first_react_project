import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map ((d, index) => <DialogItem name = {d.name} id = {d.id} key = {index} />);

	let messagesElements = props.messages.map ((m, index) => <Message message = {m.message} key = {index} />);

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
