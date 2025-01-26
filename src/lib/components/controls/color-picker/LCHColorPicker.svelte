<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { converter, type Oklch, formatCss } from 'culori';
	import clsx from 'clsx';

	import { getSelectedColorState, getPickerColorState } from '$lib/state/color.svelte';

	import { Input } from '$lib/components/ui/input';
	import { SliderPicker } from '$lib/components/ui/slider-picker';

	import TwoDMap from './2DMap.svelte';

	import { isLCH_within_sRGB } from './gamut-utils.svelte';
	import { toOKLCH } from './color-utils.svelte';
	import { getBgLightness, getBgChroma, getBgHue, getBgAlpha } from './gradients.svelte';
	import { formatDecimal } from '$lib/utils/math';

	import type { SelectedColor } from '$lib/types/theme';

	const selectedColorState = getSelectedColorState();
	const pickerColorState = getPickerColorState();

	const { onChange } = $props<{
		onChange?: (color: SelectedColor) => void;
	}>();

	// let showMaps = $state(false);

	let lcMap: TwoDMap;
	let hcMap: TwoDMap;
	let hlMap: TwoDMap;

	function updateMaps(changedParam?: 'lightness' | 'chroma' | 'hue') {
		lcMap?.update();
		hcMap?.update();
		hlMap?.update();
	}
	// Update color when any value changes
	function updateColor() {
		onChange?.({ ...selectedColorState().selectedColor!, color: formatCss(pickerColor) });
	}

	const pickerColor = $derived(pickerColorState().pickerColor);

	const getBGThumb = (color: Oklch) => {
		return formatCss(color);
	};

	const bgLightness = $derived(getBgLightness(pickerColor));
	const bgChroma = $derived(getBgChroma(pickerColor));
	const bgHue = $derived(getBgHue(pickerColor));
	const bgAlpha = $derived(getBgAlpha(pickerColor));
	const bgThumb = $derived(getBGThumb(pickerColor));

	onMount(() => {
		pickerColorState().setPickerLightness([
			toOKLCH(selectedColorState().selectedColor!.color)!.l * 100
		]);
		pickerColorState().setPickerChroma([toOKLCH(selectedColorState().selectedColor!.color)!.c]);
		pickerColorState().setPickerHue([toOKLCH(selectedColorState().selectedColor!.color)!.h || 0]);
		pickerColorState().setPickerAlpha([
			toOKLCH(selectedColorState().selectedColor!.color)!.alpha! * 100 || 100
		]);
		updateMaps(); // Initial map update
	});
	$inspect(bgLightness);
</script>

