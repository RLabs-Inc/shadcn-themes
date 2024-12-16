import { randomInteger, randomNumber } from '$lib/utils/math';
import { adjustMutedColor, ensureReadability, randomizeColor } from '$lib/utils/colors';

import type { Theme, ThemeHues } from '$lib/types/theme';
import { wcagLuminance } from 'culori';

export function generateThemeColors(hues: ThemeHues): Theme {
	const {
		bgHue,
		fgHue,
		primaryHue,
		secondaryHue,
		accentHue,
		borderHue,
		inputHue,
		ringHue,
		destructiveHue,
		chartHues
	} = hues;

	const colors: Theme = {
		root: {
			'--background': randomizeColor([bgHue], [96, 100], [0, 10]),
			'--foreground': randomizeColor([bgHue], [0, 50], [0, 40]),

			'--card': randomizeColor([bgHue], [90, 100], [0, 15]),
			'--card-foreground': randomizeColor([bgHue], [0, 50], [0, 40]),

			'--popover': randomizeColor([bgHue], [90, 100], [0, 15]),
			'--popover-foreground': randomizeColor([bgHue], [0, 50], [0, 40]),

			'--muted': randomizeColor([bgHue], [80, 100], [0, 10]),
			'--muted-foreground': randomizeColor([bgHue], [70, 100], [0, 15]),

			'--primary': randomizeColor([primaryHue], [0, 100], [0, 40]),
			'--primary-foreground': randomizeColor([primaryHue], [0, 100], [0, 40]),

			'--secondary': randomizeColor([secondaryHue], [0, 100], [0, 40]),
			'--secondary-foreground': randomizeColor([secondaryHue], [0, 100], [0, 40]),

			'--accent': randomizeColor([accentHue], [0, 100], [0, 40]),
			'--accent-foreground': randomizeColor([accentHue], [0, 100], [0, 40]),

			// '--info': randomizeColor(infoHue, [20, 96], [5, 40]),
			// '--info-foreground': randomizeColor(infoHue, [0, 100], [0, 40]),
			// '--warning': randomizeColor(warningHue, [65, 93], [20, 40]),
			// '--warning-foreground': randomizeColor(warningHue, [0, 100], [10, 40]),
			'--destructive': randomizeColor([destructiveHue], [20, 96], [5, 40]),
			'--destructive-foreground': randomizeColor([destructiveHue], [0, 100], [0, 40]),
			// '--success': randomizeColor(successHue, [20, 96], [5, 40]),
			// '--success-foreground': randomizeColor(successHue, [0, 100], [0, 40]),

			'--border': randomizeColor([borderHue], [0, 100], [0, 40]),
			'--input': randomizeColor([inputHue], [0, 100], [0, 40]),
			'--ring': randomizeColor([ringHue], [0, 100], [0, 40]),

			'--sidebar-background': randomizeColor([bgHue], [96, 100], [0, 15]),
			'--sidebar-foreground': randomizeColor([fgHue], [0, 100], [0, 40]),
			'--sidebar-primary': randomizeColor([primaryHue], [0, 100], [0, 40]),
			'--sidebar-primary-foreground': randomizeColor([primaryHue], [0, 100], [0, 40]),
			'--sidebar-accent': randomizeColor([accentHue], [0, 100], [0, 40]),
			'--sidebar-accent-foreground': randomizeColor([accentHue], [0, 100], [0, 40]),

			'--sidebar-border': randomizeColor([borderHue], [0, 100], [0, 40]),
			'--sidebar-ring': randomizeColor([ringHue], [0, 100], [0, 40]),

			'--chart-1': randomizeColor([chartHues[0]], [0, 100], [0, 40]),
			'--chart-2': randomizeColor([chartHues[1]], [0, 100], [0, 40]),
			'--chart-3': randomizeColor([chartHues[2]], [0, 100], [0, 40]),
			'--chart-4': randomizeColor([chartHues[3]], [0, 100], [0, 40]),
			'--chart-5': randomizeColor([chartHues[4]], [0, 100], [0, 40]),

			'--radius': '0.5rem'
		},
		dark: {
			'--background': randomizeColor([bgHue], [0, 35], [0, 7]),
			'--foreground': randomizeColor([bgHue], [60, 100], [0, 40]),

			'--card': randomizeColor([bgHue], [0, 35], [0, 7]),
			'--card-foreground': randomizeColor([bgHue], [60, 100], [0, 40]),

			'--popover': randomizeColor([bgHue], [0, 35], [0, 7]),
			'--popover-foreground': randomizeColor([bgHue], [60, 100], [0, 40]),

			'--muted': randomizeColor([bgHue], [0, 30], [0, 4]),
			'--muted-foreground': randomizeColor([bgHue], [20, 30], [0, 20]),

			'--primary': randomizeColor([primaryHue], [0, 100], [0, 40]),
			'--primary-foreground': randomizeColor([primaryHue], [0, 100], [0, 40]),

			'--secondary': randomizeColor([secondaryHue], [0, 100], [0, 40]),
			'--secondary-foreground': randomizeColor([secondaryHue], [0, 100], [0, 40]),

			'--accent': randomizeColor([accentHue], [0, 100], [0, 40]),
			'--accent-foreground': randomizeColor([accentHue], [0, 100], [0, 40]),

			// '--info': randomizeColor(infoHue, [20, 96], [5, 40]),
			// '--info-foreground': randomizeColor(infoHue, [0, 100], [0, 40]),
			// '--warning': randomizeColor(warningHue, [65, 93], [20, 40]),
			// '--warning-foreground': randomizeColor(warningHue, [0, 100], [10, 40]),
			'--destructive': randomizeColor([destructiveHue], [40, 90], [15, 40]),
			'--destructive-foreground': randomizeColor([destructiveHue], [0, 100], [10, 40]),
			// '--success': randomizeColor(successHue, [15, 90], [5, 40]),
			// '--success-foreground': randomizeColor(successHue, [0, 100], [0, 40]),

			'--border': randomizeColor([borderHue], [0, 100], [0, 40]),
			'--input': randomizeColor([inputHue], [0, 100], [0, 40]),
			'--ring': randomizeColor([ringHue], [0, 100], [0, 40]),

			'--sidebar-background': randomizeColor([bgHue], [0, 35], [0, 7]),
			'--sidebar-foreground': randomizeColor([fgHue], [60, 100], [0, 40]),
			'--sidebar-primary': randomizeColor([primaryHue], [0, 100], [0, 40]),
			'--sidebar-primary-foreground': randomizeColor([primaryHue], [0, 100], [0, 40]),
			'--sidebar-accent': randomizeColor([accentHue], [0, 100], [0, 40]),
			'--sidebar-accent-foreground': randomizeColor([accentHue], [0, 100], [0, 40]),

			'--sidebar-border': randomizeColor([borderHue], [0, 100], [0, 40]),
			'--sidebar-ring': randomizeColor([ringHue], [0, 100], [0, 40]),

			'--chart-1': randomizeColor([chartHues[0]], [0, 100], [0, 40]),
			'--chart-2': randomizeColor([chartHues[1]], [0, 100], [0, 40]),
			'--chart-3': randomizeColor([chartHues[2]], [0, 100], [0, 40]),
			'--chart-4': randomizeColor([chartHues[3]], [0, 100], [0, 40]),
			'--chart-5': randomizeColor([chartHues[4]], [0, 100], [0, 40]),

			'--radius': '0.5rem'
		}
	};

	const base = colors.root;
	const dark = colors.dark;

	// Ensure minimum contrast between dome of the colors
	base['--ring'] = ensureReadability(base['--ring'], base['--background'], 1);
	base['--input'] = ensureReadability(base['--input'], base['--background'], 2);
	base['--accent'] = ensureReadability(base['--accent'], base['--background'], 2);
	base['--primary'] = ensureReadability(base['--primary'], base['--background'], 2);
	base['--secondary'] = ensureReadability(base['--secondary'], base['--background'], 2);

	// Ensure minimum contrast between foreground and background
	base['--foreground'] = ensureReadability(base['--foreground'], base['--background'], 5.5);
	base['--card-foreground'] = ensureReadability(base['--card-foreground'], base['--card'], 5.5);
	base['--popover-foreground'] = ensureReadability(
		base['--popover-foreground'],
		base['--popover'],
		5.5
	);
	base['--primary-foreground'] = ensureReadability(
		base['--primary-foreground'],
		base['--primary'],
		5.5
	);
	base['--secondary-foreground'] = ensureReadability(
		base['--secondary-foreground'],
		base['--secondary'],
		5.5
	);
	base['--destructive-foreground'] = ensureReadability(
		base['--destructive-foreground'],
		base['--destructive'],
		5.5
	);
	base['--sidebar-foreground'] = ensureReadability(
		base['--sidebar-foreground'],
		base['--sidebar-background'],
		5.5
	);
	base['--sidebar-primary-foreground'] = ensureReadability(
		base['--sidebar-primary-foreground'],
		base['--sidebar-primary'],
		5.5
	);
	base['--sidebar-accent-foreground'] = ensureReadability(
		base['--sidebar-accent-foreground'],
		base['--sidebar-accent'],
		5.5
	);

	// Ensure minimum contrast between chart colors and the background color
	base['--chart-1'] = ensureReadability(base['--chart-1'], base['--background'], 2.5);
	base['--chart-2'] = ensureReadability(base['--chart-2'], base['--background'], 2.5);
	base['--chart-3'] = ensureReadability(base['--chart-3'], base['--background'], 2.5);
	base['--chart-4'] = ensureReadability(base['--chart-4'], base['--background'], 2.5);
	base['--chart-5'] = ensureReadability(base['--chart-5'], base['--background'], 2.5);

	// Ensure mute colors are muted yet readable.
	base['--muted-foreground'] = adjustMutedColor(
		base['--muted-foreground'],
		base['--muted'],
		false,
		2.5,
		3.5
	);
	base['--muted-foreground'] = adjustMutedColor(
		base['--muted-foreground'],
		base['--card'],
		false,
		3.0,
		4.5
	);
	base['--accent'] = adjustMutedColor(
		base['--accent'],
		base['--popover-foreground'],
		wcagLuminance(base['--popover-foreground']) < 0.5,
		4,
		100
	);
	base['--accent'] = adjustMutedColor(
		base['--accent'],
		base['--muted-foreground'],
		wcagLuminance(base['--muted-foreground']) < 0.5,
		2,
		100
	);

	base['--accent-foreground'] = ensureReadability(
		base['--accent-foreground'],
		base['--accent'],
		5.5
	);

	// Ensure minimum contrast between some colors and the background color
	dark['--ring'] = ensureReadability(dark['--ring'], dark['--background'], 1);
	dark['--input'] = ensureReadability(dark['--input'], dark['--background'], 2);
	dark['--accent'] = ensureReadability(dark['--accent'], dark['--background'], 2);
	dark['--primary'] = ensureReadability(dark['--primary'], dark['--background'], 2);
	dark['--secondary'] = ensureReadability(dark['--secondary'], dark['--background'], 2);
	// dark['--accent'] = adjustMutedColor(
	// 	dark['--accent'],
	// 	dark['--muted-foreground'],
	// 	!(wcagLuminance(dark['--accent']) < 0.5),
	// 	5,
	// 	20
	// );
	// Ensure minimum contrast between foreground and background colors
	dark['--foreground'] = ensureReadability(dark['--foreground'], dark['--background'], 5.5);

	dark['--card-foreground'] = ensureReadability(dark['--card-foreground'], dark['--card'], 5.5);
	dark['--popover-foreground'] = ensureReadability(
		dark['--popover-foreground'],
		dark['--popover'],
		5.5
	);
	dark['--primary-foreground'] = ensureReadability(
		dark['--primary-foreground'],
		dark['--primary'],
		5.5
	);
	dark['--secondary-foreground'] = ensureReadability(
		dark['--secondary-foreground'],
		dark['--secondary'],
		5.5
	);
	dark['--destructive-foreground'] = ensureReadability(
		dark['--destructive-foreground'],
		dark['--destructive'],
		5.5
	);
	dark['--sidebar-foreground'] = ensureReadability(
		dark['--sidebar-foreground'],
		dark['--sidebar-background'],
		5.5
	);
	dark['--sidebar-primary-foreground'] = ensureReadability(
		dark['--sidebar-primary-foreground'],
		dark['--sidebar-primary'],
		5.5
	);
	dark['--sidebar-accent-foreground'] = ensureReadability(
		dark['--sidebar-accent-foreground'],
		dark['--sidebar-accent'],
		5.5
	);

	// Ensure minimum contrast between chart and card colors
	dark['--chart-1'] = ensureReadability(dark['--chart-1'], dark['--card'], 1);
	dark['--chart-2'] = ensureReadability(dark['--chart-2'], dark['--card'], 1);
	dark['--chart-3'] = ensureReadability(dark['--chart-3'], dark['--card'], 1);
	dark['--chart-4'] = ensureReadability(dark['--chart-4'], dark['--card'], 1);
	dark['--chart-5'] = ensureReadability(dark['--chart-5'], dark['--card'], 1);

	// Adjust muted colors to ensure muted appearance but still readable
	dark['--muted-foreground'] = adjustMutedColor(
		dark['--muted-foreground'],
		dark['--muted'],
		true,
		3.5,
		5.5
	);
	dark['--muted-foreground'] = adjustMutedColor(
		dark['--muted-foreground'],
		dark['--card'],
		true,
		3.5,
		4.5
	);
	dark['--accent'] = adjustMutedColor(
		dark['--accent'],
		dark['--popover-foreground'],
		wcagLuminance(base['--popover-foreground']) > 0.5,
		5,
		100
	);
	dark['--accent'] = adjustMutedColor(
		dark['--accent'],
		dark['--muted-foreground'],
		wcagLuminance(dark['--muted-foreground']) < 0.5,
		2,
		100
	);

	dark['--accent-foreground'] = ensureReadability(
		dark['--accent-foreground'],
		dark['--accent'],
		5.5
	);

	return {
		root: base,
		dark: dark
	};
}
