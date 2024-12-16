<script lang="ts">
	import { getControlsState } from '$lib/state/controls.svelte';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { Button } from '$lib/components/ui/button/index.js';

	const controlsState = getControlsState();
</script>

<Button onclick={controlsState().toggleThemeMode} variant="outline" size="icon">
	{#if controlsState().isDarkTheme}
		<Sun class="h-[1.2rem] w-[1.2rem]" />
	{:else}
		<Moon class="h-[1.2rem] w-[1.2rem]" />
	{/if}
	<span class="sr-only">Toggle theme</span>
</Button>
