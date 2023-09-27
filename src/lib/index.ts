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
