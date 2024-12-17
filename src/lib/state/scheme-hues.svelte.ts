import { randomInteger, randomNumber } from '$lib/utils/math';
import { generateSchemeHues } from '$lib/utils/color-schemes';
import { ColorSchemes, type ColorScheme } from '$lib/types/sacred-geometry-schemes';

let schemeHues: number[] = $state([]);

let bgHue = $state(0);
let fgHue = $state(0);
let cardHue = $state(0);
let popoverHue = $state(0);
let primaryHue = $state(0);
let secondaryHue = $state(0);
let accentHue = $state(0);
let borderHue = $state(0);
let inputHue = $state(0);
let ringHue = $state(0);
let destructiveHue = $state(0);
// let infoHue: [randomNumber(200, 225)];
// let warningHue: [randomNumber(37, 97)];
// let successHue: [randomNumber(120, 190)];
let chartHues = $state([0, 0, 0, 0, 0]);

const hues = $derived({
	bgHue: bgHue,
	fgHue: fgHue,
	cardHue: cardHue,
	popoverHue: popoverHue,
	primaryHue: primaryHue,
	secondaryHue: secondaryHue,
	accentHue: accentHue,
	borderHue: borderHue,
	inputHue: inputHue,
	ringHue: ringHue,
	destructiveHue: destructiveHue,
	// infoHue: infoHue,
	// warningHue: warningHue,
	// successHue: successHue,
	chartHues: chartHues
});

export const getSchemeHuesState = () => {
	function setSchemeHues(baseHue: number, scheme: ColorScheme) {
		const hues = generateSchemeHues(baseHue, ColorSchemes[scheme as ColorScheme]);
		schemeHues = hues;
		setHues();
	}

	function setHues() {
		bgHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		fgHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		cardHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		popoverHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		primaryHue = schemeHues[0];
		secondaryHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		accentHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		borderHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		inputHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		ringHue = schemeHues[randomInteger(0, schemeHues.length - 1)];
		destructiveHue = randomNumber(20, 30);
		// infoHue = randomNumber(200, 225);
		// warningHue = randomNumber(37, 97);
		// successHue = randomNumber(120, 190);
		chartHues[0] = schemeHues[randomInteger(0, schemeHues.length - 1)];
		chartHues[1] = schemeHues[randomInteger(0, schemeHues.length - 1)];
		chartHues[2] = schemeHues[randomInteger(0, schemeHues.length - 1)];
		chartHues[3] = schemeHues[randomInteger(0, schemeHues.length - 1)];
		chartHues[4] = schemeHues[randomInteger(0, schemeHues.length - 1)];
	}

	return () => ({
		hues,
		schemeHues,
		setSchemeHues,
		setHues
	});
};
