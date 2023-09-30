<script lang="ts">
	// Imports
	import "@splidejs/svelte-splide/css";
	import { Splide, SplideSlide } from "@splidejs/svelte-splide";
	import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
	import { browser } from "$app/environment";
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	// States
	let isShow = false;

	// Props
	export let carauselImages: string[] = [];

	// Methods
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="min-h-screen md:min-h-[90vh] w-screen bg-ro-black"
	use:inview={{
		rootMargin: "-100px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="container">
			<div
				class="text-center font-mirage text-xl md:text-2xl text-ro-white pt-36 leading-relaxed md:px-12"
			>
				We were classmates and lab partners back in college year 2013 who hated each other for a
				year until we started snapchat-ing and going on coffee dates.
			</div>

			{#if browser}
				<div class="mt-16">
					<div in:fade={{ duration: 2000, delay: 2000 }}>
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
				</div>
			{/if}
		</div>
	{/if}
</div>