<div class="grid grid-cols-1 place-items-center items-center gap-4 lg:grid-cols-2">
	<!-- Color Preview -->
	<div class="flex h-full w-[280px] flex-col justify-between gap-2 place-self-center lg:order-3">
		<div class="flex flex-wrap gap-4">
			<div class="relative h-12 w-full">
				<div
					class="pattern-isometric pattern-bg-white pattern-gray-500 pattern-opacity-20 pattern-size-2 absolute inset-0 overflow-hidden rounded"
					style="background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
					linear-gradient(135deg, #ccc 25%, transparent 25%),
					linear-gradient(45deg, transparent 75%, #ccc 75%),
					linear-gradient(135deg, transparent 75%, #ccc 75%);
				background-size: 5px 5px;
				background-position:
					0 0,
					2.5px 0,
					2.5px -2.5px,
					0px 2.5px;"
				></div>
				<div
					class={clsx(
						'absolute inset-0 w-full rounded border transition-colors duration-100',
						!isLCH_within_sRGB(pickerColor)
							? 'border-destructive-st border-2'
							: 'border-primary-foreground-st'
					)}
					style={`background: ${formatCss(pickerColor)}`}
				>
					{#if !isLCH_within_sRGB(pickerColor)}
						<div
							transition:fade={{ duration: 100 }}
							class="pattern-diagonal-lines pattern-bg-white pattern-gray-500 pattern-opacity-20 pattern-size-2 absolute inset-0 rounded"
						></div>
					{/if}
				</div>
			</div>
			<div class=" flex w-full flex-col justify-center gap-1 text-sm">
				<div class="flex items-center gap-2">
					<span class="text-muted-foreground-st text-xs">OKLCH:</span>
					<span class="font-mono text-xs">
						{pickerColorState().lightness}%,
						{pickerColorState().chroma},
						{pickerColorState().hue}°
						{#if pickerColorState().alpha[0] !== 100}
							- {pickerColorState().alpha}%
						{/if}
					</span>
				</div>

				{#if !isLCH_within_sRGB(pickerColor)}
					<span
						transition:fade={{ duration: 100 }}
						class="bg-destructive-st text-destructive-foreground-st rounded px-1 text-center text-xs"
						>Color is out of gamut</span
					>
				{/if}
			</div>
		</div>
		<!-- Alpha Slider -->
		<div class="flex w-[280px] flex-col gap-2">
			<div class="flex items-center justify-between">
				<label for="alpha-slider" class="text-foreground-st text-xs"
					>Alpha: {formatDecimal(pickerColorState().alpha[0])}%</label
				>
				<Input
					class="text-foreground-st bg-background-st ring-offset-background-st ring-ring-st focus:ring-ring-st border-border-st w-20"
					type="number"
					min={0}
					max={100}
					step={0.1}
					value={pickerColorState().alpha[0]}
					oninput={(e) => {
						pickerColorState().setPickerAlpha([Number((e.target as HTMLInputElement).value)]);
						updateColor();
					}}
				/>
			</div>

			<SliderPicker
				value={pickerColorState().alpha}
				onValueChange={(value) => {
					pickerColorState().setPickerAlpha(value);
				}}
				onValueCommit={(value) => {
					pickerColorState().setPickerAlpha(value);
					updateColor();
				}}
				min={0}
				max={100}
				step={0.1}
				bgColor={bgAlpha}
				controlledValue={true}
				alpha={true}
				class="border-border-st w-[280px]"
				{bgThumb}
			/>
		</div>
	</div>

	<!-- Lightness Slider -->
	<div class="flex w-[280px] flex-col gap-2 lg:order-1">
		<div class="flex items-center justify-between">
			<label for="lightness-slider" class="text-foreground-st text-xs"
				>Lightness: {formatDecimal(pickerColorState().lightness[0])}%</label
			>
			<Input
				class="text-foreground-st bg-background-st ring-offset-background-st ring-ring-st focus:ring-ring-st border-border-st w-20"
				type="number"
				min={0}
				max={100}
				step={0.1}
				value={pickerColorState().lightness[0]}
				oninput={(e) => {
					pickerColorState().setPickerLightness([Number((e.target as HTMLInputElement).value)]);
					updateMaps('lightness');
					updateColor();
				}}
			/>
		</div>

		<div class="hidden lg:block">
			<TwoDMap
				bind:this={lcMap}
				type="lightness-chroma"
				color={pickerColor}
				onChange={updateColor}
			/>
		</div>
		<SliderPicker
			value={pickerColorState().lightness}
			onValueChange={(value) => {
				pickerColorState().setPickerLightness(value);
				updateMaps('lightness');
			}}
			onValueCommit={(value) => {
				pickerColorState().setPickerLightness(value);
				updateColor();
			}}
			min={0}
			max={100}
			step={0.1}
			bgColor={bgLightness}
			controlledValue={true}
			alpha={false}
			class="border-border-st w-[280px]"
			{bgThumb}
		/>
	</div>

	<!-- Chroma Slider -->
	<div class="flex w-[280px] flex-col gap-2 lg:order-2">
		<div class="flex items-center justify-between">
			<label for="chroma-slider" class="text-foreground-st text-xs"
				>Chroma: {formatDecimal(pickerColorState().chroma[0])}</label
			>
			<Input
				class="text-foreground-st bg-background-st ring-offset-background-st ring-ring-st focus:ring-ring-st border-border-st w-20"
				type="number"
				min={0}
				max={0.4}
				step={0.01}
				value={pickerColorState().chroma[0]}
				oninput={(e) => {
					pickerColorState().setPickerChroma([Number((e.target as HTMLInputElement).value)]);
					updateMaps('chroma');
					updateColor();
				}}
			/>
		</div>

		<div class="hidden lg:block">
			<TwoDMap bind:this={hcMap} type="hue-chroma" color={pickerColor} onChange={updateColor} />
		</div>

		<SliderPicker
			value={pickerColorState().chroma}
			onValueChange={(value) => {
				pickerColorState().setPickerChroma(value);
				updateMaps('chroma');
			}}
			onValueCommit={(value) => {
				pickerColorState().setPickerChroma(value);
				updateColor();
			}}
			min={0}
			max={0.4}
			step={0.001}
			bgColor={bgChroma}
			controlledValue={true}
			alpha={false}
			class="border-border-st w-[280px]"
			{bgThumb}
		/>
	</div>

	<!-- Hue Slider -->
	<div class="flex w-[280px] flex-col gap-2 lg:order-4">
		<div class="flex items-center justify-between">
			<label for="hue-slider" class="text-foreground-st text-xs"
				>Hue: {formatDecimal(pickerColorState().hue[0])}°</label
			>
			<Input
				class="text-foreground-st bg-background-st ring-offset-background-st ring-ring-st focus:ring-ring-st border-input-st w-20"
				type="number"
				min={0}
				max={360}
				step={0.1}
				value={pickerColorState().hue[0]}
				oninput={(e) => {
					pickerColorState().setPickerHue([Number((e.target as HTMLInputElement).value)]);
					updateMaps('hue');
					updateColor();
				}}
			/>
		</div>
		<div class="hidden lg:block">
			<TwoDMap bind:this={hlMap} type="hue-lightness" color={pickerColor} onChange={updateColor} />
		</div>
		<SliderPicker
			value={pickerColorState().hue}
			onValueChange={(value) => {
				pickerColorState().setPickerHue(value);
				updateMaps('hue');
			}}
			onValueCommit={(value) => {
				pickerColorState().setPickerHue(value);
				updateColor();
			}}
			min={0}
			max={360}
			step={0.1}
			bgColor={bgHue}
			controlledValue={true}
			alpha={false}
			class="border-border-st w-[280px]"
			{bgThumb}
		/>
	</div>
</div>

<style>
	.out-of-gamut {
		outline: 2px solid var(--error, #d65a5a);
	}

	.out-of-gamut::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: repeating-linear-gradient(
			45deg,
			transparent,
			transparent 5px,
			rgba(241, 161, 13, 0.1) 5px,
			rgba(241, 161, 13, 0.1) 10px
		);
		border-radius: inherit;
	}
</style>
