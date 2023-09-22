<script lang="ts">
	import { isFromAnotherPage, isShowIntro } from "$lib/store";
</script>

<div class="flex items-center justify-center py-11 bg-ro-creme z-50" id="back-to-menu">
	<a
		href="/#invitation"
		class="flex items-center justify-center gap-2"
		on:click={() => {
			isShowIntro.set(true);
			isFromAnotherPage.set(true);
		}}
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="25" height="14" viewBox="0 0 25 14" fill="none">
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M0.5 6.90308L6.92566 13.4614L7.74916 12.5529L2.84075 7.54392L24.5001 7.54392V6.28155L2.871 6.28155L7.74344 1.46114L6.93308 0.538574L0.5 6.90308Z"
				fill="white"
			/>
		</svg>
		<div class="font-mirage text-lg text-ro-white">Back to Menu</div>
	</a>
</div>
