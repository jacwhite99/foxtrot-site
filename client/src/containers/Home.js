import React from "react";

// Bootstrap Imports;
import { Container, Row, Col } from "reactstrap";
// Page Components
import RoomCard from "../components/PageComponents/RoomCard";
import HomeJumbotron from "../components/PageComponents/HomeJumbotron";

//Data Import
import CardInformation from "../data/CardInformation";
import homeJumbotron from "../data/HomeJumbotron";

const home = () => {
	return (
		<div>
			<HomeJumbotron data={homeJumbotron}></HomeJumbotron>
			<div className="section">
				<h2 className="section__title">About Us</h2>
				<h2 className="section__subtitle">And what we provide</h2>
				<div className="bottomBorder"></div>
				<div className="section__text">
					<p>
						We are a family run business located in North
						Pembrokeshire, offering a Bed and Breakfast or a
						Campsite for our customers to use.
					</p>
					<p>
						Close to the coastal path, beuatiful beaches,
						countryside and a embarking point for skomer island, our
						location is perfect for those who want to get away and
						explore the nature around us.
					</p>
					<p>
						Look below or explore our site to find out how to
						contact us, or finding out more about our services and
						what comes with them
					</p>
				</div>
				<div className="bottomBorder bottomBorder__large"></div>
			</div>
			<div className="section-divider section-divider__1"></div>
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
				<div className="bottomBorder bottomBorder__large"></div>
			</div>
			<div className="section-divider section-divider__2"></div>
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
				<div className="bottomBorder bottomBorder__large"></div>
			</div>
		</div>
	);
};

export default home;
