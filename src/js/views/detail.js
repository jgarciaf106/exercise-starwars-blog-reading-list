import React, { useContext } from "react";
import "../../styles/detail.scss";
import { Context } from "../store/appContext";

export const Detail = () => {
	const { store } = useContext(Context);
	const selected = store.people.find(person => person.name === store.idSelected);
	return (
		<div className="text-center bg-dark container">
			<div className="card my-5 mx-5">
				<div className="row no-gutters my-5">
					<div className="col-md-4">
						<img className="img-fluid" src={selected.image} alt="..." />
					</div>
					<div className="col-md-8 my-5">
						<div className="card-body">
							<h5 className="card-title">{selected.name}</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat
								feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Fusce felis nisi, iaculis eu gravida id, rhoncus finibus tellus.
								Suspendisse potenti. Nunc hendrerit in purus vitae dignissim. Etiam viverra laoreet
								erat, sit amet scelerisque arcu rutrum a. Proin fermentum leo at tincidunt placerat.
							</p>
							<div className="dropdown-divider bg-warning " />
							<div className="row">
								<div className="col text-danger text-left">Name</div>
								<div className="col text-danger text-left">Birth Year</div>
								<div className="col text-danger text-left">Gender</div>
								<div className="col text-danger text-left">Height</div>
								<div className="col text-danger text-left">Skin Color</div>
								<div className="col text-danger text-left">Eye Color</div>
							</div>
							<div className="row">
								<div className="col text-left">{selected.name}</div>
								<div className="col text-left">{selected.born}</div>
								<div className="col text-left">{selected.gender}</div>
								<div className="col text-left">{selected.height}</div>
								<div className="col text-left">{selected.skinColor}</div>
								<div className="col text-left">{selected.eyeColor}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
