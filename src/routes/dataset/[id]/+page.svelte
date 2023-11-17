<script lang="ts">
	import Fa from 'svelte-fa';
	import { faBox } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	export let data: PageData;
	const { dataset } = data;
</script>

<div class="center-container">
	<div class="card p-4">
		<div class="info-container">
			<div class="itemName">
				<div class="title">{dataset.title}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Version:</strong> {dataset.version}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Updated:</strong> {dataset.updated}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Created:</strong> {dataset.created}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Author:</strong> {dataset.author}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Oids:</strong> {dataset.oids.join(', ')}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Parameters:</strong> {dataset.parameters.join(', ')}</div>
			</div>

			<div class="parameter">
				<div class="box" />
				<div><strong>Size:</strong> {dataset.size}</div>
			</div>
		</div>

		<button class="btn variant-filled">Update</button>
	</div>
</div>

<style>
	/* Add any styling you need here */
	.center-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.btn {
		margin: 10px;
	}

	.title {
		font-size: 25px; /* Adjust as needed */
		font-weight: bold;
		margin-bottom: 20px;
	}
</style>
