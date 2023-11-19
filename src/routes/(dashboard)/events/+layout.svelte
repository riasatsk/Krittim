<script>
	import AddEvent from '../../../lib/Dialog/AddEvent.svelte';
</script>

<button class="p-6 bg-green-400 rounded-full add-btn z-10" onclick="addEventModal.showModal()"
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

<AddEvent />

<slot />

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

