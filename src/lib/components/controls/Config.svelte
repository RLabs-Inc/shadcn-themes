<script lang="ts">
	import { Download } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Popover,
		PopoverTrigger,
		PopoverContent,
		PopoverClose
	} from '$lib/components/ui/popover';
	import { toast } from 'svelte-sonner';

	import { getThemeState } from '$lib/state/theme.svelte';
	import { Lit } from 'litlyx-js';

	let isOpen = $state(false);

	const themeState = getThemeState();

	const cssConfig = $derived.by(() => {
		let config = JSON.stringify(themeState().theme, null, 2);
		config = config
			.replace('"root":', ':root ')
			.replace('"dark":', '.dark ')
			.replaceAll('"', '')
			.replaceAll(',', ';')
			.replaceAll('rem', 'rem;')
			.slice(1, -2);
		return config;
	});

	const handlePopover = (open: boolean) => {
		isOpen = open;
		if (open) {
			navigator.clipboard.writeText(cssConfig);
			toast.success('Copied to clipboard');
			Lit.event('Copied config');
		}
	};
</script>

<Popover open={isOpen} onOpenChange={handlePopover}>
	<PopoverTrigger>
		<Button variant="outline" size="icon" class="gap-2" data-umami-event="Download config"
			><Download class="h-4 w-4" /></Button
		>
	</PopoverTrigger>
	<PopoverContent class="w-120">
		<div class="flex flex-col gap-4 p-2">
			<h4 class="leading-none font-medium">Theme Config</h4>

			<textarea class="w-full" rows="10" readonly value={cssConfig}></textarea>
			<PopoverClose class="w-full">Close</PopoverClose>
		</div>
	</PopoverContent>
</Popover>
