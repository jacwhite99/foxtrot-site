import React from "react";

// Bootstrap Imports;
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
// Page Components
import RoomCard from "../components/PageComponents/RoomCard";
import HomeJumbotron from "../components/PageComponents/HomeJumbotron";

//Data Import
import CardInformation from "../data/CardInformation";
import homeJumbotron from "../data/HomeJumbotron";

//Image Import
import Email from "../images/email.png";
import Phone from "../images/phone.png";

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
				<div className="bottomBorder bottomBorder__large"></div>
			</div>
			<div className="section-divider section-divider__2"></div>
			<div className="section">
				<h2 className="section__title">How to Book</h2>
				<div className="bottomBorder"></div>
				<div className="section__text">
					<div>
						<h4>Figure out the service you want</h4>
						<p>
							From our bed and breakfast, to the variation of
							campsite types we provide, picking what is for you
							may be hard, look throughout the site to find out
							more on whats for offer. Dont be afraid to contact
							us if you need more information on a certain
							service.
						</p>
					</div>
					<div>
						<h4>Contact Us</h4>
						<p>
							Now with the service that you want to pick, get in
							contact with us letting us know the service and the
							date(s) you want to book for and we will see what we
							can do for you
						</p>
						<ListGroup horizontal>
							<Container>
								<Row>
									<Col sm="6" xs="12">
										<ListGroupItem>
											<div>
												<img
													src={Email}
													alt="email-icon"
												></img>
												<h3>Email</h3>
												<h4>foxdale@btconnect.com</h4>
											</div>
										</ListGroupItem>
									</Col>
									<Col sm="6" xs="12">
										<ListGroupItem>
											<div>
												<img
													src={Phone}
													alt="phone-icon"
												></img>
												<h3>Phone</h3>
												<h4>01646 636243</h4>
											</div>
										</ListGroupItem>
									</Col>
								</Row>
							</Container>
						</ListGroup>
					</div>
				</div>
				<div className="bottomBorder bottomBorder__large"></div>
			</div>
		</div>
	);
};

export default home;
