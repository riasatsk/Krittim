<script>
	export let classes;
	let selected = 0;
</script>

<div class="flex justify-between m-4">
	<div class="flex gap-3">
		<a href="/student"
			class="btn btn-outline rounded-md {selected === 0 ? 'btn-active' : ''}"
			on:click={() => (selected = 0)}>All</a
		>

		{#each classes as className, i}
			<a
				href={'/student/' + className._id}
				class="btn btn-outline rounded-md {selected === i + 1 ? 'btn-active' : ''}"
				on:click={() => (selected = i + 1)}>{className.name}</a
			>
		{/each}
	</div>
	<div class="mr-5">
		<a href="/student/add-student" class="btn rounded-md btn-success"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
			</svg>

			Add Student</a
		>
	</div>
</div>
