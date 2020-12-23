import React from "react";
import rigoImage from "/workspace/react-hello-webapp/src/img/SWbackgrounddesign.png";
import "../../styles/home.scss";
import ReactDOM from "react-dom";
import logoIMG from "/workspace/react-hello-webapp/src/img/swLogo.png";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import { PersonCard } from "../component/PersonCard";
import PropTypes from "prop-types";
import { PlanetCard } from "../component/PlanetCard";

export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			peopleList: [],
			planetList: []
		};
		this.url = "https://www.swapi.tech/api/people/";
		this.planetUrl = "https://www.swapi.tech/api/planets/";
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

		//2nd fetch for planet list
		fetch(this.planetUrl)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(jsonifiedResponse => this.setState({ planetList: jsonifiedResponse.results }))
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	render() {
		console.log("PEOPLE LIST", this.state.peopleList);
		return (
			<div className="text-center mt-5">
				<div>
					<img src={logoIMG} />
				</div>
				<div className="d-flex row justify-content-around">
					{this.state.peopleList.map((person, index) => {
						console.log("PERSON UID", person.uid);
						return <PersonCard key={person.uid} propUid={person.uid} />;
					})}
				</div>
				{/* planet small card map */}
				<div className="d-flex row justify-content-around">
					{this.state.planetList.map((planet, index) => {
						console.log("PLANET UID", planet.uid);
						return <PlanetCard key={planet.uid} propPlanetUid={planet.uid} />;
					})}
				</div>
			</div>
		);
	}
}
