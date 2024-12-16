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
			class="flex min-w-60 items-center justify-between rounded p-2 inset-shadow-sm lg:min-w-[220px]"
			style="background-color: {color}; color: {foreground}; border: 1px solid {foreground}"
		>
			<div class="flex flex-row items-center gap-5">
				<div class="flex flex-col gap-2">
					<span class="text-xs font-black capitalize"
						>{name.replace('--', '').replace('-', ' ').replace('', '').replace('sidebar', '')}</span
					>
					<span class="text-xs">Loren Ipsum</span>
				</div>
				<div class="flex items-center gap-2">
					<div class="flex flex-col gap-0">
						<span class="text-xs font-bold">BG</span>
						<div
							class="h-10 w-15 cursor-pointer rounded inset-shadow-sm lg:h-8 lg:w-12"
							style="background-color: {color}; border: 1px solid {foreground}"
						></div>
					</div>
					<div class="flex flex-col gap-0">
						<span class="text-xs font-bold">FG</span>
						<div
							class="h-10 w-15 cursor-pointer rounded shadow-sm lg:h-8 lg:w-12"
							style="background-color: {foreground}"
						></div>
					</div>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex w-fit flex-col gap-0">
			<span class="text-xs font-bold text-wrap capitalize"
				>{name.replace('--', '').replace('-', ' ').replace('', '').replace('sidebar', '')}</span
			>
			<div
				class="h-10 w-15 cursor-pointer rounded shadow-sm lg:h-8 lg:w-12"
				style="background-color: {color}"
			></div>
		</div>
	{/if}
</div>
