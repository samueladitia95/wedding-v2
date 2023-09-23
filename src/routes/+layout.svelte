<script lang="ts">
	// Import
	import "../app.css";
	import { page } from "$app/stores";
	import { isFromAnotherPage, isPlay, isShowIntro } from "$lib/store";
	import { afterUpdate, onMount } from "svelte";
	import { fade } from "svelte/transition";

	// State
	let isShow = false;
	let isPlaying = false;
	let player: HTMLAudioElement;

	// Store
	isShowIntro.subscribe((value) => {
		isShow = value;
	});
	isPlay.subscribe((value) => {
		isPlaying = value;
	});

	// Lifecycle
	onMount(() => {
		document.body.classList.add("no-scrollbar");

		if ($page.url.hash) {
			isShowIntro.set(true);
			isFromAnotherPage.set(true);
		} else if ($page.url.pathname !== "/") {
			isShowIntro.set(true);
		} else {
			window.scrollTo(0, 0);
			document.body.classList.add("overflow-hidden");
		}
	});

	afterUpdate(() => {
		if (player) {
			if (isPlaying) {
				player.play();
			} else {
				player.pause();
			}
		}
	});
</script>

<div class="relative">
	{#if isShow}
		<div
			class="container max-h-screen fixed bottom-8 left-0 z-40 w-4"
			in:fade={{ duration: 1000, delay: 2500 }}
		>
			<div class="w-full flex justify-start">
				<button
					class="bg-ro-creme rounded-full p-[11px] drop-shadow"
					on:click={() => isPlay.set(!isPlaying)}
				>
					{#if isPlaying}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
						>
							<path d="M14 19V5H18V19H14ZM6 19V5H10V19H6Z" fill="white" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
						>
							<path d="M9.55566 21.6945V6.13892L21.7779 13.9167L9.55566 21.6945Z" fill="white" />
						</svg>
					{/if}
				</button>
			</div>
		</div>
	{/if}

	<audio id="music-player" src="/music/music.mp3" bind:this={player} />

	<slot />
</div>
