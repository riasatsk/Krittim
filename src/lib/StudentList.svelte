<script>
	export let students;
</script>

{#if students.length === 0}
	<div class="text-4xl font-sans font-bold flex justify-center center">No Student Found</div>
{:else}
	<div class="overflow-x-auto">
		<table class="table">
			<!-- head -->
			<thead>
				<tr>
					<th>Name</th>
					<th>Address</th>
					<th>Year</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each students as student}
					<tr>
						<td>
							<div class="flex items-center space-x-3">
								<div class="avatar">
									<div class="mask mask-squircle w-12 h-12">
										<img src="/avatar.png" alt="Avatar Tailwind CSS Component" />
									</div>
								</div>
								<div>
									<div class="font-bold">{student.firstName} {student.middleName}  {student.lastName} </div>
									<div class="text-sm opacity-50">{student.className}- Roll {student.roll}</div>
								</div>
							</div>
						</td>
						<td>
							{student.address}
						</td>
						<td>{student.year}</td>
						<th>
							<button class="btn btn-ghost btn-xs">details</button>
						</th>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}

<style>
	.center {
		height: 80%;
		align-items: center;
	}
</style>
