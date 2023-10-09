<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
	import Header from "$lib/components/Header.svelte";
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
	import dayjs from "dayjs";
	import { pb } from "$lib/pocketbase";
	import { _schemaWishes } from "$lib/schemas";
	import { goto, invalidateAll } from "$app/navigation";
	import { inview } from "svelte-inview";
	import { fade, fly } from "svelte/transition";
	import { superForm, superValidateSync } from "sveltekit-superforms/client";
	import type { PageData } from "./$types";
	import { page } from "$app/stores";

	export let data: PageData;

	let isShow: boolean = false;
	let isSuccess: boolean = false;
	let n: string = $page.url.searchParams.get("n") || ""; // query search

	// it means when the data change, it will reactive to the ui
	$: wishes = data.wishes?.items;

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>): void => {
		if (!isShow && detail.inView) isShow = true;
	};

	const { form, errors, enhance } = superForm(superValidateSync(_schemaWishes), {
		SPA: true,
		validators: _schemaWishes,
		resetForm: true,
		async onUpdate({ form }) {
			if (form.valid) {
				isSuccess = true;

				try {
					const data = {
						...form.data,
						project: "default",
						template_id: "wedding_v2"
					};

					await pb.collection("wishes").create(data);

					invalidateAll();
				} catch (err) {
					console.log("wishes submit error: ", err);
				}
			}
		}
	});

	// ? Methods
	const handleLoadMore = async () => {
		let newPage = 2;
		if (n && +n) {
			newPage++;
		}
		n = String(newPage);
		const query = {
			n: String(newPage)
		};

		await goto(`?${new URLSearchParams(query).toString()}`, {
			keepFocus: true,
			noScroll: true
		});
	};
</script>

<div>
	<Header id="wishes" fullMain={data.logos?.main}>
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
							<img src={data.logos?.fullName} alt="full name" class=" h-[22px] md:h-[32px] mb-2" />
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
								bind:value={$form.wishes}
								error={$errors.wishes}
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
										<div class="font-oakes text-ro-white text-sm md:text-xl">{wish.wishes}</div>
										<div class="font-oakes text-ro-light-creme text-xs md:text-sm">
											{dayjs(wish.created).format("dddd, D MMMM YYYY H:mm")}
										</div>
									</div>
								{/each}
							</div>
							<button
								class="mt-8 font-mirage text-lg md:text-xl w-full rounded-full hover:bg-opacity-80 disabled:bg-opacity-50 py-3 text-ro-light-creme border border-ro-light-creme"
								on:click={() => handleLoadMore()}
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
