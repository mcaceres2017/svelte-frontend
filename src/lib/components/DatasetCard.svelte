<script lang="ts">
	import { goto } from '$app/navigation';

	export let id = 0;
	export let name = 'name';
	export let description = 'description';
	export let author = 'author';
	export let version = 3;
	export let date = '21-23-21';

	function handleClick() {
		// Redirect to the specific route for the clicked item
		goto(`/dataset/${id}`);
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click={handleClick} class="block card card-hover p-4">
	<header class="card-header">
		{name}
	</header>
	<section class="p-4">
		{description}
	</section>
	<footer class="card-footer">
		<ul class="myul">
			<li class="myli">Author: {author}</li>
			<li class="myli">Version: {version}</li>
			<li class="myli">Date: {date}</li>
		</ul>
	</footer>
</div>

<style>
	.card {
		margin: 40px 0;
		cursor: pointer;
	}

	.card:hover {
		background-color: #212b3a;
	}

	.myul {
		list-style-type: none;
		padding: 0;
		display: flex;
		justify-content: space-between;
	}
	.myli {
		margin-right: 10px;
	}
</style>
