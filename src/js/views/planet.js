import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SWIMAGE1 from "../../img/SWIMAGE1.jpg";
import { Context } from "../store/appContext";
import { Details } from "../component/Details";
import { ifArrayExistsAndHasData } from "../component/noEmpty-array";

export const Planet = () => {
	const [planet, setPlanet] = useState({});
	const { store, actions } = useContext(Context);
	let { name } = useParams();

	useEffect(() => {
		name = decodeURIComponent(name);
		checkIfWeHaveData();
		getPlanetByName(name);
	}, []);

	function checkIfWeHaveData() {
		if (ifArrayExistsAndHasData(store.planetsResponseJSON)) {
			let storedPlanets = JSON.parse(localStorage.getItem("planets"));
			actions.setPlanets(storedPlanets);
		}
	}

	function getPlanetByName(name) {
		let planet = actions.getPlanetByName(name);
		if (planet) {
			setPlanet(planet);
		} else {
			alert("Planet not found");
			throw Error("Planet not found");
		}
	}
	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Population",
				value: object.population
			},
			{
				label: "Terrain",
				value: object.terrain
			},
			{
				label: "Climate",
				value: object.climate
			},
			{
				label: "Diameter",
				value: object.diameter
			},
			{
				label: "Gravity",
				value: object.gravity
			},
			{
				label: "Rotation Period",
				value: object.rotation_period
			}
		];
	}

	const itemDetails = parseDetailsToItemDetails(planet);
	const description =
		"Obi-Wan Kenobi said to fallen Anakin Skywalker: “You were the Chosen One! It was said that you would destroy the Sith, not join them! Bring balance to the Force, not leave it in darkness! You were my brother, Anakin! I loved you!";
	("Obi-Wan wasn’t aware that Anakin’s transformation into Darth Vader was actually the beginning of an end of bringing the balance to the Star Wars universe. We are not here to discuss Star Wars trivia. We bet, there are many readers with greater knowledge about the Star Wars than us. What we wanna do is to imagine, what would Darth Vader’s resume look like.");
	("Not many Siths can say: ”I was a Jedi knight once”. Darth Vader can show off as much as he can. He was a big deal in both Jedi and Sith world. This gives him exceptional experiences which would lead to another star-like career in case he would be fired from his Sith Lord post.");

	return <Details title={planet.name} description={description} details={itemDetails} />;
};
