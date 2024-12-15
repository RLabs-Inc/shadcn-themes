<script lang="ts">
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import Dashboard from './tabs/Dashboard.svelte';
	import Cards from './tabs/Cards.svelte';
</script>

<section class="flex flex-col gap-2">
	<Tabs>
		<TabsList>
			<TabsTrigger value="dashboard">Dashboard</TabsTrigger>
			<TabsTrigger value="cards">Cards</TabsTrigger>
			<TabsTrigger value="tab3">Tab 3</TabsTrigger>
		</TabsList>
		<TabsContent value="dashboard"><Dashboard /></TabsContent>
		<TabsContent value="cards"><Cards /></TabsContent>
		<TabsContent value="tab3">Tab 3 Content</TabsContent>
	</Tabs>
</section>
