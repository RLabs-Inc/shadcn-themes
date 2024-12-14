<script lang="ts">
	type Props = {
		name: string;
		color: string;
		foreground?: string;
	};

	const { name, color, foreground }: Props = $props();
</script>

<div>
	{#if foreground}
		<div
			class="flex w-fit items-center justify-between rounded p-2"
			style="background-color: {color}; color: {foreground};"
		>
			<div class="flex flex-col gap-1">
				<span class="text-sm font-black capitalize"
					>{name.replace('--', '').replace('-', ' ').replace('', '')}</span
				>
				<span class="text-xs">Loren Ipsum Dolores</span>
				<div class="flex items-center gap-2">
					<div class="flex flex-col gap-2">
						<span class="text-xs font-bold">BG</span>
						<div
							class="h-10 w-17 cursor-pointer rounded shadow"
							style="background-color: {color}; border: 1px solid {foreground}"
						></div>
					</div>
					<div class="flex flex-col gap-2">
						<span class="text-xs font-bold">FG</span>
						<div
							class="h-10 w-17 cursor-pointer rounded shadow"
							style="background-color: {foreground}"
						></div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex w-fit flex-col gap-0">
			<span class="text-xs font-bold capitalize"
				>{name.replace('--', '').replace('-', ' ').replace('', '')}</span
			>
			<div class="h-10 w-25 cursor-pointer rounded" style="background-color: {color}"></div>
		</div>
	{/if}
</div>
