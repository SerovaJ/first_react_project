import React from 'react';
import { addDialogElementActionCreator, updateDialogElementActionCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
	let dialogsElements = props.dialogsPage.dialogs.map ((d, index) => <DialogItem name = {d.name} id = {d.id} key = {index} />);

	let messagesElements = props.dialogsPage.messages.map ((m, index) => <Message message = {m.message} key = {index} />);

	let addMessage = () => {
		props.dispatch(addDialogElementActionCreator());
	}

	let onDialogChange = (e) => {
		let textMessage = e.target.value;
		props.dispatch(updateDialogElementActionCreator(textMessage));
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
						<button onClick={addMessage} className="Button">
							Send message
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
