import React from 'react';
import * as Scroll from 'react-scroll';
import './style.css';

function Header() {
	var scroll = Scroll.animateScroll;

	const scrollToTop = function() {
		scroll.scrollToTop();
	};
	return (
		<header>
			<h1 onClick={scrollToTop}>Employee Directory</h1>
		</header>
	);
}

export default Header;
