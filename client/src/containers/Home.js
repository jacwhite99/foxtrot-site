import React, { useState } from "react";

// Bootstrap Imports;
import { Container, Row, Col } from "reactstrap";
// Page Components
import Carousel from "../components/PageComponents/Carousel";
import Card from "../components/PageComponents/Card";
import RoomCard from "../components/PageComponents/RoomCard";

//Data Import
import CardInformation from "../data/CardInformation";
const home = () => {
	return (
		<div>
			<h1>Homepage</h1>
			<Carousel></Carousel>
			<div>
				<h2>About Us</h2>
				<div>
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
			<div>
				<h2>Rooms</h2>
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
			<div>
				<h2>How to Book</h2>
				<div>
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
