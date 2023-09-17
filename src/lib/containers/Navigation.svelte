<script lang="ts">
	const navItems = [
		{
			label: "We Invite You"
		},
		{
			label: "Our Story"
		},
		{
			label: "Wedding Guide"
		},
		{
			label: "Wishes For Us"
		},
		{
			label: "Wedding Gift"
		}
	];
</script>

<div class="bg-ro-light-creme" id="nav-container">
	<div
		class="min-h-screen min-w-screen relative pt-16 pb-8 container flex flex-col justify-between items-stretch"
	>
		<!-- Main Logo -->
		<div class="w-full flex justify-center">
			<img src="/icons/logo-white.svg" alt="full name" class="w-12 h-12" />
		</div>

		<!-- Nav Item -->
		<div class="flex flex-col gap-6 text-4xl font-juana font-light">
			{#each navItems as navItem, index}
				<div
					class="{index % 2 === 0
						? 'text-left'
						: 'text-right'} text-ro-nav hover:text-ro-brown cursor-pointer"
				>
					{navItem.label}
				</div>
			{/each}
		</div>

		<!-- Full Name -->
		<div class="w-full flex justify-center">
			<img src="/icons/full-name.svg" alt="full name" class="w-28 h-[14px]" />
		</div>
	</div>
</div>
