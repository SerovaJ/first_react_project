import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
	return (
		<nav className="Navbar">
			<ul className={s.list}>
				<li className={s.item}>
					<NavLink to="/profile" className={s.item_link} activeClassName={s.active}>Profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/dialogs" className={s.item_link} activeClassName={s.active}>Messages</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/news" className={s.item_link} activeClassName={s.active}>News</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/music" className={s.item_link} activeClassName={s.active}>Music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to="/settings" className={s.item_link} activeClassName={s.active}>Settings</NavLink>
				</li>
			</ul>
		</nav>
	);
}
export default Navbar;
