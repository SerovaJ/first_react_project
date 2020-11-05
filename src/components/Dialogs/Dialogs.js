import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = () => {
	return (
		<div className={s.dialogs}>
			<div className={s.items}>
				<div className={s.dialog + ' ' + s.active}>
					Juliya
				</div>
				<div className={s.dialog}>
					Anton
				</div>
				<div className={s.dialog}>
					Sofiya
				</div>
				<div className={s.dialog}>
					Valeriya
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>
					Hi
				</div>
				<div className={s.message}>
					Hello
				</div>
				<div className={s.message}>
					Aloha
				</div>
				<div className={s.message}>
					How are you?
				</div>
			</div>
		</div>
	);
}

export default Dialogs;
