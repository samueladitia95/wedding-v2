<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	let isShow = false;
	const accomodations = [
		{
			logo: "/images/guide_3.png",
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
			logo: "/images/guide_4.png",
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
				<div class="min-h-screen rounded-full border border-ro-brown py-28">
					<div class="font-island text-3xl mb-10" in:fade={{ duration: 1000, delay: 500 }}>
						The Accomodations
					</div>

					<div class="flex flex-col gap-10 justify-start items-center px-4 font-mirage">
						{#each accomodations as accomodation}
							<div>
								{#if accomodation.logo}
									<div class="flex items-center justify-center mb-55">
										<img src={accomodation.logo} alt="accomodation" class="h-[100px]" />
									</div>
								{/if}
								<div class="text-xl mb-7">{accomodation.subject}</div>
								<div class="text-xl mb-2">{accomodation.location}</div>
								{#if accomodation.address}
									<div class="text-sm mb-2">{accomodation.address}</div>
								{/if}
								{#if accomodation.time}
									<div class="text-lg mb-2">{accomodation.time}</div>
								{/if}
							</div>
						{/each}
					</div>

					<div class="text-sm font-mirage px-12">
						Please be ready at the hotel lobby at 8.00 am (WITA)
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
