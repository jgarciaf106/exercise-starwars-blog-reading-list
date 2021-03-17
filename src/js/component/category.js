import React from "react";
import PropTypes from "prop-types";

export const Category = props => {
	return (
		<div className="bg-warning text-left pl-2 mt-3">
			<h2>{props.category}</h2>
		</div>
	);
};

Category.propTypes = {
	category: PropTypes.string
};
