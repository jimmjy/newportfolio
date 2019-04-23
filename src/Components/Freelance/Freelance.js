import React from 'react';
import { isMobile } from 'react-device-detect';

const Freelance = () => {
	return (
		<div className="freelance-section">
			{isMobile ? (
				<div>
					<p>hello</p>
				</div>
			) : (
				<div className="freelance-card juliet">
					<div className="card-inner">
						<div className="card-front juliet">
							<h1 className="front-face">Juliet</h1>
						</div>
						<div className="card-back juliet">
							<h1 className="back-face">Creative</h1>
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
