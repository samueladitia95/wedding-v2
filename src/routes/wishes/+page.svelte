<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	let isShow = false;
	let name = "";
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div>
	<Header id="wishes">
		<div
			class="relative min-h-screen min-w-full"
			use:inview={{
				rootMargin: "0px",
				unobserveOnEnter: true
			}}
			on:inview_change={handleChange}
		>
			{#if isShow}
				<div class="z-20 min-h-screen min-w-full bg-ro-black">
					<!-- Main Section -->
					<div class="container min-h-screen min-w-full pt-40">
						<div in:fly={{ x: -1000, duration: 2000, delay: 500 }}>
							<img src="/icons/full-name-white.svg" alt="full name" class="w-44 h-[20px] mb-2" />
						</div>
						<div
							class="text-left text-ro-white leading-relaxed font-mirage text-3xl"
							in:fade={{ duration: 2000, delay: 2000 }}
						>
							WISHES FOR US
						</div>

						<!-- FORM -->
						<form class="mt-4 flex flex-col gap-4">
							<Input name="name" label="Fill Your Name" bind:value={name} error={[]} />
							<TextArea />
							<button
								type="submit"
								class="font-mirage text-lg w-full rounded-full bg-[#F7F4EF] text-[#4C4A44] hover:bg-opacity-80 disabled:bg-opacity-50 py-3"
								>SEND</button
							>
						</form>
					</div>
				</div>
			{/if}
		</div>
	</Header>
	<Footer id="wishes" />
</div>
