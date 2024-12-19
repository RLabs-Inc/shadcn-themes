<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Dashboard from './tabs/Dashboard.svelte';
	import Cards from './tabs/Cards.svelte';
	import SocialMedia from './tabs/SocialMedia.svelte';
</script>

<section class="flex w-full flex-col justify-center gap-2 px-2 lg:justify-normal">
	<Tabs value="dashboard">
		<TabsList>
			<TabsTrigger value="dashboard">Dashboard</TabsTrigger>
			<TabsTrigger value="cards">Cards</TabsTrigger>
			<TabsTrigger value="social-media">Social Media</TabsTrigger>
		</TabsList>

		<ScrollArea
			class="h-[calc(100vh-31rem)] pt-2 sm:h-[calc(100vh-27.2rem)] md:h-[calc(100vh-24rem)] lg:h-[calc(100vh-17.5rem)]"
		>
			<TabsContent value="dashboard"><Dashboard /></TabsContent>
			<TabsContent value="cards"><Cards /></TabsContent>
			<TabsContent value="social-media"><SocialMedia /></TabsContent>
		</ScrollArea>
	</Tabs>
</section>
