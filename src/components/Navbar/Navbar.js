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

			<div className={s.friends}>
				<NavLink to="/friends" className={s.friendsLink}>Friends</NavLink>

				<div className={s.friendsList}>
					<a className={s.friendsItem}>
						<p className={s.friendsName}>Anton</p>
					</a>
					<a className={s.friendsItem}>
						<p className={s.friendsName}>Sofiya</p>
					</a>
					<a className={s.friendsItem}>
						<p className={s.friendsName}>Valeriya</p>
					</a>
				</div>
			</div>
		</nav>
	);
}
export default Navbar;
