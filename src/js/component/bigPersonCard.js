import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import swSideImage from "/workspace/react-hello-webapp/src/img/starwarsHorizontal.jpg";

export class BigPersonCard extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		let person = this.props.location.state.personInfo ? this.props.location.state.personInfo : null;
		return (
			<div className="mx-auto" style={{ maxWidth: "80vw", maxHeight: "80vh " }}>
				<div className="card cardBig mb-3 mx-auto" style={{ maxWidth: "auto", maxHeight: "auto " }}>
					<div className="row no-gutters">
						<div className="col-md-4">
							<img src={swSideImage} className="card-img cardImgBig" alt="..." />
						</div>
						<div className="col-md-8 cardBgBig">
							<div className="card-body pt-2 text-center card-bodyBig">
								<h2 className="card-title mx-auto">{person.name}</h2>
								<p className="card-text  ">
									<ul className="mx-auto col-3">
										<li>Height: {person.height}</li>
										<li>Mass (on Earth): {person.mass}</li>
										<li>Hair Color: {person.hair_color}</li>
										<li>Skin Color: {person.skin_color}</li>
										<li>Eye Color: {person.eye_color}</li>
										<li>Birth Year: {person.birth_year}</li>
										<li>Gender: {person.gender}</li>
									</ul>
								</p>
							</div>
							<div className="d-flex align-content-bottom float-left  bottomTitleBig">Databank</div>
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
