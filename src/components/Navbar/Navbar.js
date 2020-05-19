import React from 'react';
import s from "./Navbar.module.css"


const Navbar = () => {
  return(
    <nav className="sidebar">
    <ul className={s.list}>
      <li className={s.item}>
        <button className={s.item_link}>Profile</button>
      </li>
      <li className={s.item}>
        <button className={s.item_link}>Messages</button>
      </li>
      <li className={s.item}>
        <button className={s.item_link}>News</button>
      </li>
      <li className={s.item}>
        <button className={s.item_link}>Music</button>
      </li>
      <li className={s.item}>
        <button className={s.item_link}>Settings</button>
      </li>
    </ul>
  </nav>
  );
}
export default Navbar;