import React from 'react';
import { isMobile } from 'react-device-detect';
import JulietVideo from '../../assets/Screen Recording 2019-04-22 at 9.15.24 PM_1.mp4';
import reelStart from '../../assets/reelStart.png';

const Freelance = () => {
	return (
		<div className="freelance-section">
			<div className="freelance-card juliet">
				<div className="card-inner">
					<div className="card-front juliet">
						<video className="juliet-video" autoPlay muted loop>
							<source src={JulietVideo} type="video/mp4" />
						</video>
					</div>
					<div className="card-back juliet">
						<h1 className="back__face__title">Juliet Creative</h1>
						<p className="about__site">
							This is a site that I have been working on for the last 3 months. I worked closely with
							Duncan Collis, a highly talented graphic designer at Juliet Creative to design and implement
							this second version of the site. It has just launched and will have a whole works sections
							soon.
						</p>
						<p className="about__site">
							This was created with HTML5, CSS3, JavaScript and was bundled with a custom webpack config I
							created myself.
						</p>

						<a className="card__link" href="https://www.wearejuliet.com" target="_blank">
							View
						</a>
					</div>
				</div>
			</div>

			<div className="freelance-card reelStart">
				<div className="card-inner">
					<div className="card-front reelStart">
						<img className="reelStart__card__face" src={reelStart} alt="Reel Start website image" />
					</div>
					<div className="card-back reelStart">
						<h1 className="back__face__title">Reel Start</h1>
						<p className="about__site">
							This is a beautiful site created for a wonderful organization called Reel Start. Founded by
							Evan Goldberg(producer of superbad), and Arianne Slover, They help under privilaged kids
							learn about film making.
						</p>
						<p className="about__site">
							This was created with React, React Router and will have firebase added closer to completion.
							It was bundled with a custom webpack config I created myself.
						</p>

						<a className="card__link" href="https://jimmjy.github.io/Reel/" target="_blank">
							View
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Freelance;
