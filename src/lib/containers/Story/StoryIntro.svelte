<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};

	const scrollIntoNavigation = (): void => {
		document.getElementById("back-to-menu")?.scrollIntoView({
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
		<div class="absolute z-20 min-h-screen min-w-full bg-ro-black">
			<!-- Main Section -->
			<div class="container min-h-screen min-w-full pt-80">
				<div in:fly={{ x: -1000, duration: 2000, delay: 500 }}>
					<img src="/icons/full-name-white.svg" alt="full name" class="w-44 h-[20px]" />
				</div>
				<div
					class="text-left text-ro-white leading-relaxed font-mirage text-5xl"
					in:fade={{ duration: 2000, delay: 2000 }}
				>
					Find out about Our<span class="font-island text-6xl mr-4">Love </span> Story
				</div>
			</div>
		</div>
		<!-- Action Container -->
		<div class="container absolute bottom-8 left-0 z-20" in:fade={{ duration: 1000, delay: 2500 }}>
			<div class="w-full flex justify-end items-center min-h-[48px]">
				<button
					class="flex gap-2 items-center justify-center font-mirage text-xs text-ro-white border border-ro-white px-4 py-2 rounded-full"
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
