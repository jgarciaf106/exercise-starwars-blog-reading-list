import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/card.scss";

export const Card = () => {
	const { actions, store } = useContext(Context);

	return (
		<div className="scrolling-wrapper row flex-row flex-nowrap mx-3">
			{store.people.map((person, index) => {
				return (
					<div className="card col-4 my-4 mx-3" style={{ width: "18rem" }} key={index}>
						<img src={person.image} className="card-img-top mt-3" alt="..." />
						<div className="card-body">
							<h5 className="card-title">{person.name}</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card
								content.
							</p>
							<div className="row">
								<div className="col">
									<Link exact to="/detail">
										<a
											href="#"
											className="btn btn-warning float-left"
											onClick={() => actions.setIdSelected(person.id)}>
											Go somewhere
										</a>
									</Link>

									<a
										href="#"
										className="btn btn-warning float-right"
										onClick={() => actions.setIdSelected(person.id)}>
										<i className="far fa-heart" />
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
