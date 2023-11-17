<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">
				<a href="/dataset"> (crear nuevo) </a>
			</svelte:fragment>

			<a href="/"> (Astroversioner) </a>
			<svelte:fragment slot="trail">(my datasets)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft" />
	<svelte:fragment slot="sidebarRight" />
	<svelte:fragment slot="pageHeader" />
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter" />
	<svelte:fragment slot="footer" />
</AppShell>
