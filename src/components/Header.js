import React, { useState, useEffect } from "react";
import "../App.scss";
import gsap from "gsap";

function Header() {
	useEffect(() => {
		// var tl = gsap.timeline({ delay: 0 });
		// tl.from(".animFoam", { opacity: 0, y: 40, duration: 3 });
		// tl.to(".animFoam", { opacity: 1, y: 0 });
		gsap.from(".animFoam", { duration: 1, y: 30, opacity: 0, stagger: 0.8 });
	}, []);
	return (
		<div className="site-header">
			<div className="header-background animFoam">
				<div className="logo-container">
					<img
						className="foobar-logo"
						src={require("../../src/assets/svg/foobar_logo.svg")}
						alt="Foobar logo"
					/>
				</div>
			</div>
			<div className="cloud-top animFoam">
				<img
					className="cloud"
					src={require("../../src/assets/svg/cloud.svg")}
					alt="cloud"
				/>
			</div>
		</div>
	);
}

export default Header;
