import React from "react";
import swTopImage from "/workspace/react-hello-webapp/src/img/starwarsposter.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import swSideImage from "/workspace/react-hello-webapp/src/img/starwarsHorizontal.jpg";
import logoIMG from "/workspace/react-hello-webapp/src/img/swLogo.png";
import planetImage from "/workspace/react-hello-webapp/src/img/MainGalaxy.png";

export class DetailsView extends React.Component {
	constructor() {
		super();

		this.state = {};
	}

	render() {
		let {
			key0,
			key1,
			key2,
			key3,
			key4,
			key5,
			key6,
			val0,
			val1,
			val2,
			val3,
			val4,
			val5,
			val6,
			image
		} = this.props.location.state;
		let planet = this.props.location.state.planetInfo ? this.props.location.state.planetInfo : null;
		return (
			<>
				<img className="mx-auto" src={logoIMG} />
				<div className="mx-auto" style={{ maxWidth: "80vw", maxHeight: "80vh " }}>
					<div className="card cardBig mb-3 mx-auto" style={{ maxWidth: "auto", maxHeight: "auto " }}>
						<div className="row no-gutters">
							<div className="col-md-4">
								<img src={image} className="card-img cardImgBig" alt="..." />
							</div>
							<div className="col-md-8 cardBgBig">
								<div className="card-body pt-2 text-center card-bodyBig">
									<h2 className="card-title mx-auto">
										{key0}
										{val0}
									</h2>
									<div className="card-text d-flex ">
										<ul className="mx-auto col-3">
											<li>
												{key1}: {val1}
											</li>
											<li>
												{key2} {val2}
											</li>
											<li>
												{key3} {val3}
											</li>
											<li>
												{key4} {val4}
											</li>
											<li>
												{key5} {val5}
											</li>
											<li>
												{key6} {val6}
											</li>
										</ul>

										<p className="text-left pt-4 px-2">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
											quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
											consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
											cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
											non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</p>
									</div>
								</div>
								<div className="d-flex align-content-bottom float-left  bottomTitleBig">Databank</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
DetailsView.propTypes = {
	location: PropTypes.object,
	key0: PropTypes.string,
	key1: PropTypes.string,
	key2: PropTypes.string,
	key3: PropTypes.string,
	key4: PropTypes.string,
	key5: PropTypes.string,
	key6: PropTypes.string,
	val1: PropTypes.string,
	val2: PropTypes.string,
	val3: PropTypes.string,
	val4: PropTypes.string,
	val5: PropTypes.string,
	val6: PropTypes.string,
	image: PropTypes.string
};
