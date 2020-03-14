import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

// Page Layout
import Layout from "./hoc/Layout";

// Web pages
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Rooms from "./containers/Rooms";

const App = () => {
	const routes = (
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/contact" exact component={Contact} />
			<Route path="/rooms" exact component={Rooms} />
			<Redirect to="/" />
		</Switch>
	);
	return (
		<BrowserRouter>
			<Layout>{routes}</Layout>
		</BrowserRouter>
	);
};

export default App;
