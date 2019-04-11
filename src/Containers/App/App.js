import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div className="app-content">
				<div className="app-content-center">
					<h1 className="name">Web development is where art and logic collide {String.fromCharCode(126)} </h1>
				</div>
				<div className="app-content-footer">
					<p className="app-content__about">Hi, I'm James a Web Developer based in Toronto</p>
				</div>
			</div>
		);
	}
}

export default App;
