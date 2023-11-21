<script lang="ts">
	import DatasetCard from '$lib/components/DatasetCard.svelte';
	import DatasetDescription from '$lib/mockup/DatasetDescription.json';
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-5">
		<nav class="list-nav">
			<ul class="dataset-list">
				{#each DatasetDescription as dataset}
					<li>
						<DatasetCard
							id={dataset.id}
							name={dataset.title}
							description={dataset.description}
							author={dataset.author}
							date={dataset.date}
							version={dataset.version}
						/>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</div>

<style>
	.dataset-list {
		padding-left: 200px;
		padding-right: 200px;
	}
</style>
