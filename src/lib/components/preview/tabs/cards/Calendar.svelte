<script lang="ts">
	import { getLocalTimeZone, today } from '@internationalized/date';
	import { Card, CardContent } from '$lib/components/ui/card/index.js';
	import { RangeCalendar } from '$lib/components/ui/range-calendar/index.js';

	const start = today(getLocalTimeZone());
	const end = start.add({ days: 8 });

	let value = $state({
		start,
		end
	});
</script>

<Card class="max-w-[280px] ">
	<CardContent class="p-0">
		<RangeCalendar bind:value />
	</CardContent>
</Card>
