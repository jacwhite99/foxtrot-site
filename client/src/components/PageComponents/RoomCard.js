import React from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

const card = props => {
	const data = props.info;
	return (
		<Card>
			<CardBody>
				<CardTitle>{data.name}</CardTitle>
				<CardSubtitle>{data.subtitle}</CardSubtitle>
				<CardText>{data.text}</CardText>
				<Button>Find Out More</Button>
			</CardBody>
		</Card>
	);
};

export default card;
