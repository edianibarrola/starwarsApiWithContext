import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class BigPersonCard extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		let person = this.props.location.state.personInfo ? this.props.location.state.personInfo : null;
		return (
			<div>
				<div className="card mb-3" style={{ maxWidth: "540px" }}>
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src="..." className="card-img" alt="..." />
						</div>
						<div className="col-md-8">
							<div className="card-body">
								<h5 className="card-title">{person.height}</h5>
								<p className="card-text">
									This is a wider card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
BigPersonCard.propTypes = {
	location: PropTypes.object
};
