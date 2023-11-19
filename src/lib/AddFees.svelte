<script>
	export let classes;
	let editYear = true;
	let classId;
	let year = new Date().getFullYear();
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<dialog id="addFeesModal" class="modal">
	<div class="modal-box">
		<div class="flex flex-col gap-3 items-center">
			<h1 class="text-5xl font-bold text-center mb-10">Add Fees</h1>

			<div class="flex flex-col gap-3 items-end">
				<div class="flex gap-4 items-center">
					<div>Year</div>
					<input
						disabled={editYear}
						bind:value={year}
						type="number"
						placeholder="2023"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex items-center gap-4">
					<div>Class</div>
					<select class="select select-bordered w-full max-w-xs rounded-md" bind:value={classId}>
						<option disabled selected>Select Class</option>
						{#each classes as className}
							<option value={className._id}>{className.name}</option>
						{/each}
					</select>
				</div>
				<div class="flex gap-4 items-center">
					<div>Student Name</div>
					<input
						type="text"
						placeholder="Student Name"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex gap-4 items-center">
					<div>Roll No</div>
					<input
						type="number"
						placeholder="Student Roll"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex gap-4 items-center">
					<div>Amount</div>
					<input
						type="number"
						placeholder="1200"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex gap-4 items-center">
					<div>Month</div>

					<select class="select select-bordered w-full max-w-xs rounded-md">
						<option disabled selected>Select Month</option>
						{#each months as month}
							<option value={month}>{month}</option>
						{/each}
					</select>
				</div>
			</div>

			<div class="modal-action">
				<form method="dialog">
					<div class="flex justify-end gap-3">
						<button class="btn btn-error rounded-md">Cancel</button>
						<button class="btn btn-success rounded-md">Complete</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</dialog>

<style>
	input,
	select {
		width: 400px;
	}
</style>
