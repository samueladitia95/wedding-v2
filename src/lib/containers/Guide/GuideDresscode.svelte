<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="w-screen min-h-[400px] bg-ro-brown-light py-24"
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="container flex flex-col justify-start items-center gap-8">
			<div
				class="font-mirage text-lg text-ro-white text-center flex flex-col justify-center items-center gap-6"
				in:fade={{ duration: 1000, delay: 500 }}
			>
				<div class="font-island text-3xl">The Dresscode</div>
				<div class="text-xl leading-relaxed">
					Semi Formal, No Batik, Soft colour or earth tones dresses.
				</div>
				<div class="text-xl leading-relaxed">
					The event is from morning to sunset so please mind the sun and hot weather, you may not
					need your suits or long sleeved/thick dresses.
				</div>
			</div>
		</div>
	{/if}
</div>
