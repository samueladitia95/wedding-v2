import { pb } from "$lib/pocketbase";
import type { PageLoad } from "../$types";

export const load: PageLoad = async ({ url }) => {
	const page = url.searchParams.get("n") || 1;

	const wishes = await pb.collection("wishes").getList(1, 5 * +page, {
		filter: 'project = "default" && template_id = "wedding_v2"',
		sort: "-created"
	});

	return {
		wishes: wishes
	};
};
