<script lang="ts">
	import LCHColorPicker from '$lib/components/controls/color-picker/LCHColorPicker.svelte';
	import { getSelectedColorState } from '$lib/state/color.svelte';
	import { getThemeState } from '$lib/state/theme.svelte';

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

<section
	class="border-border-st bg-background-st dark:border-primary-foreground-st dark:bg-background-st/40 rounded-md border shadow-xs"
>
	<div class="flex w-full flex-col items-center justify-center gap-2 p-2 text-xs">
		<span class="text-sm font-black capitalize drop-shadow-xs">{selectedColor?.name}</span>
		{#key selectedColor?.name}
			<LCHColorPicker onChange={handleColorChange} />
		{/key}
	</div>
</section>
