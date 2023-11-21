<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBox } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	export let data: PageData;
	const { dataset } = data;
</script>

<div class="my-container">
	<div class="my-row">
		<div class="my-col">
			<div class="card p-4 title-card">
				<p class="icon-text">
					<Fa icon={faBox} size="4x" />
				</p>
				<div class="title">
					{dataset.title} a little more of text to see what the div does
				</div>
			</div>
		</div>
		<div class="my-col">
			<div class="my-row">
				<div class="card p-4 general-info overflow-auto max-h-[200px]">
					<div><strong>Author:</strong> {dataset.author}</div>
					<div><strong>Created:</strong> {dataset.created}</div>
					<div>
						<strong>Description:</strong>
						{dataset.description}
					</div>
				</div>
			</div>
			<div class="my-row btn-row">
				<div>
					<button class="btn variant-filled">Update</button>
				</div>
				<div>
					<button class="btn variant-filled">Update</button>
				</div>
			</div>
			<div class="my-row">
				<div class="card p-4 version-info">
					<div class="version-selector">
						<strong>Version:</strong>

						<select class="select">
							{#each dataset.version as version}
								<option value={version}>{version}</option>
							{/each}
						</select>
					</div>
					<div><strong>Updated:</strong> {dataset.updated}</div>
					<div><strong>Oids:</strong> {dataset.oids.join(', ')}</div>
					<div><strong>Parameters:</strong> {dataset.parameters.join(', ')}</div>
					<div><strong>Size:</strong> {dataset.size}</div>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="center-container">
	<div class="card p-4">
		<div class="info-container" />
		<p class="icon-text">
			<Fa icon={faBox} size="4x" />
		</p>
		<div class="title">{dataset.title} a little more of text to see what the div does</div>

		<div>
			<strong>Version:</strong>

			<select class="select">
				{#each dataset.version as version}
					<option value={version}>Version {version}</option>
				{/each}
			</select>
		</div>

		## <div><strong>Updated:</strong> {dataset.updated}</div>

		## <div><strong>Created:</strong> {dataset.created}</div>

		## <div><strong>Author:</strong> {dataset.author}</div>

		## <div><strong>Oids:</strong> {dataset.oids.join(', ')}</div>

		## <div><strong>Parameters:</strong> {dataset.parameters.join(', ')}</div>

		## <div><strong>Size:</strong> {dataset.size}</div>

		<div>
			<button class="btn variant-filled">Update</button>
		</div>
	</div>
</div> -->

<style>
	.btn {
		margin-left: 100px;
	}

	.title {
		font-size: 25px;
		font-weight: bold;
		margin-bottom: 20px;
	}

	.icon-text {
		justify-content: center;
		margin-right: 15px;
		align-items: center;
	}

	.title-card {
		max-width: 250px;
		max-height: 1000px;
		margin-top: 80px;
		margin-left: 100px;
		align-items: center;
		justify-content: center;
	}

	.general-info {
		width: 800px;
		height: 200px;
		margin-top: 80px;
		margin-left: 100px;
	}

	.version-info {
		width: 800px;
		height: 200px;
		margin-top: 20px;
		margin-left: 100px;
	}

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

	.version-selector {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.select {
		margin-left: 20px;
		width: 100px;
	}

	.btn-row {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: 85px;
		background-color: rgb(124, 125, 204);
	}
</style>
