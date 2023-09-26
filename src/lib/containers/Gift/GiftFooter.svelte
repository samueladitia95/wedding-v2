<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div class="w-screen bg-ro-creme pt-24 xl:flex xl:justify-center">
	<div
		class="bg-ro-light-creme rounded-t-full pt-48 md:pt-80 min-h-[80vh] xl:min-w-[1440px] 2xl:min-w-[1600px] xl:max-w-[1600px]"
		use:inview={{
			rootMargin: "0px",
			unobserveOnEnter: true
		}}
		on:inview_change={handleChange}
	>
		{#if isShow}
			<div
				class=" text-ro-black container flex flex-col justify-start items-center gap-8 md:px-28 xl:px-80"
			>
				<div
					class="font-mirage text-lg md:text-2xl md:leading-relaxed text-ro-black text-center flex flex-col justify-center items-center gap-10"
					in:fade={{ duration: 1000, delay: 500 }}
				>
					<div>
						However, if you wish to honor us with special gifts, we are more than welcome to accept
						cash or "angpao" as gifts.
					</div>
					<div>You may bring them to the wedding or kindly send them through bank transfer to</div>
				</div>

				<div class="flex flex-col gap-1 items-center" in:fade={{ duration: 1000, delay: 1500 }}>
					<div class="font-oakes text-2xl md:text-3xl">BCA - 6040253325</div>
					<div class="font-mirage text-lg md:text-2xl">a.n Raymond</div>
				</div>

				<div class="font-mirage text-lg md:text-2xl" in:fade={{ duration: 1000, delay: 2500 }}>
					Thank you.
				</div>
			</div>
		{/if}
	</div>
</div>
