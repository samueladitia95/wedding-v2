<script lang="ts">
	import Intro from "$lib/containers/Intro/Intro.svelte";
	import Navigation from "$lib/containers/Intro/Navigation.svelte";
	import type { LayoutData } from "./$types";

	// Props
	export let data: LayoutData;
</script>

<Intro logoMain={data.logos?.main} />
<Navigation logoFullNameColor={data.logos?.fullNameColor} logoMainColor={data.logos?.mainColor} />
