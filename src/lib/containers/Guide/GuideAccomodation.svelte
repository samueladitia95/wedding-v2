<script lang="ts">
	// Imports
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	// Props
	export let guide3: string = "";
	export let guide4: string = "";

	// States
	let isShow = false;
	let accomodations = [
		{
			logo: guide3,
			subject: "FAMILY",
			location: "Hotel Episode Kuta Bali",
			address: "Jl. Bypass Ngurai Rai No.99, Kuta, Kec. Kuta",
			time: "2 Nights (Nov 16 - Nov 18, 2023)"
		},
		{
			subject: "FRIENDS",
			location: "Hotel Santika Nusa Dua",
			address: "Jl. Pintas Siligita No. 3A Banjar Peminge Nusa Dua, Benoa.",
			time: "2 Nights (Nov 16 - Nov 18, 2023)"
		},
		{
			logo: guide4,
			subject: "FAMILY ONLY",
			location: "Hotel Santika Nusa Dua - Church - Canna Bali - Hotel Episode Kita"
		}
	];

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	id="accomodation"
	class="w-screen bg-ro-brown-light py-20"
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="container">
			<div class="min-h-screen bg-ro-light-creme text-ro-black text-center rounded-full p-5">
				<div class="min-h-screen rounded-full border border-ro-brown py-28 md:py-48 xl:py-72">
					<div
						class="font-island text-3xl md:text-5xl mb-10 md:mb-14"
						in:fade={{ duration: 1000, delay: 500 }}
					>
						The Accomodations
					</div>

					<div class="flex flex-col gap-10 md:gap-14 justify-start items-center px-2 font-mirage">
						{#each accomodations as accomodation}
							<div class="flex flex-col items-center">
								{#if accomodation.logo}
									<div class="flex items-center justify-center mb-8">
										<img
											src={accomodation.logo}
											alt="accomodation"
											class="h-[100px] md:h-[200px]"
										/>
									</div>
								{/if}
								<div class="text-xl md:text-4xl mb-6">{accomodation.subject}</div>
								<div class="text-xl md:text-2xl md:leading-relaxed mb-1 md:mb-4 max-w-sm">
									{accomodation.location}
								</div>
								{#if accomodation.address}
									<div class="text-sm md:text-xl mb-1 md:mb-4">{accomodation.address}</div>
								{/if}
								{#if accomodation.time}
									<div class="text-lg md:text-xl">{accomodation.time}</div>
								{/if}
							</div>
						{/each}
					</div>

					<div class="text-sm md:text-xl font-mirage px-12">
						Please be ready at the hotel lobby at 8.00 am (WITA)
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
