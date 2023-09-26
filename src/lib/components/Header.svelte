<script lang="ts">
	import { isFromAnotherPage, isShowIntro } from "$lib/store";
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	export let id: string;
	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<!-- Invite Intro -->
	<div class="relative">
		{#if isShow}
			<div
				class="w-full flex justify-between items-center text-ro-white absolute top-0 z-40 pt-10 container max-w-none"
				in:fade={{ duration: 2000, delay: 500 }}
			>
				<!-- Main Logo -->
				<img src="/images/logo_white_2.png" alt="logo" class="w-12 h-12 md:w-16 md:h-16" />

				<!-- Close button -->
				<a
					href="/#{id}"
					on:click={() => {
						isShowIntro.set(true);
						isFromAnotherPage.set(true);
					}}
				>
					<img src="/icons/close-white.svg" alt="close" class="w-8 h-8 md:w-12 md:h-12" />
				</a>
			</div>
		{/if}
		<slot />
	</div>
</div>
