import React from "react";

//Bootstrap Imports
import { Container, Row, Col } from "reactstrap";

//Page Components

const contact = () => {
	return (
		<div>
			<h1>Contact</h1>
			<div>
				<p>Ways To Contact</p>
				<Container>
					<Row>
						<Col>Email</Col>
						<Col>Phone</Col>
					</Row>
				</Container>
			</div>
			<div>
				<p>How To Find Us</p>
				<p>Map Information</p>
			</div>
		</div>
	);
};

export default contact;
