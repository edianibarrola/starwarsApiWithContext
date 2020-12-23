import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import PropTypes from "prop-types";
import { BigPlanetCard } from "./BigPlanetCard";
import { Link } from "react-router-dom";
import planetImage from "/workspace/react-hello-webapp/src/img/MainGalaxy.png";

export class PlanetCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			planetInfo: null
		};
		this.planetUrl = "https://www.swapi.tech/api/planets/";
	}
	componentDidMount() {
		fetch(this.planetUrl + this.props.propPlanetUid)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => {
				console.log("RESULT", jsonifiedResponse.result.properties);
				this.setState({ planetInfo: jsonifiedResponse.result.properties });
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	render() {
		return (
			<div>
				{this.state.planetInfo ? (
					<div className="card cardSmall" style={{ width: "250px" }}>
						<div className="cardBGSmall">
							<img className="card-img-top" src={planetImage} alt="Card image" />
							<div className="card-body card-bodySmall">
								<h4 className="card-title">{this.state.planetInfo.name}</h4>
								<li> Population: </li>
								<li> Terrain: </li>
								<Link
									to={{ pathname: "/BigPlanetCard/" + this.props.propPlanetUid, state: this.state }}>
									<button className="btn btn-secondary" />
								</Link>
								<p className="bottomTitleSmall align-content-bottom float-left">Databank</p>
							</div>
						</div>
					</div>
				) : (
					"Loading, Please wait ...."
				)}
			</div>
		);
	}
}
PlanetCard.propTypes = {
	propPlanetUid: PropTypes.string
};
