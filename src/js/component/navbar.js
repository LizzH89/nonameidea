import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../img/logo.png";
import { Favorites } from "./favorites";

export const Navbar = () => {
	const styleimg = {
		maxHeight: "3rem"
	};
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src={LOGO} style={styleimg} />
			</Link>
			<div className="ml-auto">
				<Favorites />
			</div>
		</nav>
	);
};
