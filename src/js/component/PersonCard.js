import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";

export class PersonCard extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		return (
			<div>
				<div className="card" style={{ width: "400px" }}>
					<div className="cardBG">
						<img className="card-img-top" src={swTopImage} alt="Card image" />
						<div className="card-body">
							<h4 className="card-title">John Doe</h4>
							<p className="bottomTitle align-content-bottom">Databank</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
