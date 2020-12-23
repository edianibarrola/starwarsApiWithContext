import React from "react";
import { Link } from "react-router-dom";
import logoIMG from "/workspace/react-hello-webapp/src/img/swLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark  mb-3 justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>

			<div className="ml-auto">
				<Link to="/person">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div>
		</nav>
	);
};
