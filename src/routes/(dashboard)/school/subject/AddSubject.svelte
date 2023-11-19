<script>
	export let name;
	let subjectId;
	let added = false;
	const token = window.localStorage.getItem('jwt-Token');

	async function handleAdd() {
		added = true;
		const response = await fetch('http://localhost:3000/add-subject', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				subjectName: name
			})
		});
		const data = await response.json();
		subjectId = data.subjectId;
	}
	async function handleCancel() {
		added = false;

		const response = await fetch('http://localhost:3000/delete-subject', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				subjectId: subjectId
			})
		});
	}
</script>

<div class="flex gap-3 m-3 rounded-md items-center w-96 h-20 subbox">
	<div class="font-bold text-2xl inline-block w-24 ml-8 mr-5">{name}</div>
	{#if !added}
		<button class="btn rounded-md ml-10" on:click={handleAdd}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>

			Add</button
		>
	{:else if added}
		<div class="flex gap-2">
			<button class="btn btn-success rounded-md" on:click={handleAdd}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				Added</button
			>
			<button class="btn btn-error rounded-md" on:click={handleCancel}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>
		</div>
	{/if}
</div>

<style>
	.subbox {
		border: 2px solid;
		transition: transform 0.3s;
		cursor: pointer;
	}
	.subbox:hover {
		transform: scale(1.05);
	}
</style>
