<script>
	import ClassBox from './ClassBox.svelte'
	import { invalidate } from '$app/navigation';
	export let data;
	function handleComplete() {
		invalidate('on:class');
	}
	function handleAdd() {}
	function handleDelete() {}
</script>

{#if data.noOfClass === 0}
	<div class="text-3xl font-sans font-bold m-5 text-blue-300">Define Class Structure</div>
	<div class="flex gap-4 ml-5">
		<div class="flex flex-col gap-3">
			<ClassBox className="Nursery  " />
			<ClassBox className="KG" />
			<ClassBox className="LKG" />
			<ClassBox className="UKG" />
			<ClassBox className="Class 1" />
			<ClassBox className="Class 2" />
			<ClassBox className="Class 3" />
			<ClassBox className="Class 4" />
		</div>
		<div class="flex flex-col gap-3">
			<ClassBox className="Class 5" />
			<ClassBox className="Class 6" />
			<ClassBox className="Class 7" />
			<ClassBox className="Class 8" />
			<ClassBox className="Class 9" />
			<ClassBox className="Class 10" />
			<ClassBox className="Class 11" />
			<ClassBox className="Class 12" />
		</div>
		<button class="btn btn-wide btn-success rounded-md mt-5 ml-5" on:click={handleComplete}
			>Complete</button
		>
	</div>
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
	<div class="overflow-x-auto ml-8">
		<table class="table">
			<thead>
				<tr>
					<th>Class Name</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{#each data.classes as className}
					<tr
						><td class="text-xl font-bold">{className.name}</td>

						<td>
							<button class="btn btn-neutral rounded-md" on:click={() => handleDelete(className._id)}>
								Details
							</button>
						</td></tr
					>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

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
