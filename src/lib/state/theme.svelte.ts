import { getControlsState } from './controls.svelte';
import { getSchemeHuesState } from './scheme-hues.svelte';
import { generateThemeColors } from '$lib/utils/theme';
import { initialCSSVariables } from '$lib/constants/colors';
import type { CSSVariables, Theme, SelectedColor } from '$lib/types/theme';
import { type ColorScheme } from '$lib/types/sacred-geometry-schemes';

let baseColors: CSSVariables = $state(initialCSSVariables.root);
let darkColors: CSSVariables = $state(initialCSSVariables.dark);

const theme: Theme = $derived({
	root: baseColors,
	dark: darkColors
});

let selectedColor: SelectedColor | null = $state(null);

export const getThemeState = () => {
	function setBaseColors(colors: CSSVariables) {
		baseColors = colors;
	}
	function setDarkColors(colors: CSSVariables) {
		darkColors = colors;
	}
	function setBaseColor(name: string, color: string) {
		baseColors = {
			...baseColors,
			[name]: color
		};
		updateCSSVariables();
	}
	function setDarkColor(name: string, color: string) {
		darkColors = {
			...darkColors,
			[name]: color
		};
		updateCSSVariables();
	}
	function setSchemeHues(baseHue: number, scheme: ColorScheme) {
		const schemeHuesState = getSchemeHuesState();
		schemeHuesState().setSchemeHues(baseHue, scheme as ColorScheme);
	}
	function generate() {
		const controlsState = getControlsState();
		const schemeHuesState = getSchemeHuesState();

		setSchemeHues(controlsState().baseHue[0], controlsState().scheme as ColorScheme);

		const colors = generateThemeColors(schemeHuesState().hues, controlsState().lessColors);

		baseColors = colors.root;
		darkColors = colors.dark;

		updateCSSVariables();
	}
	function regenerate() {
		const controlsState = getControlsState();
		const schemeHuesState = getSchemeHuesState();
		const colors = generateThemeColors(schemeHuesState().hues, controlsState().lessColors);
		if (controlsState().isDarkTheme) {
			darkColors = colors.dark;
		} else {
			baseColors = colors.root;
		}
		updateCSSVariables();
	}
	function reset() {
		baseColors = initialCSSVariables.root;
		darkColors = initialCSSVariables.dark;

		updateCSSVariables('reset');
	}
	function updateCSSVariables(mode?: string) {
		switch (mode) {
			case 'reset':
				Object.keys(initialCSSVariables.root).forEach((key) => {
					document.documentElement.style.removeProperty(key);
				});
				break;
			default:
				const controlsState = getControlsState();
				if (controlsState().isDarkTheme) {
					Object.entries(darkColors).forEach(([key, value]) => {
						document.documentElement.style.setProperty(key, value);
					});
				} else {
					Object.entries(baseColors).forEach(([key, value]) => {
						document.documentElement.style.setProperty(key, value);
					});
				}
				break;
		}
	}

	return () => ({
		theme,
		reset,
		generate,
		regenerate,
		setBaseColor,
		setDarkColor,
		setDarkColors,
		setBaseColors,
		updateCSSVariables
	});
};
