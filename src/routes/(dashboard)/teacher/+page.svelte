<script>
	export let data;
	import AddTeacher from '../../../lib/Dialog/AddTeacher.svelte';
	let subjects = data.subjects;
</script>

{#if data.noOfTeacher === 0}
	<div class="h-full flex justify-center items-center">
		<div class="flex flex-col items-center gap-5">
			<h1 class="font-bold text-4xl">No Teacher Found</h1>
			<button
				class=" btn btn-secondary flex gap-2 rounded-md"
				onclick="addTeacherModal.showModal()"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
				</svg>
				Add Teacher
			</button>
		</div>
	</div>
{:else}
	<button class="p-6 bg-green-400 rounded-full add-btn z-10" onclick="addTeacherModal.showModal()"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-8 h-8 text-gray-950"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
	</button>
	<div class="overflow-x-auto ml-6">
		<table class="table">
			<!-- head -->
			<thead>
				<tr
					><th />
					<th>Name</th>
					<th>Contact</th>
					<th>Subject</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each data.teachers as teacher, i}
					<tr
						><th class="text-lg">{i + 1}</th>
						<td class="font-bold font-sans text-lg">{teacher.name}</td>
						<td><div class="font-sans text-lg">{teacher.phone}</div> </td>
						<td class="text-lg">{teacher.subject1}</td>
						<td><a href={'/teacher/' + teacher._id} class="btn btn-neutral rounded-md">Manage</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
<AddTeacher {subjects} />

<style>
	.add-btn {
		position: absolute;
		top: 77%;
		left: 88%;
		transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
	}

	.add-btn:hover {
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}

	.add-btn:active {
		transform: scale(1.1);
	}
</style>
