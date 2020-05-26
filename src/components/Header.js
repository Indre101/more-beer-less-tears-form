import React, { useState, useEffect } from "react";
import "../App.scss";

function Header() {
	return (
		<div className="site-header">
			<div className="logo-container">
				<img
					className="foobar-logo"
					src={require("../../src/assets/svg/foobar_logo.svg")}
					alt="Foobar logo"
				/>
			</div>
			{/* <div className="title">
				<h1>Remote Bar</h1>
			</div> */}
		</div>
	);
}

export default Header;
