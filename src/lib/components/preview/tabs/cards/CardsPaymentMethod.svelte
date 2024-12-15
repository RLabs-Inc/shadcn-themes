<script lang="ts">
	import {
		Card,
		CardHeader,
		CardTitle,
		CardDescription,
		CardContent,
		CardFooter
	} from '$lib/components/ui/card/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group/index.js';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger
	} from '$lib/components/ui/select/index.js';
	import { Apple, PayPal } from '$lib/components/icons/index.js';

	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<Card>
	<CardHeader>
		<CardTitle>Payment Method</CardTitle>
		<CardDescription>Add a new payment method to your account.</CardDescription>
	</CardHeader>
	<CardContent class="grid gap-6">
		<RadioGroup value="card" class="grid grid-cols-3 gap-4">
			<Label
				for="card"
				class="border-muted bg-popover hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
			>
				<RadioGroupItem value="card" id="card" class="sr-only" aria-label="Card" />
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					class="mb-3 h-6 w-6"
				>
					<rect width="20" height="14" x="2" y="5" rx="2" />
					<path d="M2 10h20" />
				</svg>
				Card
			</Label>
			<Label
				for="paypal"
				class="border-muted bg-popover hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
			>
				<RadioGroupItem value="paypal" id="paypal" class="sr-only" aria-label="Paypal" />
				<PayPal class="mb-3 h-6 w-6" />
				Paypal
			</Label>
			<Label
				for="apple"
				class="border-muted bg-popover hover:bg-accent hover:text-accent-foreground [&:has([data-state=checked])]:border-primary flex flex-col items-center justify-between rounded-md border-2 p-4"
			>
				<RadioGroupItem value="apple" id="apple" class="sr-only" aria-label="Apple" />
				<Apple class="mb-3 h-6 w-6" />
				Apple
			</Label>
		</RadioGroup>
		<div class="grid gap-2">
			<Label for="name">Name</Label>
			<Input id="name" placeholder="First Last" />
		</div>
		<div class="grid gap-2">
			<Label for="number">Card number</Label>
			<Input id="number" placeholder="" />
		</div>
		<div class="grid grid-cols-3 gap-4">
			<div class="grid gap-2">
				<Label for="month">Expires</Label>
				<Select type="single">
					<SelectTrigger id="month" aria-label="Month">Month</SelectTrigger>
					<SelectContent>
						{#each months as month, i}
							<SelectItem value={(i + 1).toString()} label={month}>
								{month}
							</SelectItem>
						{/each}
					</SelectContent>
				</Select>
			</div>
			<div class="grid gap-2">
				<Label for="year">Year</Label>
				<Select type="single">
					<SelectTrigger id="year" aria-label="Year">Year</SelectTrigger>
					<SelectContent>
						{#each { length: 10 } as _, i}
							<SelectItem
								value={`${new Date().getFullYear() + i}`}
								label={`${new Date().getFullYear() + i}`}
							>
								{new Date().getFullYear() + i}
							</SelectItem>
						{/each}
					</SelectContent>
				</Select>
			</div>
			<div class="grid gap-2">
				<Label for="cvc">CVC</Label>
				<Input id="cvc" placeholder="CVC" />
			</div>
		</div>
	</CardContent>
	<CardFooter>
		<Button class="w-full">Continue</Button>
	</CardFooter>
</Card>
