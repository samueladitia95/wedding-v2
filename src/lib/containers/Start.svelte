<script lang="ts">
	// Import
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";
	import { cubicOut } from "svelte/easing";

	// State
	let isShow = false;
	let transition1 = false;

	// Method
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="bg-ro-creme h-screen w-screen"
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<!-- Opening Screen -->
	{#if isShow && !transition1}
		<div class="container h-full w-full relative">
			<img
				src="/icons/front-logo.svg"
				alt="main logo"
				class="w-36 h-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				in:fade={{ duration: 2000 }}
				out:fade={{ duration: 500 }}
			/>
			<button
				class="text-ro-brown bg-ro-white text-lg whitespace-nowrap rounded-full px-10 py-4 font-juana absolute bottom-36 left-1/2 transform -translate-x-1/2"
				in:fade={{ duration: 2000, delay: 2000 }}
				out:fade={{ duration: 500 }}
				on:click={() => (transition1 = true)}
			>
				Open Invitation
			</button>
		</div>
		<div />
	{/if}

	<!-- Main Content -->
	{#if isShow && transition1}
		<div class="h-full w-full relative">
			<!-- Main Image -->
			<img
				src="/images/start_mobile_1.jpg"
				alt="main"
				class="h-full w-full object-cover"
				in:fly={{ y: 2000, duration: 2000, delay: 500, easing: cubicOut }}
			/>

			<!-- Gradient Layer -->
			<div
				class="h-full w-full absolute top-0 left-0 z-10 gradient-layer"
				in:fly={{ y: 2000, duration: 2000, delay: 500, easing: cubicOut }}
			/>

			<!-- Content Text -->
			<div
				class="container absolute top-36 left-0 z-20 text-ro-white text-center"
				in:fade={{ duration: 1000, delay: 3500 }}
			>
				<div class="text-3xl font-juana font-extralight">
					Let love be sincere; hate what is evil, hold on to what is good.
				</div>
				<div class="font-snell font-bold text-lg">Roman 12:9</div>
			</div>

			<!-- Action Container -->
			<div
				class="container absolute bottom-8 left-0 z-20"
				in:fade={{ duration: 1000, delay: 2500 }}
			>
				<div class="w-full flex justify-between">
					<button class="bg-ro-creme rounded-full p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="28"
							height="28"
							viewBox="0 0 28 28"
							fill="none"
						>
							<path d="M9.55566 21.6945V6.13892L21.7779 13.9167L9.55566 21.6945Z" fill="white" />
						</svg>
					</button>
					<button
						class="flex gap-2 items-center justify-center font-juana text-xs font-light text-ro-white border border-ro-white px-4 rounded-full"
					>
						Scroll down
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="7"
							height="14"
							viewBox="0 0 7 14"
							fill="none"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M3.44751 13.5001L7 10.0195L6.50791 9.57342L3.79464 12.2322L3.79464 0.499873L3.11084 0.499873L3.11084 12.2158L0.499731 9.57652L-1.52319e-07 10.0155L3.44751 13.5001Z"
								fill="white"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.gradient-layer {
		background: linear-gradient(
			180deg,
			#141414 -6.47%,
			rgba(0, 0, 0, 0) 65.59%,
			rgba(0, 0, 0, 0) 110.78%
		);
	}
</style>
