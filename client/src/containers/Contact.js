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
						<Col>
							<h3>Email</h3>
							<p>foxdale@btconnect.com</p>
						</Col>
						<Col>
							<h3>Phone</h3>
							<p>01646 636243</p>
						</Col>
					</Row>
				</Container>
				<div className="bottomBorder bottomBorder__large"></div>
			</div>
			<div className="section-divider section-divider__3"></div>
			<div className="section">
				<div>
					<p className="section__title"> How To Find Us</p>
					<p>Glebe Lane, Marloes SA62 3AY, Haverfordwest</p>
					<div className="bottomBorder"></div>
					<p className="section__subtitle">Map Information</p>
					<Map></Map>
					<div className="bottomBorder bottomBorder__large"></div>
				</div>
			</div>
		</div>
	);
};

export default contact;
