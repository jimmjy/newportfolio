import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//component import
import App from './Containers/App/App';
import Header from './Containers/Header/Header';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import Freelance from './Components/Freelance/Freelance';
import NoMatch from './Components/404/NoMatch';

//styles
import '../src/styles/main.scss';

render(
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/projects" component={Projects} />
			<Route exact path="/about" component={About} />
			<Route exact path="/projects/freelance" component={Freelance} />
			<Route component={NoMatch} />
		</Switch>
	</Router>,
	document.getElementById('root'),
);

// ============ react-device-detect ==================
// use this for mobile view
