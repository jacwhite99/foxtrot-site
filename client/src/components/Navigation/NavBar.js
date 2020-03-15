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
	DropdownItem
} from "reactstrap";

const navbar = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Navbar color="dark" dark expand="md">
			{/* <NavbarBrand href="/">Foxdale</NavbarBrand> */}
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mx-auto" navbar>
					<NavItem>
						<NavLink href="/">Homepage</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/contact">Contact Us</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Room Types
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem href="/rooms">Rooms</DropdownItem>
							<DropdownItem href="/rooms/campsite">
								Campsite
							</DropdownItem>
							<DropdownItem href="/rooms/guesthouse">
								Guesthouse
							</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default navbar;
