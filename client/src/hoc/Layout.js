import React from "react";
import propTypes from "prop-types";

import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/PageComponents/Footer";
const layout = props => {
	return (
		<div>
			<main className="content">
				<NavBar></NavBar>
				{props.children}
			</main>
			<Footer></Footer>
		</div>
	);
};

export default layout;

layout.propTypes = {
	children: propTypes.object
};
