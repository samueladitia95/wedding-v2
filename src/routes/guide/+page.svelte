<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import GuideAccomodation from "$lib/containers/Guide/GuideAccomodation.svelte";
	import GuideDetail from "$lib/containers/Guide/GuideDetail.svelte";
	import GuideDresscode from "$lib/containers/Guide/GuideDresscode.svelte";
	import GuideIntro from "$lib/containers/Guide/GuideIntro.svelte";
	import GuideLocation from "$lib/containers/Guide/GuideLocation.svelte";
	import GuideRsvp from "$lib/containers/Guide/GuideRsvp.svelte";
</script>

<div>
	<Header id="guide">
		<GuideIntro />
	</Header>

	<GuideDetail />
	<GuideLocation />
	<GuideDresscode />
	<GuideAccomodation />
	<GuideRsvp />

	<Footer id="guide" />
</div>
