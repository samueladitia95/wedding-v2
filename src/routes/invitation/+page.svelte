<script lang="ts">
	import dayjs from "dayjs";
	import duration from "dayjs/plugin/duration";
	import { onMount } from "svelte";

	dayjs.extend(duration);

	const weddingDay = dayjs("2023-11-17", "yyyy-mm-dd");
	let countdowns = [
		{ type: "Day", value: 0 },
		{ type: "Hour", value: 0 },
		{ type: "Minute", value: 0 },
		{ type: "Second", value: 0 }
	];

	onMount(() => {
		setInterval(function () {
			const currentTime = dayjs();
			const duration = dayjs.duration(weddingDay.diff(currentTime));

			countdowns = [
				{ type: "Day", value: Math.floor(duration.asDays()) },
				{ type: "Hour", value: duration.hours() },
				{ type: "Minute", value: duration.minutes() },
				{ type: "Second", value: duration.seconds() }
			];
		}, 1000);
	});
</script>

<div class="relative min-h-screen min-w-full">
	<!-- Main Image -->
	<img
		src="/images/invite_mobile_1.png"
		alt="invite"
		class="absolute top-0 left-0 w-screen h-screen object-cover object-left"
	/>

	<!-- Gradient Layer -->
	<div class="h-screen w-screen absolute top-0 left-0 z-10 gradient-layer" />

	<div class="absolute z-20 min-h-screen min-w-full">
		<!-- Main Section -->
		<div class="container min-h-screen min-w-full pt-10">
			<div class="w-full flex justify-between items-center">
				<!-- Main Logo -->
				<img src="/images/logo_white_2.png" alt="logo" class="w-12 h-12" />

				<!-- Close button -->
				<img src="/icons/close-white.svg" alt="close" class="w-8 h-8" />
			</div>
			<div class="text-2xl font-mirage text-center text-ro-white leading-relaxed mt-24 px-12">
				Together with their their loving families
			</div>
		</div>

		<div class="min-h-screen min-w-full bg-ro-brown pt-32">
			<div class="">
				<div class="bg-ro-light-creme rounded-t-full h-[200px]" />
				<div class="bg-ro-light-creme">
					<div class="container min-h-screen text-ro-black">
						<div class="flex flex-col gap-10">
							<!-- Groom -->
							<div class="text-center flex flex-col gap-2">
								<div class="text-4xl font-mirage">Raymond Winoto</div>
								<div class="text-lg font-mirage">Son of Epi Sodie Winoto and Fenny Tjie</div>
							</div>

							<div class="text-5xl font-alex text-center">&</div>

							<!-- Bride -->
							<div class="text-center flex flex-col gap-2">
								<div class="text-4xl font-mirage">Olivia Virginia Halim</div>
								<div class="text-lg font-mirage">Daughter of Rudy Halim and Helena Halim</div>
							</div>
						</div>

						<div class="font-mirage text-xl text-center mb-20">INVITE YOU TO THEIR WEDDING</div>

						<div class="font-island text-ro-black text-4xl text-center mb-12">
							<div>Friday,</div>
							<div>17 November 2023</div>
						</div>

						<!-- Timer -->
						<div
							class="grid grid-cols-2 grid-rows-2 text-ro-brown gap-y-8 gap-x-4 max-w-[250px] mx-auto"
						>
							{#each countdowns as countdown}
								<div class="flex flex-col justify-center items-center">
									<div class="font-mirage text-5xl">{countdown.value}</div>
									<div class="font-oakes">{countdown.type}(S)</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
