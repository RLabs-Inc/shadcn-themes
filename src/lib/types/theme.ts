export type Theme = {
	root: CSSVariables;
	dark: CSSVariables;
};

export type CSSVariables = {
	'--background': string;
	'--foreground': string;
	'--muted': string;
	'--muted-foreground': string;
	'--popover': string;
	'--popover-foreground': string;
	'--card': string;
	'--card-foreground': string;
	'--primary': string;
	'--primary-foreground': string;
	'--secondary': string;
	'--secondary-foreground': string;
	'--accent': string;
	'--accent-foreground': string;
	'--destructive': string;
	'--destructive-foreground': string;
	'--border': string;
	'--input': string;
	'--ring': string;
	'--chart-1': string;
	'--chart-2': string;
	'--chart-3': string;
	'--chart-4': string;
	'--chart-5': string;
	'--sidebar-background': string;
	'--sidebar-foreground': string;
	'--sidebar-primary': string;
	'--sidebar-primary-foreground': string;
	'--sidebar-accent': string;
	'--sidebar-accent-foreground': string;
	'--sidebar-border': string;
	'--sidebar-ring': string;

	'--radius': string;
};

export type DoubleVariables = {
	'--background': string;
	'--foreground': string;
	'--muted': string;
	'--muted-foreground': string;
	'--popover': string;
	'--popover-foreground': string;
	'--card': string;
	'--card-foreground': string;
	'--primary': string;
	'--primary-foreground': string;
	'--secondary': string;
	'--secondary-foreground': string;
	'--accent': string;
	'--accent-foreground': string;
	'--destructive': string;
	'--destructive-foreground': string;
};
export type SingleVariables = {
	'--border': string;
	'--input': string;
	'--ring': string;

	'--radius': string;
};

export type ChartVariables = {
	'--chart-1': string;
	'--chart-2': string;
	'--chart-3': string;
	'--chart-4': string;
	'--chart-5': string;
};

export type SidebarDoubleVariables = {
	'--sidebar-background': string;
	'--sidebar-foreground': string;
	'--sidebar-primary': string;
	'--sidebar-primary-foreground': string;
	'--sidebar-accent': string;
	'--sidebar-accent-foreground': string;
};

export type SidebarSingleVariables = {
	'--sidebar-border': string;
	'--sidebar-ring': string;
};

export type ThemeHues = {
	bgHue: number;
	fgHue: number;
	cardHue: number;
	popoverHue: number;
	primaryHue: number;
	secondaryHue: number;
	accentHue: number;
	borderHue: number;
	inputHue: number;
	ringHue: number;
	destructiveHue: number;
	// infoHue: number;
	// warningHue: number;
	// successHue: number;

	chartHues: number[];
};

export type SelectedColor = {
	name: string;
	color: string;
	mode: 'light' | 'dark';
};
