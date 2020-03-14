/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

// Bootstrap Imports
import { Container, Row, Col } from "reactstrap";

const rooms = props => {
	if (props.title) {
		const title = props.title;
		const features = props.features;
		return (
			<div>
				<h1>{title}</h1>
				<ul>
					{features.map(feature => {
						return <li>feature</li>;
					})}
				</ul>
			</div>
		);
	} else {
		return (
			<div>
				<h1>Base Room Information</h1>
				<Container>
					<Row>
						<Col>Room Info 1</Col>
						<Col>Room Info 2</Col>
					</Row>
				</Container>
			</div>
		);
	}
};

export default rooms;
