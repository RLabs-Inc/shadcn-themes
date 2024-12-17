<script lang="ts">
	import {
		CardsCookieSettings,
		CardsCreateAccount,
		CardsGithub,
		CardsNotifications,
		CardsPaymentMethod,
		CardsReportIssue,
		CardsShare,
		CardsTeamMembers,
		CardsChat
	} from '$lib/components/preview/tabs/cards';
</script>

<div class="flex flex-wrap gap-5 px-1 pb-4">
	<div class="flex max-w-[400px] flex-col gap-5">
		<CardsCreateAccount />
		<CardsChat />
		<CardsPaymentMethod />
	</div>
	<div class="flex flex-col gap-5">
		<CardsTeamMembers />
		<!-- <CardsShare /> -->
		<CardsNotifications />
	</div>
	<div class="flex max-w-[400px] flex-col gap-5">
		<CardsReportIssue />
		<CardsGithub />
		<CardsCookieSettings />
	</div>
</div>
