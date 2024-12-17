<script lang="ts">
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import ColorPicker from '$lib/components/controls/ColorPicker.svelte';
	import Controls from '$lib/components/controls/Controls.svelte';
	import ThemeColors from '$lib/components/controls/ThemeColors.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';

	import { getThemeState } from '$lib/state/theme.svelte';
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		const themeState = getThemeState();
		themeState().reset();
	});
</script>

<section class="flex h-full flex-col gap-2">
	<div class="bg-background/40 sticky top-14 z-50 backdrop-blur-xl">
		<Controls />
	</div>
	<div class="border-border w-full border-b pt-15 lg:hidden">
		<ScrollArea orientation="horizontal" class="w-[calc(100vw)]">
			<ThemeColors />
		</ScrollArea>
	</div>

	<section class="flex flex-1 gap-2 lg:px-5 lg:pt-15">
		<div class="flex w-full gap-5">
			<div class="border-border hidden max-w-75 border-r lg:block">
				<ScrollArea orientation="vertical" class="h-[calc(100vh-12rem)]">
					<ThemeColors />
					<!-- <ColorPicker /> -->
				</ScrollArea>
			</div>
			<div class="w-full">
				<Preview />
			</div>
		</div>
	</section>
</section>
