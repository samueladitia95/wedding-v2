<script lang="ts">
	// States
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
			href: "/guide",
			id: "guide"
		},
		{
			label: "Wishes For Us",
			href: "/wishes",
			id: "wishes"
		},
		{
			label: "Wedding Gift",
			href: "/gift",
			id: "gift"
		}
	];

	// Props\
	export let logoFullNameColor: string = "";
	export let logoMainColor: string = "";
</script>

<div class="bg-ro-light-creme">
	<div
		class="min-h-screen min-w-screen relative pt-16 pb-8 container flex flex-col justify-between items-stretch md:max-w-md"
	>
		<!-- Main Logo -->
		<div class="w-full flex justify-center">
			<img src={logoMainColor} alt="full name" class="w-12 h-12 md:w-[72px] md:h-[79px]" />
		</div>

		<!-- Nav Item -->
		<div class="flex flex-col gap-6 md:gap-12 text-4xl font-mirage">
			{#each navItems as navItem, index}
				<a
					class="{index % 2 === 0
						? 'text-left'
						: 'text-right'} text-ro-nav hover:text-ro-brown cursor-pointer md:text-5xl"
					href={navItem.href}
					id={navItem.id}
				>
					{navItem.label}
				</a>
			{/each}
		</div>

		<!-- Full Name -->
		<div class="w-full flex justify-center" id="footer-name">
			<img src={logoFullNameColor} alt="full name" class="w-28 h-[14px] md:w-[205px] md:h-5" />
		</div>
	</div>
</div>
