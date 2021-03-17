import React from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Category } from "../component/category";
export const Home = () => {
	return (
		<div className="text-center bg-dark container">
			<Category category="Characters" />
			<Card />
			<Category category="Vehicles" />
			<Card />
			<Category category="Planets" />
			<Card />
		</div>
	);
};
