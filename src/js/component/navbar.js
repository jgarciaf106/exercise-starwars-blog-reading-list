import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swLogo from "../../img/swLogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark py-4">
			<Link to="/">
				<img src={swLogo} className="ml-5" style={{ height: "40px", width: "95px" }} />
			</Link>
			<div className="dropdown mr-5">
				<button
					className="btn btn-warning text-dark dropdown-toggle"
					type="button"
					id="dropdownMenu2"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<i className="text-center bg-dark text-white mx-1 rounded"> {store.favCount} </i>
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
					<button className="dropdown-item" type="button">
						Action
					</button>
					<button className="dropdown-item" type="button">
						Another action
					</button>
					<button className="dropdown-item" type="button">
						Something else here
					</button>
				</div>
			</div>
		</nav>
	);
};
