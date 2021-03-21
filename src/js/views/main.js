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
			{store.people.map((person, index) => {
				const personObj = {
					name: person.id: person.id,
					gender: person.gender,
					hairColor: person.hairColor,
					eyeColor: person.eyeColor,
					imageUrl: person.image
				};
				return <Card obj={personObj} key={index} />;
			})}
			<Category category="Vehicles" />
			<Category category="Planets" />
		</div>
	);
};
