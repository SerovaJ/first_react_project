import React from 'react';
import logo from "../img/logo.png";

const Header = () => {
  return(
    <header className="header">
		<img src={logo} alt="логотип" className="logo"/>
	</header>
  );
}
export default Header;