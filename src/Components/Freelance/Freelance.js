import React from 'react';
import { isMobile } from 'react-device-detect';
import JulietVideo from '../../assets/Screen Recording 2019-04-22 at 9.15.24 PM_1.mp4';

const Freelance = () => {
	return (
		<div className="freelance-section">
			{isMobile ? (
				<div className="freelance-card juliet">
					<div className="card-inner">
						<p>hello</p>
					</div>
				</div>
			) : (
				<div className="freelance-card juliet">
					<div className="card-inner">
						<div className="card-front juliet">
							<video className="juliet-video" autoPlay muted loop>
								<source src={JulietVideo} type="video/mp4" />
							</video>
						</div>
						<div className="card-back juliet">
							<h1 className="back__face__title">Juliet Creative</h1>
							<p className="juliet__about__site">
								This is a site that I have been working on for the last year. I worked closely with
								Duncan Collis, a highly talented graphic designer at Juliet Creative to design and
								implement this second version of the site. We will be launching it soon, stay tuned...
							</p>
							<p className="juliet__about__site">
								This was created with HTML5, CSS3, JavaScript and was bundled with a custom webpack
								config I created myself.
							</p>

							<a className="juliet__link" href="https://jimmjy.github.io/julietbundled/" target="_blank">
								View
							</a>
						</div>
					</div>
				</div>
			)}

			<div className="freelance-card reelStart">
				<div className="card-inner">
					<div className="card-front">
						<h1 className="front-face">reelStart</h1>
					</div>
					<div className="card-back">
						<h1 className="back-face">fun</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Freelance;
