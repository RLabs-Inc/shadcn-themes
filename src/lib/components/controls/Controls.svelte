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
	import { Check } from 'lucide-svelte';
	import Checkbox from '../ui/checkbox/checkbox.svelte';
	import { Switch } from '../ui/switch';

	const controlsState = getControlsState();
	const themeState = getThemeState();

	const baseHueGradient = `linear-gradient(
    	to right in oklch longer hue,
    	oklch(70% .3 0) 100% 0%
  	)`;
</script>

<section class="flex flex-col gap-2 px-5 pt-2">
	<div class="flex flex-wrap items-center gap-5 sm:flex-row">
		<div class="flex min-w-[300px] flex-1 flex-col gap-4">
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
		<div class="flex flex-row flex-wrap gap-5">
			<div class="flex flex-col gap-1">
				<Label for="scheme">Color Scheme</Label>
				<Select
					type="single"
					value={controlsState().scheme}
					onValueChange={(value) => {
						controlsState().setScheme(value as ColorSchemes);
						themeState().generate();
					}}
				>
					<SelectTrigger class="w-full min-w-[150px]">{controlsState().scheme}</SelectTrigger>
					<SelectContent>
						{#each Object.values(ColorSchemes) as colorScheme}
							<SelectItem value={colorScheme}>{colorScheme}</SelectItem>
						{/each}
					</SelectContent>
				</Select>
			</div>
			<div class="flex flex-col gap-4">
				<Label for="lessColors">Less colors?</Label>
				<Switch
					checked={controlsState().lessColors}
					onCheckedChange={(checked) => {
						controlsState().setLessColors(checked);
					}}
				/>
			</div>
			<div class="self-end">
				<ThemeModeButton />
			</div>
		</div>
		<div class="flex w-full flex-wrap gap-2 self-end md:w-fit">
			<Button class="w-full md:w-fit" onclick={() => themeState().regenerate()}
				>Regenerate {controlsState().isDarkTheme ? 'dark' : 'light'} colors</Button
			>
			<Button class="w-full md:w-fit" onclick={() => controlsState().randomize()}>Randomize</Button>
		</div>
	</div>
	<!-- <p class="text-muted-foreground text-xs leading-tight">
			Select a color scheme, a base hue and click regenerate if you want to regenerate the colors
			using the same options.
		</p> -->

	<Separator />
</section>
