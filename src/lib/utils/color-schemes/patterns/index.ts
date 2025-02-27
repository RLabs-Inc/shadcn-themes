/**
 * Sacred Geometry Color Patterns
 * Export all pattern functions and utilities
 */

// Import all pattern functions
import * as patterns from './newPatterns';
import * as patterns1 from './newPatterns1';
import * as patterns2 from './newPatterns2';
import * as patterns3 from './newPatterns3';
import * as patterns4 from './newPatterns4';
import * as patterns5 from './newPatterns5';
import * as patterns6 from './newPatterns6';
import * as patterns7 from './newPatterns7';
import * as patterns8 from './newPatterns8';
import * as patterns9 from './newPatterns9';
import * as patterns10 from './newPatterns10';
import * as patterns11 from './newPatterns11';
import * as patterns12 from './newPatterns12';
import * as patterns13 from './newPatterns13';

export const schemeFunctions = {
	...patterns,
	...patterns1,
	...patterns2,
	...patterns3,
	...patterns4,
	...patterns5,
	...patterns6,
	...patterns7,
	...patterns8,
	...patterns9,
	...patterns10,
	...patterns11,
	...patterns12,
	...patterns13
};

export { ColorSchemes, type ColorScheme } from '$lib/types/sacred-geometry-schemes';

export { generateSchemeHues } from '$lib/utils/color-schemes';

// Type for pattern functions
type SchemeFunction = (baseHue: number) => number[];

// Export pattern function getter
export function getPatternFunction(name: string): SchemeFunction | undefined {
	const functionName = `get${name}` as keyof typeof schemeFunctions;
	return schemeFunctions[functionName] as SchemeFunction | undefined;
}
