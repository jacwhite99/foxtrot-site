import React from "react";

// Bootstrap Imports;
import { Container, Row, Col } from "reactstrap";
// Page Components
import Carousel from "../components/PageComponents/Carousel";
import RoomCard from "../components/PageComponents/RoomCard";
import FluidJumbotron from "../components/PageComponents/FluidJumbotron";

//Data Import
import CardInformation from "../data/CardInformation";
import homeCarousel from "../carouselImages/homeCarousel";
import HomeJumbotron from "../data/HomeJumbotron";

const home = () => {
	return (
		<div>
			<FluidJumbotron data={HomeJumbotron}></FluidJumbotron>
			<div className="section">
				<h2 className="section__title">About Us</h2>
				<h2 className="section__subtitle">And what we provide</h2>
				<div className="bottomBorder"></div>
				<div className="section__text">
					<p>
						We are a business, located in Tenby, Southwest Wales,
						providing out customers with the highest quality
						campsite, for those who want to venture out in nature,
						and a luxiourious guesthouse, for those who want to stay
						in and explore the local area during the day
					</p>
				</div>
			</div>
			<div className="section">
				<h2 className="section__title">Rooms</h2>
				<div className="bottomBorder"></div>
				<Container>
					<Row>
						<Col>
							<RoomCard
								info={CardInformation.guesthouse}
							></RoomCard>
						</Col>
						<Col>
							<RoomCard
								info={CardInformation.campsite}
							></RoomCard>
						</Col>
					</Row>
				</Container>
			</div>
			<div className="section">
				<h2 className="section__title">How to Book</h2>
				<div className="bottomBorder"></div>
				<div className="section__text">
					"Sed ut perspiciatis unde omnis iste natus error sit
					voluptatem accusantium doloremque laudantium, totam rem
					aperiam, eaque ipsa quae ab illo inventore veritatis et
					quasi architecto beatae vitae dicta sunt explicabo. Nemo
					enim ipsam voluptatem quia voluptas sit aspernatur aut odit
					aut fugit, sed quia consequuntur magni dolores eos qui
					ratione voluptatem sequi nesciunt. Neque porro quisquam est,
					qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
					velit, sed quia non numquam eius modi tempora incidunt ut
					labore et dolore magnam aliquam quaerat voluptatem. Ut enim
					ad minima veniam, quis nostrum exercitationem ullam corporis
					suscipit laboriosam, nisi ut aliquid ex ea commodi
					consequatur? Quis autem vel eum iure reprehenderit qui in ea
					voluptate velit esse quam nihil molestiae consequatur, vel
					illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
				</div>
			</div>
		</div>
	);
};

export default home;
