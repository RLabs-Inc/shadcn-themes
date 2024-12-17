<script lang="ts">
	import { getSelectedColorState } from '$lib/state/color.svelte';
	import { getControlsState } from '$lib/state/controls.svelte';
	type Props = {
		name: string;
		color: string;
		foreground?: string;
	};

	import type { SelectedColor } from '$lib/types/theme';

	const { name, color, foreground }: Props = $props();
	const selectedColorState = getSelectedColorState();
	const controlsState = getControlsState();

	const handleSelectColor = ({
		name,
		color,
		fg = false
	}: {
		name: string;
		color: string;
		fg?: boolean;
	}) => {
		if (fg) {
			switch (name) {
				case '--background-foreground':
					selectedColorState().set({
						name: '--foreground',
						color,
						mode: controlsState().isDarkTheme ? 'dark' : 'light'
					});
					break;
				case '--sidebar-background-foreground':
					selectedColorState().set({
						name: '--sidebar-foreground',
						color,
						mode: controlsState().isDarkTheme ? 'dark' : 'light'
					});
					break;
				default:
					selectedColorState().set({
						name,
						color,
						mode: controlsState().isDarkTheme ? 'dark' : 'light'
					});
					break;
			}
		} else {
			selectedColorState().set({
				name,
				color,
				mode: controlsState().isDarkTheme ? 'dark' : 'light'
			});
		}
	};
</script>

<div>
	{#if foreground}
		<div
			class="flex min-w-60 items-center justify-between rounded p-2 inset-shadow-sm lg:min-w-[220px]"
			style="background-color: {color}; color: {foreground}; border: 1px solid {foreground}"
		>
			<div class="flex flex-row items-center gap-5">
				<div class="flex flex-col gap-2">
					<span class="text-xs font-black capitalize"
						>{name.replace('--', '').replace('-', ' ').replace('', '').replace('sidebar', '')}</span
					>
					<span class="text-xs">Loren Ipsum</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="flex flex-col gap-0">
						<span class="text-xs font-bold">BG</span>
						<div
							class="h-10 w-15 cursor-pointer rounded inset-shadow-sm lg:h-8 lg:w-12"
							style="background-color: {color}; border: 1px solid {foreground}"
							onclick={() => handleSelectColor({ name, color })}
							role="button"
							tabindex="-1"
							aria-label="Select color"
							onkeydown={(e) => {
								if (e.key === 'Enter') {
									handleSelectColor({ name, color });
								}
							}}
						></div>
					</div>
					<div class="flex flex-col gap-0">
						<span class="text-xs font-bold">FG</span>
						<div
							class="h-10 w-15 cursor-pointer rounded inset-shadow-sm lg:h-8 lg:w-12"
							style="background-color: {foreground}"
							onclick={() =>
								handleSelectColor({ name: `${name}-foreground`, color: foreground, fg: true })}
							role="button"
							tabindex="-1"
							aria-label="Select color"
							onkeydown={(e) => {
								if (e.key === 'Enter') {
									handleSelectColor({ name: `${name}-foreground`, color: foreground, fg: true });
								}
							}}
						></div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex w-fit flex-col gap-0">
			<span class="text-xs font-bold text-wrap capitalize"
				>{name.replace('--', '').replace('-', ' ').replace('', '').replace('sidebar', '')}</span
			>
			<div
				class="h-10 w-15 cursor-pointer rounded shadow-sm lg:h-8 lg:w-12"
				style="background-color: {color}"
				onclick={() => handleSelectColor({ name, color })}
				role="button"
				tabindex="-1"
				aria-label="Select color"
				onkeydown={(e) => {
					if (e.key === 'Enter') {
						handleSelectColor({ name, color });
					}
				}}
			></div>
		</div>
	{/if}
</div>
