<script>

	export let deleteSubjectId;

	const token = window.localStorage.getItem('jwt-Token');

	async function handleDelete() {
		try {
			const response = await fetch('http://localhost:3000/delete-subject', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ` + token
				},
				body: JSON.stringify({
					subjectId: deleteSubjectId
				})
			});
		} catch (err) {
			console.log(err);
		}
	}
</script>

<dialog id="deleteSubModal" class="modal">
	<div class="modal-box">
		<h3 class="font-bold text-lg">Do you really want to remove the subject</h3>
		<p class="py-4">It will be removed permanently</p>
		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn btn-success rounded-md">Cancel</button>
				<button class="btn btn-error rounded-md" on:click={handleDelete}>Delete</button>
			</form>
		</div>
	</div>
</dialog>
