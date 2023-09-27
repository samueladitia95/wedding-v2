<script lang="ts">
	import Input from "$lib/components/Input.svelte";
	import TextArea from "$lib/components/TextArea.svelte";

	let name: string;
	let phone: string;
	let email: string;
	let isAttending: boolean;
	let isDate: boolean;
	let isAccomodation: boolean;
	let allergies: string;
</script>

<div class="min-h-screen w-screen bg-ro-brown-light">
	<div class="container py-20 text-ro-white">
		<div class="text-center font-mirage text-4xl">RSVP</div>
		<form class="flex flex-col gap-6 md:gap-10">
			<!-- Name -->
			<Input name="name" label="Fill Your Name" bind:value={name} />

			<!-- Phone Number -->
			<Input name="phone" label="Phone Number" bind:value={phone} />

			<!-- Email -->
			<Input name="email" label="Email" bind:value={email} />

			<!-- Is Attending -->
			<div class="flex flex-col gap-4">
				<p class="text-base md:text-xl">
					Will you be attending the wedding?<span class="text-ro-error">*</span>
				</p>
				<div class="flex gap-32 lg:gap-48">
					<div class="flex gap-2 items-center">
						<input
							name="isAttending"
							type="radio"
							class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
							value="true"
						/>
						<div class="md:text-xl">Yes</div>
					</div>
					<div class="flex gap-2 items-center">
						<input
							name="isAttending"
							type="radio"
							class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
							value="false"
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
							name="isDate"
							type="radio"
							class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
							value="true"
						/>
						<div class="md:text-xl">Yes</div>
					</div>
					<div class="flex gap-2 items-center">
						<input
							name="isDate"
							type="radio"
							class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
							value="false"
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
							name="isAccomodation"
							type="radio"
							class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
							value="true"
						/>
						<div class="md:text-xl">Yes</div>
					</div>
					<div class="flex gap-2 items-center">
						<input
							name="isAccomodation"
							type="radio"
							class="w-5 h-5 appearance-none border-2 border-white rounded-full box-content checked:bg-white checked:ring-4 checked:ring-ro-brown-light checked:ring-inset"
							value="false"
						/>
						<div class="md:text-xl">No</div>
					</div>
				</div>
			</div>

			<!-- Allergies and Food Restrictions -->
			<div class="flex flex-col gap-4">
				<p class="text-base md:text-xl">Do you have any allergies & food restrictions?</p>
				<TextArea
					name="allergies"
					label="Allergies & Food Restriction"
					bind:value={allergies}
					error={[]}
				/>
			</div>

			<!-- Submit -->
			<button
				class="mt-8 font-mirage text-lg md:text-xl w-full rounded-full hover:bg-opacity-80 disabled:bg-opacity-50 py-3 text-ro-brown border bg-ro-light-creme"
			>
				Submit RSVP
			</button>
		</form>
	</div>
</div>
