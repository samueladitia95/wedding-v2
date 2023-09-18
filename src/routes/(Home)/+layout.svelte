<script>
	import { isShowIntro } from "$lib/store";

	// Import
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	// State
	let isShow = false;

	// Store
	isShowIntro.subscribe((value) => {
		isShow = value;
	});

	// Lifecycle
	onMount(() => {
		window.scrollTo(0, 0);
		document.body.classList.add("no-scrollbar");
		document.body.classList.add("overflow-hidden");
	});
</script>

<div class="relative">
	{#if isShow}
		<div
			class="container max-h-screen fixed bottom-8 left-0 z-20"
			in:fade={{ duration: 1000, delay: 2500 }}
		>
			<div class="w-full flex justify-start">
				<button class="bg-ro-creme rounded-full p-[11px]">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
					>
						<path d="M9.55566 21.6945V6.13892L21.7779 13.9167L9.55566 21.6945Z" fill="white" />
					</svg>
				</button>
			</div>
		</div>
	{/if}

	<slot />
</div>
