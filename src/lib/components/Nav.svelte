<script lang="ts">
	import { page } from '$app/stores';
	import { Menu } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import ModeButton from './ModeButton.svelte';
	import clsx from 'clsx';

	let open = $state(false);
</script>

<nav class="bg-background-st text-foreground-st flex items-center justify-between px-7">
	<div class="hidden w-full items-center justify-between gap-3 md:flex">
		<div class="flex items-center gap-2">
			<Button
				href="/"
				variant="link"
				size="icon"
				class="text-foreground-st ring-ring-st border-border-st focus-visible:ring-0 focus-visible:ring-offset-0"
			>
				<img src="/images/RLabs-Lamp.png" alt="RLabs Inc." class="w-5" />
			</Button>
			<Button href="https://www.rlabs.art" variant="link" class="text-foreground-st"
				>RLabs Inc.</Button
			>
		</div>

		<div class="flex items-center gap-2">
			<Button
				class={clsx($page.url.pathname === '/generate' ? 'underline' : '', 'text-foreground-st')}
				href="/generate"
				variant="link">Create a theme</Button
			>
			<Button
				class={clsx($page.url.pathname === '/about' ? 'underline' : '', 'text-foreground-st')}
				href="/about"
				variant="link">About</Button
			>
		</div>
	</div>
	<Sheet bind:open>
		<SheetTrigger>
			<Button
				variant="ghost"
				class="ring-ring-st border-border-st hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
			>
				<Menu class="h-6 w-6" />
				<span class="sr-only">Toggle Menu</span>
			</Button>
		</SheetTrigger>
		<SheetContent side="left" class="bg-background-st text-foreground-st">
			<Button
				href="/"
				variant="link"
				size="icon"
				class="text-foreground-st ring-ring-st border-border-st focus-visible:ring-0 focus-visible:ring-offset-0"
				onclick={() => (open = false)}
			>
				<img src="/images/RLabs-Lamp.png" alt="RLabs Inc." class="w-5" />
			</Button>

			<div class="">
				<div class="mt-2 flex flex-col items-start justify-start gap-2">
					<Button href="https://www.rlabs.art" variant="link" onclick={() => (open = false)}
						>RLabs Inc.</Button
					>
					<Button
						class={clsx(
							$page.url.pathname === '/generate' ? 'underline' : '',
							'text-foreground-st'
						)}
						href="/generate"
						variant="link"
						onclick={() => (open = false)}>Create a theme</Button
					>
					<Button
						class={clsx($page.url.pathname === '/about' ? 'underline' : '', 'text-foreground-st')}
						href="/about"
						variant="link"
						onclick={() => (open = false)}>About</Button
					>
				</div>
			</div>
		</SheetContent>
	</Sheet>
	<div class={clsx($page.url.pathname === '/generate' ? 'hidden' : '', 'text-foreground-st ml-2')}>
		<ModeButton />
	</div>
</nav>

<style scoped></style>
