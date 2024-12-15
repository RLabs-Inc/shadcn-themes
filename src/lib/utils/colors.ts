import {
	oklch,
	random,
	converter,
	formatCss,
	clampChroma,
	wcagContrast,
	wcagLuminance
} from 'culori';

export const toOKLCH = converter('oklch');

export const randomizeColor = (hue: number[], lightness: number[], chroma: number[] | null) => {
	const newColor = random('oklch', {
		l: [lightness[0] / 100, lightness[1] / 100],
		c: chroma ? [chroma[0] / 100, chroma[1] / 100] : [0, 0.4],
		h: hue.length > 1 ? [hue[0], hue[1]] : hue[0]
	});
	return formatCss(clampChroma(newColor, 'oklch'));
};

export function adjustMutedColor(
	color: string,
	backgroundColor: string,
	isDarkTheme: boolean,
	minContrast: number = 2.5,
	maxContrast: number = 3.5
): string {
	let newColor = oklch(color);
	const bgColor = oklch(backgroundColor);
	let iterations = 0;
	const MAX_ITERATIONS = 500;

	while (iterations < MAX_ITERATIONS) {
		const contrast = wcagContrast(newColor!, bgColor!);
		if (contrast < minContrast || contrast > maxContrast) {
			if (contrast > maxContrast) {
				newColor = isDarkTheme
					? (newColor = clampChroma(
							{ ...toOKLCH(newColor)!, l: toOKLCH(newColor)!.l - 0.0025 },
							'oklch'
						))
					: (newColor = clampChroma(
							{ ...toOKLCH(newColor)!, l: toOKLCH(newColor)!.l + 0.0025 },
							'oklch'
						));
				// newColor = { ...toOKLCH(newColor)!, c: toOKLCH(newColor)!.c - 0.001 };
			} else if (contrast < minContrast) {
				newColor = isDarkTheme
					? (newColor = clampChroma(
							{ ...toOKLCH(newColor)!, l: toOKLCH(newColor)!.l + 0.0025 },
							'oklch'
						))
					: (newColor = clampChroma(
							{ ...toOKLCH(newColor)!, l: toOKLCH(newColor)!.l - 0.0025 },
							'oklch'
						));
				// newColor = { ...toOKLCH(newColor)!, c: toOKLCH(newColor)!.c + 0.001 };
			}
		} else {
			break;
		}

		iterations++;
	}

	return formatCss(newColor!);
}

export function ensureReadability(
	foreground: string,
	background: string,
	minContrast = 5.5
): string {
	let color = oklch(foreground);
	const bgColor = oklch(background);
	let iterations = 0;
	const maxIterations = 500;
	let tempColor = oklch(foreground);
	while (wcagContrast(color!, bgColor!) < minContrast && iterations < maxIterations) {
		if (wcagLuminance(bgColor!) < 0.5) {
			tempColor = clampChroma({ ...toOKLCH(color)!, l: toOKLCH(color)!.l + 0.0025 }, 'oklch');
		} else {
			tempColor = clampChroma({ ...toOKLCH(color)!, l: toOKLCH(color)!.l - 0.0025 }, 'oklch');
		}
		color = tempColor;
		iterations++;
	}
	return formatCss(color!);
}
