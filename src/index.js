import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

//component import
import App from './Containers/App/App';
import Header from './Containers/Header/Header';
import NoMatch from './Components/404/NoMatch';

//styles
import '../src/styles/main.scss';

render(
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={App} />
			<Route component={NoMatch} />
		</Switch>
	</Router>,
	document.getElementById('root'),
);
