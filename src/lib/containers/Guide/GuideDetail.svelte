<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	let isShow = false;
	const schedules = [
		{
			activity: "HOLY MATRIMONY",
			time: "9:00 AM (WITA)",
			location: "Saint Silvester Catholic Church"
		},
		{
			activity: "TEA PAI CEREMONY",
			time: "12:00 PM (WITA)",
			location: "Canna Nusa Dua Bali (Family Only)"
		},
		{
			activity: "LUNCH RECEPTION",
			time: "12:30 PM (WITA)",
			location: "Canna Nusa Dua Bali",
			notes:
				"Seating Buffet with International Menu, Please inform us for allergies and food restrictions in RSVP Section at the bottom of the page"
		},
		{
			activity: "COCKTAIL SESSION",
			time: "16:00 PM (WITA)",
			location: "Stone 1 at Canna Bali",
			notes: "Join us for some day-drinking and music for an after wedding celebration."
		}
	];

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div class=" w-screen bg-ro-brown-light pt-20">
	<div
		class="rounded-t-full min-h-screen bg-ro-light-creme text-ro-black"
		use:inview={{
			rootMargin: "-100px",
			unobserveOnEnter: true
		}}
		on:inview_change={handleChange}
	>
		<div class="container pt-[200px]">
			{#if isShow}
				<!-- Title -->
				<div
					class="text-center font-island text-3xl mb-10"
					id="schedule"
					in:fade={{ duration: 1000, delay: 500 }}
				>
					The Details
				</div>
			{/if}

			<!-- Schedules -->
			<div class="flex flex-col justify-start items-center gap-10">
				{#each schedules as schedule, index}
					{#if isShow}
						<div
							class="flex flex-col justify-start items-center text-center"
							transition:fly={{ x: -1000, duration: 2000, delay: 500 * (index + 1) }}
						>
							<div class="font-mirage text-xl leading-loose">{schedule.activity}</div>
							<div class="font-mirage text-xl leading-loose">{schedule.time}</div>
							<div class="font-mirage leading-loose">{schedule.location}</div>
							{#if schedule.notes}
								<div class="font-oakes text-xs font-light leading-loose">{schedule.notes}</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>

			{#if isShow}
				<img
					in:fade={{ duration: 1000, delay: 3000 }}
					src="/images/guide_1.png"
					alt="logo"
					class="w-full h-full"
				/>
			{/if}
		</div>
	</div>
</div>
