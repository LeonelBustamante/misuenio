import React from "react";
import "./styles.css";
import NavItems from "../NavItems";

// se recibe un path de una imagen y un array de strings
const Header = ({ imgLogo, navbarItems }) => {
	return (
		<div className="header">
			<img class="imgLogo" src={imgLogo} alt="logo" />
			<div className="navbar">
				{navbarItems.map((title) => (
					<NavItems name={title} />
				))}
			</div>
		</div>
	);
};

export default Header;
