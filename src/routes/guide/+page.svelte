<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import GuideDetail from "$lib/containers/Guide/GuideDetail.svelte";
	import GuideDresscode from "$lib/containers/Guide/GuideDresscode.svelte";
	import GuideIntro from "$lib/containers/Guide/GuideIntro.svelte";
</script>

<div>
	<Header id="guide">
		<GuideIntro />
	</Header>

	<GuideDetail />
	<GuideDresscode />

	<Footer id="guide" />
</div>
