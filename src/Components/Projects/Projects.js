import React, { Component } from 'react';

//component import
import Footer from '../Footer/Footer';

class Projects extends Component {
	state = {
		show: true,
	};

	componentDidMount() {
		this.onWindowChange();
	}

	componentWillUnmount() {
		this.onWindowChange();
	}

	onWindowChange = () => {
		window.addEventListener('resize', e => {
			this.setState({
				show: e.target.innerWidth > 900,
			});
		});
	};

	render() {
		return (
			<div className="projects-section">
				<div className="project">
					<h1 className="project__title">Freelance</h1>
					<div className="back" />
				</div>
				<div className="project">
					<h1 className="project__title">Freelance</h1>
					<div className="back" />
				</div>
				<div className="project">
					<h1 className="project__title">Freelance</h1>
					<div className="back" />
				</div>
				{this.state.show && <Footer />}
			</div>
		);
	}
}

export default Projects;

// Photo by Ben Kolde on Unsplash
