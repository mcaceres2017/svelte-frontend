<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBox } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	export let data: PageData;
	const { dataset } = data;

	let selectedVersion = dataset.version[0];
</script>

<div class="my-container h-full mx-auto flex justify-center items-center">
	<div class="card card-metadata p-4">
		<div class="my-row">
			<Fa icon={faBox} size="4x" style="margin-left:30px;" />
			<div class="my-col">
				<div class="title">
					{dataset.title} a little more of text to see what the div does
				</div>
			</div>
		</div>
		<div class="my-col">
			<div class="general-info">
				<div class="title-2">General</div>
				<ul class="description-list">
					<li>
						<strong>Author:</strong>
						{dataset.author}
					</li>

					<li>
						<strong>Creation date:</strong>
						{dataset.created}
					</li>

					<li>
						<strong>Description:</strong>
						{dataset.description} aaaaaaaaaa fd fd fds fsdaa afd afsd fs dfsda fsda f
					</li>
				</ul>
			</div>

			<div class="version-info">
				<div class="title-2">Version Specific Information</div>

				<strong>Select a version:</strong>

				<div style="width:80px; margin-top:10px; margin-bottom:10px;">
					<select class="select" bind:value={selectedVersion}>
						{#each dataset.version as version}
							<option value={version}>{version}</option>
						{/each}
					</select>
				</div>

				<ul class="description-list">
					<li><strong>Updated on:</strong> {dataset.updated}</li>
					<li><strong>Oids:</strong> {dataset.oids.join(', ')}</li>
					<li><strong>Parameters:</strong> {dataset.parameters.join(', ')}</li>
					<li><strong>Size:</strong> {dataset.size}</li>
				</ul>
			</div>

			<div class="btn-row">
				<button type="button" class="btn variant-filled-primary">Get full metadata</button>
				<button type="button" class="btn variant-filled-secondary">Update this dataset</button>
				<button type="button" class="btn variant-filled-tertiary"
					>Download version {selectedVersion}</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	.my-container {
		max-width: 1200px;
		margin: 0 auto;
	}

	.my-row {
		display: flex;
		flex-wrap: wrap;
		margin: 0 -15px;
	}

	.my-col {
		flex: 1;
		padding: 0 15px;
	}

	.card-metadata {
		margin-top: 30px;
		max-width: 800px;
	}

	.title {
		margin-left: 15px;
		font-size: 24px;
		text-align: center;
		font-weight: bold;
		text-align: justify;
	}

	.title-2 {
		margin-top: 20px;
		font-size: 18px;
		margin-bottom: 20px;
		text-align: left;
		font-weight: bold;
	}

	.description-list {
		font-size: 14px;
		color: #cacaca;
		text-align: justify;
		text-justify: inter-word;
	}

	.btn-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 50px;
		flex-wrap: wrap;
		margin-top: 20px;
	}
</style>
