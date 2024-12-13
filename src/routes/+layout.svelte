<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<ModeWatcher />
	<Header />
	<main class="min-h-[calc(100vh)]">
		{@render children()}
	</main>
	<Footer />
</div>
