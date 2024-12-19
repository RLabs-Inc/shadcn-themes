<script lang="ts">
	import { getControlsState } from '$lib/state/controls.svelte';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { Button } from '$lib/components/ui/button/index.js';
	import { toggleMode } from 'mode-watcher';

	const controlsState = getControlsState();
</script>

<Button
	onclick={() => {
		toggleMode();
		controlsState().toggleThemeMode();
	}}
	class="text-primary-foreground-st border-border-st hover:bg-primary-st bg-transparent"
	variant="outline"
	size="icon"
>
	{#if controlsState().isDarkTheme}
		<Sun class="text-primary-foreground-st h-[1.2rem] w-[1.2rem]" />
	{:else}
		<Moon class="text-primary-foreground-st h-[1.2rem] w-[1.2rem]" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
