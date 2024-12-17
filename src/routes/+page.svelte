<script lang="ts">
	import ModeButton from '$lib/components/ModeButton.svelte';
</script>

<svelte:head>
	<title>Shadcn UI Theme Generator</title>
	<meta
		name="description"
		content="A svelte 5 app that uses an innovative algorithm that combines sacred geometry patterns and and modern mathematics with traditional color theory to create unique themes for your next shadcn ui project. Export your generated theme or simply copy and paste it into your shadcn ui config file. Either your stack is reactjs with nextjs or svelte 5 with svelte-kit, the configuration file is framework agnostic. Copy or export your theme configuration using tailwind v3 and/or the new css only tailwind v4 format. All colors are generated and exported in the OKLCH colorspace. The algorithm is open source and can be found on github."
	/>
</svelte:head>

<section class="sacred-background flex h-full flex-col items-center gap-2 px-5 pt-30">
	<h1 class="text-3xl font-black">Shadcn UI Theme Generator</h1>
	<div
		class="border-border flex w-full flex-col gap-2 rounded-md p-5 text-justify backdrop-blur-xs sm:px-4 lg:w-1/2"
	>
		<p class="">
			Use an innovative algorithm that combines sacred geometry patterns and modern mathematics with
			traditional color theory to create unique themes for your next shadcn ui project. <span
				class="font-bold">All colors are generated using the OKLCH colorspace</span
			>.
		</p>
		<p class="">
			Copy or export your theme configuration using tailwind v3 and/or, the new css only, tailwind
			v4 format. Either your stack is reactjs with nextjs or svelte 5 with svelte-kit, the
			configuration file is
			<span class="font-bold">framework agnostic</span>.
		</p>
	</div>
	<a
		class="border-primary bg-accent text-accent-foreground w-fit self-center rounded-md border p-2 font-bold underline shadow-md transition-all hover:scale-110 hover:shadow-xl"
		href="/generate">Generate your theme now!</a
	>
</section>
