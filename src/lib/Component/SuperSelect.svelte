<script>
	let name;
	let roll;
	let popover;
	export let students;
	let sort = [];

	function handleInput(v) {
		sort = students.filter((a) => a.toLowerCase().startsWith(v));
		popover.style.display = 'block';
	}
</script>

<div>
	<input
		on:focusout={() => {
			setTimeout(() => {
				popover.style.display = 'none';
			}, 500);
		}}
		on:input={(e) => handleInput(e.target.value.toLowerCase())}
		type="text"
		placeholder="Type here"
		class="input input-bordered w-full max-w-xs rounded-md"
		bind:value={name}
	/>
	<div class="pop" bind:this={popover}>
		{#each sort as student}
			<div class="superItem">
				<button
					class="w-full text-left pl-3"
					on:click={() => {
						name = student.name;
						popover.style.display = 'none';
					}}>{student.name.toUpperCase()}</button
				>
			</div>
		{/each}
	</div>
</div>
<h1>Hello World</h1>

<style>
	.pop {
		position: absolute;
		overflow-y: scroll;
		max-height: 10rem;
		width: 20rem;
		display: none;
		z-index: 10;
		background-color: azure;
		color: black;
	}
	.superItem {
		padding: 2px;
	}
	.superItem:hover {
		background-color: aquamarine;
	}
	/* Width and height of the entire scrollbar */
	::-webkit-scrollbar {
		width: 6px;
		height: 12px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #bbb;
	}
</style>
