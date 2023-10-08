import { pb } from "$lib/pocketbase";
import type { PageLoad } from "../$types";

export const load: PageLoad = async () => {
	const wishes = await pb.collection("wishes").getList(1, 50, {
		filter: 'project = "default" && template_id = "wedding_v2"',
		sort: "-created"
	});

	return {
		wishes: wishes
	};
};
