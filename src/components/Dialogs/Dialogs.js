import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.dialogs.map ((d, index) => <DialogItem name = {d.name} id = {d.id} key = {index} />);

	let messagesElements = props.messages.map ((m, index) => <Message message = {m.message} key = {index} />);

	let onAddMessage = () => {
		props.addDialogElement();
	}

	let onDialogChange = (e) => {
		let textMessage = e.target.value;
		props.updateDialogElement(textMessage);
	}

	return (
		<div className = {s.dialogs}>
			<div className = {s.items}>
				{dialogsElements}
			</div>

			<div className = {s.messages}>
				{messagesElements}

				<div className = {s.form}>
					<p>
						<textarea
							onChange={onDialogChange}
							rows="5"
							placeholder="Your message..."
							value = {props.newMessage}
						></textarea>
					</p>
					<div className = {s.wrapper_button}>
						<button onClick={onAddMessage} className="Button">
							Send message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
