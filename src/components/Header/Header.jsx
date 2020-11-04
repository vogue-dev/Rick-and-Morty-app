import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<Navbar bg="dark" variant="dark" expand="lg">
				<div className="container">
					<Navbar.Brand as={Link} to="/">
						Wiki Rick and Morty's
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/second-task">
								Second Test-task
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</div>
			</Navbar>
		</header>
	);
};

export default Header;
