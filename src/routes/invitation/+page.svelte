<script lang="ts">
	import { goto } from "$app/navigation";
	import InviteCountdown from "$lib/containers/InviteCountdown.svelte";
	import InviteIntro from "$lib/containers/InviteIntro.svelte";
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

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
				class="w-full flex justify-between items-center text-ro-white absolute top-0 z-40 pt-10 container"
				in:fade={{ duration: 2000, delay: 500 }}
			>
				<!-- Main Logo -->
				<img src="/images/logo_white_2.png" alt="logo" class="w-12 h-12" />

				<!-- Close button -->
				<a href="/#invitation">
					<img src="/icons/close-white.svg" alt="close" class="w-8 h-8" />
				</a>
			</div>
		{/if}
		<InviteIntro />
	</div>

	<div>
		<InviteCountdown />

		<!-- Back to Menu -->
		<div class="flex items-center justify-center py-11 bg-ro-creme z-50">
			<a href="/#invitation" class="flex items-center justify-center gap-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="25"
					height="14"
					viewBox="0 0 25 14"
					fill="none"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0.5 6.90308L6.92566 13.4614L7.74916 12.5529L2.84075 7.54392L24.5001 7.54392V6.28155L2.871 6.28155L7.74344 1.46114L6.93308 0.538574L0.5 6.90308Z"
						fill="white"
					/>
				</svg>
				<div class="font-mirage text-lg text-ro-white">Back to Menu</div>
			</a>
		</div>
	</div>
</div>
