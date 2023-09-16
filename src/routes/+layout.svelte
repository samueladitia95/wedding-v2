<script>
	import "../app.css";
	import { onMount } from "svelte";

	onMount(() => {
		document.body.classList.add("no-scrollbar");
		window.scrollTo(0, 0);
	});
</script>

<slot />
