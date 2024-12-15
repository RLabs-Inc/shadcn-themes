<script lang="ts">
	import { getControlsState } from '$lib/state/controls.svelte';
	import { getThemeState } from '$lib/state/theme.svelte';

	import { Label } from '$lib/components/ui/label';
	import { Switch } from '$lib/components/ui/switch';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { SliderPicker } from '$lib/components/ui/slider-picker';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

	import { ColorSchemes, type ColorScheme } from '$lib/types/sacred-geometry-schemes';

	const controlsState = getControlsState();
	const themeState = getThemeState();

	const baseHueGradient = `linear-gradient(
    	to right in oklch longer hue,
    	oklch(70% .3 0) 100% 0%
  	)`;
</script>

<section class="flex max-w-100 flex-col gap-5 p-2">
	<div class="flex items-center justify-between">
		<Label for="theme">Dark Theme?</Label>
		<Switch
			checked={controlsState().isDarkTheme}
			onCheckedChange={(checked) => controlsState().setIsDarkTheme(checked)}
		/>
	</div>
	<Separator />
	<Button onclick={() => controlsState().randomize()}>Randomize all</Button>
	<Separator />
	<p class="text-muted-foreground text-xs leading-tight">
		Select a color scheme, a base hue and click regenerate if you want to regenerate the colors
		using the same options.
	</p>

	<div class="flex flex-col gap-10">
		<div>
			<Select
				type="single"
				value={controlsState().scheme}
				onValueChange={(value) => {
					controlsState().setScheme(value as ColorSchemes);
					themeState().generate();
				}}
			>
				<SelectTrigger>{controlsState().scheme}</SelectTrigger>
				<SelectContent>
					{#each Object.values(ColorSchemes) as colorScheme}
						<SelectItem value={colorScheme}>{colorScheme}</SelectItem>
					{/each}
				</SelectContent>
			</Select>
		</div>
		<div class="flex flex-col">
			<Label for="baseHue">Base Hue: {controlsState().baseHue[0]}</Label>
			<SliderPicker
				value={controlsState().baseHue}
				min={0}
				max={360}
				step={0.01}
				onValueChange={(value) => controlsState().setBaseHue(value)}
				onValueCommit={(value) => {
					controlsState().setBaseHue(value);
					themeState().generate();
				}}
				bgColor={baseHueGradient}
			/>
		</div>
		<Button onclick={() => themeState().regenerate()}
			>Regenerate {controlsState().isDarkTheme ? 'dark' : 'light'} colors</Button
		>
	</div>
	<Separator />
	<Button onclick={() => themeState().reset()}>Reset colors</Button>
	<Separator />
</section>
