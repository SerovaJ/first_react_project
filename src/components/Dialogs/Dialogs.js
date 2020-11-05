import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	let path = "/dialogs" + props.id;

	return <div className={s.dialog}>
		<NavLink to={path}>{props.name}</NavLink>
	</div>
}

const Message = (props) => {
	return <div className={s.message}>{props.message}</div>
}

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.items}>
				<DialogItem name="Juliya" id="1" />
				<DialogItem name="Anton" id="2" />
				<DialogItem name="Sofiya" id="3" />
				<DialogItem name="Valeriya" id="4" />
			</div>

			<div className={s.messages}>
				<Message message="Hi" />
				<Message message="Hello" />
				<Message message="Aloha" />
				<Message message="How are you?" />
			</div>
		</div>
	);
}

export default Dialogs;
