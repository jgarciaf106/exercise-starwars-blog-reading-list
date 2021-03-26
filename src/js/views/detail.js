import React, { useContext } from "react";
import "../../styles/detail.scss";
import { Context } from "../store/appContext";

export const Detail = () => {
	const { store } = useContext(Context);

	const objKeys = Object.keys(store.idSelected);
	const objVal = Object.values(store.idSelected);
	return (
		<div className="text-center bg-dark container">
			<div className="card my-5 mx-5">
				<div className="row no-gutters my-5">
					<div className="col-md-4">
						<img className="img-fluid" src={objVal[4]} alt="..." />
					</div>
					<div className="col-md-8 my-5">
						<div className="card-body">
							<h5 className="card-title">{objVal[0]}</h5>
							<p className="card-text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum volutpat
								feugiat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Fusce felis nisi, iaculis eu gravida id, rhoncus finibus tellus.
								Suspendisse potenti. Nunc hendrerit in purus vitae dignissim. Etiam viverra laoreet
								erat, sit amet scelerisque arcu rutrum a. Proin fermentum leo at tincidunt placerat.
							</p>
							<div className="dropdown-divider bg-warning " />
							<div className="row">
								<div className="col text-danger text-left">{objKeys[0]}</div>
								<div className="col text-danger text-left">{objKeys[1]}</div>
								<div className="col text-danger text-left">{objKeys[2]}</div>
								<div className="col text-danger text-left">{objKeys[3]}</div>
							</div>
							<div className="row">
								<div className="col text-left">{objVal[0]}</div>
								<div className="col text-left">{objVal[1]}</div>
								<div className="col text-left">{objVal[2]}</div>
								<div className="col text-left">{objVal[3]}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
