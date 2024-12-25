<script lang="ts">
	import { getControlsState } from '$lib/state/controls.svelte';
	import { getThemeState } from '$lib/state/theme.svelte';

	import { Label } from '$lib/components/ui/label';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { SliderPicker } from '$lib/components/ui/slider-picker';
	import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';

	import ThemeModeButton from '$lib/components/ThemeModeButton.svelte';

	import { ColorSchemes } from '$lib/types/sacred-geometry-schemes';
	import { Switch } from '../ui/switch';
	import Config from './Config.svelte';
	import { Lit } from 'litlyx-js';

	const controlsState = getControlsState();
	const themeState = getThemeState();

	const baseHueGradient = `linear-gradient(
    	to right in oklch longer hue,
    	oklch(70% .3 0) 100% 0%
  	)`;
</script>

<section class="text-foreground-st bg-muted-st flex flex-col gap-2 px-5 pt-2">
	<div class="flex flex-wrap items-center gap-5 sm:flex-row">
		<div class="flex min-w-[250px] flex-1 flex-col gap-4">
			<Label class="text-primary-foreground-st" for="baseHue"
				>Base Hue: {controlsState().baseHue[0]}</Label
			>
			<SliderPicker
				value={controlsState().baseHue}
				min={0}
				max={360}
				step={0.01}
				onValueChange={(value) => controlsState().setBaseHue(value)}
				onValueCommit={(value) => {
					controlsState().setBaseHue(value);
					themeState().generate();
					Lit.event('Base hue change');
				}}
				bgColor={baseHueGradient}
				class="border-primary-st"
				data-umami-event="Change base hue"
			/>
		</div>
		<div class="flex flex-row flex-wrap gap-5">
			<div class="flex flex-col gap-1">
				<Label class="text-primary-foreground-st" for="scheme">Color Scheme</Label>
				<Select
					type="single"
					value={controlsState().scheme}
					onValueChange={(value) => {
						controlsState().setScheme(value as ColorSchemes);
						themeState().generate();
						Lit.event('Color scheme changed ' + value);
					}}
				>
					<SelectTrigger
						class="text-foreground-st bg-background-st ring-offset-background-st ring-ring-st focus:ring-ring-st border-input-st w-full max-w-[120px] lg:max-w-[200px]"
					>
						<div class="text-elipsis truncate overflow-hidden">
							{controlsState().scheme}
						</div>
					</SelectTrigger>
					<SelectContent class="bg-popover-st border-border-st text-popover-foreground-st">
						{#each Object.values(ColorSchemes) as colorScheme}
							<SelectItem
								class="data-highlighted:bg-accent-st data-highlighted:text-accent-foreground-st  capitalize"
								value={colorScheme}
								data-umami-event={`Change color scheme ${colorScheme}`}>{colorScheme}</SelectItem
							>
						{/each}
					</SelectContent>
				</Select>
			</div>
			<div class="flex flex-col gap-1">
				<Label class="text-primary-foreground-st w-[50px] text-wrap" for="lessColors"
					>Less colors?</Label
				>
				<Switch
					checked={controlsState().lessColors}
					onCheckedChange={(checked) => {
						controlsState().setLessColors(checked);
						Lit.event('Less colors ' + checked);
					}}
					class="text-primary-foreground-st bg-primary-st data-[state=checked]:bg-primary-st data-[state=unchecked]:bg-input-st"
					classNameThumb="bg-background-st"
					data-umami-event="Change less colors"
				/>
			</div>
			<div class="self-end">
				<ThemeModeButton />
			</div>
			<div class="self-end">
				<Config />
			</div>
		</div>
		<div class="flex w-full gap-2 self-end md:w-fit">
			<Button
				class="text-primary-foreground-st hover:text-secondary-foreground-st hover:bg-secondary-st bg-primary-st  w-full md:w-fit"
				onclick={() => {
					themeState().regenerate();
					Lit.event('Regenerate');
				}}
				data-umami-event="Regenerate colors"
				>Regenerate {controlsState().isDarkTheme ? 'dark' : 'light'} colors</Button
			>
			<Button
				class="text-primary-foreground-st hover:text-secondary-foreground-st hover:bg-secondary-st bg-primary-st w-full md:w-fit"
				onclick={() => {
					controlsState().randomize();
					Lit.event('Randomize');
				}}
				data-umami-event="Randomize colors">Randomize</Button
			>
		</div>
	</div>
	<!-- <p class="text-muted-foreground text-xs leading-tight">
			Select a color scheme, a base hue and click regenerate if you want to regenerate the colors
			using the same options.
		</p> -->

	<Separator class="bg-border-st" />
</section>
