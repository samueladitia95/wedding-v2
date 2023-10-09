import { z } from "zod";

export const _schemaWishes = z
	.object({
		name: z
			.string({ required_error: "Name is Required" })
			.trim()
			.min(1, { message: "Name is Required" }),
		wishes: z
			.string({ required_error: "Wishes is Required" })
			.trim()
			.min(12, { message: "Your wishes should have minimum 12 characters" })
			.max(255, { message: "Your wishes should have maximum 255 characters" })
	})
	.required();

export const _schemaRsvp = z
	.object({
		attendee_name: z
			.string({ required_error: "Name is Required" })
			.trim()
			.min(1, { message: "Name is Required" }),
		attendee_phone: z
			.string({
				required_error: "Phone Number is Required"
			})
			.regex(/(^08)(\d{3,4}-?){2}\d{2,3}$/, "Phone Number is Invalid"),
		attendee_email: z
			.string({
				required_error: "Email is Required"
			})
			.email({
				message: "Email is Invalid"
			}),
		is_attend: z
			.boolean({
				required_error: "is Attending is Required"
			})
			.default(false),
		is_bring_partner: z
			.boolean({
				required_error: "Date is Required"
			})
			.default(false),
		is_need_accomodation: z
			.boolean({
				required_error: "Accomodation is Required"
			})
			.default(false),
		attendee_note: z.string().trim()
	})
	.required();
