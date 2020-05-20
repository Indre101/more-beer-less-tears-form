import React, { useState, useEffect } from "react";
import "../App.scss";

function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const nameChanged = (e) => {
		setName(e.target.value);
	};

	const emailChanged = (e) => {
		setEmail(e.target.value);
	};

	const phoneChanged = (e) => {
		setPhone(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		// postForm({
		// 	name: name,
		// 	email: email,
		// 	phone: phone,
		// });
		setName("");
		setEmail("");
		setPhone("");
		console.log({ name, email, phone });
	};

	return (
		<div>
			<h1>Details</h1>
			<form onSubmit={onSubmit}>
				<label>
					<h2>Name</h2>
					<input type="text" onChange={nameChanged} name="name" value={name} />
				</label>
				<label>
					<h2>Email</h2>
					<input type="text" onChange={emailChanged} name="email" value={email} />
				</label>
				<label>
					<h2>Telephone</h2>
					<input type="text" onChange={phoneChanged} name="phone" value={phone} />
				</label>
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}

export default Form;
