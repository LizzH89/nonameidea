//Aqui es donde traigo los datos del App contex para que se vean en la pantalla usando el menu horizontal que ya habia creado.
//Originalmente habia pensado traer los datos aqui mismo pero hubiera tenido que hacer lo mismo para los planetas creo que esa es la idea de jalar el API al App Context y despues de alla para acaa

import React, { useState, useEffect, useContext } from "react";
import { MenuHorizontal } from "./MenuHorizontal";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		charactersProcess();
	}, []);

	async function charactersProcess() {
		await getCharacters();
		localStorage.setItem("characters", JSON.stringify(store.charactersResponseJSON));
		const charactersMap = mapCharacters();
		setCharacters(charactersMap);
	}

	async function getCharacters() {
		await actions.fetchGetCharacters();
	}

	function mapCharacters() {
		let jsonMap = [];
		if (store.charactersResponseJSON.results) {
			jsonMap = store.charactersResponseJSON.results.map(function(character, index) {
				let details = [
					"Gender: " + character.gender,
					"Hair Color: " + character.hair_color,
					"Eye Color: " + character.eye_color
				];
				return {
					name: character.name,
					details: details,
					isFavorite: false
				};
			});
		}
		return jsonMap;
	}

	return <MenuHorizontal listName={"Characters"} items={characters} link={"character"} />;
};
