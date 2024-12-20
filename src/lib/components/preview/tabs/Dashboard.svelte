<script lang="ts">
	import { Download, DollarSign, Users, Activity, Clock, ShoppingCart } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Badge } from '$lib/components/ui/badge';
	import { Progress } from '$lib/components/ui/progress';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { DateRange } from '$lib/components/ui/date-range';
	import Bar from '$lib/components/ui/charts/bar.svelte';

	import { data, recentOrders, projects } from '$lib/constants/dashboard';
</script>

<section class="">
	<div class="flex flex-1 flex-col gap-4">
		<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
			<h2 class="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h2>
			<div class="flex flex-wrap items-center gap-2">
				<div class="w-full sm:w-auto">
					<DateRange />
				</div>
				<Button class="w-full sm:w-auto">
					<Download class="mr-2 h-4 w-4" />
					Download Report
				</Button>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Total Revenue</CardTitle>

					<DollarSign class="text-muted-foreground h-4 w-4" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">$45,231.89</div>
					<p class="text-muted-foreground text-xs">+20.1% from last month</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Active Users</CardTitle>
					<Users class="text-muted-foreground h-4 w-4" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-muted-foreground text-xs">+180.1% from last month</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Sales</CardTitle>
					<ShoppingCart class="text-muted-foreground h-4 w-4" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-muted-foreground text-xs">+19% from last month</p>
				</CardContent>
			</Card>
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Active Now</CardTitle>
					<Activity class="text-muted-foreground h-4 w-4" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">+573</div>
					<p class="text-muted-foreground text-xs">+201 since last hour</p>
				</CardContent>
			</Card>
		</div>

		<div class="grid grid-cols-1 gap-4 lg:grid-cols-7">
			<Card class="col-span-full lg:col-span-4">
				<CardHeader>
					<CardTitle>Overview</CardTitle>
				</CardHeader>
				<CardContent class="pl-2">
					<div class="h-[350px] w-full">
						<Bar />
					</div>
				</CardContent>
			</Card>

			<Card class="col-span-full lg:col-span-3">
				<CardHeader>
					<CardTitle>Recent Orders</CardTitle>
					<CardDescription>You made 265 sales this month.</CardDescription>
				</CardHeader>
				<CardContent>
					<div class="space-y-6">
						{#each recentOrders as order}
							<div class="flex items-center">
								<Avatar class="h-9 w-9 shrink-0">
									<AvatarImage src={order.avatar} alt={order.customer} />
									<AvatarFallback>{order.customer[0]}</AvatarFallback>
								</Avatar>
								<div class="ml-4 min-w-0 flex-1 space-y-1">
									<p class="truncate text-sm leading-none font-medium">{order.customer}</p>
									<div class="text-muted-foreground flex items-center text-sm">
										<span class="truncate">{order.product}</span>
										<span class="mx-1">•</span>
										<span class="shrink-0">{order.date}</span>
									</div>
								</div>
								<div class="ml-auto shrink-0 font-medium">{order.amount}</div>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>

		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project}
				<Card>
					<CardHeader>
						<div class="flex items-center justify-between gap-2">
							<CardTitle class="truncate text-sm font-medium">{project.name}</CardTitle>
							<Badge
								variant={project.status === 'Review' ? 'secondary' : 'default'}
								class="shrink-0"
							>
								{project.status}
							</Badge>
						</div>
					</CardHeader>
					<CardContent>
						<div class="flex items-center space-x-4">
							<Progress value={project.progress} class="h-2 flex-1" />
							<div class="text-muted-foreground shrink-0 text-sm">{project.progress}%</div>
						</div>
						<div class="mt-4 flex -space-x-2">
							{#each project.team as user}
								<Avatar class="border-background border-2">
									<AvatarFallback class="">{user}</AvatarFallback>
								</Avatar>
							{/each}
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	</div>
</section>
