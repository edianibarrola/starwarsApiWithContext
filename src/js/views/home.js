import React from "react";
import rigoImage from "/workspace/react-hello-webapp/src/img/SWbackgrounddesign.png";
import "../../styles/home.scss";
import ReactDOM from "react-dom";
import logoIMG from "/workspace/react-hello-webapp/src/img/swLogo.png";

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
				<ol>
					{this.state.peopleList.map((person, index) => {
						return <li key={index}>{person.name}</li>;
					})}
				</ol>
			</div>
		);
	}
}
