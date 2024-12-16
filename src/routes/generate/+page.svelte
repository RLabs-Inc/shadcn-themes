<script lang="ts">
	import Controls from '$lib/components/controls/Controls.svelte';
	import ThemeColors from '$lib/components/controls/ThemeColors.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import { Scroll } from 'lucide-svelte';
</script>

<section class="flex h-full flex-col gap-2">
	<div class="bg-background/40 sticky top-14 z-50 backdrop-blur-xl">
		<Controls />
	</div>

	<section class="flex w-full flex-col gap-5 px-5 pt-14 md:flex-row lg:justify-between">
		<div class="flex w-full gap-5">
			<div class="border-border max-w-75 border-r">
				<ScrollArea class="h-[calc(100vh-12rem)]">
					<ThemeColors />
				</ScrollArea>
			</div>
			<div class="w-full">
				<Preview />
			</div>
		</div>
	</section>
</section>
