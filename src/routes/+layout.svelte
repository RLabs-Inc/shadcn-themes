<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<ModeWatcher />
	<Header />
	<main class="min-h-[calc(100vh)]">
		{@render children()}
	</main>
	<Footer />
</div>
