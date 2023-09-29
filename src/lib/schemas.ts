import { z } from "zod";

export const _schemaComments = z
	.object({
		name: z
			.string({ required_error: "Name is Required" })
			.trim()
			.min(1, { message: "Name is Required" }),
		comment: z
			.string({ required_error: "Comment is Required" })
			.trim()
			.min(1, { message: "Name is Required" })
	})
	.required();

export const _schemaWishes = z
	.object({
		name: z
			.string({ required_error: "Name is Required" })
			.trim()
			.min(1, { message: "Name is Required" }),
		phone: z
			.string({
				required_error: "Phone Number is Required"
			})
			.regex(/(^08)(\d{3,4}-?){2}\d{2,3}$/, "Phone Number is Invalid"),
		email: z
			.string({
				required_error: "Email is Required"
			})
			.email({
				message: "Email is Invalid"
			}),
		isAttending: z
			.boolean({
				required_error: "is Attending is Required"
			})
			.default(false),
		isDate: z
			.boolean({
				required_error: "Date is Required"
			})
			.default(false),
		isAccomodation: z
			.boolean({
				required_error: "Accomodation is Required"
			})
			.default(false),
		allergies: z.string().trim()
	})
	.required();