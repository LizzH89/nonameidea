import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Navbar } from "./component/navbar";
import { Home } from "./views/home";

import { Character } from "./views/character";
import { Planet } from "./views/planet";

import injectContext from "./store/appContext";
import { Footer } from "./component/footer";

const Layout = () => {
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />

					<Route exact path="/character/:name" component={Character} />
					<Route exact path="/planet/:name" component={Planet} />

					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
