<script lang="ts">
	import { Slider as SliderPrimitive, type WithoutChildrenOrChild } from 'bits-ui';
	import { cn } from '$lib/utils';
	import clsx from 'clsx';

	let {
		ref = $bindable(null),
		value = $bindable([0]),
		class: className,
		bgColor = $bindable('#000'),
		alpha = $bindable(false),
		bgThumb = $bindable('#000'),
		...restProps
	}: WithoutChildrenOrChild<
		SliderPrimitive.RootProps & { bgColor?: string; alpha?: boolean; bgThumb?: string }
	> = $props();
</script>

<SliderPrimitive.Root
	bind:ref
	bind:value
	class={cn('relative flex w-full touch-none items-center select-none', className)}
	{...restProps}
>
	{#snippet children({ thumbs })}
		{#if alpha}
			<span class="checkerboard absolute inset-0 overflow-hidden rounded-full"></span>
			<div
				class=" absolute inset-0 overflow-hidden
  rounded"
				style="background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
					linear-gradient(135deg, #ccc 25%, transparent 25%),
					linear-gradient(45deg, transparent 75%, #ccc 75%),
					linear-gradient(135deg, transparent 75%, #ccc 75%);
				background-size: 5px 5px;
				background-position:
					0 0,
					2.5px 0,
					2.5px -2.5px,
					0px 2.5px;"
			></div>
		{/if}
		<style>
			checkerboard {
				background-image: linear-gradient(45deg, #ccc 25%, transparent 25%),
					linear-gradient(135deg, #ccc 25%, transparent 25%),
					linear-gradient(45deg, transparent 75%, #ccc 75%),
					linear-gradient(135deg, transparent 75%, #ccc 75%);
				background-size: 25px 25px; /* Must be a square */
				background-position:
					0 0,
					12.5px 0,
					12.5px -12.5px,
					0px 12.5px; /* Must be half of one side of the square */
			}
		</style>
		<span
			class="border-border dark:border-primary-foreground relative h-5 w-full grow overflow-hidden rounded border"
			style:background={bgColor}
		>
			<SliderPrimitive.Range class={clsx('absolute h-full', bgColor ? 'bg-transparent' : '')} />
		</span>

		{#each thumbs as thumb}
			<SliderPrimitive.Thumb
				index={thumb}
				class={cn(
					'before:border-primary-foreground focus-visible:before:border-primary-foreground before:absolute before:top-[0.125rem] before:-left-[0.525rem] before:h-0 before:w-0 before:rounded-md before:border-r-[0.55rem] before:border-b-[0.6rem] before:border-l-[0.55rem] before:border-r-transparent  before:border-l-transparent focus-visible:outline-hidden  focus-visible:before:border-r-transparent focus-visible:before:border-l-transparent focus-visible:before:outline-hidden disabled:before:pointer-events-none disabled:before:opacity-50',
					'test focus-visible:border-offset-2 focus-visible:border-offset-2 border-primary ring-offset-background top-[0.75rem] block h-0 w-0 rounded-lg border-r-[0.7rem] border-b-[0.8rem] border-l-[0.7rem] border-r-transparent border-l-transparent transition-colors focus-visible:border-b-[0.8rem] disabled:pointer-events-none disabled:opacity-50',
					'after:border-primary after:absolute after:top-[0.25rem] after:-left-[0.5rem] after:h-0 after:w-0 after:rounded-md after:border-r-[0.5rem] after:border-b-[0.5rem] after:border-l-[0.5rem] after:border-r-transparent after:border-l-transparent',
					'thumb'
				)}
			/>
		{/each}
	{/snippet}
</SliderPrimitive.Root>
