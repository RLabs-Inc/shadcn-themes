<script lang="ts">
	import {
		Heart,
		MessageCircle,
		Share2,
		Bookmark,
		MoreHorizontal,
		Image,
		Smile,
		Send,
		Camera,
		Plus,
		Scroll
	} from 'lucide-svelte';

	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';
	import { Input } from '$lib/components/ui/input';
	import { ScrollArea } from '$lib/components/ui/scroll-area';
	import { Separator } from '$lib/components/ui/separator';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import { Badge } from '$lib/components/ui/badge';
	import { Textarea } from '$lib/components/ui/textarea';

	const stories = [
		{
			id: 1,
			user: 'Sarah Wilson',
			avatar: 'https://i.pravatar.cc/150?u=sarah',
			hasUnread: true
		},
		{
			id: 2,
			user: 'James Lee',
			avatar: 'https://i.pravatar.cc/150?u=james',
			hasUnread: true
		},
		{
			id: 3,
			user: 'Emma Davis',
			avatar: 'https://i.pravatar.cc/150?u=emma',
			hasUnread: false
		},
		{
			id: 4,
			user: 'Michael Chen',
			avatar: 'https://i.pravatar.cc/150?u=michael',
			hasUnread: true
		},
		{
			id: 5,
			user: 'Lisa Taylor',
			avatar: 'https://i.pravatar.cc/150?u=lisa',
			hasUnread: false
		}
	];

	const posts = [
		{
			id: 1,
			user: 'Alex Morgan',
			avatar: 'https://i.pravatar.cc/150?u=alex',
			time: '2 hours ago',
			content:
				"Just finished working on an amazing new project! 🚀 Can't wait to share more details with everyone. #coding #development #excitement",
			image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
			likes: 234,
			comments: 56,
			shares: 12,
			isLiked: true,
			isBookmarked: false,
			tags: ['coding', 'development']
		},
		{
			id: 2,
			user: 'Emily Parker',
			avatar: 'https://i.pravatar.cc/150?u=emily',
			time: '5 hours ago',
			content:
				'Beautiful sunset at the beach today! 🌅 Sometimes you need to take a break and appreciate the simple things in life.',
			image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
			likes: 543,
			comments: 89,
			shares: 32,
			isLiked: false,
			isBookmarked: true,
			tags: ['nature', 'sunset']
		},
		{
			id: 3,
			user: 'David Kim',
			avatar: 'https://i.pravatar.cc/150?u=david',
			time: '1 day ago',
			content:
				'Just launched my new portfolio website! Check it out and let me know what you think. Always open to feedback and suggestions! 💻✨',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
			likes: 432,
			comments: 67,
			shares: 23,
			isLiked: false,
			isBookmarked: false,
			tags: ['portfolio', 'design']
		}
	];

	let newPost = $state('');
</script>

