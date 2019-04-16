import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//component import
import Footer from '../Footer/Footer';
import { isMobile } from 'react-device-detect';

class Projects extends Component {
	state = {
		mobile: isMobile,
	};

	// componentDidMount() {
	// 	this.onWindowChange();
	// }

	// componentWillUnmount() {
	// 	this.onWindowChange();
	// }

	// onWindowChange = () => {
	// 	window.addEventListener('resize', e => {
	// 		this.setState({
	// 			show: e.target.innerWidth > 800,
	// 		});
	// 	});
	// };

	render() {
		return (
			<div className="projects-section">
				<div className="project">
					<Link className="project__title">Freelance</Link>
					<div className={`back back-freelance ${this.state.mobile && 'back-opacity'}`} />
				</div>
				<div className="project">
					<Link className="project__title">Hobby Projects</Link>
					<div className={`back back-hobby-games ${this.state.mobile && 'back-opacity'}`} />
				</div>
				<div className="project">
					<Link className="project__title">School Projects</Link>
					<div className={`back back-school-projects ${this.state.mobile && 'back-opacity'}`} />
				</div>
				<Footer classStyle={'footer-projects-mobile'} />
			</div>
		);
	}
}

export default Projects;
