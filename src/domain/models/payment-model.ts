export type PaymentModel = {
	name: string;
	address: string;
	phone: string;
	city: string;
	type: CreditCardMethod | PayPalMethod | BitcoinMethod;
}

type CreditCardMethod = {
	cardNumber: number;
	cardHolder: number;
	exprationDate: Date;
	cvc: number;
}

type PayPalMethod = {
	transition: string;
	pix: string;
	date: Date;
}

type BitcoinMethod = {
	wallet: string;
}



