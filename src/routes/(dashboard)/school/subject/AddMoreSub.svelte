<script>
	let name;
	const token = window.localStorage.getItem('jwt-Token');

	async function handleAdd() {
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
	}
</script>

<dialog id="addMoreSub" class="modal">
	<div class="modal-box">
		<h1 class="text-3xl font-bold mb-6 mt-3 text-center">Add Subject</h1>
		<div class="mb-3 flex items-center gap-2">
			<label class="text-base mr-2 font-bold" for="name">Subject Name </label>
			<input
				bind:value={name}
				type="text"
				placeholder="Life Science"
				class="input input-bordered w-full max-w-xs rounded-md"
			/>
		</div>

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn btn-error rounded-md">Cancel</button>
				<button class="btn btn-success rounded-md" on:click={handleAdd}>Add</button>
			</form>
		</div>
	</div>
</dialog>
