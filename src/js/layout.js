import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { PersonCard } from "./component/PersonCard";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { BigPersonCard } from "./component/bigPersonCard";
import { BigPlanetCard } from "./component/BigPlanetCard";
import { DetailsView } from "./views/DetailsView";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />

						<Route exact path="/demo" component={Demo} />

						<Route exact path="/single/:theid" component={Single} />

						<Route exact path="/detailsview/:id" component={DetailsView} />

						<Route exact path="/BigPlanetCard/:id" component={BigPlanetCard} />

						<Route>
							<h1>Not found!</h1>
							<img
								className="yodaDance mx-auto"
								src="https://media.giphy.com/media/ju6OxHdHRwLHG/giphy.gif"
							/>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
