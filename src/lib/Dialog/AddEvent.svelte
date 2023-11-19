<script>
	import { invalidate } from '$app/navigation';
	let eventName;
	let date;
	let place;
	let year = new Date(Date.now()).getFullYear();
	const token = window.localStorage.getItem('jwt-Token');

	async function handleAdd() {
		const response = await fetch('/api/events', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				eventName: eventName,
				date: date,
				place: place,
				year: year
			})
		});
		const event = await response.json();
		invalidate('reload:events');
		eventName = '';
		date = '';
		place = '';
	}
</script>

<dialog id="addEventModal" class="modal">
	<div class="modal-box">
		<h1
			class="text-3xl font-bold font-sans text-center mb-6 flex items-center gap-3 justify-center"
		>
			Add Event<svg
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
					d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
				/>
			</svg>
		</h1>
		<div class="flex justify-center">
			<div class="flex flex-col gap-5 items-end">
				<div class="flex items-center gap-3">
					<div>Name</div>
					<input
						bind:value={eventName}
						type="text"
						placeholder="Annual Sports"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex items-center gap-3">
					<div>Date</div>
					<input
						bind:value={date}
						type="date"
						placeholder="Type here"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="flex items-center gap-3">
					<div>Place</div>
					<input
						bind:value={place}
						type="text"
						placeholder="School Sport Ground"
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
