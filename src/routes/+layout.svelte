<script lang="ts">
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
	import { Toaster } from 'svelte-sonner';
	import { Lit } from 'litlyx-js';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
	Lit.init('676c080d1e8c591fe2160fb3');
</script>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
	<ModeWatcher />
	<Toaster />
	<Header />
	<main class="min-h-[calc(100vh)]">
		{@render children()}
	</main>
	<Footer />
</div>
