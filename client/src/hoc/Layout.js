import React from "react";
import propTypes from "prop-types";

import NavBar from "../components/Navigation/NavBar";

const layout = props => {
	return (
		<div>
			<main>
				<NavBar></NavBar>
				{props.children}
			</main>
		</div>
	);
};

export default layout;

layout.propTypes = {
	children: propTypes.object
};
