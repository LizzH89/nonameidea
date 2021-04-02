import React from "react";
import PropTypes from "prop-types";
import { BotonD } from "./BotonD";
import { ButtonFavorite } from "./buttonfavorite";
import SWIMAGE1 from "../../img/SWIMAGE1.jpg";
import "../../styles/index.scss";

export const Card = props => {
	Card.propTypes = {
		index: PropTypes.number,
		name: PropTypes.string,
		details: PropTypes.array,
		link: PropTypes.string
	};

	let mapDetails = props.details.map((detail, index) => {
		return (
			<li className="list-unstyled" key={index}>
				{detail}
			</li>
		);
	});

	return (
		<div className="col-3">
			<div className="card card-block">
				<img src={SWIMAGE1} className="card-img-top" alt="star wars image" />
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{props.name}</h5>
					{mapDetails}
					<div className="mt-auto">
						<div className="mt-3 d-flex justify-content-between ">
							<BotonD index={props.index} name={props.name} link={props.link} />
							<ButtonFavorite itemName={props.name} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
