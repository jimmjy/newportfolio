import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
					<div className="back back-freelance" />
				</div>
				<div className="project">
					<h1 className="project__title">Hobby Projects</h1>
					<div className="back back-hobby-games" />
				</div>
				<div className="project">
					<h1 className="project__title">School Projects</h1>
					<div className="back back-school-projects" />
				</div>
				{this.state.show && <Footer />}
			</div>
		);
	}
}

export default Projects;

// Photo by Ben Kolde on Unsplash
// Photo by Charles 🇵🇭 on Unsplash
