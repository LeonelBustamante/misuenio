import React from "react";
import "./styles.css";

// se recibe un nombre para el nav item
const NavItems = ({ name }) => {
	return (
		<a className="navbar-item" href="/productos">{name}</a >
	);
};

export default NavItems;
