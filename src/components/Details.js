import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import "../App.scss";

function Details() {
	return (
		<div className="main-wrapper">
			<div className="page-title">
				<h1>Details</h1>
			</div>
			<Form />
		</div>
	);
}

export default Details;
