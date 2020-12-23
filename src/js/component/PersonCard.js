import React from "react";
import swTopImage from "/workspace/starwarsBlogWithoutContext/src/img/starwarsposter.jpg";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export class PersonCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			personInfo: null,
			key0: null,
			key1: null,
			key2: null,
			key3: null,
			key4: null,
			key5: null,
			key6: null,
			val1: null,
			val2: null,
			val3: null,
			val4: null,
			val5: null,
			val6: null,
			image: null
		};
		this.personUrl = "https://www.swapi.tech/api/people/";
	}

	componentDidMount() {
		fetch(this.personUrl + this.props.propUid)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => {
				console.log("RESULT", jsonifiedResponse.result.properties);
				this.setState({
					personInfo: jsonifiedResponse.result.properties,
					key0: "Name: ",
					key1: "Height: ",
					key2: "Mass: ",
					key3: "Hair Color: ",
					key4: "Eye Color: ",
					key5: "Gender: ",
					key6: "Skin Color: ",
					val0: jsonifiedResponse.result.properties.name,
					val1: jsonifiedResponse.result.properties.height,
					val2: jsonifiedResponse.result.properties.mass,
					val3: jsonifiedResponse.result.properties.hair_color,
					val4: jsonifiedResponse.result.properties.eye_color,
					val5: jsonifiedResponse.result.properties.gender,
					val6: jsonifiedResponse.result.properties.url,
					image: "/starwarsposter.jpg"
				});
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	render() {
		console.log("PERSON INFO", this.state.personInfo);
		return (
			<div>
				{this.state.personInfo ? (
					<div className="card cardSmall" style={{ width: "250px" }}>
						<div className="cardBGSmall">
							<img className="card-img-top" src={swTopImage} alt="Card image" />
							<div className="card-body card-bodySmall">
								<h4 className="card-title">{this.state.personInfo.name}</h4>
								<li>
									{this.state.key5}
									{this.state.personInfo.gender}{" "}
								</li>
								<li>
									{" "}
									{this.state.key3} {this.state.personInfo.hair_color}
								</li>
								<li>
									{" "}
									{this.state.key4} {this.state.personInfo.eye_color}
								</li>
								<Link to={{ pathname: "/detailsview/" + this.props.propUid, state: this.state }}>
									<button className="btn btn-secondary float-right">More Info</button>
								</Link>
								<Context.Consumer>
									{(
										{ store, actions } //Object deconstruction for faster coding
									) => (
										<button
											onClick={() =>
												actions.addToFavorites(
													this.props.propUid,
													this.state.val0,
													this.state.val6
												)
											}
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

PersonCard.propTypes = {
	propUid: PropTypes.string
};
