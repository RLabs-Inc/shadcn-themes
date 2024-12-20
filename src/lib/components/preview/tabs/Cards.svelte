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

<div class="flex flex-wrap gap-5">
	<div class="flex max-w-[400px] flex-col gap-5">
		<CardsCreateAccount />
		<div class="hidden md:block">
			<CardsChat />
		</div>
		<CardsPaymentMethod />
	</div>
	<div class="hidden flex-col gap-5 md:flex">
		<CardsTeamMembers />
		<CardsShare />
		<CardsNotifications />
	</div>
	<div class="flex max-w-[400px] flex-col gap-5">
		<CardsReportIssue />
		<CardsGithub />
		<CardsCookieSettings />
	</div>
</div>
