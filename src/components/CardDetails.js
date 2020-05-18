import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

export default function CardDetails() {
	const {
		wrapperProps,
		getCardImageProps,
		getCardNumberProps,
		getExpiryDateProps,
		getCVCProps,
	} = usePaymentInputs();

	return (
		<div>
			<PaymentInputsWrapper {...wrapperProps}>
				<svg {...getCardImageProps({ images })} />
				<input {...getCardNumberProps()} />
				<input {...getExpiryDateProps()} />
				<input {...getCVCProps()} />
			</PaymentInputsWrapper>
		</div>
	);
}
