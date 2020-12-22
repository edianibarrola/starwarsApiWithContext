import React from "react";
import rigoImage from "/workspace/react-hello-webapp/src/img/SWbackgrounddesign.png";
import "../../styles/home.scss";
import ReactDOM from "react-dom";
import logoIMG from "/workspace/react-hello-webapp/src/img/swLogo.png";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			peopleList: []
		};
		this.url = "https://www.swapi.tech/api/people/";
	}
	componentDidMount() {
		fetch(this.url)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => this.setState({ peopleList: jsonifiedResponse.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	render() {
		console.log(this.state.peopleList);
		return (
			<div className="text-center mt-5">
				<div>
					<img src={logoIMG} />
				</div>
				<div className="d-flex row justify-content-around">
					{this.state.peopleList.map((person, index) => {
						return (
							<div key={index}>
								<div className="card " style={{ width: "250px" }}>
									<div className="cardBG">
										<img className="card-img-top" src={swTopImage} alt="Card image" />
										<div className="card-body">
											<h4 className="card-title">{person.name}</h4>
											<li> Gender: </li>
											<li> Hair Color: </li>
											<li> Eye Color: {person.url}</li>

											<p className="bottomTitle align-content-bottom float-left">Databank</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
