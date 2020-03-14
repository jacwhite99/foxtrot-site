import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavbarText
} from "reactstrap";

const navbar = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Navbar color="light" light expand="md">
			<NavbarBrand href="/">reactstrap</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink href="/contact">Components</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Options
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem href="/rooms">Rooms</DropdownItem>
							<DropdownItem href="/rooms/campsite">
								campsite
							</DropdownItem>
							<DropdownItem href="/rooms/guesthouse">
								guesthouse
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
				<NavbarText>Simple Text</NavbarText>
			</Collapse>
		</Navbar>
	);
};

export default navbar;
