import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//component import
import App from './Containers/App/App';
import Header from './Containers/Header/Header';
import Projects from './Components/Projects/Projects';
import About from './Components/About/About';
import NoMatch from './Components/404/NoMatch';

//styles
import '../src/styles/main.scss';

render(
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/projects" component={Projects} />
			<Route path="/about" component={About} />
			<Route component={NoMatch} />
		</Switch>
	</Router>,
	document.getElementById('root'),
);

// ============ react-device-detect ==================
// use this for mobile view
