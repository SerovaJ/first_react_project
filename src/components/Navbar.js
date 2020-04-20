import React from 'react';


const Navbar = () => {
  return(
    <nav className="sidebar">
    <ul className="sidebar_list">
      <li className="sidebar_list_item">
        <button className="item_link">Profile</button>
      </li>
      <li className="sidebar_list_item">
        <button className="item_link">Messages</button>
      </li>
      <li className="sidebar_list_item">
        <button className="item_link">News</button>
      </li>
      <li className="sidebar_list_item">
        <button className="item_link">Music</button>
      </li>
      <li className="sidebar_list_item">
        <button className="item_link">Settings</button>
      </li>
    </ul>
  </nav>
  );
}
export default Navbar;