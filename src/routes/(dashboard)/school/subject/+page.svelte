<script>
	import SubjectIntialization from './SubjectIntialization.svelte';
	import AddMoreSub from './AddMoreSub.svelte';
	import DeleteSubModal from './DeleteSubModal.svelte';
	import { invalidate } from '$app/navigation';

	export let data;
	let deleteSubjectId;

	function handleDelete(id) {
		deleteSubjectId = id;
		const deleteModal = document.getElementById('deleteSubModal');
		deleteModal.showModal();
		deleteModal.addEventListener('close', () => {
			invalidate('on:subject');
		});
	}
	function handleAdd() {
		const addMoreSub = document.getElementById('addMoreSub');
		addMoreSub.showModal();
		addMoreSub.addEventListener('close', () => {
			invalidate('on:subject');
		});
	}
</script>

{#if data.noOfSubject === 0}
	<SubjectIntialization />
{:else}
	<button class="p-6 bg-green-400 rounded-full add-btn z-10" on:click={handleAdd}
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
				<tr>
					<th />
					<th>Subject</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each data.subjects as subject, i}
					<tr
						><th>{i + 1}</th><td class="text-2xl font-bold">{subject.name}</td><td>
							<button class="btn btn-error rounded-md" on:click={() => handleDelete(subject._id)}>
								Remove
							</button>
						</td></tr
					>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
<AddMoreSub />
<DeleteSubModal {deleteSubjectId} />

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
