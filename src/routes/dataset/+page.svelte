<script lang="ts">
	import Fa from 'svelte-fa';
	import { faFileArrowUp } from '@fortawesome/free-solid-svg-icons';
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import Papa from 'papaparse';
	import { readFileContent } from '$lib/utils/utils.js';

	//Variable for the name input.
	let datasetName = '';
	//Variable for the description textarea.
	let datasetDescription = '';

	//variables for the fileDropZone.
	let selectedFile;
	let fileName;
	let csvContent;
	let parsedData = [];
	let oidArray = [];

	//Options for the checkboxes
	let datasetParameters = [
		{
			id: 1,
			name: 'Detection',
			description: 'Tabular data relating to observations of astronomical objects.',
			checked: false
		},
		{
			id: 2,
			name: 'Non Detection',
			description: 'Tabular data relating to a non detection such as the mjd or filter used.',
			checked: false
		},
		{
			id: 3,
			name: 'Light Curve',
			description:
				'Image showing the difference in magnitude over time of the red and green bands.',
			checked: false
		},
		{
			id: 4,
			name: 'Stamps',
			description: 'The science, reference and difference stamps of a detection.',
			checked: false
		},
		{
			id: 5,
			name: 'Feature',
			description: 'Calculated features of an object, changes over time.',
			checked: false
		}
	];

	const handleSubmit = () => {
		alert(`Form submitted with name: ${datasetName} and description ${datasetDescription}`);
	};

	const handleFileInputChange = async (event) => {
		const inputElement = event.target;
		if (inputElement.files.length > 0) {
			selectedFile = inputElement.files[0];
			fileName = selectedFile.name;

			try {
				csvContent = await readFileContent(selectedFile);
				Papa.parse(csvContent, {
					header: true,
					dynamicTyping: true,
					complete: (parsingResult) => {
						parsedData = parsingResult.data;

						// Extract values of "oid" property into oidArray
						oidArray = parsedData.map((item) => item.oid).filter(Boolean);
						oidArray = JSON.stringify(oidArray, null, 2);
						console.log('OID Array:', oidArray);
					},
					error: (error) => {
						console.error('Error parsing CSV:', error.message);
					}
				});
			} catch (error) {
				console.error('Error reading file content:', error);
			}
		}
	};
</script>

<form on:submit|preventDefault={handleSubmit} method="POST" class="form">
	<div class="card p-4">
		<input class="input" type="text" placeholder="Name of the dataset" bind:value={datasetName} />

		<FileDropzone name="files" accept=".csv" multiple={false} on:change={handleFileInputChange}>
			<svelte:fragment slot="lead">
				<div class="flex justify-center items-center gap-4">
					<Fa icon={faFileArrowUp} size="2x" />
				</div>
			</svelte:fragment>
			<svelte:fragment slot="message">
				{#if selectedFile}
					{fileName}
				{:else}
					<strong>Upload your oid list</strong> or drag and drop
				{/if}
			</svelte:fragment>
			<svelte:fragment slot="meta">Only CSV allowed.</svelte:fragment>
		</FileDropzone>

		<div class="space-y-2">
			{#each datasetParameters as parameter, index (parameter.id)}
				<label class="flex items-center space-x-2">
					<input
						id={'checkbox' + parameter.id}
						class="checkbox"
						type="checkbox"
						bind:checked={parameter.checked}
					/>
					<p><strong>{parameter.name}:</strong> {parameter.description}</p>
				</label>
			{/each}
		</div>

		<!-- <div>
			{datasetParameters.filter(offer => offer.checked).map(offer => offer.name)}
		</div> -->

		<label class="label">
			<textarea
				class="textarea"
				rows="4"
				placeholder="Description: Tell what your dataset is for/about"
				bind:value={datasetDescription}
			/>
		</label>

		<div class="flex justify-center items-center gap-4">
			<button type="submit" class="btn variant-filled"> Create Dataset </button>
		</div>
	</div>
</form>

<style>
	.form {
		padding-top: 20px;
		padding-left: 200px;
		padding-right: 200px;
	}

	.input {
		margin-top: 10px;
		margin-bottom: 30px;
	}
	div {
		padding-top: 20px;
	}
	.space-y-2 {
		margin-top: 20px;
		margin-bottom: 40px;
	}
</style>
