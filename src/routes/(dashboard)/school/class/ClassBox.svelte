<script>
	const token = window.localStorage.getItem('jwt-Token');
	let selected = false;
	export let className;
	async function handleClick() {
		selected = true;
		const response = await fetch('/api/add-class', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				name: className
			})
		});
		if (!response.status===201) {
			return console.log('Failed');
		}
		console.log(await response.json());
	}
</script>

{#if selected}
	<button class="btn btn-secondary btn-wide rounded-md">{className}</button>
{:else}
	<button class="btn btn-outline btn-wide rounded-md" on:click={handleClick}>{className}</button>
{/if}
