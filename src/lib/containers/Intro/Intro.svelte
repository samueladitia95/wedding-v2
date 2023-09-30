<script lang="ts">
	// Import
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";
	import { cubicOut } from "svelte/easing";
	import { isFromAnotherPage, isPlay, isShowIntro } from "$lib/store";

	// States
	let isShow = false;
	let transition1 = false;
	let isSkipAnimation = false;

	// Props
	export let title: string = "Let love be sincere; hate what is evil, hold on to what is good.";
	export let subTitle: string = "Roman 12:9";
	export let mainImageUrl: string = "";
	export let logoMain: string = "";

	// Store
	isShowIntro.subscribe((value) => {
		transition1 = value;
	});
	isFromAnotherPage.subscribe((value) => {
		if (value) {
			isShow = true;
			transition1 = true;
			isSkipAnimation = true;
		}
	});

	// Methods
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};

	const scrollIntoNavigation = (): void => {
		document.getElementById("footer-name")?.scrollIntoView({
			behavior: "smooth"
		});
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
				src={logoMain}
				alt="main logo"
				class="w-36 h-36 xl:w-48 xl:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
				in:fade={{ duration: 2000 }}
				out:fade={{ duration: 1000 }}
			/>
			<button
				class="text-ro-brown bg-ro-white text-lg whitespace-nowrap rounded-full px-10 py-4 font-mirage absolute bottom-36 md:bottom-48 lg:bottom-28 left-1/2 transform -translate-x-1/2"
				in:fade={{ duration: 2000, delay: 2000 }}
				out:fade={{ duration: 1000 }}
				on:click={() => {
					isShowIntro.set(true);
					isPlay.set(true);
					document.body.classList.remove("overflow-hidden");
				}}
			>
				Open Invitation
			</button>
		</div>
		<div />
	{/if}

	<!-- Main Content -->
	{#if isShow && transition1}
		<div class="min-h-screen min-w-full relative">
			<!-- Main Image -->
			<img
				src={mainImageUrl}
				alt="main"
				class="min-h-screen xl:max-h-screen w-full object-cover"
				in:fly={!isSkipAnimation ? { y: 3000, duration: 2000, delay: 500, easing: cubicOut } : {}}
			/>

			<!-- Gradient Layer -->
			<div
				class="h-full w-full absolute top-0 left-0 z-10 gradient-layer"
				in:fly={!isSkipAnimation ? { y: 3000, duration: 2000, delay: 500, easing: cubicOut } : {}}
			/>

			<!-- Content Text -->
			<div
				class="absolute top-36 md:top-72 left-0 z-20 text-ro-white text-center w-screen"
				in:fade={!isSkipAnimation ? { duration: 1000, delay: 2500 } : {}}
			>
				<div class="container flex flex-col justify-start items-center">
					<div class="text-3xl md:text-4xl leading-normal md:leading-normal font-mirage max-w-xl">
						{title}
					</div>
					<div class="font-island text-lg md:text-3xl leading-normal md:leading-normal">
						{subTitle}
					</div>
				</div>
			</div>

			<!-- Action Container -->
			<div
				class="w-screen absolute bottom-8 left-0 z-20"
				in:fade={!isSkipAnimation ? { duration: 1000, delay: 2500 } : {}}
			>
				<div class="w-full pr-6 flex justify-end items-center min-h-[48px]">
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
		</div>
	{/if}
</div>
