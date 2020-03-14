import React from "react";

//Bootstrap Imports
import { Container, Row, Col } from "reactstrap";

//Page Components
import FluidJumbotron from "../components/PageComponents/FluidJumbotron";
import Map from "../components/PageComponents/Map";
const contact = () => {
	return (
		<div>
			<FluidJumbotron data={{ title: "Contact Us" }}></FluidJumbotron>
			<div className="section">
				<p className="section__title">Ways To Contact</p>
				<div className="bottomBorder"></div>
				<Container>
					<Row>
						<Col>Email</Col>
						<Col>Phone</Col>
					</Row>
				</Container>
			</div>
			<div className="section">
				<div>
					<p className="section__title"> How To Find Us</p>
					<div className="bottomBorder"></div>
					<p className="section__text">TEXT</p>
					<p className="section__subtitle">Map Information</p>
					<Map></Map>
				</div>
			</div>
		</div>
	);
};

export default contact;
