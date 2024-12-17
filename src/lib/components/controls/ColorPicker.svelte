<script lang="ts">
	import LCHColorPicker from '$lib/components/controls/color-picker/LCHColorPicker.svelte';
	import { getSelectedColorState } from '$lib/state/color.svelte';
	import { getThemeState } from '$lib/state/theme.svelte';

	import { Button } from '$lib/components/ui/button';

	import type { SelectedColor } from '$lib/types/theme';

	const selectedColorState = getSelectedColorState();
	const themeState = getThemeState();

	const selectedColor = $derived(selectedColorState().selectedColor);

	function handleColorChange(newColor: SelectedColor) {
		selectedColorState().set(newColor);
		switch (newColor.mode) {
			case 'light':
				themeState().setBaseColor(newColor.name, newColor.color);
				break;
			case 'dark':
				themeState().setDarkColor(newColor.name, newColor.color);
				break;
			default:
				break;
		}
	}
</script>

{#if selectedColor}
	<section
		class="border-border bg-background dark:border-primary-foreground dark:bg-background/40 rounded-md border shadow-xs lg:max-w-[300px]"
	>
		<div class="flex max-h-4 w-full items-start justify-end">
			<Button variant="ghost" size="icon" onclick={() => selectedColorState().set(null)}>
				<span class="sr-only">Close</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-4 w-4"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</Button>
		</div>
		<div class="flex w-full flex-col items-center justify-center gap-2 p-2 text-xs">
			<span class="text-sm font-black capitalize drop-shadow-xs">{selectedColor.name}</span>
			{#key selectedColor.name}
				<LCHColorPicker onChange={handleColorChange} />
			{/key}
		</div>
	</section>
{/if}
