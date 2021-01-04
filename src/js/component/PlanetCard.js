import React from "react";
import swTopImage from "/workspace/starwarsBlogWithoutContext/src/img/starwarsposter.jpg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import planetImage from "/workspace/starwarsBlogWithoutContext/src/img/MainGalaxy.png";
import { Context } from "../store/appContext";

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
					key6: "UID: ",
					key7: "planetOrHuman: ",
					val0: jsonifiedResponse.result.properties.name,
					val1: jsonifiedResponse.result.properties.diameter,
					val2: jsonifiedResponse.result.properties.orbital_period,
					val3: jsonifiedResponse.result.properties.rotation_period,
					val4: jsonifiedResponse.result.properties.gravity,
					val5: jsonifiedResponse.result.properties.climate,
					val6: jsonifiedResponse.result.properties.uid,
					val7: "planet",
					image: "/MainGalaxy.png"
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
					<div className="card cardSmall mx-2" style={{ width: "250px" }}>
						<div className="cardBGSmall">
							<img className="card-img-top" src={planetImage} alt="Card image" />
							<div className="card-body card-bodySmall">
								<h4 className="card-title">{this.state.planetInfo.name}</h4>
								<li>Gravity: {this.state.val4} </li>
								<li> Climate: {this.state.val5} </li>
								<li> Terrain: {this.state.val6}</li>
								<Link
									to={{
										pathname: "/detailsview/" + this.props.propPlanetUid,
										state: this.state
									}}>
									<button className="btn btn-secondary float-right">More Info</button>
								</Link>
								<Context.Consumer>
									{(
										{ store, actions } //Object deconstruction for faster coding
									) => (
										<button
											onClick={() => actions.addToFavorites(this.props.propPlanetUid, this.state)}
											className="btn btn-secondary float-right">
											heart
										</button>
									)}
								</Context.Consumer>

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
