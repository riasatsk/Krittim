<script>
	export let data;
	let name = data.teacher.name;
	let phone = data.teacher.phone;
	let email = data.teacher.email;
	let subject1 = data.teacher.subject1;
	let subject2 = data.teacher.subject2;
	let subjects = data.subjects;
	let edit = false;
	function handleUpdate() {}
</script>

<a href="/teacher" class="btn btn-neutral">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
	</svg>
</a>
<div class="flex justify-center">
	<div class="flex flex-col gap-3 items-end">
		<div class="flex items-center gap-3">
			<div class="text-base mr-2 font-bold">Name</div>
			<input
				bind:value={name}
				type="text"
				placeholder="You can't touch this"
				class="input input-bordered w-full max-w-xs rounded-md"
				disabled={edit ? false : true}
			/>
		</div>
		<div class="flex items-center gap-3">
			<div class="text-base mr-2 font-bold">Phone</div>
			<input
				bind:value={phone}
				type="text"
				placeholder="You can't touch this"
				class="input input-bordered w-full max-w-xs rounded-md"
				disabled={edit ? false : true}
			/>
		</div>
		<div class="flex items-center gap-3">
			<div class="text-base mr-2 font-bold">Email</div>
			<input
				bind:value={email}
				type="text"
				placeholder="You can't touch this"
				class="input input-bordered w-full max-w-xs rounded-md"
				disabled={edit ? false : true}
			/>
		</div>
		<div class="mb-3 flex items-center gap-2">
			<label for="main-subject" class="text-base mr-2 font-bold">Subject 1 </label>
			<select
				class="select select-bordered w-full max-w-xs rounded-md"
				bind:value={subject1}
				disabled={edit ? false : true}
			>
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
			<select
				class="select select-bordered w-full max-w-xs rounded-md"
				bind:value={subject2}
				disabled={edit ? false : true}
			>
				<option disabled selected>Select First Subject</option>
				{#each subjects as subject}
					<option value={subject.name}>
						{subject.name}
					</option>
				{/each}
			</select>
		</div>
		<div class="flex gap-3">
			<button class="btn btn-info rounded-md" on:click={() => (edit = !edit)}
				><svg
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
						d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
					/>
				</svg>
				{edit ? 'Cancel' : 'Edit'}</button
			>
			<button class="btn {edit ? 'btn-success' : 'btn-disabled'} rounded-md"
				><svg
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
						d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
					/>
				</svg>
				Update</button
			>
		</div>
	</div>
</div>
<button class="btn btn-error rounded-md rm-teacher flex gap-3"
	><svg
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
			d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
		/>
	</svg>
	Remove Teacher</button
>

<style>
	input,
	select {
		width: 400px;
	}
	.rm-teacher {
		position: absolute;
		top: 88%;
		left: 80%;
	}
</style>
