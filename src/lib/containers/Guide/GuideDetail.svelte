<script lang="ts">
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
</script>

<div class=" w-screen bg-ro-brown-light pt-20">
	<div class="rounded-t-full min-h-screen bg-ro-light-creme text-ro-black">
		<div class="container pt-[200px]">
			<!-- Title -->
			<div class="text-center font-island text-3xl mb-10" id="schedule">The Details</div>

			<!-- Schedules -->
			<div class="flex flex-col justify-start items-center gap-10">
				{#each schedules as schedule}
					<div class="flex flex-col justify-start items-center text-center">
						<div class="font-mirage text-xl leading-loose">{schedule.activity}</div>
						<div class="font-mirage text-xl leading-loose">{schedule.time}</div>
						<div class="font-mirage leading-loose">{schedule.location}</div>
						{#if schedule.notes}
							<div class="font-oakes text-xs font-light leading-loose">{schedule.notes}</div>
						{/if}
					</div>
				{/each}
			</div>

			<img src="/images/guide_1.png" alt="logo" class="w-full h-full" />
		</div>
	</div>
</div>
