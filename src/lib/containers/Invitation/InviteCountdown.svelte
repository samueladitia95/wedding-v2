<script lang="ts">
	import dayjs from "dayjs";
	import duration from "dayjs/plugin/duration";
	import { onMount } from "svelte";
	import "@splidejs/svelte-splide/css";
	import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import { browser } from "$app/environment";
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";
	import { carauselImages } from "$lib/constants";

	dayjs.extend(duration);

	let isShowBrideGroom = false;
	let isShowCarausel = false;
	let isShowCountdown = false;

	const weddingDay = dayjs("2023-11-17", "yyyy-mm-dd");
	let countdowns = [
		{ type: "Day", value: 0 },
		{ type: "Hour", value: 0 },
		{ type: "Minute", value: 0 },
		{ type: "Second", value: 0 }
	];

	const handleChangeBrideGroom = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShowBrideGroom && detail.inView) isShowBrideGroom = true;
	};
	const handleChangeCarausel = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShowCarausel && detail.inView) isShowCarausel = true;
	};
	const handleChangeCountdown = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShowCountdown && detail.inView) isShowCountdown = true;
	};

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
	<div class="min-h-screen min-w-full bg-ro-brown pt-32 z-20">
		<div class="">
			<!-- Top Circle -->
			<!-- Remember to move text every breakpoint -->
			<div class="bg-ro-light-creme min-h-screen pb-28 rounded-t-full pt-48 md:pt-80">
				<div class="container">
					<div class="text-ro-black flex flex-col justify-start items-center">
						<div
							class="flex flex-col gap-10 mb-36 md:mb-24"
							use:inview={{
								rootMargin: "100px",
								unobserveOnEnter: true
							}}
							on:inview_change={handleChangeBrideGroom}
						>
							{#if isShowBrideGroom}
								<!-- Groom -->
								<div
									class="text-center flex flex-col gap-2"
									in:fly={{ y: -1000, duration: 2000, delay: 500 }}
								>
									<div class="text-4xl md:text-5xl font-mirage">Raymond Winoto</div>
									<div class="text-lg md:text-2xl font-mirage">
										Son of Epi Sodie Winoto and Fenny Tjie
									</div>
								</div>

								<div
									class="text-5xl md:text-7xl font-alex text-center"
									in:fade={{ duration: 2000, delay: 500 }}
								>
									&
								</div>

								<!-- Bride -->
								<div
									class="text-center flex flex-col gap-2"
									in:fly={{ y: 1000, duration: 2000, delay: 500 }}
								>
									<div class="text-4xl md:text-5xl font-mirage">Olivia Virginia Halim</div>
									<div class="text-lg md:text-2xl font-mirage">
										Daughter of Rudy Halim and Helena Halim
									</div>
								</div>
							{/if}
						</div>

						{#if browser}
							<div
								use:inview={{
									rootMargin: "-100px",
									unobserveOnEnter: true
								}}
								on:inview_change={handleChangeCarausel}
							>
								{#if isShowCarausel}
									<div in:fade={{ duration: 2000, delay: 500 }} class="w-screen">
										<Splide
											aria-label="invite countdown carausel"
											extensions={{ AutoScroll }}
											options={{
												arrows: false,
												pagination: false,
												type: "loop",
												gap: "16px",
												autoScroll: {
													rewind: true
												},
												autoWidth: true
											}}
										>
											{#each carauselImages as image}
												<SplideSlide>
													<img
														src={image}
														alt="invite"
														class="object-cover w-[350px] max-h-[350px] md:w-[450px] md:max-h-[450px] rounded"
													/>
												</SplideSlide>
											{/each}
										</Splide>
									</div>
								{/if}
							</div>
						{/if}

						<div
							use:inview={{
								rootMargin: "-100px",
								unobserveOnEnter: true
							}}
							on:inview_change={handleChangeCountdown}
						>
							{#if isShowCountdown}
								<div
									class="font-mirage text-xl md:text-3xl text-center mb-20 mt-32"
									in:fly={{ x: -1000, duration: 2000, delay: 500 }}
								>
									INVITE YOU TO THEIR WEDDING
								</div>

								<div
									class="font-island text-ro-black text-4xl md:text-5xl text-center mb-12"
									in:fly={{ x: -1000, duration: 2000, delay: 1000 }}
								>
									<div>Friday,</div>
									<div>17 November 2023</div>
								</div>

								<!-- Timer -->
								<div
									class="grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-none text-ro-brown gap-y-8 gap-x-4 max-w-[250px] md:max-w-3xl mx-auto"
									in:fly={{ x: -1000, duration: 2000, delay: 1500 }}
								>
									{#each countdowns as countdown}
										<div class="flex flex-col justify-center items-center">
											<div class="font-mirage text-5xl">{countdown.value}</div>
											<div class="font-oakes">{countdown.type}(S)</div>
										</div>
									{/each}
								</div>
							{/if}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
