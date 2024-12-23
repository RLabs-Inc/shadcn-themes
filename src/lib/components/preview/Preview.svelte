<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import Dashboard from './tabs/Dashboard.svelte';
	import Cards from './tabs/Cards.svelte';
	import SocialMedia from './tabs/SocialMedia.svelte';
</script>

<section class="">
	<Tabs value="dashboard">
		<TabsList>
			<TabsTrigger data-umami-event="Tab Dashboard" value="dashboard">Dashboard</TabsTrigger>
			<TabsTrigger data-umami-event="Tab Cards" value="cards">Cards</TabsTrigger>
			<TabsTrigger data-umami-event="Tab Social Media" value="social-media"
				>Social Media</TabsTrigger
			>
		</TabsList>

		<ScrollArea class="h-[calc(100vh-18.5rem)] pt-1">
			<TabsContent data-umami-event="Tab Dashboard" value="dashboard"><Dashboard /></TabsContent>
			<TabsContent data-umami-event="Tab Cards" value="cards"><Cards /></TabsContent>
			<TabsContent data-umami-event="Tab Social Media" value="social-media"
				><SocialMedia /></TabsContent
			>
		</ScrollArea>
	</Tabs>
</section>
