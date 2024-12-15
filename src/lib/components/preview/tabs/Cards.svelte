<script lang="ts">
	import {
		CardsCookieSettings,
		CardsCreateAccount,
		CardsGithub,
		CardsNotifications,
		CardsPaymentMethod,
		CardsReportIssue,
		CardsShare,
		CardsTeamMembers
	} from '$lib/components/preview/tabs/cards';
</script>

<div class="flex flex-wrap gap-5 pt-5 pb-20">
	<div class="flex max-w-[500px] flex-col gap-5">
		<CardsCreateAccount />
		<CardsPaymentMethod />
	</div>
	<div class="flex flex-col gap-5">
		<CardsTeamMembers />
		<CardsShare />
		<CardsNotifications />
	</div>
	<div class="flex max-w-[600px] flex-col gap-5">
		<CardsReportIssue />
		<CardsGithub />
		<CardsCookieSettings />
	</div>
</div>
