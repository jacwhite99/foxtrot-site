import React from "react";
import { Jumbotron, Container } from "reactstrap";

const fluidJumbotron = props => {
	const data = props.data;

	return (
		<div>
			<Jumbotron fluid>
				<Container fluid className="homeJumbotron">
					<h1 className="display-3 homeJumbotron__title">
						{data.title}
					</h1>
					{data.subtitle ? (
						<p className="lead homeJumbotron__text">
							{data.subtitle}
						</p>
					) : (
						""
					)}
				</Container>
			</Jumbotron>
		</div>
	);
};

export default fluidJumbotron;
