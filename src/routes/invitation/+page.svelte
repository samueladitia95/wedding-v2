<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import InviteCountdown from "$lib/containers/Invitation/InviteCountdown.svelte";
	import InviteIntro from "$lib/containers/Invitation/InviteIntro.svelte";
</script>

<div>
	<Header id="invitation">
		<InviteIntro />
	</Header>

	<InviteCountdown />

	<Footer id="invitation" />
</div>
