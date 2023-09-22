<script lang="ts">
	import { inview } from "svelte-inview";
	import { fade } from "svelte/transition";

	let isShow = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div
	class="relative min-h-screen min-w-full bg-ro-brown"
	use:inview={{
		rootMargin: "-100px",
		unobserveOnEnter: true
	}}
	on:inview_change={handleChange}
>
	{#if isShow}
		<div class="z-full absolute" in:fade={{ duration: 2000, delay: 1000 }}>
			<!-- Need to change to youtube player to autoplay -->
			<iframe
				src="https://drive.google.com/file/d/1jC1k8t6ew4WIItndyfqmCyDDhv7SQBKu/preview?start=1"
				frameborder="0"
				allowfullscreen={false}
				title="Our Story"
				class="w-screen min-h-screen"
				allow="autoplay"
			/>
		</div>
	{/if}
</div>
