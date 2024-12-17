import { type Oklch, oklch } from 'culori';
import type { SelectedColor } from '$lib/types/theme';

let selectedColor: SelectedColor | null = $state(null);

let lightness: number[] = $state([0]);
let chroma: number[] = $state([0]);
let hue: number[] = $state([0]);
let alpha: number[] = $state([100]);

const pickerColor: Oklch = $derived.by(() => {
	return oklch({
		mode: 'oklch',
		l: lightness[0] / 100,
		c: chroma[0],
		h: hue[0],
		alpha: alpha[0] / 100
	});
});

export const getSelectedColorState = () => {
	function set(color: SelectedColor | null) {
		selectedColor = color;
	}

	return () => ({
		selectedColor,
		set
	});
};

export const getPickerColorState = () => {
	function setPickerLightness(newLightness: number[]) {
		lightness = newLightness;
	}
	function setPickerChroma(newChroma: number[]) {
		chroma = newChroma;
	}
	function setPickerHue(newHue: number[]) {
		hue = newHue;
	}
	function setPickerAlpha(newAlpha: number[]) {
		alpha = newAlpha;
	}

	return () => ({
		pickerColor,
		lightness,
		chroma,
		hue,
		alpha,
		setPickerLightness,
		setPickerChroma,
		setPickerHue,
		setPickerAlpha
	});
};
