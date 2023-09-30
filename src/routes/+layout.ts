import { pb } from "$lib/pocketbase";
import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async () => {
	try {
		const webContent = await pb.collection("wedding_v2").getFirstListItem('project="default"');
		console.log(webContent, "++++++++++++===");

		// Galleries Images
		let galleries;
		if (webContent.gallery && webContent.gallery.length) {
			galleries = webContent.gallery.map((el: string) => {
				return pb.files.getUrl(webContent, el);
			});
		}

		// Songs
		let song;
		if (webContent.song) {
			song = pb.files.getUrl(webContent, webContent.song);
		}

		// Video
		let video;
		if (webContent.video) {
			video = pb.files.getUrl(webContent, webContent.video);
		}

		// Logos
		const logos = {
			main: pb.files.getUrl(webContent, webContent.logo_main),
			mainColor: pb.files.getUrl(webContent, webContent.logo_main_color),
			fullName: pb.files.getUrl(webContent, webContent.logo_full_name),
			fullNameColor: pb.files.getUrl(webContent, webContent.logo_full_name_color)
		};

		console.log(logos);
		return {
			galleries,
			song,
			video,
			logos
		};
	} catch (err) {
		console.log(err);
	}
};
