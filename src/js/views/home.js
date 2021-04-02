import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import SWIMAGE1 from "../../img/SWIMAGE1.jpg";
import { Characters } from "../component/Characters.js";
import { Planets } from "../component/Planets.js";

export const Home = () => {
	return (
		<div className="container">
			<Characters />
			<Planets />
		</div>
	);
};
