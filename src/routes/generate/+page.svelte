<script lang="ts">
	import Controls from '$lib/components/controls/Controls.svelte';
	import ThemeColors from '$lib/components/controls/ThemeColors.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
</script>

<section class="flex h-full flex-col gap-2 px-5 pt-18 pb-20">
	<Controls />
	<section class="flex w-full flex-col gap-5 md:flex-row lg:justify-between">
		<div class="flex w-full flex-col gap-5">
			<ThemeColors />
			<Preview />
		</div>
	</section>
</section>
