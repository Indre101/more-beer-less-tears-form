import React, { useState, useEffect } from "react";
import "../App.scss";

function Header() {
	return (
		<div className="site-header">
			<div className="title">
				<h1>Foobar</h1>
			</div>
			{/* <div className="header-cloud">
				<img
					className="cloud"
					src={require("../../src/assets/svg/cloud.svg")}
					alt="cloud"
				/>
			</div> */}
		</div>
	);
}

export default Header;
