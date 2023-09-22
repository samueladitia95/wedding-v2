<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="relative min-h-screen min-w-full"
	use:inview={{
		rootMargin: "0px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	<!-- Main Image -->
	<img
		src="/images/invite_mobile_1.png"
		alt="invite"
		class="absolute top-0 left-0 w-screen h-screen object-cover object-left"
	/>

	<!-- Gradient Layer -->
	<div class="h-screen w-screen absolute top-0 left-0 z-10 gradient-layer" />
	{#if isShow}
		<div class="absolute z-20 min-h-screen min-w-full" in:fade={{ duration: 2000, delay: 500 }}>
			<!-- Main Section -->
			<div class="container min-h-screen min-w-full">
				<div class="text-2xl font-mirage text-center text-ro-white leading-relaxed pt-44 px-12">
					Together with their their loving families
				</div>
			</div>
		</div>
	{/if}
</div>
