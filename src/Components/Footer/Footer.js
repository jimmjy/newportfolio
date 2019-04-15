import React from 'react';

import { isMobile } from 'react-device-detect';

const Footer = () => {
	return (
		<div className={`footer-section ${isMobile && 'footer-relative'}`}>
			<div className="footer-nav">
				<a href="https://github.com/jimmjy" target="_blank" className="footer__link">
					GitHub
				</a>
				<a
					href="https://www.linkedin.com/in/james-finkelstein-09a40713a/"
					target="_blank"
					className="footer__link"
				>
					Linkedin
				</a>
				<a href="https://twitter.com/jayfink" target="_blank" className="footer__link">
					Twitter
				</a>
				<a href="https://www.instagram.com/jimmjy/" target="_blank" className="footer__link">
					Instagram
				</a>
			</div>
		</div>
	);
};

export default Footer;
