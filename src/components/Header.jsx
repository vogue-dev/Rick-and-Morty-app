import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg">
				<div className="container">
					<Navbar.Brand href="#home">Rick and Morty's</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#home">Second Test-task</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</header>
	);
};

export default Header;
