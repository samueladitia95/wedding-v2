<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import InviteCountdown from "$lib/containers/Invitation/InviteCountdown.svelte";
	import InviteIntro from "$lib/containers/Invitation/InviteIntro.svelte";
	import type { LayoutData } from "../$types";

	export let data: LayoutData;
</script>

<div>
	<Header id="invitation">
		<InviteIntro />
	</Header>

	<InviteCountdown carauselImages={data.galleries} />

	<Footer id="invitation" />
</div>
