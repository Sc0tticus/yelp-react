import React from 'react';
import { LandingPage } from './LandingPage/LandingPage';
import { Route, Switch } from 'react-router-dom';
import { Search } from './Search/Search.js';

// Switch, means find the first case that matches the current situation
// or the first route in React Router that matches

function App() {
	return (
		<Switch>
			<Route path="/search" component={Search} />
			<Route path="/" component={LandingPage} />
		</Switch>
	);
}

export default App;
