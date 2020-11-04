import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg">
				<div className="container">
					<Navbar.Brand href="/">Wiki Rick and Morty's</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="/task2">Second Test-task</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</header>
	);
};

export default Header;
