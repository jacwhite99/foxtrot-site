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

	const redirect = () => {
		window.location.href = data.href;
	};

	return (
		<Card>
			<CardBody>
				<CardTitle>{data.name}</CardTitle>
				<CardSubtitle>{data.subtitle}</CardSubtitle>
				<CardText>{data.text}</CardText>
				<Button onClick={redirect}>Find Out More</Button>
			</CardBody>
		</Card>
	);
};

export default card;
