<script lang="ts">
	import { getThemeColors } from '$lib/state/colors.svelte';
	import { getControls } from '$lib/state/controls.svelte';
	import ThemeColorSwatch from './ThemeColorSwatch.svelte';

	const themeState = getThemeColors();
	const controlsState = getControls();

	let light = $derived.by(() =>
		Object.entries(themeState().colors.base).map(([key, value], index) => {
			if (key !== '--radius') {
				if (!key.includes('foreground')) {
					if (Object.entries(themeState().colors.base)[index + 1][0].includes('foreground')) {
						return {
							[key]: value,
							[Object.entries(themeState().colors.base)[index + 1][0]]: Object.entries(
								themeState().colors.base
							)[index + 1][1]
						};
					} else {
						return { [key]: value };
					}
				}
			}
		})
	);
	let dark = $derived.by(() =>
		Object.entries(themeState().colors.dark).map(([key, value], index) => {
			if (key !== '--radius') {
				if (!key.includes('foreground')) {
					if (Object.entries(themeState().colors.dark)[index + 1][0].includes('foreground')) {
						return {
							[key]: value,
							[Object.entries(themeState().colors.dark)[index + 1][0]]: Object.entries(
								themeState().colors.dark
							)[index + 1][1]
						};
					} else {
						return { [key]: value };
					}
				}
			}
		})
	);
</script>

{#if !controlsState().isDarkTheme}
	<div class="flex flex-row gap-3">
		<div class="flex w-full flex-col gap-2">
			<div class="flex flex-row flex-wrap gap-2">
				{#each light as color}
					{#if color}
						{#if Object.entries(color).length > 1 && !Object.entries(color)[1][0].includes('info') && !Object.entries(color)[1][0].includes('warning') && !Object.entries(color)[1][0].includes('success')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
								foreground={Object.entries(color)[1][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div>
			<!-- <div class="flex flex-row flex-wrap gap-2">
				{#each light as color}
					{#if color}
						{#if Object.entries(color).length > 1 && Object.entries(color)[1][0].includes('sidebar')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
								foreground={Object.entries(color)[1][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div> -->
		</div>
		<div>
			<div class="flex flex-col gap-2">
				{#each light as color}
					{#if color}
						{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('chart')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
		<div>
			<div class="flex flex-col gap-2">
				{#each light as color}
					{#if color}
						{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('sidebar') && Object.entries(color)[0][0].includes('chart')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="-flex-row flex gap-3">
		<div class="flex w-full flex-col gap-2">
			<div class="flex flex-row flex-wrap gap-2">
				{#each dark as color}
					{#if color}
						{#if Object.entries(color).length > 1 && !Object.entries(color)[1][0].includes('info') && !Object.entries(color)[1][0].includes('warning') && !Object.entries(color)[1][0].includes('success')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
								foreground={Object.entries(color)[1][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div>
			<!-- <div class="flex flex-row flex-wrap gap-2">
				{#each dark as color}
					{#if color}
						{#if Object.entries(color).length > 1 && Object.entries(color)[1][0].includes('sidebar')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
								foreground={Object.entries(color)[1][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div> -->
		</div>
		<div>
			<div class="flex flex-col gap-2">
				{#each dark as color}
					{#if color}
						{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('chart')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
		<div>
			<div class="flex flex-col gap-2">
				{#each dark as color}
					{#if color}
						{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('sidebar') && Object.entries(color)[0][0].includes('chart')}
							<ThemeColorSwatch
								name={Object.entries(color)[0][0]}
								color={Object.entries(color)[0][1]}
							/>
						{/if}
					{/if}
				{/each}
			</div>
		</div>
	</div>
{/if}
