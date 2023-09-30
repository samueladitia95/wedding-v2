<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import GuideAccomodation from "$lib/containers/Guide/GuideAccomodation.svelte";
	import GuideDetail from "$lib/containers/Guide/GuideDetail.svelte";
	import GuideDresscode from "$lib/containers/Guide/GuideDresscode.svelte";
	import GuideIntro from "$lib/containers/Guide/GuideIntro.svelte";
	import GuideLocation from "$lib/containers/Guide/GuideLocation.svelte";
	import GuideRsvp from "$lib/containers/Guide/GuideRsvp.svelte";
	import type { LayoutData } from "../$types";

	export let data: LayoutData;
</script>

<div>
	<Header id="guide" fullMain={data.logos?.main}>
		<GuideIntro logoFullName={data.logos?.fullName} />
	</Header>

	<GuideDetail mainGuideImage={data.logos?.guide1} />
	<GuideLocation locationMapImg={data.logos?.guide2} />
	<GuideDresscode />
	<GuideAccomodation guide3={data.logos?.guide3} guide4={data.logos?.guide4} />
	<GuideRsvp />

	<Footer id="guide" />
</div>
