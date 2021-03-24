import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../styles/card.scss";

export const Card = props => {
	const { actions, store } = useContext(Context);
	const objKeys = Object.keys(props.obj);
	const objVal = Object.values(props.obj);

	return (
		<div className="card col-4 my-4 mx-3" style={{ width: "18rem" }}>
			<img src={props.obj.imageUrl} className="card-img-top mt-3" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.obj.name}</h5>
				<p className="card-text">
					{objKeys[1]}: {objVal[1]}
				</p>
				<p className="card-text">
					{objKeys[2]}: {objVal[2]}
				</p>
				<p className="card-text">
					{objKeys[3]}: {objVal[3]}
				</p>
				<div className="row">
					<div className="col">
						<Link exact to="/detail">
							<a
								href="#"
								className="btn btn-warning float-left"
								onClick={() => actions.setIdSelected(props.obj.name)}>
								Learn more!
							</a>
						</Link>

						<button
							type="button"
							className="btn btn-warning float-right"
							onClick={() => actions.setFavorites(props.obj.name)}
							disabled={store.favorites.includes(props.obj.name) ? true : false}>
							<i className={store.favorites.includes(props.obj.name) ? "fas fa-heart" : "far fa-heart"} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	obj: PropTypes.object
};
