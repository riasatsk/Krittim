<script>
	import { invalidate } from '$app/navigation';
	let amount;
	let remarks;
	const token = window.localStorage.getItem('jwt-Token');

	async function handleAdd() {
		const response = await fetch('/api/expense', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				amount: amount,
				remarks
			})
		});
		const event = await response.json();
		invalidate('reload:expense');
		amount = '';
		remarks = '';
	}
</script>

<dialog id="addEventModal" class="modal">
	<div class="modal-box">
		<h1
			class="text-3xl font-bold font-sans text-center mb-6 flex items-center gap-3 justify-center"
		>
			New Expense<svg
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
					d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</h1>
		<div class="flex justify-center">
			<div class="flex flex-col gap-5 items-end">
				<div class="flex items-center gap-3">
					<div>Amount</div>
					<input
						bind:value={amount}
						type="number"
						placeholder="₹3000"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>

				<div class="flex items-center gap-3">
					<div>Remarks</div>
					<input
						bind:value={remarks}
						type="text"
						placeholder="For New Library Book"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
			</div>
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

<style>
	input {
		width: 400px;
	}
</style>
