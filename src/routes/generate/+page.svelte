<script lang="ts">
	import ScrollAreaSt from '$lib/components/ui/scroll-area-st/scroll-area.svelte';
	import Controls from '$lib/components/controls/Controls.svelte';
	import ThemeColors from '$lib/components/controls/ThemeColors.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
	import PreviewMobile from '$lib/components/preview/PreviewMobile.svelte';
</script>

<section class="sacred-background-small flex flex-col gap-2 lg:h-[calc(100vh)]">
	<div class="pt-14 backdrop-blur-xl lg:sticky lg:top-14 lg:z-50 lg:pt-0">
		<Controls />
		<div class="border-border-st w-full border-b backdrop-blur-md lg:hidden">
			<ScrollAreaSt orientation="horizontal" class="w-[calc(100vw)]">
				<ThemeColors />
			</ScrollAreaSt>
		</div>
	</div>

	<section class="bg-background flex w-full flex-1 gap-2 rounded-md p-2 pb-15 lg:hidden">
		<PreviewMobile />
	</section>
	<section class="hidden flex-1 gap-2 pt-12 lg:flex">
		<div class="border-border-st max-w-75 min-w-65 border-r pl-2 backdrop-blur-md">
			<ScrollAreaSt orientation="vertical" class="h-[calc(100vh-11rem)]">
				<ThemeColors />
			</ScrollAreaSt>
		</div>
		<div class="w-full p-5">
			<div class="bg-background w-full rounded-md p-5">
				<Preview />
			</div>
		</div>
	</section>
</section>
