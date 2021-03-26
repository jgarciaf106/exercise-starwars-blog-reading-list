import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { Category } from "../component/category";

import "../../styles/home.scss";

export const Main = () => {
	const { store } = useContext(Context);

	return (
		<div className="text-center bg-dark container">
			<Category category="Characters" />
			{store.apiStatus.people === true ? (
				<div className="scrolling-wrapper row flex-row flex-nowrap mx-3">
					{store.people.map((person, index) => {
						const personObj = {
							name: person.name,
							gender: person.gender,
							hairColor: person.hairColor,
							eyeColor: person.eyeColor,
							imageUrl: person.image,
							id: person.id
						};
						return <Card obj={personObj} key={index} />;
					})}
				</div>
			) : (
				<div className="alert alert-danger" role="alert">
					There was an error pulling the API .{" "}
				</div>
			)}

			<Category category="Vehicles" />
			{store.apiStatus.vehicles === true ? (
				<div className="scrolling-wrapper row flex-row flex-nowrap mx-3">
					{store.vehicles.map((vehicle, index) => {
						const vehicleObj = {
							name: vehicle.name,
							length: vehicle.length,
							crew: vehicle.crew,
							vehicle_class: vehicle.vehicle_class,
							imageUrl:
								"https://laughingsquid.com/wp-content/uploads/2016/04/Millennium-Falcon-180dpi-2977x2105.jpg"
						};
						return <Card obj={vehicleObj} key={index} />;
					})}
				</div>
			) : (
				<div className="alert alert-danger" role="alert">
					There was an error pulling the API .{" "}
				</div>
			)}
			<Category category="Planets" />
			{store.apiStatus.planets === true ? (
				<div className="scrolling-wrapper row flex-row flex-nowrap mx-3">
					{store.planets.map((planet, index) => {
						const planetObj = {
							name: planet.name,
							diameter: planet.diameter,
							climate: planet.climate,
							population: planet.population,
							imageUrl: "https://pbs.twimg.com/media/EbeWjReVcAEWMMv?format=jpg&name=900x900"
						};
						return <Card obj={planetObj} key={index} />;
					})}
				</div>
			) : (
				<div className="alert alert-danger" role="alert">
					There was an error pulling the API .{" "}
				</div>
			)}
		</div>
	);
};
