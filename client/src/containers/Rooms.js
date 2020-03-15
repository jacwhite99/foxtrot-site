/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

// Bootstrap Imports
import { Container, Row, Col } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

// Page Component Imports
import FluidJumbotron from "../components/PageComponents/FluidJumbotron";
import RoomCard from "../components/PageComponents/RoomCard";
import Carousel from "../components/PageComponents/Carousel";

// Data
import CardInformation from "../data/CardInformation";
const information = { title: "Our Room Types" };
const rooms = props => {
	if (props.title) {
		const title = props.title;
		const text = props.text;
		const features = props.features;
		const carouselImages = props.images;
		return (
			<div>
				<FluidJumbotron data={{ title: title }}></FluidJumbotron>
				<Container fluid>
					<Row>
						<Col md="6" sm="6" xs="12">
							<p>{text}</p>
							<ListGroup>
								{features.map(feature => {
									return (
										<ListGroupItem>{feature}</ListGroupItem>
									);
								})}
							</ListGroup>
						</Col>
						<Col md="6" sm="6" xs="12">
							<Carousel images={carouselImages}></Carousel>
						</Col>
					</Row>
				</Container>
			</div>
		);
	} else {
		return (
			<div>
				<FluidJumbotron data={information}></FluidJumbotron>
				<Container>
					<Row>
						<Col xs="12">
							Text about rooms and everthing goes here
						</Col>
					</Row>
					<Row>
						<Col sm="6" xs="12">
							<RoomCard
								info={CardInformation.guesthouse}
							></RoomCard>
						</Col>
						<Col sm="6" xs="12">
							<RoomCard
								info={CardInformation.campsite}
							></RoomCard>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
};

export default rooms;
