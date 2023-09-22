<script lang="ts">
	const navItems = [
		{
			label: "We Invite You",
			href: "/invitation",
			id: "invitation"
		},
		{
			label: "Our Story",
			href: "/story",
			id: "story"
		},
		{
			label: "Wedding Guide",
			href: "/",
			id: ""
		},
		{
			label: "Wishes For Us",
			href: "/",
			id: ""
		},
		{
			label: "Wedding Gift",
			href: "/",
			id: ""
		}
	];
</script>

<div class="bg-ro-light-creme">
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
					id={navItem.id}
				>
					{navItem.label}
				</a>
			{/each}
		</div>

		<!-- Full Name -->
		<div class="w-full flex justify-center" id="footer-name">
			<img src="/icons/full-name.svg" alt="full name" class="w-28 h-[14px]" />
		</div>
	</div>
</div>
