<script>
	export let data;
	$: lastPage = Math.ceil(data.count / 10);

	$: next = +data.page === lastPage ? lastPage : +data.page + 1;
	$: prev = +data.page > 1 ? data.page - 1 : 1;

	import { invalidate } from '$app/navigation';
	const token = window.localStorage.getItem('jwt-Token');
	async function handleRemove(id) {
		const response = await fetch('/api/events', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ` + token
			},
			body: JSON.stringify({
				eventId: id
			})
		});
		const data = await response.json();
		invalidate('reload:events');
	}
</script>

<div class="overflow-x-auto">
	<table class="table">
		<thead>
			<tr>
				<th>Event Name</th>
				<th>Date</th>
				<th>Place</th>
				<th>Status</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			{#each data.events.events as event}
				<tr>
					<td>{event.name}</td>
					<td>{new Date(event.date).toDateString()}</td>
					<td>{event.place}</td>
					<td>
						{#if Date.now() > new Date(event.date)}
							<div class="text-green-400">Completed</div>
						{:else}
							<div>Upcoming</div>
						{/if}
					</td>
					<td>
						<button class="hover:scale-125 hover:text-red-500 delete-btn" on:click={handleRemove(event._id)}>
							<svg
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
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	{#if data.count > 10}
		<div class="pagination">
			<div class="join rounded-md">
				<a href="/events?page={prev}" class="join-item btn {data.page == 1 ? 'btn-disabled' : ''}"
					>Prev</a
				>
				<a href="/events?page=1" class="join-item btn {data.page == 1 ? 'btn-active' : ''} ">1</a>
				{#if data.page != 1 && data.page != lastPage}
					<div class="join-item btn btn-active">{data.page}</div>
				{/if}
				<a href="/events?page={lastPage}" class="join-item btn">{lastPage}</a>
				<a
					href="/events?page={next}"
					class="join-item btn {data.page == lastPage ? 'btn-disabled' : ''}">Next</a
				>
			</div>
		</div>
	{/if}
</div>

<style>
	.pagination {
		position: absolute;
		top: 90%;
		left: 50%;
	}
	.delete-btn {
		transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;
	}

	.delete-btn:active {
		transform: scale(1.1);
	}
</style>
