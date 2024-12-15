<script lang="ts">
	import Controls from '$lib/components/controls/Controls.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
</script>

<section class="flex h-full flex-col gap-2 px-5 py-20">
	<section class="flex w-full flex-col gap-5 lg:flex-row lg:justify-between">
		<Controls />

		<div class="flex-1">
			<Preview />
		</div>
	</section>
</section>
