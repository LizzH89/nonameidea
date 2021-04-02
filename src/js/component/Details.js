import React, { useState, useEffect, useContext } from "react";
import SWIMAGE1 from "../../img/SWIMAGE1.jpg";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";

export const Details = props => {
	Details.propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		details: PropTypes.array
	};
	const { title, description, details } = props;

	const detailsHtml = details.map((detail, index) => {
		return (
			<div key={index} className="col-2">
				<p>{detail.label}</p>
				<p>{detail.value}</p>
			</div>
		);
	});

	return (
		<div className="container">
			<div className="d-flex flex-row text-center">
				<img src={SWIMAGE1} className="col-6" alt="star wars image" />
				<div className="col-6">
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</div>

			<hr className="bg-danger border border-danger" />

			<div className="d-flex flex-row text-center text-danger">{detailsHtml}</div>
		</div>
	);
};
