<script lang="ts">
	import { getThemeState } from '$lib/state/theme.svelte';
	import { getControlsState } from '$lib/state/controls.svelte';
	import ThemeColorSwatch from './ThemeColorSwatch.svelte';
	import ThemeColor from './ThemeColor.svelte';

	const themeState = getThemeState();
	const controlsState = getControlsState();

	let light = $derived.by(() =>
		Object.entries(themeState().theme.root).map(([key, value], index) => {
			if (key !== '--radius') {
				if (!key.includes('foreground')) {
					if (
						Object.entries(themeState().theme.root)[index + 1] &&
						Object.entries(themeState().theme.root)[index + 1][0].includes('foreground')
					) {
						return {
							[key]: value,
							[Object.entries(themeState().theme.root)[index + 1][0]]: Object.entries(
								themeState().theme.root
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
		Object.entries(themeState().theme.dark).map(([key, value], index) => {
			if (key !== '--radius') {
				if (!key.includes('foreground')) {
					if (
						Object.entries(themeState().theme.dark)[index + 1] &&
						Object.entries(themeState().theme.dark)[index + 1][0].includes('foreground')
					) {
						return {
							[key]: value,
							[Object.entries(themeState().theme.dark)[index + 1][0]]: Object.entries(
								themeState().theme.dark
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

<section class="flex flex-col gap-4 pt-2 pb-15">
	<span class="text-xl font-black">Theme Colors</span>
	{#if !controlsState().isDarkTheme}
		<div class="flex flex-col">
			<div class="flex flex-col gap-5">
				<div class="flex flex-row flex-wrap gap-8">
					<div class="flex flex-col flex-wrap items-center gap-2">
						{#each light as color}
							{#if color}
								{#if Object.entries(color).length > 1 && !Object.entries(color)[1][0].includes('info') && !Object.entries(color)[1][0].includes('warning') && !Object.entries(color)[1][0].includes('success') && !Object.entries(color)[1][0].includes('sidebar')}
									<ThemeColor
										name={Object.entries(color)[0][0]}
										color={Object.entries(color)[0][1]}
										foreground={Object.entries(color)[1][1]}
									/>
								{/if}
							{/if}
						{/each}
					</div>

					<div class="flex flex-col gap-2">
						{#each light as color}
							{#if color}
								{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('chart') && !Object.entries(color)[0][0].includes('sidebar')}
									<ThemeColor
										name={Object.entries(color)[0][0]}
										color={Object.entries(color)[0][1]}
									/>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<span class="font-black">Sidebar</span>
					<div class="flex flex-row flex-wrap gap-8">
						<div class="flex flex-col flex-wrap gap-2">
							{#each light as color}
								{#if color}
									{#if Object.entries(color).length > 1 && Object.entries(color)[1][0].includes('sidebar')}
										<ThemeColor
											name={Object.entries(color)[0][0]}
											color={Object.entries(color)[0][1]}
											foreground={Object.entries(color)[1][1]}
										/>
									{/if}
								{/if}
							{/each}
						</div>
						<div class="flex flex-col flex-wrap gap-2">
							{#each light as color}
								{#if color}
									{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('chart') && Object.entries(color)[0][0].includes('sidebar')}
										<ThemeColor
											name={Object.entries(color)[0][0]}
											color={Object.entries(color)[0][1]}
										/>
									{/if}
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<span class="font-black">Charts</span>
					<div class="flex flex-row justify-between gap-2">
						{#each light as color}
							{#if color}
								{#if Object.entries(color).length === 1 && Object.entries(color)[0][0].includes('chart') && !Object.entries(color)[0][0].includes('sidebar')}
									<ThemeColor
										name={Object.entries(color)[0][0]}
										color={Object.entries(color)[0][1]}
									/>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex flex-col">
			<div class="flex flex-col gap-5">
				<div class="flex flex-row flex-wrap gap-8">
					<div class="flex flex-col flex-wrap items-center gap-2">
						{#each dark as color}
							{#if color}
								{#if Object.entries(color).length > 1 && !Object.entries(color)[1][0].includes('info') && !Object.entries(color)[1][0].includes('warning') && !Object.entries(color)[1][0].includes('success') && !Object.entries(color)[1][0].includes('sidebar')}
									<ThemeColor
										name={Object.entries(color)[0][0]}
										color={Object.entries(color)[0][1]}
										foreground={Object.entries(color)[1][1]}
									/>
								{/if}
							{/if}
						{/each}
					</div>

					<div class="flex flex-col gap-2">
						{#each dark as color}
							{#if color}
								{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('chart') && !Object.entries(color)[0][0].includes('sidebar')}
									<ThemeColor
										name={Object.entries(color)[0][0]}
										color={Object.entries(color)[0][1]}
									/>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<span class="font-black">Sidebar</span>
					<div class="flex flex-row flex-wrap gap-8">
						<div class="flex flex-col flex-wrap gap-2">
							{#each dark as color}
								{#if color}
									{#if Object.entries(color).length > 1 && Object.entries(color)[1][0].includes('sidebar')}
										<ThemeColor
											name={Object.entries(color)[0][0]}
											color={Object.entries(color)[0][1]}
											foreground={Object.entries(color)[1][1]}
										/>
									{/if}
								{/if}
							{/each}
						</div>
						<div class="flex flex-col flex-wrap gap-2">
							{#each dark as color}
								{#if color}
									{#if Object.entries(color).length === 1 && !Object.entries(color)[0][0].includes('chart') && Object.entries(color)[0][0].includes('sidebar')}
										<ThemeColor
											name={Object.entries(color)[0][0]}
											color={Object.entries(color)[0][1]}
										/>
									{/if}
								{/if}
							{/each}
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<span class="font-black">Charts</span>
					<div class="flex flex-row justify-between gap-2">
						{#each dark as color}
							{#if color}
								{#if Object.entries(color).length === 1 && Object.entries(color)[0][0].includes('chart') && !Object.entries(color)[0][0].includes('sidebar')}
									<ThemeColor
										name={Object.entries(color)[0][0]}
										color={Object.entries(color)[0][1]}
									/>
								{/if}
							{/if}
						{/each}
					</div>
				</div>
			</div>
		</div>
	{/if}
</section>
