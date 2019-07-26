import React, { Component } from 'react';
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Application from './containers/Application';

class App extends Component {

	render() {
		ReactGA.initialize('UA-141327050-1');
		ReactGA.pageview(window.location.pathname + window.location.search);
		return (
			<Application />
		);
	}
}

export default App;
