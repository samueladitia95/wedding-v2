<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import StoryIntro from "$lib/containers/Story/StoryIntro.svelte";
	import StoryMain from "$lib/containers/Story/StoryMain.svelte";
	import StoryVideo from "$lib/containers/Story/StoryVideo.svelte";
</script>

<div>
	<Header>
		<StoryIntro />
	</Header>
	<StoryVideo />
	<StoryMain />
	<Footer />
</div>
