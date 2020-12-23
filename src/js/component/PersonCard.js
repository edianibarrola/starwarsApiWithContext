import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import PropTypes from "prop-types";
import { BigPersonCard } from "./bigPersonCard";
import { Link } from "react-router-dom";

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
					val6: jsonifiedResponse.result.properties.skin_color,
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
									{" "}
									Gender:
									{this.state.personInfo.gender}{" "}
								</li>
								<li> Hair Color: {this.state.personInfo.hair_color}</li>
								<li> Eye Color: {this.state.personInfo.eye_color}</li>
								<Link to={{ pathname: "/detailsview/" + this.props.propUid, state: this.state }}>
									<button className="btn btn-secondary float-right">More Info</button>
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

PersonCard.propTypes = {
	propUid: PropTypes.string
};
