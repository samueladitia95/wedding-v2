<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";
	import { invalidateAll } from "$app/navigation";
	import { pb } from "$lib/pocketbase";
	import { _schemaRsvp } from "$lib/schemas";
	import { superForm, superValidateSync } from "sveltekit-superforms/client";

	let isSuccess: boolean = false;

	const { form, errors, enhance } = superForm(superValidateSync(_schemaRsvp), {
		SPA: true,
		validators: _schemaRsvp,
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
					await pb.collection("rsvp").create(data);

					invalidateAll();
				} catch (err) {
					console.log("rsvp submit error: ", err);
				}
			}
		}
	});
</script>

<div class="min-h-screen w-screen bg-ro-brown-light">
	<div class="container py-20 text-ro-white">
		<div class="text-center font-mirage text-4xl">RSVP</div>
		{#if !isSuccess}
			<form class="flex flex-col gap-6 md:gap-10" method="post" use:enhance>
				<!-- Name -->
				<Input
					name="attendee_name"
					label="Fill Your Name"
					bind:value={$form.attendee_name}
					error={$errors.attendee_name}
				/>

				<!-- Phone Number -->
				<Input
					name="attendee_phone"
					label="Phone Number"
					bind:value={$form.attendee_phone}
					error={$errors.attendee_phone}
				/>

				<!-- Email -->
				<Input
					name="attendee_email"
					label="Email"
					bind:value={$form.attendee_email}
					error={$errors.attendee_email}
				/>

				<!-- Is Attending -->
				<div class="flex flex-col gap-4">
					<p class="text-base md:text-xl">
						Will you be attending the wedding?<span class="text-ro-error">*</span>
					</p>
					<div class="flex gap-32 lg:gap-48">
						<div class="flex gap-2 items-center">
							<input
								name="is_attend"
								type="radio"
								class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
								value={true}
								bind:group={$form.is_attend}
							/>
							<div class="md:text-xl">Yes</div>
						</div>
						<div class="flex gap-2 items-center">
							<input
								name="is_attend"
								type="radio"
								class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
								value={false}
								bind:group={$form.is_attend}
							/>
							<div class="md:text-xl">No</div>
						</div>
					</div>
				</div>

				<!-- Is Date -->
				<div class="flex flex-col gap-4">
					<p class="text-base md:text-xl">
						Will you bring your date?*?<span class="text-ro-error">*</span>
					</p>
					<div class="flex gap-32 lg:gap-48">
						<div class="flex gap-2 items-center">
							<input
								name="is_bring_partner"
								type="radio"
								class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
								value={true}
								bind:group={$form.is_bring_partner}
							/>
							<div class="md:text-xl">Yes</div>
						</div>
						<div class="flex gap-2 items-center">
							<input
								name="is_bring_partner"
								type="radio"
								class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
								value={false}
								bind:group={$form.is_bring_partner}
							/>
							<div class="md:text-xl">No</div>
						</div>
					</div>
				</div>

				<!-- Is Accomodation -->
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-1 md:items-end md:flex-row">
						<p class="text-base md:text-xl">
							Do you need hotel accomodation?<span class="text-ro-error">*</span>
						</p>
						<p class="text-sm md:text-base italic">(*only for guests outside of Bali)</p>
					</div>
					<div class="flex gap-32 lg:gap-48">
						<div class="flex gap-2 items-center">
							<input
								name="is_need_accomodation"
								type="radio"
								class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
								value={true}
								bind:group={$form.is_need_accomodation}
							/>
							<div class="md:text-xl">Yes</div>
						</div>
						<div class="flex gap-2 items-center">
							<input
								name="is_need_accomodation"
								type="radio"
								class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
								value={false}
								bind:group={$form.is_need_accomodation}
							/>
							<div class="md:text-xl">No</div>
						</div>
					</div>
				</div>

				<!-- Allergies and Food Restrictions -->
				<div class="flex flex-col gap-4">
					<p class="text-base md:text-xl">Do you have any allergies & food restrictions?</p>
					<TextArea
						name="attendee_note"
						label="Allergies & Food Restriction"
						bind:value={$form.attendee_note}
						error={$errors.attendee_note}
					/>
				</div>

				<!-- Submit -->
				<button
					class="mt-8 font-mirage text-lg md:text-xl w-full rounded-full hover:bg-opacity-80 disabled:bg-opacity-50 py-3 text-ro-brown border bg-ro-light-creme"
				>
					Submit RSVP
				</button>
			</form>
		{:else}
			<div class="font-mirage text-2xl text-center py-40">
				<div>Thankyou for submitted your RSVP.</div>
				<div>See you at the D-DAY.</div>
				<div class="mt-10">We will contact you about the details</div>
			</div>
		{/if}
	</div>
</div>
