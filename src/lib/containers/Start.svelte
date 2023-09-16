<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div class="bg-ro-creme">
	<div
		class="container h-screen w-screen relative"
		use:inview={{
			rootMargin: "0px",
			unobserveOnEnter: true
		}}
		on:inview_change={handleChange}
	>
    <!-- Opening Screen -->
		{#if isShow}
			<img
				src="/icons/front-logo.svg"
				alt="main logo"
				class="w-36 h-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				transition:fade={{ duration: 2000 }}
			/>
			<button
				class="text-ro-brown bg-ro-white text-lg whitespace-nowrap rounded-full px-10 py-4 font-juana absolute bottom-36 left-1/2 transform -translate-x-1/2"
				transition:fade={{ duration: 2000, delay: 2000 }}
			>
				Open Invitation
			</button>
		{/if}
	</div>
</div>
