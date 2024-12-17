import { getThemeState } from '$lib/state/theme.svelte';
import { randomColorScheme, randomNumber } from '$lib/utils/math';
import { ColorSchemes, type ColorScheme } from '$lib/types/sacred-geometry-schemes';

let isDarkTheme = $state(false);
let baseHue = $state([0]);
let scheme = $state(Object.values(ColorSchemes)[0]);
let lessColors = $state(true);

export function getControlsState() {
	function toggleThemeMode() {
		isDarkTheme = !isDarkTheme;
		const themeState = getThemeState();
		themeState().updateCSSVariables();
	}
	function setIsDarkTheme(value: boolean) {
		isDarkTheme = value;
		const themeState = getThemeState();
		themeState().updateCSSVariables();
	}
	function setBaseHue(value: number[]) {
		baseHue = value;
	}
	function setScheme(value: ColorSchemes) {
		scheme = value;
	}
	function setLessColors(value: boolean) {
		lessColors = value;
	}
	function randomize() {
		const themeState = getThemeState();

		const newScheme = randomColorScheme();
		const newBaseHue = [randomNumber(0, 360)];

		scheme = newScheme;
		baseHue = newBaseHue;

		themeState().generate();
	}
	return () => ({
		isDarkTheme,
		baseHue,
		scheme,
		lessColors,
		toggleThemeMode,
		setIsDarkTheme,
		setBaseHue,
		setScheme,
		setLessColors,
		randomize
	});
}
