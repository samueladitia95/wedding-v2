<script lang="ts">
	// Imports
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	// States
	let isShow = false;

	// Props
	export let logoFullName: string = "";

	// Methods
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};

	const scrollIntoNavigation = (): void => {
		document.getElementById("schedule")?.scrollIntoView({
			behavior: "smooth"
		});
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
		<div class="absolute z-20 min-h-screen min-w-full bg-ro-brown-light text-ro-white">
			<!-- Main Section -->
			<div class="container min-h-screen min-w-full pt-80">
				<div
					in:fly={{ x: -1000, duration: 2000, delay: 500 }}
					class="flex justify-start md:justify-center"
				>
					<img src={logoFullName} alt="full name" class="w-44 h-[20px] md:w-[282px] md:h-[30px]" />
				</div>
				<div
					class="text-left md:text-center text-ro-white leading-normal font-mirage text-5xl md:text-6xl md:px-16 md:leading-normal md:mt-4 md:flex md:justify-center"
					in:fade={{ duration: 2000, delay: 2000 }}
				>
					<div class="md:max-w-md xl:max-w-lg">
						Join us at Our <span class="font-island text-6xl md:text-7xl mr-8"> Special </span> Day
					</div>
				</div>
				<div
					class="font-mirage text-xl md:text-2xl mt-4 md:flex md:justify-center md:text-center"
					in:fade={{ duration: 2000, delay: 2500 }}
				>
					<div class="md:max-w-md">Find out about the locations, accomodations and The RSVP</div>
				</div>
			</div>
		</div>
		<!-- Action Container -->
		<div
			class="w-screen pr-6 absolute bottom-8 left-0 z-20"
			in:fade={{ duration: 1000, delay: 2500 }}
		>
			<div class="w-full flex justify-end items-center min-h-[48px]">
				<button
					class="flex gap-2 items-center justify-center font-mirage text-xs md:text-base text-ro-white border border-ro-white px-4 py-2 rounded-full"
					on:click={() => scrollIntoNavigation()}
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
	{/if}
</div>
