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
			<div className="scrolling-wrapper row flex-row flex-nowrap mx-3">
				{store.people.map((person, index) => {
					const personObj = {
						id: person.id,
						name: person.name,
						gender: person.gender,
						hairColor: person.hairColor,
						eyeColor: person.eyeColor,
						imageUrl: person.image
					};
					return <Card obj={personObj} key={index} />;
				})}
			</div>
			<Category category="Vehicles" />
			<Category category="Planets" />
		</div>
	);
};
