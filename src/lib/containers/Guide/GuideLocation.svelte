<script lang="ts">
	// Imports
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	// States
	let isShow = false;

	// Props
	export let locationMapImg: string = "";

	// Methods
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
	const scrollIntoNavigation = (): void => {
		document.getElementById("dresscode")?.scrollIntoView({
			behavior: "smooth"
		});
	};
</script>

<div
	class="w-screen min-h-screen bg-ro-black pt-24"
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="container max-w-2xl md:pb-20">
			<div
				class="font-mirage text-lg text-ro-white text-center flex flex-col justify-start items-center gap-20"
			>
				<div class="font-island text-3xl md:text-5xl" in:fade={{ duration: 1000, delay: 500 }}>
					The Location
				</div>

				<img
					src={locationMapImg}
					alt="full name"
					class="w-full max-h-[300px] md:max-h-[520px]"
					in:fade={{ duration: 1000, delay: 1000 }}
				/>

				<div in:fade={{ duration: 1000, delay: 1500 }}>
					<div class="text-lg md:text-2xl leading-relaxed md:leading-loose">
						Canna Nusa Dua Bali
					</div>
					<div class="text-sm md:text-lg leading-relaxed md:leading-loose">
						Jl. Raya Nusa Dua Selatan, Benoa, Kec. Kuta Sel., Kabupaten Badung, Bali.
					</div>
				</div>
				<button
					class="flex gap-2 items-center justify-center font-mirage text-xs md:text-base border text-ro-white border-ro-white px-4 py-2 rounded-full"
					on:click={() => scrollIntoNavigation()}
					in:fade={{ duration: 1000, delay: 2000 }}
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
