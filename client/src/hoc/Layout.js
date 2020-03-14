import React from "react";
import propTypes from "prop-types";

const layout = props => {
	return (
		<div>
			<main>{props.children}</main>
		</div>
	);
};

export default layout;

layout.propTypes = {
	children: propTypes.object
};
