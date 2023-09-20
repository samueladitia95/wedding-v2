<script lang="ts">
	const navItems = [
		{
			label: "We Invite You",
			href: "/invitation"
		},
		{
			label: "Our Story",
			href: "/"
		},
		{
			label: "Wedding Guide",
			href: "/"
		},
		{
			label: "Wishes For Us",
			href: "/"
		},
		{
			label: "Wedding Gift",
			href: "/"
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
		<div class="flex flex-col gap-6 text-4xl font-mirage">
			{#each navItems as navItem, index}
				<a
					class="{index % 2 === 0
						? 'text-left'
						: 'text-right'} text-ro-nav hover:text-ro-brown cursor-pointer"
					href={navItem.href}
				>
					{navItem.label}
				</a>
			{/each}
		</div>

		<!-- Full Name -->
		<div class="w-full flex justify-center">
			<img src="/icons/full-name.svg" alt="full name" class="w-28 h-[14px]" />
		</div>
	</div>
</div>
