<script lang="ts">
	import ScrollAreaSt from '$lib/components/ui/scroll-area-st/scroll-area.svelte';
	import Controls from '$lib/components/controls/Controls.svelte';
	import ThemeColors from '$lib/components/controls/ThemeColors.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
</script>

<section class="sacred-background-small flex h-[calc(100vh)] flex-col gap-2">
	<div class=" sticky top-[57px] z-50 backdrop-blur-xl">
		<Controls />
		<div class="border-border-st w-full border-b backdrop-blur-md lg:hidden">
			<ScrollAreaSt orientation="horizontal" class="w-[calc(100vw)]">
				<ThemeColors />
			</ScrollAreaSt>
		</div>
	</div>

	<section class="flex flex-1 gap-2 lg:px-0 lg:pt-12">
		<div class="flex w-full">
			<div
				class="border-border-st hidden max-w-75 min-w-65 border-r backdrop-blur-md lg:block lg:pl-2"
			>
				<ScrollAreaSt orientation="vertical" class="h-[calc(100vh-11rem)]">
					<ThemeColors />
				</ScrollAreaSt>
			</div>
			<div class="w-full p-5 pt-18 md:pt-15 lg:pt-5">
				<div class="bg-background w-full rounded-md pt-5 md:px-5 lg:h-[calc(100vh-13.5rem)]">
					<Preview />
				</div>
			</div>
		</div>
	</section>
</section>
