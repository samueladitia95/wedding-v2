<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import StoryIntro from "$lib/containers/Story/StoryIntro.svelte";
	import StoryMain from "$lib/containers/Story/StoryMain.svelte";
	import StoryVideo from "$lib/containers/Story/StoryVideo.svelte";
	import type { LayoutData } from "../$types";

	export let data: LayoutData;
</script>

<div>
	<Header id="story">
		<StoryIntro />
	</Header>
	<StoryVideo videoUrl={data.video} />
	<StoryMain carauselImages={data.galleries} />
	<Footer id="story" />
</div>
