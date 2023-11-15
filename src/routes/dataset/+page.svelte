<script>
	let name = ''; // State to hold form input value
	let description = '';

	let datasetParameters = [
		{id:1, name:'det', checked:false},
		{id:2, name:'non det', checked:false},
		{id:3, name:'LC', checked:false},
		{id:4, name:'stamps', checked:false},
		{id:5, name:'features', checked:false},
	] 
  
	// Function to handle form submission
	const handleSubmit = () => {
	  // Perform the desired action here
	  alert(`Form submitted with name: ${name} and description ${description}`);
	};


	let text = 'None';

	const handleFileChange = async (event) => {
		
		console.log("aaaaa");
		const file = event.target.files[0];
		
		if (file) {
			const text = await file.text();
			console.log('CSV Data:', text);
		}
	};
</script>
  



<form on:submit|preventDefault={handleSubmit} method="POST" class=something>
	<div class="card p-4">

		<label class="label">
			<span>Name</span>
			<input class="input" type="text" placeholder="Name of the dataset" bind:value={name}/>
		</label>

		<label class="label">
			<span>Oids list</span>
			<input class="input" type="file" accept=".csv" bind:value={text} on:change={handleFileChange}/>
		</label>


		<div class="space-y-2">
			{#each datasetParameters as parameter, index (parameter.id)}
				<label class="flex items-center space-x-2">
					<input id={'checkbox'+parameter.id} class="checkbox" type="checkbox" bind:checked={parameter.checked} />
					<p>{parameter.name}</p>
				</label>
			{/each}
		</div>


		<div>
			{datasetParameters.filter(offer => offer.checked).map(offer => offer.name)}
		</div>

		<div>
			ajajajaj {text}
		</div>
		
		<label class="label">
			<span>Description</span>
			<textarea class="textarea" rows="4" placeholder="What is your dataset for/about" bind:value={description}/>
		</label>

		<div class="flex justify-center items-center gap-4">
			<button type="submit" class="btn variant-filled">
				Create
			</button>
		</div>

	</div>
</form>

<style>
	.something{
		padding-top: 20px;
		padding-left: 200px;
		padding-right: 200px;
	}
	
	.label{
		padding-top:10px;
	}
	div{
		padding-top:20px;
	}
</style>