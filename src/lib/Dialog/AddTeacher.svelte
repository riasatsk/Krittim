<script>
	export let subjects;
	import { invalidate } from "$app/navigation";
	const token = window.localStorage.getItem('jwt-Token');

	let name;
	let email;
	let phone;
	let subject1;
	let subject2;
	async function handleAdd() {
		const response = await fetch('/api/add-teacher', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				name: name,
				email: email,
				phone: phone,
				subject1: subject1,
				subject2: subject2
			})
		});
		if (!response.status === 201) {
			return console.log('faield');
		}
		const data = await response.json();
		console.log(data);
		name = '';
		email = '';
		phone = '';
		subject1 = '';
		subject2 = '';
		invalidate('on:teacher')
	}
</script>

<dialog id="addTeacherModal" class="modal">
	<div class="modal-box">
		<h1 class="text-5xl font-bold text-center mb-10">New Teacher</h1>

		<main class="flex justify-center h-full w-full">
			<div class="flex flex-col gap-4 w-max items-end">
				<div class="mb-3 flex items-center gap-2">
					<label class="text-base mr-2 font-bold" for="name">Name </label>
					<input
						bind:value={name}
						type="text"
						placeholder="tarik aziz"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>
				<div class="mb-3 flex items-center gap-2">
					<label for="phone" class="text-base mr-2 font-bold">Phone</label>
					<input
						bind:value={phone}
						type="tel"
						id="phone"
						name="phone"
						placeholder="8016310456"
						class="input input-bordered w-full max-w-xs rounded-md"
						required
					/>
				</div>

				<div class="mb-3 flex items-center gap-2">
					<label for="email" class="text-base mr-2 font-bold">Email </label>
					<input
						bind:value={email}
						type="email"
						placeholder="tarik@gmail.com"
						class="input input-bordered w-full max-w-xs rounded-md"
					/>
				</div>

				<div class="mb-3 flex items-center gap-2">
					<label for="main-subject" class="text-base mr-2 font-bold">Subject 1 </label>
					<select class="select select-bordered w-full max-w-xs rounded-md" bind:value={subject1}>
						<option disabled selected>Select First Subject</option>
						{#each subjects as subject}
							<option value={subject.name}>
								{subject.name}
							</option>
						{/each}
					</select>
				</div>
				<div class="mb-3 flex items-center gap-2">
					<label for="main-subject" class="text-base mr-2 font-bold">Subject 2 </label>
					<select class="select select-bordered w-full max-w-xs rounded-md" bind:value={subject2}>
						<option disabled selected>Select Second Subject</option>
						{#each subjects as subject}
							<option value={subject.name}>
								{subject.name}
							</option>
						{/each}
					</select>
				</div>

				<div class="modal-action">
					<form method="dialog">
						<div class="flex gap-4 justify-end">
							<button class="btn btn-error rounded-md text-gray-50">Cancel</button>
							<button class="btn btn-success rounded-md" on:click={handleAdd}>Add</button>
						</div>
					</form>
				</div>
			</div>
		</main>
	</div>
</dialog>

<style>
	input,
	select {
		width: 400px;
	}
</style>
