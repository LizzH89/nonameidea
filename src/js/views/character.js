import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SWIMAGE1 from "../../img/SWIMAGE1.jpg";
import { Context } from "../store/appContext";
import { Details } from "../component/Details";
import { ifArrayExistsAndHasData } from "../component/noEmpty-array";

export const Character = () => {
	const [character, setCharacter] = useState({});
	const { store, actions } = useContext(Context);
	let { name } = useParams();

	useEffect(() => {
		name = decodeURIComponent(name);
		checkIfWeHaveData();
		getCharacterByName(name);
	}, []);

	function checkIfWeHaveData() {
		if (ifArrayExistsAndHasData(store.charactersResponseJSON)) {
			let storedCharacters = JSON.parse(localStorage.getItem("characters"));
			actions.setCharacters(storedCharacters);
		}
	}

	function getCharacterByName() {
		let character = actions.getCharacterByName(name);
		if (character) {
			setCharacter(character);
		} else {
			alert("Character not found");
			throw Error("Character not found");
		}
	}

	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Gender",
				value: object.gender
			},
			{
				label: "Hair Color",
				value: object.hair_color
			},
			{
				label: "Height",
				value: object.height
			},
			{
				label: "Mass",
				value: object.mass
			},
			{
				label: "Skin Color",
				value: object.skin_color
			},
			{
				label: "Birth Year",
				value: object.birth_year
			}
		];
	}

	const itemDetails = parseDetailsToItemDetails(character);
	const description =
		"Obi-Wan Kenobi said to fallen Anakin Skywalker: “You were the Chosen One! It was said that you would destroy the Sith, not join them! Bring balance to the Force, not leave it in darkness! You were my brother, Anakin! I loved you!";
	("Obi-Wan wasn’t aware that Anakin’s transformation into Darth Vader was actually the beginning of an end of bringing the balance to the Star Wars universe. We are not here to discuss Star Wars trivia. We bet, there are many readers with greater knowledge about the Star Wars than us. What we wanna do is to imagine, what would Darth Vader’s resume look like.");
	("Not many Siths can say: ”I was a Jedi knight once”. Darth Vader can show off as much as he can. He was a big deal in both Jedi and Sith world. This gives him exceptional experiences which would lead to another star-like career in case he would be fired from his Sith Lord post.");

	return <Details title={character.name} description={description} details={itemDetails} />;
};
