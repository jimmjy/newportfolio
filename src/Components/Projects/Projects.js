import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//component import
import Footer from '../Footer/Footer';
import { isMobile } from 'react-device-detect';

class Projects extends Component {
	render() {
		return (
			<div className="projects-section">
				<div className="project">
					<Link className="project__title">Freelance</Link>
					<div className={`back back-freelance ${isMobile && 'back-opacity'}`} />
				</div>
				<div className="project">
					<Link className="project__title">Hobby Projects</Link>
					<div className={`back back-hobby-games ${isMobile && 'back-opacity'}`} />
				</div>
				<div className="project">
					<Link className="project__title">School Projects</Link>
					<div className={`back back-school-projects ${isMobile && 'back-opacity'}`} />
				</div>
				<Footer classStyle={'footer-projects-mobile'} />
			</div>
		);
	}
}

export default Projects;
