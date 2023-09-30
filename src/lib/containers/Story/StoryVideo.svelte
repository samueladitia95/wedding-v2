<script lang="ts">
	// Imports
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	// States
	let isShow = false;

	// Props
	export let videoUrl: string = "";

	// Methods
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="story-video"
	class="relative min-h-screen min-w-full bg-ro-brown"
	use:inview={{
		rootMargin: "-100px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="z-full w-screen overflow-hidden" in:fade={{ duration: 2000, delay: 1000 }}>
			<video
				class="w-screen min-h-screen p-0 max-h-screen transform scale-125 md:scale-1"
				autoplay
				loop
				muted
				playsinline
			>
				<source src={videoUrl} type="video/mp4" />
				<track kind="captions" />
			</video>
		</div>
	{/if}
</div>
