import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import PropTypes from "prop-types";

export class PersonCard extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			personInfo: null
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
				this.setState({ personInfo: jsonifiedResponse.result.properties });
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
					<div className="card " style={{ width: "250px" }}>
						<div className="cardBG">
							<img className="card-img-top" src={swTopImage} alt="Card image" />
							<div className="card-body">
								<h4 className="card-title">{this.state.personInfo.name}</h4>
								<li>
									{" "}
									Gender:
									{this.state.personInfo.gender}{" "}
								</li>
								<li> Hair Color: {this.state.personInfo.hair_color}</li>
								<li> Eye Color: {this.state.personInfo.eye_color}</li>

								<p className="bottomTitle align-content-bottom float-left">Databank</p>
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
