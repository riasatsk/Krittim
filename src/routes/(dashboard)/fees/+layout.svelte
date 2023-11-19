<script>
	export let data;
	let selected = 0;
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

<div class="flex justify-between m-4">
	<div class="flex gap-3">
		<a
			href="/student"
			class="btn btn-outline rounded-md {selected === 0 ? 'btn-active' : ''}"
			on:click={() => (selected = 0)}>All</a
		>

		{#each data.classes as className, i}
			<a
				href={'/student/' + className._id}
				class="btn btn-outline rounded-md {selected === i + 1 ? 'btn-active' : ''}"
				on:click={() => (selected = i + 1)}>{className.name}</a
			>
		{/each}
		<select class="select select-bordered w-full max-w-xs rounded-md">
			<option disabled selected>Select Month</option>
			{#each months as month}
				<option value={month}>{month}</option>
			{/each}
		</select>
	</div>
	<div class="mr-5">
		<a href="/fees" class="btn rounded-md btn-error"
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
					d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
				/>
			</svg>

			Uncleared Fees</a
		>
	</div>
</div>
<slot />
