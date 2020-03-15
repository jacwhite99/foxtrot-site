import GuesthouseImage from "../images/homeCarousel/welcome.jpg";
import CampsiteImage from "../images/homeCarousel/bed-view.jpg";
const CardInformation = {
	guesthouse: {
		name: "Guest House",
		image: {
			src: GuesthouseImage,
			altText: "Image"
		},
		subtitle: "Brief Description of Guesthouse",
		text: "More indepth Description",
		href: "/rooms/guesthouse"
	},
	campsite: {
		name: "Campsite",
		image: {
			src: CampsiteImage,
			altText: "Image"
		},
		subtitle: "Brief Description of Guesthouse",
		text: "More indepth Description",
		href: "/rooms/campsite"
	}
};

export default CardInformation;
