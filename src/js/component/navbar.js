import React, { useContext } from "react";
import { Link } from "react-router-dom";
import swLogo from "../../img/swLogo.png";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-dark py-4">
			<Link to="/">
				<img src={swLogo} className="ml-5" style={{ height: "40px", width: "95px" }} />
			</Link>
			<div className="btn-group mr-5">
				<button
					className="btn btn-warning text-dark dropdown-toggle"
					type="button"
					id="dropdownMenu2"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					<i className="text-center bg-dark text-white mx-1 rounded"> {store.favorites.length} </i>
				</button>
				<ul className="dropdown-menu">
					{store.favorites.map((element, index) => {
						//const character = store.people.find(person => person.name === element).name;

						return (
							<li className="nav-link" key={index}>
								<Link exact to="/detail" onClick={() => actions.setIdSelected(element)}>
									{element.name}{" "}
								</Link>
								<i
									className="far fa-trash-alt"
									onClick={() => {
										actions.setRemoveFavorite(index);
									}}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};
