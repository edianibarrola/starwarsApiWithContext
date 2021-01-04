import React from "react";
import { Link } from "react-router-dom";
import logoIMG from "/workspace/starwarsBlogWithoutContext/src/img/swLogo.png";
import { Context } from "../store/appContext";
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Badge } from "react-bootstrap";

export const NavbarDisplay = () => {
	return (
		<Nav className="navbar navbar-dark mb-3 justify-content-between">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Home</span>
			</Link>

			<div className="ml-auto">
				{/* <Link to="/person">

					<button className="btn btn-primary">Check the Context in action</button> */}
				<Context.Consumer>
					{(
						{ store, actions } //Object deconstruction for faster coding
					) => (
						<Navbar bg="dark" expand="lg">
							<Navbar.Toggle aria-controls="basic-navbar-nav" />
							<Navbar.Collapse id="basic-navbar-nav">
								<Nav className="mx-auto d-flex d-inline-block">
									{/* <Nav.Link href="#home">Home</Nav.Link>
									<Nav.Link href="#link">Link</Nav.Link> */}

									<NavDropdown title="Favorites" id="basic-nav-dropdown">
										{store.favorites.map((fav, index) => {
											return (
												<li key={index}>
													<NavDropdown.Item key={index} href="">
														<span>
															<Link
																to={{
																	pathname: "/detailsview/" + fav.uid,
																	state: fav.details
																}}>
																{fav.details.val0}
															</Link>
														</span>
														<button
															className="btn btn-secondary float-right"
															onClick={() => actions.removeListItem(index)}>
															<i className="fas float-right fa-ban" />
														</button>
													</NavDropdown.Item>
												</li>
											);
										})}
									</NavDropdown>

									<Badge className="my-auto" variant="secondary">
										{store.favorites.length}
									</Badge>
								</Nav>
							</Navbar.Collapse>
						</Navbar>
					)}
				</Context.Consumer>
				{/* </Link> */}
			</div>
		</Nav>
	);
};

//hasOwnProperty

// songlist mapping to use for mapping in the navbar
// {this.state.songList.map((song, index) => {
// 								return (
// 									<li
// 										tabIndex={0}
// 										key={index}
// 										onClick={() => this.startPlay(index)}>
// 										<span className="fa-li">
// 											<i className="fas fa-music" />
// 										</span>
// 										{song.name}
// 									</li>
// 								);
// 							})}
