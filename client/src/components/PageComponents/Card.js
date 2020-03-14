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

const card = () => {
	return (
		<Card>
			<CardBody>
				<CardTitle>Card Title</CardTitle>
				<CardSubtitle>Card Subtitle</CardSubtitle>
				<CardText>Card Text</CardText>
				<Button>Button</Button>
			</CardBody>
		</Card>
	);
};

export default card;
