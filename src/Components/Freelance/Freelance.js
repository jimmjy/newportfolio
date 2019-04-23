import React from 'react';
import { isMobile } from 'react-device-detect';
import JulietVideo from '../../assets/Screen Recording 2019-04-22 at 9.15.24 PM_1.mp4';

const Freelance = () => {
	return (
		<div className="freelance-section">
			{isMobile ? (
				<div className="freelance-card juliet">
					<p>hello</p>
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
							<h1 className="back-face">Juliet Creative</h1>
							<p>description about site</p>
							<a href="https://jimmjy.github.io/julietbundled/" target="_blank">
								Live
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
