import { getControlsState } from './controls.svelte';
import { getSchemeHuesState } from './scheme-hues.svelte';
import { generateThemeColors } from '$lib/utils/theme';
import { initialCSSVariables } from '$lib/constants/colors';
import type { CSSVariables, Theme } from '$lib/types/theme';
import { type ColorScheme } from '$lib/types/sacred-geometry-schemes';

let baseColors: CSSVariables = $state(initialCSSVariables.root);
let darkColors: CSSVariables = $state(initialCSSVariables.dark);

const theme: Theme = $derived({
	root: baseColors,
	dark: darkColors
});

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
	}
	function setDarkColor(name: string, color: string) {
		darkColors = {
			...darkColors,
			[name]: color
		};
	}
	function setSchemeHues(baseHue: number, scheme: ColorScheme) {
		const schemeHuesState = getSchemeHuesState();
		schemeHuesState().setSchemeHues(baseHue, scheme as ColorScheme);
	}
	function generate() {
		const controlsState = getControlsState();
		const schemeHuesState = getSchemeHuesState();

		setSchemeHues(controlsState().baseHue[0], controlsState().scheme as ColorScheme);

		const colors = generateThemeColors(schemeHuesState().hues);

		baseColors = colors.root;
		darkColors = colors.dark;

		updateCSSVariables();
	}
	function regenerate() {
		const controlsState = getControlsState();
		const schemeHuesState = getSchemeHuesState();
		const colors = generateThemeColors(schemeHuesState().hues);
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

		updateCSSVariables();
	}
	function updateCSSVariables() {
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
