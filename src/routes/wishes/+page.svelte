<script lang="ts">
	import { _schemaComments } from "$lib/schemas";
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";
	import { superForm, superValidateSync } from "sveltekit-superforms/client";

	let isShow: boolean = false;
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
	let isSuccess: boolean = false;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};

	const { form, errors, enhance, reset } = superForm(superValidateSync(_schemaComments), {
		SPA: true,
		validators: _schemaComments,
		onUpdate({ form }) {
			if (form.valid) {
				isSuccess = true;
				reset();
				// TODO Send the form here
			}
		}
	});
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
							<img
								src="/icons/full-name-white.svg"
								alt="full name"
								class="w-44 md:w-72 h-[20px] md:h-[30px] mb-2"
							/>
						</div>
						<div
							class="text-left text-ro-white leading-relaxed font-mirage text-3xl md:text-6xl"
							in:fade={{ duration: 2000, delay: 2000 }}
						>
							WISHES FOR US
						</div>

						<!-- FORM -->
						<form
							in:fade={{ duration: 2000, delay: 2000 }}
							class="mt-4 flex flex-col gap-4"
							method="post"
							use:enhance
						>
							<Input
								name="name"
								label="Fill Your Name"
								bind:value={$form.name}
								error={$errors.name}
							/>
							<TextArea
								name="comment"
								label="Write your wishes"
								bind:value={$form.comment}
								error={$errors.comment}
							/>
							<button
								type="submit"
								class="font-mirage text-lg md:text-xl w-full rounded-full bg-[#F7F4EF] text-[#4C4A44] hover:bg-opacity-80 disabled:bg-opacity-50 py-3"
							>
								SEND
							</button>
						</form>

						<!-- Commnets -->
						<div class="py-20" in:fly={{ x: -1000, duration: 2000, delay: 2500 }}>
							<div class="flex flex-col gap-8 md:gap-10 justify-start items-start">
								{#each wishes as wish}
									<div class="flex flex-col justify-start items-start gap-4">
										<div class="font-mirage text-ro-light-creme md:text-2xl">{wish.name}</div>
										<div class="font-oakes text-ro-white text-sm md:text-xl">{wish.comment}</div>
										<div class="font-oakes text-ro-light-creme text-xs md:text-sm">
											{wish.createdAt}
										</div>
									</div>
								{/each}
							</div>
							<button
								class="mt-8 font-mirage text-lg md:text-xl w-full rounded-full hover:bg-opacity-80 disabled:bg-opacity-50 py-3 text-ro-light-creme border border-ro-light-creme"
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
