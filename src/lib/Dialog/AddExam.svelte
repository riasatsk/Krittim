<dialog id="addExamModal" class="modal">
	<div class="modal-box">
		<h1 class="text-2xl font-bold font-sans text-center mb-6">Add Exam</h1>
		<div class="flex justify-center">
			<div class="flex flex-col gap-5 items-end">
				<div class="flex items-center gap-3">
					<div>Exam Name</div>
					<input
						type="text"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex items-center gap-3">
					<div>Exam Date</div>
					<input
						type="date"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
			</div>
		</div>

		<div class="modal-action">
			<form method="dialog">
				<!-- if there is a button in form, it will close the modal -->
				<button class="btn btn-error rounded-md">Cancel</button>
				<button class="btn btn-success rounded-md">Add</button>
			</form>
		</div>
	</div>
</dialog>

<style>
	input {
		width: 400px;
	}
</style>
