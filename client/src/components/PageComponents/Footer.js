import React from "react";

//Social Media Icons
import Facebook from "../../images/facebook-icon.png";

const footer = () => {
	return (
		<div className="footer">
			<p>
				<img
					src={Facebook}
					alt="facebook-icon"
					style={{ width: "1.5vw" }}
				></img>
				<a href="https://www.facebook.com/Foxdale-Guesthouse-and-Campsite-108245277376752/">
					Facebook Page
				</a>
			</p>
			<p className="footer__links">
				<a className="footer__link" href="/">
					Home
				</a>
				<a className="footer__link" href="/contact">
					Contact
				</a>
				<a className="footer__link" href="/rooms">
					Rooms
				</a>
				<a className="footer__link" href="/rooms/guesthouse">
					Guesthouse
				</a>
				<a className="footer__link" href="/rooms/campsite">
					Campsite
				</a>
			</p>
			<p className="footer__border"></p>
			<h1 className="footer__title">FOXDALE</h1>
		</div>
	);
};

export default footer;