<div class="flex h-full flex-col gap-4 lg:flex-row">
	<div class="mx-auto w-full max-w-3xl flex-1 space-y-4 sm:px-4">
		<Card>
			<CardContent class="pt-4">
				<div class="flex gap-4">
					<Avatar class="h-10 w-10">
						<AvatarImage src="https://i.pravatar.cc/150?u=user" />
						<AvatarFallback>ME</AvatarFallback>
					</Avatar>
					<div class="flex-1 space-y-4">
						<Textarea placeholder="What's on your mind?" bind:value={newPost} class="resize-none" />
						<div class="flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
							<div class="flex gap-2">
								<Button variant="outline" size="icon">
									<Image class="h-4 w-4" />
								</Button>
								<Button variant="outline" size="icon">
									<Smile class="h-4 w-4" />
								</Button>
								<Button variant="outline" size="icon">
									<Camera class="h-4 w-4" />
								</Button>
							</div>
							<Button class="w-full sm:w-auto">
								<Send class="mr-2 h-4 w-4" />
								Post
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>

		<ScrollArea orientation="horizontal" type="scroll" class="w-[calc(100vw-0.7rem)]">
			<div class="no-scrollbar flex gap-4 py-2">
				<div class="flex h-full flex-col items-center gap-2">
					<Button variant="outline" class="aspect-square h-14 w-14 rounded-full" size="icon">
						<Plus class="h-6 w-6" />
					</Button>
					<span class="text-xs">Add Story</span>
				</div>

				{#each stories as story}
					<div class="flex flex-col items-center gap-2">
						<Button
							variant="outline"
							size="icon"
							class={`ring-primary aspect-square h-14 w-14 rounded-full ring-2`}
						>
							<Avatar class="h-12 w-12">
								<AvatarImage src={story.avatar} alt={story.user} class="object-cover" />
								<AvatarFallback>{story.user[0]}</AvatarFallback>
							</Avatar>
						</Button>
						<span class="text-xs whitespace-nowrap">{story.user.split(' ')[0]}</span>
					</div>
				{/each}
			</div>
		</ScrollArea>

		<ScrollArea type="scroll" class="h-[calc(100vh-280px)] sm:h-[calc(100vh-300px)]">
			<div class="flex flex-col gap-6">
				{#each posts as post}
					<Card>
						<CardHeader class="pb-4">
							<div class="flex items-start justify-between">
								<div class="flex items-center space-x-4">
									<Avatar>
										<AvatarImage src={post.avatar} />
										<AvatarFallback>{post.user[0]}</AvatarFallback>
									</Avatar>
									<div>
										<CardTitle class="text-base">{post.user}</CardTitle>
										<CardDescription>{post.time}</CardDescription>
									</div>
								</div>
								<DropdownMenu>
									<DropdownMenuTrigger>
										<Button variant="ghost" size="icon">
											<MoreHorizontal class="h-4 w-4" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuItem>Save Post</DropdownMenuItem>
										<DropdownMenuItem>Hide Post</DropdownMenuItem>
										<DropdownMenuItem>Report</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</CardHeader>
						<CardContent class="pb-4">
							<p class="mb-4 break-words">{post.content}</p>
							<div class="mb-4 flex flex-wrap gap-2">
								{#each post.tags as tag}
									<Badge variant="secondary">
										#{tag}
									</Badge>
								{/each}
							</div>
							{#if post.image}
								<div class="relative aspect-video overflow-hidden rounded-lg">
									<img
										src={post.image}
										alt="Post"
										class="absolute inset-0 h-full w-full object-cover"
									/>
								</div>
							{/if}
						</CardContent>
						<CardFooter class="flex flex-col pt-0">
							<div class="flex w-full items-center justify-between">
								<div class="flex gap-1">
									<Button variant="ghost" size="sm" class="gap-2">
										<Heart class={`h-4 w-4 ${post.isLiked ? 'fill-red-500 text-red-500' : ''}`} />
										{post.likes}
									</Button>
									<Button variant="ghost" size="sm" class="gap-2">
										<MessageCircle class="h-4 w-4" />
										{post.comments}
									</Button>
									<Button variant="ghost" size="sm" class="gap-2">
										<Share2 class="h-4 w-4" />
										{post.shares}
									</Button>
								</div>
								<Button variant="ghost" size="icon" class={post.isBookmarked ? 'text-primary' : ''}>
									<Bookmark class={`h-4 w-4 ${post.isBookmarked ? 'fill-current' : ''}`} />
								</Button>
							</div>
							<Separator class="my-4" />
							<div class="flex w-full gap-2">
								<Avatar class="h-8 w-8 shrink-0">
									<AvatarImage src="https://i.pravatar.cc/150?u=user" />
									<AvatarFallback>ME</AvatarFallback>
								</Avatar>
								<div class="flex flex-1 gap-2">
									<Input placeholder="Write a comment..." />
									<Button size="icon" variant="ghost">
										<Smile class="h-4 w-4" />
									</Button>
								</div>
							</div>
						</CardFooter>
					</Card>
				{/each}
			</div>
		</ScrollArea>
	</div>

	<div class="hidden w-80 shrink-0 space-y-4 2xl:block">
		<Card>
			<CardHeader>
				<CardTitle>Trending Topics</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				{#each ['#TechNews', '#WebDev', '#Innovation', '#DigitalArt'] as topic, index}
					<div class="flex items-center justify-between">
						<div>
							<p class="font-medium">{topic}</p>
							<p class="text-muted-foreground text-sm">{Math.floor(Math.random() * 10000)} posts</p>
						</div>
						<Badge variant="secondary">#{index + 1}</Badge>
					</div>
				{/each}
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Suggested Follows</CardTitle>
			</CardHeader>
			<CardContent class="space-y-4">
				{#each [{ name: 'Jane Cooper', handle: '@janecooper', avatar: 'https://i.pravatar.cc/150?u=jane' }, { name: 'Robert Fox', handle: '@robfox', avatar: 'https://i.pravatar.cc/150?u=robert' }, { name: 'Wade Warren', handle: '@wadewarren', avatar: 'https://i.pravatar.cc/150?u=wade' }] as user}
					<div class="flex items-center justify-between">
						<div class="flex items-center space-x-4">
							<Avatar>
								<AvatarImage src={user.avatar} />
								<AvatarFallback>{user.name[0]}</AvatarFallback>
							</Avatar>
							<div>
								<p class="text-sm leading-none font-medium">{user.name}</p>
								<p class="text-muted-foreground text-sm">{user.handle}</p>
							</div>
						</div>
						<Button variant="outline" size="sm">Follow</Button>
					</div>
				{/each}
			</CardContent>
		</Card>
	</div>
</div>
