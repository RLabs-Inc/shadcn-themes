<script lang="ts">
	import { getSelectedColorState } from '$lib/state/color.svelte';
	import { getControlsState } from '$lib/state/controls.svelte';
	import { Popover, PopoverTrigger, PopoverContent } from '$lib/components/ui/popover';

	import ColorPickerPopover from './ColorPickerPopover.svelte';
	type Props = {
		name: string;
		color: string;
		border?: string | undefined;
	};

	const { name, color, border }: Props = $props();
	const selectedColorState = getSelectedColorState();
	const controlsState = getControlsState();

	const handleClick = () => {
		selectedColorState().set({
			name,
			color,
			mode: controlsState().isDarkTheme ? 'dark' : 'light'
		});
	};
</script>

<Popover>
	<PopoverTrigger>
		<div
			class="h-10 w-15 cursor-pointer rounded inset-shadow-sm lg:h-8 lg:w-12"
			style="background-color: {color}; border: 1px solid {border ? border : color}"
			onclick={() => handleClick()}
			role="button"
			tabindex="-1"
			aria-label="Select color"
			onkeydown={(e) => {
				if (e.key === 'Enter') {
					handleClick();
				}
			}}
		></div>
	</PopoverTrigger>

	<PopoverContent class="bg-popover-st border-border-st text-popover-foreground-st w-full">
		<ColorPickerPopover />
	</PopoverContent>
</Popover>
