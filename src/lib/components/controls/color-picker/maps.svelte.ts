import { type Oklch } from 'culori';
import { get_sRGB_string_for_gradient } from './color-utils.svelte';
import { getPickerColorState } from '$lib/state/color.svelte';

export type MapType = 'lightness-chroma' | 'hue-chroma' | 'hue-lightness';

export function generateMapColors(
	type: MapType,
	currentColor: Oklch,
	width: number,
	height: number
): string[][] {
	const colors: string[][] = [];

	for (let y = 0; y < height; y++) {
		const row: string[] = [];
		for (let x = 0; x < width; x++) {
			const color = { ...currentColor };

			switch (type) {
				case 'lightness-chroma':
					color.l = (x / (width - 1)) * 100;
					color.c = (1 - y / (height - 1)) * 0.4;
					break;
				case 'hue-chroma':
					color.h = (x / (width - 1)) * 360;
					color.c = (1 - y / (height - 1)) * 0.4;
					break;
				case 'hue-lightness':
					color.h = (x / (width - 1)) * 360;
					color.l = (1 - y / (height - 1)) * 100;
					break;
			}

			row.push(get_sRGB_string_for_gradient(color));
		}
		colors.push(row);
	}

	return colors;
}

export function getMapPosition(
	type: MapType,
	color: Oklch,
	width: number,
	height: number
): { x: number; y: number } {
	switch (type) {
		case 'lightness-chroma':
			return {
				x: color.l * width,
				y: (1 - color.c / 0.4) * height
			};
		case 'hue-chroma':
			return {
				x: ((color.h || 0) / 360) * width,
				y: (1 - color.c! / 0.4) * height
			};
		case 'hue-lightness':
			return {
				x: ((color.h || 0) / 360) * width,
				y: (1 - color.l!) * height
			};
	}
}

export function setColorFromPosition(
	type: MapType,
	x: number,
	y: number,
	width: number,
	height: number
): void {
	const pickerColorState = getPickerColorState();

	switch (type) {
		case 'lightness-chroma':
			pickerColorState().setPickerLightness([(x / width) * 100]);
			pickerColorState().setPickerChroma([(1 - y / height) * 0.4]);
			break;
		case 'hue-chroma':
			pickerColorState().setPickerHue([(x / width) * 360]);
			pickerColorState().setPickerChroma([(1 - y / height) * 0.4]);
			break;
		case 'hue-lightness':
			pickerColorState().setPickerHue([(x / width) * 360]);
			pickerColorState().setPickerLightness([(1 - y / height) * 100]);
			break;
	}
}
