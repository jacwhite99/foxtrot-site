import React, { useState } from "react";

// Bootstrap Imports;
import { Container, Row, Col } from "reactstrap";
// Page Components
import Carousel from "../components/PageComponents/Carousel";
import Card from "../components/PageComponents/Card";

const home = () => {
	return (
		<div>
			<h1>Homepage</h1>
			<Carousel></Carousel>
			<div>About</div>
			<div>
				Rooms
				<Container>
					<Row>
						<Col>
							<Card></Card>
						</Col>
						<Col>
							<Card></Card>
						</Col>
					</Row>
				</Container>
			</div>
			<div>How to Book</div>
		</div>
	);
};

export default home;
