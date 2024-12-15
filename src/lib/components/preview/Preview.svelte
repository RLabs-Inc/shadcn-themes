<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import Dashboard from './tabs/Dashboard.svelte';
	import Cards from './tabs/Cards.svelte';
	import SocialMedia from './tabs/SocialMedia.svelte';
</script>

<section class="flex flex-col gap-2 pt-5 pb-15">
	<Tabs>
		<TabsList>
			<TabsTrigger value="dashboard">Dashboard</TabsTrigger>
			<TabsTrigger value="cards">Cards</TabsTrigger>
			<TabsTrigger value="social-media">Social Media</TabsTrigger>
		</TabsList>
		<TabsContent value="dashboard"><Dashboard /></TabsContent>
		<TabsContent value="cards"><Cards /></TabsContent>
		<TabsContent value="social-media"><SocialMedia /></TabsContent>
	</Tabs>
</section>
