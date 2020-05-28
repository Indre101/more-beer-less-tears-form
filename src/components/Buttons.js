import React from "react";
import "../App.scss";
import gsap from "gsap";

const styles = [
	"btn--primary--solid",
	"btn--primary--outline",
	"btn--secondary--solid",
	"btn--success--solid",
	"btn--counter--outline",
];

export const Button = ({ children, type, onClick, buttonStyle }) => {
	const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

	return (
		<button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
			{children}
		</button>
	);
};
