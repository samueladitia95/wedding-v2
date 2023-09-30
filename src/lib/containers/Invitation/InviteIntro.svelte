<script lang="ts">
	// Imports
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	// States
	let isShow = false;

	// Props
	export let introImg: string = "";

	// Methods
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="relative min-h-screen min-w-full"
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<!-- Main Image -->
		<img
			src={introImg}
			alt="invite"
			class="absolute top-0 left-0 w-screen h-screen object-cover object-left"
		/>
		<!-- Gradient Layer -->
		<div
			class="h-screen w-screen absolute top-0 left-0 z-10 gradient-layer"
			in:fly={{ y: -1000, duration: 2000 }}
		/>
	{/if}

	{#if isShow}
		<div class="absolute z-20 min-h-screen min-w-full" in:fade={{ duration: 2000, delay: 1500 }}>
			<!-- Main Section -->
			<div class="container min-h-screen min-w-full flex flex-col items-center">
				<div
					class="text-2xl md:text-5xl md:leading-normal md:max-w-xl font-mirage text-center text-ro-white leading-relaxed pt-44 px-12"
				>
					Together with their their loving families
				</div>
			</div>
		</div>
	{/if}
</div>
