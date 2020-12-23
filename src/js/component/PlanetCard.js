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
				this.setState({
					planetInfo: jsonifiedResponse.result.properties,
					key0: "Name: ",
					key1: "Diameter: ",
					key2: "Orbital Period: ",
					key3: "Rotation Period: ",
					key4: "Gravity: ",
					key5: "Climate: ",
					key6: "Terrain: ",
					val0: jsonifiedResponse.result.properties.name,
					val1: jsonifiedResponse.result.properties.diameter,
					val2: jsonifiedResponse.result.properties.orbital_period,
					val3: jsonifiedResponse.result.properties.rotation_period,
					val4: jsonifiedResponse.result.properties.gravity,
					val5: jsonifiedResponse.result.properties.climate,
					val6: jsonifiedResponse.result.properties.terrain,
					image:
						"https://b36ca17f-b693-4c92-b67d-94fa519fcf26.ws-us03.gitpod.io/files/download/?id=091b25f0-6f39-454f-addc-52c2c7b601ec"
				});
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
								<Link to={{ pathname: "/detailsview/" + this.props.propPlanetUid, state: this.state }}>
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
