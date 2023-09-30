import { pb } from "$lib/pocketbase";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
	try {
		const webContent = await pb.collection("wedding_v2").getFirstListItem('project="default"');

		let galleries;
		if (webContent.gallery && webContent.gallery.length) {
			galleries = webContent.gallery.map((el: string) => {
				return pb.files.getUrl(webContent, el);
			});
		}

		return {
			galleries
		};
	} catch (err) {
		console.log(err);
	}
};
