<script lang="ts">
	import Controls from '$lib/components/controls/Controls.svelte';
	import Preview from '$lib/components/preview/Preview.svelte';
</script>

<section class="flex h-full flex-col items-center justify-center gap-2 px-5 py-20">
	<section class="flex flex-row items-center justify-between">
		<Controls />
		<Preview />
	</section>
</section>
