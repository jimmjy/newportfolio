import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

class Header extends Component {
	state = {
		title: 'JAMES FINKELSTEIN',
		timeIndex: 0,
		cycle: 0,
		wordCycle: ['INNOVATOR', 'WEB DEVELOPER', 'CREATOR', 'JAMES FINKELSTEIN'],
	};

	componentDidMount() {
		this.letterShuffle = setInterval(() => {
			this.changeCharacters();
		}, 2000);
	}

	componentWillUnmount() {
		clearInterval(this.letterShuffle);
	}

	//creates a random code b/w 65/122 to get ascii character
	randomCodes = () => {
		return Math.floor(Math.random() * (122 - 65 + 1)) + 65;
	};

	changeCharacters = () => {
		//split title into array
		const wordHolder = this.state.title.split('');

		//jumbles letters and displays them
		const time = setInterval(() => {
			const newWord = wordHolder.map(char => {
				return `${String.fromCharCode(this.randomCodes())}`;
			});

			this.setState(prevState => {
				return {
					timeIndex: prevState.timeIndex + 1,
					title: newWord.join(''),
				};
			});

			//if time has hit 1000ms, stop letter change and put static word from selected list
			if (this.state.timeIndex > 10) {
				clearInterval(time);
				this.setState(prevState => {
					return {
						timeIndex: 0,
						cycle: this.state.cycle < this.state.wordCycle.length - 1 ? prevState.cycle + 1 : 0,
						title: `${this.state.wordCycle[this.state.cycle]}`,
					};
				});
			}
		}, 100);
	};

	render() {
		return (
			<div className={`header ${isMobile && 'header-relative'}`}>
				<div className="header-title">
					<Link to="/" className="header__title-name">
						_> {this.state.title}
					</Link>
				</div>
				<div className="header-links">
					<Link className="header__link" to="/projects">
						+Projects
					</Link>
					<Link className="header__link" to="/about">
						About
					</Link>
					<a href="mailto:jamesfinkelstein@yahoo.com" className="header__link" to="/">
						Contact
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
