<script lang="ts">
	import { getSelectedColorState } from '$lib/state/color.svelte';
	import { getControlsState } from '$lib/state/controls.svelte';
	type Props = {
		name: string;
		color: string;
		foreground?: string;
	};

	import type { SelectedColor } from '$lib/types/theme';
	import ThemeColorSwatch from './ThemeColorSwatch.svelte';

	const { name, color, foreground }: Props = $props();
	const selectedColorState = getSelectedColorState();
	const controlsState = getControlsState();

	const getName = ({ name, fg = false }: { name: string; fg?: boolean }) => {
		if (fg) {
			switch (name) {
				case '--background-foreground':
					return '--foreground';
				case '--sidebar-background-foreground':
					return '--sidebar-foreground';
				default:
					return name;
			}
		} else {
			return name;
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
						<ThemeColorSwatch
							name={getName({
								name: name
							})}
							{color}
							border={foreground}
						/>
					</div>
					<div class="flex flex-col gap-0">
						<span class="text-xs font-bold">FG</span>
						<ThemeColorSwatch
							name={getName({ name: `${name}-foreground`, fg: true })}
							color={foreground}
						/>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex w-fit flex-col gap-0">
			<span class="text-xs font-bold text-wrap capitalize"
				>{name.replace('--', '').replace('-', ' ').replace('', '').replace('sidebar', '')}</span
			>
			<ThemeColorSwatch {name} {color} />
		</div>
	{/if}
</div>
