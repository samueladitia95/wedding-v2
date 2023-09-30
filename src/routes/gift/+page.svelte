<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import GiftFooter from "$lib/containers/Gift/GiftFooter.svelte";
	import GiftIntro from "$lib/containers/Gift/GiftIntro.svelte";
	import type { LayoutData } from "../$types";

	export let data: LayoutData;
</script>

<div>
	<Header id="gift">
		<GiftIntro logoFullName={data.logos?.fullName} />
	</Header>

	<GiftFooter />

	<Footer id="gift" />
</div>
