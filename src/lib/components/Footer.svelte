<script lang="ts">
	import { Button } from '$lib/components/ui/button';
</script>

<footer
	class="bg-background-st/40 text-foreground-st fixed right-0 bottom-0 left-0 z-50 flex flex-col items-center justify-center backdrop-blur-lg"
>
	<div class="-mt-[0.65rem] flex w-full items-center justify-center gap-1">
		<div class="border-border-st w-full border-t"></div>
		<img src="/images/RLabs-Lamp.png" alt="RLabs" class="w-4" />
		<div class="border-border-st w-full border-t"></div>
	</div>
	<div class="-mt-[0.5rem] flex w-full items-center justify-between gap-1 px-7 py-0 md:justify-end">
		<!-- <div class="h-4 w-4"></div> -->

		<Button href="https://github.com/RLabs-Inc/rlabs" target="_blank" variant="link" size="icon">
			<img src="/images/github-mark.svg" alt="GitHub" class="h-5 w-5 dark:invert" />
			<span class="sr-only">GitHub</span>
		</Button>
		<span class="text-sm">
			&copy;
			{new Date().getFullYear()} - RLabs Inc.
		</span>
	</div>
</footer>

<style></style>
