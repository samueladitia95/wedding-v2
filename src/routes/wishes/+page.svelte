<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";

	let isShow = false;
	let name = "";
	let wishes = [
		{
			name: "John Doe",
			comment: "Congrats on your wedding! I’m so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00"
		},
		{
			name: "John Doe",
			comment: "Congrats on your wedding! I’m so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00"
		},
		{
			name: "John Doe",
			comment: "Congrats on your wedding! I’m so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00"
		},
		{
			name: "John Doe",
			comment: "Congrats on your wedding! I’m so happy for both of you! See you soon in Bali!",
			createdAt: "Saturday, 13 May 2023  10:00"
		}
	];
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};
</script>

<div>
	<Header id="wishes">
		<div
			class="relative min-h-screen"
			use:inview={{
				rootMargin: "0px",
				unobserveOnEnter: true
			}}
			on:inview_change={handleChange}
		>
			{#if isShow}
				<div class="z-20 min-h-screen bg-ro-black">
					<!-- Main Section -->
					<div class="container pt-40 max-w-3xl">
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

						<!-- Commnets -->
						<div class="py-20">
							<div class="flex flex-col gap-8 justify-start items-start">
								{#each wishes as wish}
									<div class="flex flex-col justify-start items-start gap-4">
										<div class="font-mirage text-ro-light-creme">{wish.name}</div>
										<div class="font-oakes text-ro-white text-sm">{wish.comment}</div>
										<div class="font-oakes text-ro-light-creme text-xs">{wish.createdAt}</div>
									</div>
								{/each}
							</div>
							<button
								class="mt-8 font-mirage text-lg w-full rounded-full hover:bg-opacity-80 disabled:bg-opacity-50 py-3 text-ro-light-creme border border-ro-light-creme"
							>
								More
							</button>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</Header>
	<Footer id="wishes" />
</div>
