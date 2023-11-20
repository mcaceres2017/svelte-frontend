<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBox } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	export let data: PageData;
	const { dataset } = data;
</script>

<!-- <div class="container">
		<div class="dataset-name" />

	<div class="general-info" />

	<div class="version-info" />
</div> -->

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

		<div><strong>Updated:</strong> {dataset.updated}</div>

		<div><strong>Created:</strong> {dataset.created}</div>

		<div><strong>Author:</strong> {dataset.author}</div>

		<div><strong>Oids:</strong> {dataset.oids.join(', ')}</div>

		<div><strong>Parameters:</strong> {dataset.parameters.join(', ')}</div>

		<div><strong>Size:</strong> {dataset.size}</div>

		<div>
			<button class="btn variant-filled">Update</button>
		</div>
	</div>
</div>
 -->

<style>
	/* .center-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		max-width: 500px; 
		margin: 0 auto; 
	}

	.card {
		max-width: 100%;
	}

	.btn {
		margin: 10px;
	}

	.title {
		font-size: 25px; 
		font-weight: bold;
		margin-bottom: 20px;
	}

	.icon-text {
		float: left;
		display: flex;
		margin-right: 15px;
		align-items: center;
	}

	.dataset-name {
		width: 300px; 
		height: 500px; 
		margin-top: 80px; 
		margin-left: 100px; 
		margin-right: 0px;
		margin-bottom: 0px;
		background-color: #f0f0f0; 
	}

	.general-info {
		width: 800px;
		height: 200px; 
		margin-top: 0px; 
		margin-left: 100px; 
		background-color: #f0f0f0; 
	}

	.version-info {
		width: 200px; 
		height: 200px;
		margin-top: 30vh; 
		margin-left: 20vw;
		background-color: #f0f0f0;
	}
 */
	/* .container {
		background-color: #7c2828;
	}

	.left-container {
		width: 300px;
		height: 500px;
		margin-left: 50px;
		margin-top: 50px;
		background-color: #f0f0f0;
	}

	.right-container {
		width: 800px;
		height: 200px;
		margin-top: 50px;
		margin-right: 1000px;
		background-color: #f0f0f0;
	} */
</style>
